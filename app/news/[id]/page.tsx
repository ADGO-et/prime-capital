"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Copy, Twitter, Linkedin, Instagram, Send, Check } from "lucide-react";
import { useParams } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { useNewsArticleBySlug } from "@/hooks/queries/useNewsQuery";
import { strapiMediaUrl } from "@/lib/strapi";
import { NewsSection } from "@/components/news-comp/news-section";

const NewsDetailPage = () => {
  const params = useParams<{ id: string }>();
  const slug = params?.id as string;

  const { data: article, isFetching, isError } = useNewsArticleBySlug(slug);

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

  const [isCopied, setIsCopied] = useState(false);

  return (
    <div className="bg-white text-gray-900 pb-30">
      <div className="fixed top-0 left-0 h-1 bg-linear-to-r from-primary to-secondary z-50" style={{ width: `${progress}%` }} />

      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="mb-4">
          <Link href="/news" className="inline-flex items-center gap-2 text-sm text-primary hover:underline">
            <ChevronLeft className="h-4 w-4" /> Back to News
          </Link>
        </div>
        {isFetching && <div className="h-64 animate-pulse rounded-lg bg-muted" />}
        {isError && <div className="text-red-500">Failed to load article.</div>}
        {!isFetching && !isError && !article && (
          <div className="text-gray-500">Article not found.</div>
        )}
      </div>

      {article && (
        <div className="relative w-full">
          <div className="relative max-w-6xl mx-auto px-4">
            <div className="relative h-56 md:h-72 lg:h-80 w-full overflow-hidden rounded-2xl shadow">
              {article.banner ? (
                <Image src={strapiMediaUrl(article.banner.url)} alt={article.title} fill className="object-cover" />
              ) : (
                <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-secondary/10" />
              )}
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-black/10" />
              <div className="absolute inset-0 flex items-end">
                <div className="p-6 md:p-8 w-full">
                  <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-sm">
                    {article.title}
                  </h1>
                  <div className="mt-2 text-white/80 text-sm">
                    {new Date(article.publishedAt).toLocaleString()}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto px-4 py-12">
            <article className="space-y-10">
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
                    const t = encodeURIComponent(article.title);
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
                    const t = encodeURIComponent(article.title);
                    window.open(`https://t.me/share/url?url=${u}&text=${t}`, "_blank", "noopener");
                  }}
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-[#0088CC]/10 text-[#0088CC] hover:bg-[#0088CC]/20 text-sm cursor-pointer"
                >
                  <Send className="w-4 h-4" /> Telegram
                </button>
              </div>

              <div className="prose prose-lg max-w-none prose-headings:text-textPrimary prose-p:text-textSecondary/90 prose-p:leading-8 prose-a:text-primary">
                <ReactMarkdown>{article.content}</ReactMarkdown>
              </div>
            </article>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4">
        <NewsSection type="related" />
      </div>
    </div>
  );
};

export default NewsDetailPage;
