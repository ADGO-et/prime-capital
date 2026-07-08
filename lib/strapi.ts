import axios from "axios";

export const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

const strapi = axios.create({
  baseURL: `${STRAPI_URL}/api`,
  headers: { "Content-Type": "application/json" },
});

export default strapi;

/** Prefixes a Strapi media path (e.g. "/uploads/x.jpg") with the Strapi host. */
export function strapiMediaUrl(url?: string | null): string {
  if (!url) return "";
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  return `${STRAPI_URL}${url}`;
}
