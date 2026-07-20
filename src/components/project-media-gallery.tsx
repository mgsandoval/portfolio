import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { YoutubeEmbed } from "@/components/youtube-embed";
import { getYoutubeId } from "@/lib/youtube";

interface Props {
  title: string;
  images?: readonly string[];
  video?: string;
}

export function ProjectMediaGallery({ title, images = [], video }: Props) {
  const videoId = video ? getYoutubeId(video) : null;

  if (images.length === 0 && !videoId) {
    return null;
  }

  return (
    <div className="mt-10 flex flex-col gap-6">
      {videoId && <YoutubeEmbed videoId={videoId} title={`${title} demo`} />}

      {images.length > 0 && (
        <Carousel className="w-full">
          <CarouselContent>
            {images.map((src) => (
              <CarouselItem key={src}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={title}
                  className="w-full aspect-video object-cover rounded-xl border border-border"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          {images.length > 1 && (
            <>
              <CarouselPrevious />
              <CarouselNext />
            </>
          )}
        </Carousel>
      )}
    </div>
  );
}
