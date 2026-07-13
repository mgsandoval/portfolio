import type { ComponentType, SVGProps } from "react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Docker } from "@/components/ui/svgs/docker";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

/**
 * Maps a project's tech-stack tag (as written in resume.tsx) to a brand icon.
 * Keys are matched case-insensitively with punctuation/spaces stripped, so
 * "Next.js", "next js", and "NEXTJS" all resolve to the same entry.
 */
const TECH_ICON_MAP: Record<string, IconComponent> = {
  react: ReactLight,
  next: NextjsIconDark,
  nextjs: NextjsIconDark,
  typescript: Typescript,
  ts: Typescript,
  nodejs: Nodejs,
  node: Nodejs,
  docker: Docker,
  postgresql: Postgresql,
  postgres: Postgresql,
  python: Python,
  go: Golang,
  golang: Golang,
  java: Java,
  csharp: Csharp,
  "c#": Csharp,
  kubernetes: Kubernetes,
  k8s: Kubernetes,
};

function normalizeTag(tag: string) {
  return tag.toLowerCase().replace(/[^a-z0-9#]/g, "");
}

export function getTechIcons(tags: readonly string[], limit = 3) {
  const matches: { name: string; Icon: IconComponent }[] = [];

  for (const tag of tags) {
    const Icon = TECH_ICON_MAP[normalizeTag(tag)];
    if (Icon && !matches.some((m) => m.Icon === Icon)) {
      matches.push({ name: tag, Icon });
    }
    if (matches.length >= limit) break;
  }

  return matches;
}
