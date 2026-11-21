# Carter Digitals: Scroll Craft implementation plan

> Roadmap update, 6 September 2026: Phases 1–2 and parts of Phase 3 are now shipped. [REMAINING_PHASES.md](REMAINING_PHASES.md) is authoritative for remaining Phases 3–5. Original findings and schedules below are historical, not current defects.

Prepared 5 September 2026. Status: implementation specification, not a completed redesign.

## 1. Outcome and scope

Rebuild the current Carter Digitals website into a cinematic, dimensional studio experience that explains its services, presents credible work early and makes a quote or conversation easy. Preserve the existing Site, production domain, useful URLs, lead records and deployment architecture.

The central experience is: **choose a business goal, watch a sample website assemble around that goal, then carry that choice into an enquiry.** It is a designed demonstration with predefined variations, not an instant custom website generator.

This plan covers the homepage, shared navigation and footer, service and location pages, portfolio, pricing, contact, typography, motion, assets, lead reliability, analytics, SEO continuity, testing and rollout. It does not authorize sending outreach, changing prices, inventing testimonials or publishing this planning document as website content.

## 2. Verified starting point

### Source and hosting

- Existing Site slug: `carter-digitals`.
- Public domain: `https://carterdigitals.co.za`.
- Latest saved Site version inspected: **221**.
- Source checked out and inspected: commit `279c67b063d1730a2f372eeff99e99c51c1a17cf`, titled “Restore Hyperspeed hero and add 3D poster field”. This matches saved version 221. A saved version alone is not proof of the currently deployed commit; confirm the deployment before rollout.
- Existing checkout: `/workspace/sites/carter-digitals`.
- Stack declared in the source: React 19.2.6, Next-compatible App Router, Vinext 0.0.50, Vite 8.0.13, TypeScript, GSAP ^3.15.0, Three.js ^0.185.1, OGL and postprocessing.
- Runtime: Cloudflare Worker through Sites. `.openai/hosting.json` declares the existing `DB` D1 binding. Preserve its identity and binding.
- Existing `npm` scripts include build, artifact validation and rendered-HTML tests. Preserve the package manager and lockfile. Do not migrate to a new framework or install another animation stack for this redesign.

### Search baseline from the supplied exports

| Measure | Baseline |
| --- | --- |
| Performance dates actually present | 21 July to 3 September 2026 |
| Google Web Search clicks | 13 |
| Impressions | 779 |
| CTR | 1.67% |
| Approximate impression-weighted position | 46.9 |
| South African clicks | 12 |
| Mobile clicks | 11 |
| Pretoria service page | 180 impressions, zero clicks, average position 30.78 |
| Latest coverage row | 28 August 2026 |
| Indexed / excluded known pages | 25 / 4 |
| Exclusions | Three crawled but not indexed; one redirect |

The exports do not identify the three excluded URLs, visitor sessions, actual calls, enquiries or sales. The disclosed query rows omit the searches responsible for all 13 clicks. Avoid treating this small sample as proof that a particular visual change will increase sales.

### Findings affecting implementation

| Finding | Evidence | Required response |
| --- | --- | --- |
| Pricing buttons point to `/#brief`; the homepage has no `brief` target | `app/pricing/page.tsx` and homepage source; earlier live navigation inspection | Repair the shared pricing CTA helper and preserve package selection. |
| Homepage is a long sequence with work well below introductory sections | Earlier desktop inspection measured approximately 16,555 px; work began around 7,900 px | Bring proof directly after the hero and consolidate repeated explanations. |
| Entire homepage entry is a client component | `app/page.tsx` starts with `use client` | Separate static content and metadata from interactive islands while preserving rendered HTML. A client component can still be server rendered; this is a boundary improvement, not a claim that current content is invisible to Google. |
| Two forms handle success differently | `project-route-builder.tsx` and `contact/page.tsx` | Share one submission contract and one set of reliable states. |
| Lead API can return `ok: true` with `persisted: false` | `app/api/leads/route.ts` catches storage failure, then returns HTTP success | Define capture success using actual durable storage. Never equate HTTP success or messaging configuration with received enquiry. |
| Homepage form ignores the `persisted` result | `project-route-builder.tsx` | Remove false receipt messaging. |
| “Phone call” maps to `sms` | Homepage project form | Introduce an explicit callback preference and update server validation. |
| Contact form opens WhatsApp regardless of selected channel | `contact/page.tsx` | Make WhatsApp an explicit visitor action, including as a fallback. |
| Analytics events are queued, but no Google tag loader was found in searched application, Worker or script source | `site-transitions.tsx`, `lead-conversion-engine.tsx` | Verify an actual collector before claiming measurement works. External injection is still unverified. |
| CTA tracking captures the full href | `site-transitions.tsx` | Strip WhatsApp message queries and other personal content before analytics transmission. |
| Existing tests assert old design classes, copy and order | `tests/rendered-html.test.mjs` | Replace obsolete appearance assertions with the new behaviour contract; retain meaningful rendering and routing checks. No test run was performed for this planning task. |

