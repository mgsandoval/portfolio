"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  videoId: string;
  title: string;
  className?: string;
}

/**
 * Loads only a thumbnail + play button until clicked, so YouTube's iframe
 * (and its tracking scripts) never loads on a page view that doesn't watch it.
 */
export function YoutubeEmbed({ videoId, title, className }: Props) {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <div className={cn("relative w-full aspect-video overflow-hidden rounded-xl border border-border", className)}>
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
          title={title}
          allow="accelerated-video-decode; autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 size-full"
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setLoaded(true)}
      className={cn(
        "group relative w-full aspect-video overflow-hidden rounded-xl border border-border cursor-pointer",
        className
      )}
      aria-label={`Play video: ${title}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
        alt={title}
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
        <div className="flex items-center justify-center size-14 rounded-full bg-white/90 shadow-lg group-hover:scale-105 transition-transform">
          <Play className="size-6 text-black fill-black ml-0.5" />
        </div>
      </div>
    </button>
  );
}
