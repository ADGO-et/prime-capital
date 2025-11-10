"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ZoomIn, Copy, Twitter, Linkedin, Instagram, Send, Check } from "lucide-react";
import { useParams } from "next/navigation";
import { useBlogById } from "@/hooks/queries/useNewsQuery";
import { Block, ParagraphBlock, HeadingBlock, ImageBlock, YoutubeBlock, LinkBlock } from "@/services/news";
import { NewsSection } from "@/components/news-comp/news-section";
// import logo from "@/public/logo.png"; // reserved for future branding use
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

function slugify(text: string): string {
  return (text || "")
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 80);
}

const NewsDetailPage = () => {
  const params = useParams<{ id: string }>();
  const id = params?.id as string;

  const { data, isFetching, isError } = useBlogById(id!);
  const blog = data?.data;

  // reading progress
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0;
      setProgress(pct);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // no table of contents sidebar in this layout; headings still get IDs for deep linking

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Copy link state
  const [isCopied, setIsCopied] = useState(false);

  const openLightbox = (images: string[], index: number) => {
    if (!images || images.length === 0) return;
    setLightboxImages(images);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="bg-white text-gray-900 pb-30">
      {/* Reading progress bar */}
      <div className="fixed top-0 left-0 h-1 bg-linear-to-r from-primary to-secondary z-50" style={{ width: `${progress}%` }} />

      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="mb-4">
          <Link href="/news" className="inline-flex items-center gap-2 text-sm text-primary hover:underline">
            <ChevronLeft className="h-4 w-4" /> Back to News
          </Link>
        </div>
        {isFetching && <div className="h-64 animate-pulse rounded-lg bg-muted" />}
        {isError && <div className="text-red-500">Failed to load article.</div>}
      </div>

      {/* Hero section */}
      {blog && (
        <div className="relative w-full">
          <div className="relative max-w-6xl mx-auto px-4">
            <div className="relative h-56 md:h-72 lg:h-80 w-full overflow-hidden rounded-2xl shadow">
              {blog.thumbnail ? (
                <Image src={blog.thumbnail} alt={blog.title.en} fill className="object-cover" />
              ) : (
                <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-secondary/10" />
              )}
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-black/10" />
              <div className="absolute inset-0 flex items-end">
                <div className="p-6 md:p-8 w-full">
                  <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-sm">
                    {blog.title.en}
                  </h1>
                  <div className="mt-2 text-white/80 text-sm">
                    {new Date(blog.createdAt).toLocaleString()}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content (full width) */}
          <div className="max-w-6xl mx-auto px-4 py-12">
            <article className="space-y-10">
              {/* Share card below hero/thumbnail */}
              <div className="rounded-2xl border border-gray-200/80 bg-white/70 backdrop-blur-sm p-5 shadow-sm flex flex-wrap gap-3 items-center">
                <span className="text-sm font-semibold text-textPrimary">Share this article:</span>
                <button
                  onClick={() => {
                    if (typeof window !== "undefined") {
                      navigator.clipboard.writeText(window.location.href);
                      setIsCopied(true);
                      setTimeout(() => setIsCopied(false), 2000);
                    }
                  }}
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-gray-50 hover:bg-gray-100 text-sm cursor-pointer"
                >
                  {isCopied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  {isCopied ? "Copied" : "Copy link"}
                </button>
                <button
                  onClick={() => {
                    const u = encodeURIComponent(typeof window !== "undefined" ? window.location.href : "");
                    const t = encodeURIComponent(blog.title.en);
                    window.open(`https://twitter.com/intent/tweet?url=${u}&text=${t}`, "_blank", "noopener");
                  }}
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-[#1DA1F2]/10 text-[#1DA1F2] hover:bg-[#1DA1F2]/20 text-sm cursor-pointer"
                >
                  <Twitter className="w-4 h-4" /> Tweet
                </button>
                <button
                  onClick={() => {
                    const u = encodeURIComponent(typeof window !== "undefined" ? window.location.href : "");
                    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${u}`, "_blank", "noopener");
                  }}
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-[#0A66C2]/10 text-[#0A66C2] hover:bg-[#0A66C2]/20 text-sm cursor-pointer"
                >
                  <Linkedin className="w-4 h-4" /> Share
                </button>
                <button
                  onClick={() => {
                    const u = encodeURIComponent(typeof window !== "undefined" ? window.location.href : "");
                    window.open(`https://www.instagram.com/create/story/?url=${u}`, "_blank", "noopener");
                  }}
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-[#E4405F]/10 text-[#E4405F] hover:bg-[#E4405F]/20 text-sm cursor-pointer"
                >
                  <Instagram className="w-4 h-4" /> Instagram
                </button>
                <button
                  onClick={() => {
                    const u = encodeURIComponent(typeof window !== "undefined" ? window.location.href : "");
                    const t = encodeURIComponent(blog.title.en);
                    window.open(`https://t.me/share/url?url=${u}&text=${t}`, "_blank", "noopener");
                  }}
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-[#0088CC]/10 text-[#0088CC] hover:bg-[#0088CC]/20 text-sm cursor-pointer"
                >
                  <Send className="w-4 h-4" /> Telegram
                </button>
              </div>

              {/* Article blocks sequential */}
              <div className="space-y-8">
                {blog.blocks?.slice().sort((a: Block, b: Block) => a.order - b.order).map((block: Block, idx: number) => {
                  switch (block.type) {
                    case "heading": {
                      const hb = block as HeadingBlock;
                      const content = hb.content.en;
                      return (
                        <h2 key={idx} id={slugify(content)} className="text-2xl md:text-3xl font-semibold tracking-tight text-textPrimary">
                          {content}
                        </h2>
                      );
                    }
                    case "paragraph": {
                      const pb = block as ParagraphBlock;
                      const content = pb.content.en;
                      return (
                        <p key={idx} className="leading-8 text-textSecondary/90 text-lg md:text-xl font-sans">
                          {content}
                        </p>
                      );
                    }
                    case "image": {
                      const ib = block as ImageBlock;
                      const urls: string[] = ib.content?.urls ?? [];
                      if (!urls.length) return null;
                      return (
                        <div key={idx} className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                          {urls.map((src, i) => (
                            <button
                              type="button"
                              key={i}
                              onClick={() => openLightbox(urls, i)}
                              className="relative aspect-square group outline-none focus-visible:ring focus-visible:ring-primary rounded-xl overflow-hidden cursor-pointer"
                              aria-label={`Open image ${i + 1} in full view`}
                            >
                              <Image
                                src={src}
                                alt={`image-${i + 1}`}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105 group-active:scale-95"
                              />
                              <span className="absolute inset-0 bg-linear-to-t from-black/40 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                              <span className="pointer-events-none absolute bottom-2 left-2 flex items-center gap-1 text-xs font-medium text-white/90 backdrop-blur-sm bg-black/40 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                                <ZoomIn className="w-3.5 h-3.5" />
                                <span>Enlarge</span>
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
                })}
              </div>
            </article>
          </div>
        </div>
      )}

      {/* (Share card already placed directly beneath hero inside article) */}

      {/* Related section */}
      <div className="max-w-7xl mx-auto px-4">
        <NewsSection type="related" />
      </div>
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