These are source observations, not proof that production has lost a particular lead. Runtime credentials, notification delivery and database contents were not inspected or exercised.

## 3. Creative brief and structural rules

This brief reuses the user's stated preferences and accepted planning direction. New details below are authored implementation proposals, not invented user quotations.

| Brief topic | Basis and implementation decision |
| --- | --- |
| Vibe | User: “scrolling motion graphics and animations”, “Premium modern typography and fonts”, “3D rendered features and sections”. Direction: cinematic, dimensional, contemporary, confident. |
| Journey | Previously proposed and continued: offer, work, goal, transformation, services, price, founder, enquiry. |
| Energy | Proposed: strong opening, readable proof, quiet goal choice, one transformation peak, calmer decisions and close. |
| Feeling | Curiosity → confidence → recognition → excitement → clarity → reassurance → connection → readiness. |
| Signature | A goal selection changes an assembled sample website and remains attached to the enquiry. |
| Aesthetic range | Expressive architectural studio with editorial readability; black, white, blue and scarlet, selective metallic gold. No purple. |
| World structure | Distinct scenes in native document flow. One bounded pinned demonstration on suitable desktop screens. No continuous camera flight. |
| Assets | Existing logo, Hyperspeed source, logo video, founder image and project imagery. Actual file presence is confirmed; each selected image still needs visual inspection and usage confirmation before production. |

### Page structure: guided studio

Use a custom guided-studio structure with explicit constraints:

- Navigation is a compact floating menu of destinations, not section counters.
- Offer and contact are available immediately; the experience never requires completing the film.
- Actual work appears before the goal demonstration.
- Only the transformation may pin. Prices, FAQs and the form stay in natural flow.
- Each scene has its own composition and purpose. No repeated full-screen media-and-heading template.
- No full-page scrolling takeover, mandatory drag navigation, empty waiting screens or audio autoplay.
- The ending is a persistent editable project summary beside a working form.

The stock filmic and continuous-world structures restrict free navigation too much for this sales journey. Chaptered editorial and typographic poster structures cannot carry the requested dimensional opening in their prescribed form. A gallery alone does not explain the service-to-quote journey. Live surface would make the whole agency site resemble an application. Split stage requires a comparison throughout; rhythmic cutlist is too hurried for evaluating proof and pricing.

During implementation, compare the plan against the actual Scroll Craft fingerprint registry before markup. Record grammar, navigation, hero, device sequence, ending and signature. The registry has not been inspected and no uniqueness gate is claimed in this plan.

### Feeling curve and peak

| Scene | Intended feeling | What causes it |
| --- | --- | --- |
| Opening | Curiosity | Real project screens presented in a dimensional studio. |
| Selected work | Confidence | Names, status labels, scope and live links accompany readable images. |
| Goal choice | Recognition | Three plain-language business priorities. |
| Transformation | Excitement | The selected priority changes a layered website that settles into a usable design. |
| Services | Clarity | Concrete deliverables and suitable project types. |
| Packages | Reassurance | Consistent prices, inclusions and delivery windows. |
| Founder | Connection | Real portrait and direct communication with Kabelo. |
| Enquiry | Readiness | The visitor's selection is already present and editable. |

Peak: “I chose what my business needed, and the website came together around that choice.” Give this scene the most motion and scroll room. The preceding quiet scene contains useful controls, not an intentionally blank viewport.

## 4. Current-to-new component migration

All current paths below are relative to `/workspace/sites/carter-digitals`. New filenames are proposed, not existing implementations.

