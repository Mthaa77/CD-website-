const INDEXNOW_KEY = "c9a6f2e17b4d4c78a1f6d3e8b5c2a907";

export const dynamic = "force-static";

export function GET() {
  return new Response(`${INDEXNOW_KEY}\n`, {
    headers: {
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
