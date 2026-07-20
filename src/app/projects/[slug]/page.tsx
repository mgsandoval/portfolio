import { allProjects } from "content-collections";
import { DATA } from "@/data/resume";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXContent } from "@content-collections/mdx/react";
import { mdxComponents } from "@/mdx-components";
import { Badge } from "@/components/ui/badge";
import { ProjectMediaGallery } from "@/components/project-media-gallery";
import Link from "next/link";
import { ChevronLeft, ArrowUpRight } from "lucide-react";

function getSlug(project: (typeof allProjects)[number]) {
  return project._meta.path.replace(/\.mdx$/, "");
}

export async function generateStaticParams() {
  return allProjects.map((project) => ({ slug: getSlug(project) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata | undefined> {
  const { slug } = await params;
  const project = allProjects.find((p) => getSlug(p) === slug);

  if (!project) {
    return undefined;
  }

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      type: "article",
      url: `${DATA.url}/projects/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.summary,
    },
  };
}

export default async function ProjectCaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = allProjects.find((p) => getSlug(p) === slug);

  if (!project) {
    notFound();
  }

  // Only surface the resume's external link for non-confidential projects —
  // confidential entries often carry a stale/placeholder href from template data.
  const liveHref = project.confidential
    ? undefined
    : DATA.projects.find((p) => p.slug === slug)?.href;

  return (
    <section id="project-case-study">
      <div className="flex justify-start gap-4 items-center">
        <Link
          href="/#projects"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors border border-border rounded-lg px-2 py-1 inline-flex items-center gap-1 mb-6 group"
          aria-label="Back to Projects"
        >
          <ChevronLeft className="size-3 group-hover:-translate-x-px transition-transform" />
          Back to Projects
        </Link>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-start justify-between gap-2">
          <h1 className="title font-semibold text-3xl md:text-4xl tracking-tighter leading-tight">
            {project.title}
          </h1>
          {liveHref && liveHref.startsWith("http") && (
            <Link
              href={liveHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors shrink-0"
              aria-label={`Open ${project.title}`}
            >
              <ArrowUpRight className="h-5 w-5" aria-hidden />
            </Link>
          )}
        </div>
        <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          {project.dates && <span>{project.dates}</span>}
          {project.role && <span>&middot; {project.role}</span>}
          {project.confidential && (
            <Badge variant="outline" className="text-[11px] font-medium">
              Confidential
            </Badge>
          )}
        </div>
        {project.stack && project.stack.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {project.stack.map((tech) => (
              <Badge
                key={tech}
                className="text-[11px] font-medium border border-border h-6 w-fit px-2"
                variant="outline"
              >
                {tech}
              </Badge>
            ))}
          </div>
        )}
      </div>
      <div className="my-6 flex w-full items-center">
        <div
          className="flex-1 h-px bg-border"
          style={{
            maskImage:
              "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage:
              "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
          }}
        />
      </div>
      <article className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
        <MDXContent code={project.mdx} components={mdxComponents} />
      </article>
      <ProjectMediaGallery
        title={project.title}
        images={project.images}
        video={project.video}
      />
    </section>
  );
}
