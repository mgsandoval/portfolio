import { cn } from "@/lib/utils";
import { getTechIcons } from "@/lib/tech-icons";

interface Props {
  title: string;
  tags?: readonly string[];
  className?: string;
}

function getInitials(title: string) {
  return title
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase())
    .join("");
}

/**
 * Stand-in for project screenshots/videos that can't be shared (e.g. work
 * behind an NDA). Shows recognized tech-stack icons on a neutral gradient
 * instead of leaving the card blank.
 */
export function ProjectPlaceholder({ title, tags = [], className }: Props) {
  const icons = getTechIcons(tags);

  return (
    <div
      className={cn(
        "relative w-full h-48 flex items-center justify-center overflow-hidden bg-linear-to-br from-muted to-background",
        className
      )}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-60 [background-image:radial-gradient(var(--border)_1px,transparent_1px)] [background-size:16px_16px]"
        style={{
          maskImage: "radial-gradient(circle, black, transparent 75%)",
          WebkitMaskImage: "radial-gradient(circle, black, transparent 75%)",
        }}
      />
      {icons.length > 0 ? (
        <div className="relative flex items-center gap-3">
          {icons.map(({ name, Icon }) => (
            <div
              key={name}
              className="flex items-center justify-center size-11 rounded-xl border border-border bg-white shadow-sm"
            >
              <Icon className="size-5" />
            </div>
          ))}
        </div>
      ) : (
        <span className="relative text-3xl font-semibold tracking-tight text-muted-foreground/60">
          {getInitials(title)}
        </span>
      )}
    </div>
  );
}
