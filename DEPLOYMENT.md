# Carter Digitals deployment and route inventory

The production site runs on Cloudflare Workers through Sites. The Cloudflare Workers Free plan is the self-hosted option for the same App Router build. The lead API needs server execution and a D1 database. A static Cloudflare Pages or Firebase Hosting export needs a separately deployed lead API.

## Deploy on Cloudflare Workers

1. Install dependencies with `npm ci`. Use Node 22 or later.
2. Use `npx wrangler login` and create a database with `npx wrangler d1 create carter-digitals-leads`.
3. Run `npm run build`. In `dist/server/wrangler.json`, replace the placeholder database name and ID with the values Wrangler returned. Keep the binding name `DB`.
4. Apply the repository migrations to the database in filename order with `npx wrangler d1 execute carter-digitals-leads --remote --config dist/server/wrangler.json --file drizzle/<migration>.sql`. Apply each file once and keep a migration record.
5. To deliver lead email, verify your sender domain with Resend. Set `RESEND_API_KEY` and `RESEND_FROM` using `npx wrangler secret put <NAME> --config dist/server/wrangler.json`. Preserve any existing notification bindings.
6. Optionally set `NEXT_PUBLIC_GA_ID` in the build environment before building. The code loads GA4 after a tracked interaction and honours Do Not Track and Global Privacy Control.
7. Deploy using `npx wrangler deploy --config dist/server/wrangler.json`. Visit the Workers URL, check the sitemap and submit an authorised test enquiry before connecting a domain.

Vercel can host App Router pages with a native Next.js build. The existing lead route depends on D1 bindings. Provide a separate Worker-backed lead API and configure the site's API routing before switching to Vercel.

## Existing public routes

All paths below are relative to `https://carterdigitals.co.za` and remain available.

- `/`, `/services`, `/work`, `/pricing`, `/contact`, `/about`, `/company-profile`, `/privacy`, `/terms`
- `/sectors/law-firms`, `/sectors/construction`, `/sectors/dental-practices`, `/sectors/schools`
- `/offerings/premium-websites`, `/offerings/web-applications`, `/offerings/business-systems`, `/offerings/creative-media`, `/offerings/ai-clone-avatar-videos`
- `/insights`, `/insights/website-cost-pretoria-2026`, `/insights/south-african-business-website-checklist`, `/insights/website-vs-web-app-vs-business-system`, `/insights/custom-website-benefits-south-africa`, `/insights/logo-design-business-pretoria`, `/insights/poster-design-south-africa`, `/insights/internal-web-apps-business-systems`, `/insights/seo-geo-google-ai-search-pretoria`
- `/seo-geo-pretoria`, `/website-development-pretoria`, `/website-development-pretoria-east`, `/website-development-soshanguve`, `/website-development-mabopane`, `/website-development-centurion`, `/website-development-johannesburg`, `/web-application-development-pretoria`
- `/api/leads`, `/api/measure`, `/sitemap.xml`, `/robots.txt`, `/llms.txt`, `/manifest.webmanifest`, `/carter-pricing-2026.pdf`, `/c9a6f2e17b4d4c78a1f6d3e8b5c2a907.txt`, `/ce88ca49cc3d7324d4308338f0f6949d.html`

New pages are `/websites`, `/stores`, `/apps` and `/company`.

## Source tree and motion

- `app/` contains the existing routes, new package pages and cinematic homepage.
- `components/carter-frame.tsx` contains the navigation and footer.
- `components/carter-graphics.tsx` contains the benefit, orbit and sample analytics SVGs.
- `components/carter-motion.tsx` contains route transitions, Lenis, section visibility and the GSAP search journey.
- `components/carter-tools.tsx` contains the comparison and package finder.
- `components/carter-pages.tsx` contains the service page layout, metadata and project cards.
- `components/carter-quote.tsx` is the quote form. `app/api/leads/route.ts` validates, saves and dispatches lead notifications.
- `lib/data.ts` contains package, industry, credentials and project data.
- `public/` contains the approved brand images, public pricing document and AI discovery file.

## Reference redesign rollout

- Use the Vercel Preview environment to review the six redesigned pages and the retained routes. The live origin is the Carter Digitals Sites deployment.
- Export Search Console's 28- and 90-day Performance data by page and query before promotion. Record the current Sites production version for rollback.
- Compare the candidate against the production XML sitemap and verify a successful response, matching page title and self-canonical for every URL. Preserve the existing robots directives, Google and IndexNow verification files, and contact endpoints.
- Promote the reviewed build on the existing Sites custom domain. Verify robots and the sitemap on production, inspect priority URLs in Search Console, and compare indexing and organic performance after the release.