| Current component or file | Action | New role |
| --- | --- | --- |
| `app/page.tsx` | Rewrite page composition | Render the new reading order and metadata; limit interactive state to scoped client components. |
| `_components/premium-hero.tsx` and CSS | Rebuild composition | Layered studio hero with semantic text, real work screens, visible CTA and compact exit. |
| `_components/Hyperspeed.jsx` | Reuse selectively | Background character, gated by device capability and reduced motion; not a second dominant scene. |
| `_components/homepage-live-ticker.tsx` | Consolidate | Compact static offer strip on phones; any motion on desktop must be pausable and useful. |
| `_components/welcome-to-carter-section.tsx` | Replace large homepage footprint | Move the actual logo film into the founder/studio story or About page. Keep loop capability where appropriate and pause off-screen. |
| `_components/signal-architecture.tsx` | Remove from homepage composition | Its useful concepts become the website transformation explanation. |
| `_components/conversion-xray.tsx` | Replace | Three-goal selector feeding the signature scene. |
| `_components/service-foundry.tsx` | Preserve interaction concept; refactor | Keep its distinctive service selection while adding the coherent service taxonomy and shorter content. |
| `_components/project-case-gallery.tsx` | Replace homepage presentation | Three readable featured projects near the top. Put deeper browsing on `/work`. |
| `_components/search-visibility-section.tsx` | Compress | A concise service benefit plus a link to `/seo-geo-pretoria`; retain detailed educational content there. |
| `_components/delivery-experience.tsx` | Consolidate | Three-step process with package-specific timing. |
| `_components/objection-decoder.tsx` | Simplify | Readable FAQ disclosure list; no additional elaborate stage. |
| `_components/project-route-builder.tsx` | Replace | Shared short enquiry form and persistent selected context. |
| `_components/premium-divider.tsx` | Remove numbered separator pattern | Use spacing, changes of background and section-specific transitions. |
| `app/bubble-menu.tsx` and CSS | Rebuild | One floating bar plus accessible expanded navigation. |
| `app/lead-conversion-engine.tsx` | Refactor | Labelled Call and WhatsApp actions with one measurement path. |
| `_components/carter-site-footer.tsx` | Rebuild | Resolved closing panel, useful routes and readable business contacts. |
| `_components/site-transitions.tsx` | Separate responsibilities | Remove blocking intro delay; keep navigation stable; extract sanitised analytics. |
| `homepage-evolution.css` | Retire homepage dependence gradually | New scoped design tokens and component styles; audit shared selectors before deletion. |

Do not delete a component or asset simply because the new homepage stops importing it. Search its remaining references first. Do not retain removed content as hidden duplicate homepage markup.

## 5. Homepage implementation specification

### A. Hero

Headline proposal: **Your business deserves a stronger first impression.**

Supporting copy: “Custom websites, web apps and brand design from Pretoria. Built to make your value clear and your next customer's enquiry easier.”

Primary CTA: **Get my quote**. Secondary: **View our work**. Label phone and WhatsApp actions. Show “Landing pages from R2,799 · Five-page websites from R4,999” using the shared package data, subject to price confirmation before launch.

Layer contract:

| Plane | Asset | Motion and composition rule |
| --- | --- | --- |
| Far | Clean dark studio plate or restrained existing highway effect | Lowest displacement; enough negative space for copy. |
| Mid | Large browser scene using actual project content | Slight perspective settles into a readable view. |
| Subject | Accurate phone render/model and project screen | Separate controlled motion; avoid clipped silhouette. |
| Near | Brushed-metal framing element | Small edge movement, stronger than the background; never covers controls. |
| Copy | Actual HTML heading, paragraph and links | Stable contrast, readable from the first frame. |

Opening: complete composition and visible quote action. Midpoint: planes separate, making near/far relationships obvious. Exit: screens settle and the next work section enters naturally. No cutout ghosts, drifting contact shadows or flat image enlarged to imitate independent depth.

On compact phones, place copy above the subject. Make the primary CTA visible without waiting for a scroll animation. Keep full headline and controls available at text zoom.

### B. Featured work

Select three projects only after verifying that each screenshot and status are accurate. Existing `/work` labels Soshanguve Engineering, Lesia's and Manala as live client work; treat those as claims to validate, not independent proof of a paid engagement.

For each: business name, sector, “Live project” or “Concept”, one concise scope sentence, screenshot, live link and relevant service link. Replace generic promotional device images with actual captures where the source currently substitutes them. Do not manufacture before/after results or testimonials.

Use asymmetric editorial presentation and a short image reveal. Mobile presents vertical project entries. Essential proof does not depend on a carousel, hover or WebGL.

### C. Goal selection

Three choices with stable IDs:

- `trust`: Help customers trust us.
- `enquiries`: Make enquiries easier.
- `clarity`: Explain our services clearly.

The server-rendered default displays a complete example with an honest “Example goal” state. No mandatory question blocks further scrolling. Selection uses buttons or radios with visible selected state, keyboard support and a concise update announcement.

### D. Signature transformation

One sample site with three authored arrangements. Label it “Illustrative website example”. No fake business results, live visitor counters or real-looking testimonials.

| Progress | Behaviour |
| --- | --- |
| 0–20% | Show the complete sample site and selected goal. |
| 20–45% | Separate headline, service, proof and contact surfaces in depth. |
| 45–75% | Bring the chosen priority forward and update its explanatory caption. |
| 75–90% | Assemble the revised layout into desktop and phone presentations. |
| 90–100% | Hold the final state with a short takeaway and the quote action. |

Trust prioritises genuine proof placement in the illustration. Enquiries prioritises contact accessibility and a short form. Clarity prioritises service explanation and hierarchy. Change both layout and explanation; a colour change alone does not fulfil the signature.

Permit changing the goal while in the scene without moving the visitor to the page top. Use scene-local progress; do not mutate global page layout every frame. No automatic form submission. Provide “View finished example” and normal navigation for people who want to skip the sequence.

On mobile, use a shorter natural-flow reveal. Reduced motion presents the finished arrangement with selectable goals. Every state remains understandable when the canvas fails.

### E. Services Foundry

Preserve the Foundry's identity and selection interaction. Standardise top-level choices as Websites, Web apps and systems, Brand design. Within Brand design, keep both 3D identity and campaign/poster services explicit. Keep existing offering URLs.

The current `ServiceKey` contains `websites`, `identity`, `campaigns`; use a migration adapter rather than breaking existing typed imports. Existing enquiries with those values must still make sense. A new central service model can map them to the new top-level grouping.

Each panel shows suitability, deliverables, an actual example, starting scope/price where established and a quote link. Use lightweight rendered assets for most variants. Avoid mounting three separate continuously animated 3D contexts.

### F. Packages

Use one shared package definition for homepage, `/pricing`, offering references and enquiry context. Current displayed website tiers are Landing R2,799, Launch R4,999, Growth R12,500 and Signature R19,999. Keep app and care-plan details on the pricing page. Do not silently invent a discount or change the offer.

Homepage shows a concise summary with access to all tiers. No default package choice is presented as the visitor's own selection. Explain one-off build cost versus ongoing hosting/care, inclusions, revision limits and delivery prerequisites. Launch currently states 10–14 business days; do not apply the 5–7-day landing-page promise to it.

### G. Founder, process and FAQs

Use the existing founder portrait after visual review, without inventing a replacement person. Copy: “Speak directly to the person building your website.” Explain discovery, visual approval, build and handover in three concise stages. Include verified feedback if available; otherwise rely on demonstrable work and clear process.

Answer ownership, domains, hosting, ongoing costs, revisions, supplied content and support. Keep answers in accessible HTML. Move longer founder/company details to their existing pages.

### H. Contact and ending

Closing proposal: **Let's make your business easier to choose.**

Show selected service, goal and package beside the form, each editable. Required: name, a valid contact method and a service or “Help me choose”. Business name and a short note are optional. Offer callback as an explicit reply preference. Keep advanced brief fields behind an optional disclosure.

The last composition stays visible and usable. It does not fade to an empty frame. Do not duplicate another full sales pitch in the footer.

## 6. Scroll score and mobile behaviour

The approximate desktop footprint below is a design target, not forced empty space. Content height and readability outrank the budget. Test at 1440×900 and 1366×768, plus smaller and wider widths.

| Scene | Primary device family | Approx. viewport heights | Mobile equivalent |
| --- | --- | --- | --- |
| Hero | Independent parallax layers | 1.15 | Portrait composition, reduced travel |
| Work | Image reveal | 1.6 | Vertical readable projects |
| Goal | Natural flow | 0.6 | Stacked large choices |
| Transformation | Pin + local assembly | 2.2 | Unpinned, shorter state transition |
| Foundry | Direct selection / pointer response | 1.1 | Tap selection, no hover dependency |
| Packages | Natural flow | 1.1 | Stacked summaries |
| Founder | Contained media depth | 1.0 | Static portrait and readable text |
| Contact | Natural flow with stable final state | 0.9 | Short form, safe-area spacing |

