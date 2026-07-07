/** Fallback when browser history cannot return within the site. */
export function getBackFallbackPath(pathname: string): string {
  if (pathname.startsWith("/dex/") && pathname.length > "/dex/".length) return "/dex";
  return "/";
}

export function canReturnViaHistory(): boolean {
  if (typeof window === "undefined") return false;

  const referrer = document.referrer;
  if (!referrer) return false;

  try {
    return new URL(referrer).origin === window.location.origin;
  } catch {
    return false;
  }
}
