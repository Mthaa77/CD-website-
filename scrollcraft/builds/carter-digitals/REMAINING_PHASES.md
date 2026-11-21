# Carter Digitals — refined remaining phases

Updated 6 September 2026. Planning only; no website changes or deployment authorised by this document itself. This document supersedes the remaining-work schedule in IMPLEMENTATION_PLAN.md. Use the established five-phase roadmap, not that document's original nine-stage breakdown.

## Baseline and status

Published baseline: Sites version 224, source 72f33045d86b8cf3743324bf2031545ece0d6262. Phase 1 foundation and Phase 2 refinement are shipped. Phase 3 implementation is complete; see PHASE_3.md for scope, verification and limits. Phase 4 supporting-page refinement and Phase 5 final assurance/measurement remain.

Completed: no-Hyperspeed portfolio hero; independent visual planes and project selection; fixed new-section typography; early two-project showcase; goal-specific HTML layouts; goal-to-contact handoff; compact founder/logo film; four homepage packages; floating navigation; safe persisted-success handling and selected-channel validation. Preserve the Services Foundry. Do not reintroduce the highway or rebuild the approved hero as routine remaining work.

Evidence: successful production build, TypeScript check and 13 isolated tests; desktop/phone iframe preview inspection; live database tables and page-view rows. No production enquiry submission, field Core Web Vitals or native reduced-motion browser test is claimed. The older rendered-html suite still asserts removed hero/Hyperspeed classes; it was not included in those 13 checks.

## Scroll Craft direction

Visitor journey: curiosity at the hero; confidence from work; recognition and agency in the goal-driven transformation; connection with the founder; clarity from services; reassurance from scope/prices; readiness at the final enquiry.

Signature memory: “I chose what my business needed, and the example website changed around it.” Keep this as the single dominant interactive moment. Later sections should answer buying questions with distinct layouts and less motion. Native flow throughout; only the existing fit-aware transformation may pin. No empty scroll spans, extra cinematic galleries or repeated demo controls around administrative content.

Device mix: dimensional hero planes; editorial project reveals; interactive goal layout; contained real logo film; existing Services Foundry interaction; static comparison; simple process progression; FAQ disclosure; editable enquiry summary. Avoid adjacent sections using the same visual mechanism. Keep complete reduced-motion and keyboard equivalents.

## Phase 3 — implemented (see PHASE_3.md)

Outcome: every stage from interest to contact feels part of one deliberate website.

### 3A. Lower-homepage composition
- Compress SearchVisibilitySection into a concise benefit-led section with crawlable links to the existing detailed SEO page. Replace repeated search-surface demonstrations with concrete scope and readable copy.
- Consolidate DeliveryExperience into three clear steps: agree direction, build and review, launch and handover. Use one gentle progression and genuine visual examples; avoid another autoplay 3D stage competing with the signature.
- Simplify ObjectionDecoder into visible questions with accessible disclosure answers. Cover domain ownership, hosting/ongoing costs, revisions, content, timings and support. Remove duplicated answer presentation.
- Rebuild the final enquiry/closing area and shared footer together. Use a quiet final composition, visible phone/WhatsApp labels, useful destinations and an editable project summary. Check the fixed dock against every form control and compact phone state.
- Remove obsolete numbered divider markup from the homepage rather than merely hiding it. Retire unused CSS only after checking remaining callers. Resolve typography consistently in these newly migrated areas; preserve Foundry's identity and behaviour.

### 3B. One context and package model
- Centralise existing Landing R2,799, Launch R4,999, Growth R12,500 and Signature R19,999 facts. Homepage and pricing currently define packages separately.
- Carry allowlisted service, goal and package IDs from offering/pricing links to contact and homepage enquiry. Current goal handoff works; full package/service context is still pending.
- Explicit valid URL values outrank current-session choices; neutral defaults never imply a user selection. Resolve price from shared trusted data. Clear incompatible packages when service changes; retain the goal.
- Offer a short shared form: name, selected response channel and its matching contact detail, service or “Help me choose”. Make longer business context optional. Keep entered details when an error occurs and show one clear receipt after capture.

### 3C. Capture reliability
- Add retry idempotency using an additive migration and unique submission key; test duplicate and concurrent attempts without creating extra leads.
- Store bounded structured selection context alongside backward-compatible readable fields.
- Replace isolate-local Map throttling if relying on a global limit. Test shared-network fairness, expiry, rejection and unavailable storage.
- Keep notification delivery distinct from capture, use safe background/outbox behaviour where supported, and retain explicit direct-contact fallback.
- Verify no-JavaScript behaviour: controlled POST or clearly available direct contact, never personal data in page query strings.

Acceptance: all package paths retain correct context; mismatched channels are explained before submission; repeat retries create one lead; failures preserve input; final controls are accessible; lower page has clear visual rhythm without added scroll padding. Run the affected isolated tests and desktop/phone/reduced-motion review before release.

## Phase 4 — supporting pages and search visibility