Total starting target: about 9.65 desktop viewport heights. This does not include arbitrary waiting spacers. Four-plus device families, no identical primary families consecutively, one peak. No scroll-scrub video is required for the core build; use it only if an authored shot materially improves the agreed scene and survives phone tests.

## 7. Design system and assets

### Tokens

Proposed colour roles: canvas `#080B10`, light surface `#F7F8FA`, dark text `#121821`, inverse text `#FFFFFF`, primary blue `#175DE6`, scarlet `#C92F46`, gold material accent `#C8A354`. Verify actual foreground/background contrast; these are not blanket accessible pairs.

Use one modern display sans and one readable body sans. Manrope is already configured and can remain the body foundation. Prototype a distinctly modern display face against the current serif treatment; select and license the final font before adding production files. Keep existing font-variable aliases until dependent pages migrate. Remove the global need for script and mono fonts if no retained page uses them.

Targets: body 16–18 px; useful controls/labels around 14–16 px; secondary metadata no smaller than 12 px. Use fluid headings, generous paragraph leading and controlled line length. Reserve typography animation for a few key lines. No gradient text, letter-by-letter body copy or tiny decorative labels carrying essential facts.

### Asset work

| Asset | Source / treatment | Completion check |
| --- | --- | --- |
| Logo and mark | Existing brand files | Correct identity, clear light/dark rendering |
| Logo film | `public/videos/carter-digitals-logo-reveal.mp4` | Appropriate placement, muted, off-screen pause, poster fallback |
| Founder | Existing `kabelo-kadiaka-founder.webp` | Accurate portrait, appropriate crop and quality |
| Portfolio captures | Actual verified project pages | Screenshot matches named project and displayed status |
| Hero device composition | Accurate model/render plus independently composited screen content | Real materials, complete silhouette, consistent lighting |
| Transformation surfaces | Semantic example interface and appropriate depth presentation | Accessible explanation stays outside decorative renderer |
| Brand-service visual | Existing suitable identity artwork or approved original asset | Real deliverable relevance, no invented client endorsement |

Generate only missing assets. Plan clean background plates and true transparency before generation. Use one lighting direction and material palette across renders. Keep all headings and prices in HTML. Any illustrative UI text rendered as a texture is duplicated as real accessible content where it matters; it is not the sole source of business information.

Preserve the existing social-sharing image and metadata unless a separate social-preview change is requested. Store final source assets, delivery derivatives, license information and mobile posters in a reproducible manifest.

## 8. Technical integration

### Proposed module boundaries

| Proposed module | Responsibility |
| --- | --- |
| `app/_components/scrollcraft/studio-hero.tsx` | Layered hero and fallback |
| `app/_components/scrollcraft/featured-work.tsx` | Readable project proof |
| `app/_components/scrollcraft/business-goal-selector.tsx` | Accessible choice |
| `app/_components/scrollcraft/website-transformation.tsx` | Scene choreography |
| `app/_components/scrollcraft/project-context.tsx` | Shared non-sensitive selection state |
| `app/_components/scrollcraft/quote-form.tsx` | Shared homepage/contact form |
| `app/_components/scrollcraft/motion-runtime.tsx` | Scoped initialisation, media queries and cleanup |
| `app/_components/scrollcraft/studio-nav.tsx` | Shared navigation |
| `lib/site-content.ts` | Business and service facts |
| `lib/packages.ts` | Package IDs, prices, deliverables and timing |
| `lib/projects.ts` | Project status, asset and destination definitions |
| `lib/enquiry-context.ts` | Validated goal/service/package mapping |
| `lib/analytics.ts` | Sanitised, deduplicated event adapter |
| `app/scrollcraft-theme.css` | Scoped tokens and responsive rules |

Names are proposed; preserve existing conventions where equivalent modules exist. Keep legacy content imports working until all callers migrate.

### Motion ownership

Use Scroll Craft's page-scoped lifecycle and semantic markup. If its bundled engine is integrated, keep that engine unchanged and add a React adapter with complete mount/unmount cleanup. Confirm its lifecycle APIs before implementation. Write the bespoke transformation in a page-local module.

GSAP already exists and can remain in retained widgets. Do not give Scroll Craft and GSAP ownership of the same element transform. Nest wrappers when entrance motion and scene movement must coexist. Do not add Lenis, another animation framework or React Three Fiber without a concrete gap in the current stack.

Preserve native scroll. Scope observers and animation frames; dispose canvas resources, textures and listeners when leaving the page. Pause off-screen and hidden-tab rendering. Avoid per-scroll React state updates. Use one active heavy scene at a time and a device-appropriate pixel-density cap. Handle reduced motion and WebGL failure as full supported modes.

### State and URL contract

Keep only non-sensitive selection IDs in query parameters or session storage. Proposed quote route: `/contact?service=websites&goal=enquiries&package=launch#enquiry`. This is a planned route format, not an existing implemented feature.

Precedence: explicit valid URL selection, then current-session selection, then neutral defaults. Unknown IDs fall back safely. A service change clears incompatible package IDs while retaining the goal. Price is always resolved from trusted package data, never from a URL value.

Map legacy `#brief` and `#project-route` links to the same working enquiry destination or an accessible anchor alias. Fix all internal callers, but also support inbound bookmarks. Keep names, phone numbers and messages out of analytics and ordinary page URLs. Do not store contact details in persistent browser storage.

## 9. Reliable enquiries before visual launch

Retain `/api/leads`, the D1 `leads` table and `lead_events`. No new CRM is necessary for this scope.

Implement a shared response type that separates durable capture, notification queueing and an optional handoff:

- **Captured:** a lead record exists. Show “Your enquiry has been received” and a reference.
- **Captured, notification pending/failed:** same visitor receipt; record operational failure for follow-up. Do not ask the visitor to submit twice.
- **Not captured:** show an honest error with Retry and an explicit WhatsApp option. Preserve entered fields in memory.
- **WhatsApp opened:** this is a handoff, not proof a message was sent.

Required tasks:

1. Persist before claiming receipt; return a suitable failure state when storage fails.
2. Add an idempotency key so retries do not create duplicate leads. Keep the schema change additive and compatible with existing records.
3. Store service, goal and package IDs plus source page in structured context, using additive columns or a bounded context payload. Retain existing readable fields for backwards compatibility.
4. Add a real `phone`/callback preference. Keep SMS and WhatsApp acknowledgements distinct from the requested callback.
5. Validate name, contact method and allowed selection values server-side. Enforce reasonable input sizes.
6. Separate permission to respond to the enquiry from optional automated acknowledgements; do not repurpose a general checkbox to authorise unrelated marketing.
7. Keep honeypot protection and replace the isolate-local rate-limit assumption with a deployment-appropriate mechanism if relying on a global limit. Verify failure behaviour without rejecting legitimate users behind shared networks unnecessarily.
8. Do not await optional notification delivery before acknowledging durable capture when the runtime provides a safe background/outbox mechanism. A queued message is not delivery confirmation.
9. Make the form safe with JavaScript unavailable: a controlled POST or explicit direct-contact fallback, never the browser's default GET containing personal data.
10. Use isolated test data and a notification stub for QA. Do not send real SMS/WhatsApp messages during the planning or unapproved test flow.

Confirm the actual deployment bindings and notification configuration during implementation without exposing secrets. An environment key's presence alone is not a successful end-to-end delivery test.

## 10. SEO and page rollout

Preserve current useful routes, canonical origin, robots configuration and verification files. Keep important copy and crawlable links in the HTML response. Animation must enhance content rather than decide whether it exists.

| Route group | Implementation |
| --- | --- |
| `/` | New narrative and semantic service links; align structured data with actual visible offer. |
| `/website-development-pretoria` | Highest-priority local landing page: relevant proof, packages, process and practical questions. |
| Soshanguve, Mabopane, Centurion, Pretoria East, Johannesburg pages | Apply shared design; strengthen distinct content where evidence supports it. Do not create extra near-duplicate location pages. |
| `/services` and existing `/offerings/*` | Consistent taxonomy, deliverables and relevant quote context. Retain existing additional offerings without silent removal. |
| `/seo-geo-pretoria` | Keep detailed search-service information outside the homepage's main cinematic sequence. |
| `/work` | Clear distinction between completed work and concepts; authentic imagery and destinations. |
| Project detail pages | Add only for projects with enough verified content; redirect nothing merely to invent a new URL scheme. |
| `/pricing` | Shared package data and working selected-package quote links. |
| `/contact` | Shared form, incoming selection handling, direct contact. |
| `/about`, `/company-profile` | New system, authentic founder content and supported credentials. |
| `/insights` and article routes | Preserve URLs and content; improve reading design and useful service links. |
| `/privacy`, `/terms` | Legible shared design; check wording against actual form behaviour. |

The Foundry currently links to `/premium-websites`, while the inspected router includes `/offerings/premium-websites`. Resolve any hosting-level redirect first; then point internal links directly to the intended canonical route. Do not assume the current link is a 404 without checking routing.

Use truthful per-page titles, descriptions and canonical URLs. Update sitemap modification dates for actually changed pages rather than stamping every page indiscriminately. Preserve existing social previews. Do not treat metadata keywords, structured data or `llms.txt` as ranking guarantees.

For the three excluded pages, obtain the issue-detail URL list and inspect each page before taking indexing action. A redirect exclusion can be intentional. Do not request indexing for redirects or pages intentionally consolidated.

Google Business Profile improvement and relevant backlinks are companion acquisition work, not automatically solved by this code release. Assess eligibility and existing profile separately. Keep current outreach directing suitable prospects to relevant project/service pages while search visibility grows.

## 11. Measurement

First confirm which analytics property/collector is intended and whether it actually receives events. Existing `dataLayer.push` calls alone are not evidence of collection.

| Event | Trigger | Safe context |
| --- | --- | --- |
| `quote_cta_click` | A quote action is selected | placement, service ID, package ID |
| `business_goal_selected` | A goal changes | goal ID |
| `project_opened` | Project detail/live link selected | project ID, destination kind |
| `package_selected` | Visitor selects a tier | package ID |
| `enquiry_start` | First meaningful form interaction | page, source placement |
| `enquiry_captured` | Server confirms durable capture | non-PII result category |
| `enquiry_error` | Validated error category | category, not raw submitted content |
| `phone_click` | `tel:` action | placement |
| `whatsapp_click` | Explicit WhatsApp action | placement, no prefilled message |

Use one emitter to avoid counting the same dock action through several listeners. Do not send full href query strings, email addresses, names, business notes or phone numbers. Count leads using durable records, not client success screens. Track actual qualified conversations and wins separately from button clicks.

Post-launch checks: immediate smoke check; 24–48-hour capture/notification review; weekly traffic and enquiry review; 28-day and 56-day Search Console comparisons. These are planned review points, not scheduled automations. Existing weekly roadmap reporting can include them rather than creating a duplicate task.

## 12. Performance and accessibility acceptance

Target good real-user Core Web Vitals: LCP at or below 2.5 seconds, INP at or below 200 ms and CLS at or below 0.1, assessed with appropriate field data when available. Lab measurements are diagnostic and not a field pass.

Proposed build budgets, to verify against the actual baseline: initial mobile visual assets about 600 KB or less; initial fonts about 150 KB or less; no video required for first paint; incremental initially loaded motion JavaScript about 100 KB compressed or less. These are design budgets, not current measured results. If they cannot be met, simplify delivery before reducing clarity.

Keep hero poster dimensions stable. Load project media responsively and defer off-screen assets. Avoid blocking font/scene loaders. Prefer accurate pre-rendered assets where live 3D adds no meaningful interaction.

Check 360×640 and 390×844 phones, tablet, 1366×768 and 1440×900 desktop, reduced motion and 200% text enlargement. Real-phone verification is a separate gate when available; browser emulation does not establish real decoder or touch behaviour.

Acceptance includes readable text throughout motion, visible keyboard focus, skip navigation, correct heading order, working menu Escape/focus return, named controls, no horizontal page overflow, no obscured inputs and sensible touch target sizes. A 3D failure must leave complete information and functional links. All essential content must survive reduced motion.

## 13. Phases, dependencies and reviewable outputs

| Phase | Work | Dependency | Exit criteria |
| --- | --- | --- | --- |
| 0. Baseline and protection | Confirm current deployment; inventory routes, package facts and assets; record rollback version | Existing Site | Source/deployment relationship known; no accidental domain or audience change |
| 1. Conversion foundation | Repair anchors; unify lead success; add callback semantics and safe context; specify analytics | Phase 0 | Package selection reaches the form; no false receipt state |
| 2. Design floor and content | Tokens, fonts, navigation, verified work selection, final copy, Scroll Craft brief/fingerprint | Phase 0 | Desktop/mobile compositions specified; no invented claims |
| 3. Signature slice | Build the complete hero, early work, goal and transformation | Phase 1–2 interfaces | Opening, midpoint and exit are visibly strong; all three goals work |
| 4. Complete homepage | Foundry, packages, founder/process, FAQs, closing form; remove obsolete homepage imports | Phase 3 | Complete coherent page with preserved logo film and contact capability |
| 5. Supporting pages and SEO | Apply system and correct links/canonicals to existing routes | Shared components stable | Every important entry page leads to proof and contact |
| 6. Verification | Build, relevant tests, route/asset checks, visual scroll states, isolated form tests | Complete source | No critical defects; explicit evidence and limits recorded |
| 7. Release | Save exact built source, deploy to existing Site when authorised, verify | Phase 6 | Correct domain, content, assets and form contract in production |
| 8. Measure | Compare acquisition and actual conversations | Production plus analytics | Prioritised next changes based on evidence, not appearance alone |

