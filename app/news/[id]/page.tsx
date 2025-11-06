"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { useParams } from "next/navigation";
import { useBlogById } from "@/hooks/queries/useNewsQuery";
import { Block, ParagraphBlock, HeadingBlock, ImageBlock, YoutubeBlock, LinkBlock } from "@/services/news";
import { NewsSection } from "@/components/news-comp/news-section";
import { ZoomIn } from "lucide-react";
import logo from "@/public/logo.png";
import Lightbox from "@/components/Lightbox";

const YouTubeEmbed = ({ url }: { url: string }) => {
  // Extract YouTube video ID and build embed URL; fallback to original URL in iframe
  let embedUrl = url;
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtube.com")) {
      const v = u.searchParams.get("v");
      if (v) embedUrl = `https://www.youtube.com/embed/${v}`;
    } else if (u.hostname.includes("youtu.be")) {
      const id = u.pathname.slice(1);
      if (id) embedUrl = `https://www.youtube.com/embed/${id}`;
    }
  } catch {}
  return (
    <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
      <iframe
        className="absolute inset-0 w-full h-full rounded-lg"
        src={embedUrl}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
};

const NewsDetailPage = () => {
  const params = useParams<{ id: string }>();
  const id = params?.id as string;

  const { data, isFetching, isError } = useBlogById(id!);
  const blog = data?.data;

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (images: string[], index: number) => {
    if (!images || images.length === 0) return;
    setLightboxImages(images);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="bg-white text-gray-900 border-4 py-30">
          <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="mb-6">
        <Link href="/news" className="inline-flex items-center gap-2 text-sm text-primary hover:underline">
          <ChevronLeft className="h-4 w-4" /> Back to News
        </Link>
      </div>
      {isFetching && <div className="h-64 animate-pulse rounded-lg bg-muted" />}
      {isError && <div className="text-red-500">Failed to load article.</div>}
      {blog && (
        <article>
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 lg:basis-4/5 text-primary">{blog.title.en}</h1>
            <div className="hidden lg:flex lg:flex-col px-8 items-center border border-muted rounded-full bg-muted shadow-sm w-fit gap-4">
              <p className="text-sm text-primary font-medium translate-y-5">Author</p>
              <Image src={logo} alt="Yehulu Logo" className="w-20 h-10" />
            </div>
          </div>
          <div className="text-sm text-muted-foreground mb-6">
            {new Date(blog.createdAt).toLocaleString()}
          </div>
          {blog.thumbnail && (
            <div className="relative w-full h-64 md:h-96 mb-8">
              <Image src={blog.thumbnail} alt={blog.title.en} fill className="object-cover rounded-lg" />
            </div>
          )}

          <div className="space-y-6">
            {(() => {
              const groupedBlocks: (Block | Block[])[] = [];
              let currentLinks: Block[] = [];

              blog.blocks
                ?.slice()
                .sort((a: Block, b: Block) => a.order - b.order)
                .forEach((block: Block) => {
                  if (block.type === "link") {
                    currentLinks.push(block);
                  } else {
                    if (currentLinks.length > 0) {
                      groupedBlocks.push(currentLinks);
                      currentLinks = [];
                    }
                    groupedBlocks.push(block);
                  }
                });

              if (currentLinks.length > 0) {
                groupedBlocks.push(currentLinks);
              }

              return groupedBlocks.map((item, idx) => {
                if (Array.isArray(item)) {
                  // Multiple consecutive link blocks
                  return (
                    <div key={idx} className="flex flex-col space-y-2">
                      {item.map((linkBlock, linkIdx) => {
                        const lb = linkBlock as LinkBlock;
                        const { url, text } = lb.content ?? { url: "", text: "" };
                        return (
                          <a key={linkIdx} href={url} target="_blank" rel="noopener noreferrer" className="text-primary underline">
                            {text || url}
                          </a>
                        );
                      })}
                    </div>
                  );
                } else {
                  // Single block
                  const block = item;
                  switch (block.type) {
                    case "heading": {
                      const hb = block as HeadingBlock;
                      const content = hb.content.en;
                      return (
                        <h2 key={idx} className="text-2xl font-semibold mt-6">{content}</h2>
                      );
                    }
                    case "paragraph": {
                      const pb = block as ParagraphBlock;
                      const content = pb.content.en;
                      return <p key={idx} className="leading-7 text-foreground/90">{content}</p>;
                    }
                    case "image": {
                      const ib = block as ImageBlock;
                      const urls: string[] = ib.content?.urls ?? [];
                      return (
                        <div key={idx} className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                          {urls.map((src, i) => (
                            <button
                              type="button"
                              key={i}
                              onClick={() => openLightbox(urls, i)}
                              className="relative aspect-square group outline-none focus-visible:ring focus-visible:ring-primary rounded-md overflow-hidden cursor-pointer"
                              aria-label={`Open image ${i + 1} in full view`}
                            >
                              <Image
                                src={src}
                                alt={`image-${i + 1}`}
                                fill
                                className="object-cover rounded-md transition-transform duration-200 group-hover:scale-105 group-active:scale-95"
                              />
                              <span className="absolute inset-0 bg-linear-to-t from-black/40 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                              <span className="pointer-events-none absolute bottom-2 left-2 flex items-center gap-1 text-xs font-medium text-white bg-black/50 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                                <ZoomIn className="w-3.5 h-3.5" />
                                <span>Click to enlarge</span>
                              </span>
                            </button>
                          ))}
                        </div>
                      );
                    }
                    case "youtube": {
                      const yb = block as YoutubeBlock;
                      const url: string = yb.content?.url ?? "";
                      return <YouTubeEmbed key={idx} url={url} />;
                    }
                    case "link": {
                      const lb = block as LinkBlock;
                      const { url, text } = lb.content ?? { url: "", text: "" };
                      return (
                        <a key={idx} href={url} target="_blank" rel="noopener noreferrer" className="text-primary underline">
                          {text || url}
                        </a>
                      );
                    }
                    default:
                      return null;
                  }
                }
              });
            })()}
          </div>
        </article>
      )}
    </div>
        <NewsSection type="related" />
        {/* <MajorCard type="news" /> */}
        <Lightbox
          images={lightboxImages}
          index={lightboxIndex}
          open={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          onChange={setLightboxIndex}
          alt={blog?.title?.en ?? "image"}
        />
    </div>
  );
};

export default NewsDetailPage;