Outcome: visitors arriving from search or shared links receive the same design quality, useful proof and clear enquiry route as homepage visitors.

Priority order:
1. /work, /pricing and /contact: coherent typography and navigation/footer; verified project status and actual screenshots; package-specific enquiry handoff; short shared form. Homepage prototypes must be represented consistently in the work archive. Existing “client” labels require evidence before reuse.
2. /website-development-pretoria and /offerings/premium-websites: strengthen unique local value, relevant examples, scope, costs, FAQs and direct contact. Review overlap with homepage and /services; give each page a distinct purpose.
3. /services, other existing offerings, /about and /company-profile: reconcile service naming and factual claims. Preserve current offerings and Foundry taxonomy unless an explicit service-scope change is agreed.
4. Existing Soshanguve, Mabopane, Centurion, Pretoria East and Johannesburg pages: inspect each for distinct useful content. Consolidate genuine duplicates with an explicit redirect/canonical plan; do not invent offices or generate town-name copies.
5. /insights and /seo-geo-pretoria: publish practical answers tied to real buying questions. Initial editorial themes: choosing a website scope, ongoing costs, preparing content and making enquiries easier. Link to the relevant service, work and contact pages.

Technical checks: correct per-page canonical/title/description; visible copy matching structured data; crawlable internal links; working images; correct sitemap/robots; existing verification files; deliberate production-origin handling between custom domain and Sites hostname. Preserve useful indexed URLs.

Resolve the three crawled-not-indexed URLs only after obtaining URL-level Search Console evidence. The provided coverage summary does not identify them. Prior performance export had only 13 clicks/779 impressions; it is a baseline, not proof of redesign results. Prioritise Pretoria because its existing export shows relevant impressions, not because ranking improvement is guaranteed.

AI search: useful readable content, accurate entity facts and normal SEO fundamentals. Google says there are no additional requirements or special optimisations for AI Overviews/AI Mode; do not sell special markup or llms.txt as a ranking guarantee.

Acceptance: each priority route is readable without motion, has genuine page-specific information and correct metadata, links to proof and enquiry, and preserves context where applicable. No fabricated testimonials or outcomes; no orphaned routes or unintended canonicals.

## Phase 5 — assurance, release and measurement

Outcome: the finished experience is demonstrably usable, maintainable and measurable.

### Release gate
- Replace obsolete rendered-html assertions for Hyperspeed/old hero with tests for current semantic content, canonical origin, working destinations and route output. Keep those tests enabled; the isolated test pass does not substitute for this suite.
- Review final build output and actual rendered routes. Test compact 360x640, typical phone, tablet, short laptop and wide desktop; cover 200% text zoom, keyboard focus, menu Escape, motion pause, reduced motion and asset failure states.
- Inspect opening, intermediate and exit positions, reverse scrolling, fast jumps, pin eligibility, layout changes after goal selection and the final enquiry. Check controls hidden by the dock and overflowing media.
- Measure initial and offscreen work; defer nonessential video/3D, release listeners/resources, consolidate conflicting CSS, and reduce broad client boundaries only where measurements justify it. Do not change frameworks for this cleanup.
- Target good field Core Web Vitals: LCP about 2.5 seconds or better, INP about 200ms or better, CLS about 0.1 or better. Report lab evidence separately from field data and never invent scores when traffic is insufficient.
- Verify capture in an isolated deployment-safe environment with notifications stubbed. Production outbound messages require explicit authorisation; do not silently send test SMS. Record remaining production-verification limits.
- Save and deploy the exact tested revision, preserve a known-good rollback version, and confirm terminal success. Do not reverse additive migrations or delete real leads when rolling back.

### Measurement after release
Track search impressions/clicks by landing page, enquiries durably saved, contact-click actions, enquiry errors, and manually confirmed conversations/quotes/wins. Clicks are not calls or messages; audit visits are not client demand. Retain minimal analytics without contact details or message URLs.

Compare equal pre/post windows after 28 days, with a seven-day operational check for broken paths and errors. With low traffic, use qualitative enquiry feedback and absolute counts rather than claiming statistically reliable conversion lifts. Feed findings into the existing weekly roadmap review; do not create a duplicate automation.

Acceptance: no unresolved critical navigation/capture/layout defect; current rendering suite and relevant regression checks pass; evidence and limits are documented; a measurable acquisition-to-enquiry baseline is available.

## Execution order and scope control

Next: Phase 3A lower-homepage design plus 3B shared context, then 3C reliability before Phase 3 release. Apply Phase 5 checks to every phase release; the final Phase 5 closes cross-site assurance and starts measured improvement. Phase 4 follows the shared component contracts so supporting pages are not rebuilt twice. Phase 1/2 defects found during testing may be repaired, but their shipped signature is not routinely replaced.

Sources checked 6 September 2026:
- https://developers.google.com/search/docs/appearance/core-web-vitals
- https://developers.google.com/search/docs/appearance/ai-features
- https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls
