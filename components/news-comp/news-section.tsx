"use client";
import { ChevronRight, AlertCircle } from "lucide-react";
import { NewsCard } from "./news-card";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { usePublishedNews } from "@/hooks/queries/useNewsQuery";
import { strapiMediaUrl } from "@/lib/strapi";

export function NewsSection({ type = "related", excludeSlug }: { type?: "related" | "all"; excludeSlug?: string }) {
  const router = useRouter();
  const { data, isFetching } = usePublishedNews({ page: 1, limit: excludeSlug ? 4 : 3, sortBy: "latest" });
  const articles = (data?.articles ?? []).filter((a) => a.slug !== excludeSlug).slice(0, 3);
  const formatDate = (iso?: string) => {
    if (!iso) return "";
    const d = new Date(iso);
    return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "2-digit" });
  };

  if (type === "related" && !isFetching && articles.length === 0) return null;

  return (
    <section className="py-10 sm:py-14 md:py-20 lg:py-24 max-w-7xl mx-auto px-2 sm:px-4 md:px-8 xl:px-16 2xl:px-24 bg-white text-gray-900">
      {/* Header */}
      {type === "all" && (
        <div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">
            <div className="flex items-center gap-2">
              <span className="inline-block text-[#0E0066] border-2 border-[#0E0066] px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                News & Events
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Title and View More */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 mb-4 sm:mb-6">
        <div>
          {type === "all" ? (
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-textPrimary">
              News & Events
            </h2>
          ) : (
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-textPrimary">
              Latest Articles
            </h2>
          )}
        </div>
        <div>
          <button className="flex items-center gap-1 text-blue-600 hover:text-blue-700 transition-colors hover:underline" onClick={() => router.push('/news')}>
            <span className="text-xs sm:text-sm font-medium">View More</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {isFetching && articles.length === 0 &&
          Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="h-48 sm:h-64 animate-pulse rounded-lg bg-primary/5 border border-primary/15" />
          ))}
        {!isFetching && articles.length === 0 && (
          <div className="col-span-full flex flex-col items-center justify-center py-8 sm:py-12 bg-primary/5 border border-primary/15 rounded-2xl">
            <div className="flex items-center justify-center mb-4 text-primary">
              <AlertCircle className="w-10 h-10 sm:w-12 sm:h-12" />
            </div>
            <h3 className="text-base sm:text-lg font-semibold mb-2 text-center text-textPrimary">
              No News Available
            </h3>
            <p className="text-gray-700 text-xs sm:text-sm text-center max-w-md">
              No news articles found at the moment. Please check back later.
            </p>
          </div>
        )}
        {articles.map((article) => (
          <div key={article.id}>
            <Link href={`/news/${article.slug}`} className="block h-full">
              <NewsCard
                title={article.title}
                description={article.excerpt}
                image={strapiMediaUrl(article.banner?.url)}
                category={"News"}
                date={formatDate(article.publishedAt)}
              />
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
