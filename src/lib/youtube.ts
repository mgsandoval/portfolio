/**
 * Accepts a bare video ID or a full YouTube URL (watch, youtu.be, embed, shorts)
 * and returns just the 11-char video ID, so the video frontmatter field can be
 * either form without extra parsing in call sites.
 */
export function getYoutubeId(input: string): string | null {
  const trimmed = input.trim();

  if (/^[a-zA-Z0-9_-]{11}$/.test(trimmed)) {
    return trimmed;
  }

  try {
    const url = new URL(trimmed);

    if (url.hostname.includes("youtu.be")) {
      return url.pathname.slice(1) || null;
    }

    if (url.hostname.includes("youtube.com")) {
      const idFromQuery = url.searchParams.get("v");
      if (idFromQuery) return idFromQuery;

      const match = url.pathname.match(/\/(?:embed|shorts)\/([a-zA-Z0-9_-]{11})/);
      if (match) return match[1];
    }
  } catch {
    return null;
  }

  return null;
}