Phases 1 and 2 have largely independent preparation work, but shared-file edits and release operations remain ordered. Phase 3 is the first visual milestone, not permission to publish a half-built homepage. The first production redesign release should include a complete homepage and coherent shared navigation/contact/pricing. Supporting pages must not inherit broken global styles while their visual upgrade is pending.

Do not assign a calendar promise before asset readiness, runtime verification and visual QA are understood. Each phase is a concrete delivery unit, not an obligation to stop for another approval question.

## 14. QA and release checklist

### Meaningful tests

- Retain server-rendered title, canonical, robots and important link assertions.
- Update old component-class and copy expectations to the redesigned structure rather than disabling the test file.
- Test goal selection reaching the shared form, cross-page package selection, invalid parameters and legacy anchors.
- Test successful persistence, persistence failure, notification failure after persistence, duplicate retry and invalid contact details with isolated data.
- Verify no automatic WhatsApp opening when the visitor chooses phone/email.
- Verify analytics once per action, with no submitted personal content.
- Inspect multiple scroll positions inside each motion scene, including reverse scroll and fast jumps.
- Test nav, form errors, sticky offsets and reduced motion at mobile widths.
- Validate actual asset paths, fonts, scripts and worker output from the final package.

### Release procedure

1. Work on a dedicated branch/worktree from the verified source; keep the Site identity and lockfile.
2. Record the currently live known-good version and commit before replacing it. Latest saved version 221 is only a candidate until deployment is confirmed.
3. Apply only backward-compatible database additions. Keep old fields readable for rollback.
4. Run the existing verified build and artifact validation flow. Resolve real failures.
5. Commit and push the exact tested source, then save a Site version from that commit.
6. Publish the saved version to the same Site/domain within the user's deployment authorisation. No new Site or changed audience is needed.
7. Check deployment terminal status and the release's route, asset and enquiry behaviour.
8. If critical routing/capture or layout failures appear, restore the known-good saved version; do not delete newly captured leads or reverse additive schema blindly.

The current source belongs to Sites. Prior conversations reference Vercel, but this inspection did not establish a corresponding current Vercel project. Do not deploy an arbitrary similarly named GitHub repository; confirm any second hosting target before planning a synchronised release.

## 15. Immediate implementation queue

1. Confirm live version and capture route/asset baseline.
2. Fix `/#brief` links and create the shared enquiry context model.
3. Correct durable-capture success and reply-channel semantics.
4. Establish tokens, selected fonts and one shared navigation component.
5. Verify three authentic portfolio presentations.
6. Build the new layered hero and three-goal transformation with static/mobile fallbacks.
7. Complete the homepage and migrate shared page styling.
8. Strengthen the existing Pretoria page and other priority routes.
9. Verify collection, lead handling, browser states and final build.
10. Release the complete reviewed redesign, then measure actual conversations.

## 16. Sources and boundaries

Primary project evidence: inspected source at the commit above; Sites metadata and saved-version listing; earlier live homepage, pricing and contact inspection in this conversation; the two user-supplied Search Console ZIP exports dated 5 September 2026.

Design method: the requested Scroll Craft skill and its hero-depth, approved-collection, device, structure and feeling-curve guidance. Planning decisions are proposals; no generated assets, fingerprint pass, visual QA pass or production redesign is claimed.

Technical search references checked 5 September 2026:

- [Google: Core Web Vitals and Search](https://developers.google.com/search/docs/appearance/core-web-vitals).
- [Google: JavaScript SEO basics](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics).

The redesign can remove friction and strengthen the site's presentation. Search rankings, traffic growth and client wins remain outcomes to measure, not promises embedded in the design.
