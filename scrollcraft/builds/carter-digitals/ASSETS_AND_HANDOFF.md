# Phase 1 asset inventory and handoff

## Ready existing assets

| Asset | Inspected | Intended use / constraint |
|---|---|---|
| `public/kabelo-kadiaka-founder.webp` | Visually inspected in Phase 1: portrait, dark suit, blue/black background | Founder section, portrait crop preserving face; optional About page |
| `public/carter-digitals-logo-dark-panel.webp` | Visually inspected: authentic rendered Carter wordmark on a white panel | Preserve identity. It is not a transparent alpha mark; do not treat the white background as transparency |
| `public/images/case-studies/sj-van-der-merwe.webp` | Visually inspected: school prototype page capture | Early work candidate, explicitly labelled prototype. Shown school is in Lebowakgomo; do not retain the current gallery's inaccurate Gauteng description |
| `public/images/case-studies/refresh-dental.webp` | Visually inspected: dental prototype capture | Prototype candidate. It contains rating/finance badges not independently verified here; do not extract those as Carter proof or client outcomes |
| `public/videos/carter-digitals-logo-reveal.mp4` | File exists; media properties inspected | Smaller founder/about placement, muted loop with visible pause; poster required in Phase 2 |
| Existing Hyperspeed code and dependencies | Source retained | Controlled hero background in Phase 2; new 3D composition is separate from this effect |

Additional existing gallery assets are candidates, not approved proof: Hillview High, legal-firm direction, IM Attorneys, Carter website poster, mobile product concept and Lesia's logo. Keep their exact prototype/concept/brand-asset labels. Reconfirm actual client status before presenting Soshanguve Engineering, Lesia's or Manala as client case studies.

## Phase 2 production briefs

1. Website composition: physically consistent browser-screen planes using approved project imagery or a functioning, explicitly illustrative demonstration. Dark material edges with restrained red/blue reflections and limited gold details. No fabricated analytics dashboard, invented testimonials or free-floating primitive objects.
2. Hero desktop poster: render the completed scene at its entry state, leaving the HTML text area clear. Also render an independently composed compact-phone poster. Both must match the actual scene, not a stock substitute.
3. Transformation: three meaningful states for credibility, enquiries and clarity. Screens must show the actual state being described. No client outcome claim, invented percentage or fake audit score.
4. Logo film poster: select and inspect a representative existing film frame. Keep video dimension reservation, silent playback and a pause control.

No new asset generation was necessary for Phase 1. Scroll Craft preflight passed required checks, with optional Chrome and Kie API key unavailable. No browser or animated-scene verification is claimed.

## Measurement and enquiry definitions

Implemented first-party endpoint: `/api/measure`, backed by the new `measurement_events` table. Allowed events: page_view, call_click, whatsapp_click, email_click, enquiry_start, enquiry_attempt, enquiry_error. It stores only event, page path, random event ID and timestamp. No analytics visitor ID, form contents, query strings or analytics cookies. DNT requests are omitted. There is no public analytics-reading endpoint.

Successful enquiries are counted from actual rows in `leads`, split by `source`: `website-homepage` or `website-contact`. Do not count a client-originated success event as the authoritative number. Contact click counts include repeated clicks, and page views are not unique visitors. Bots, blockers and dropped requests can affect measurement. GA4/GTM is not claimed configured; the old unconnected dataLayer queue and home-made Core Web Vitals labels have been removed.

Operator queries, through authorised D1 access only:

```sql
SELECT date(created_at) AS day, event, page, count(*) AS events
FROM measurement_events
WHERE created_at >= datetime('now', '-30 days')
GROUP BY day, event, page ORDER BY day DESC;
```

```sql
SELECT date(created_at) AS day, source, count(*) AS saved_enquiries
FROM leads
WHERE created_at >= datetime('now', '-30 days')
GROUP BY day, source ORDER BY day DESC;
```

Do not divide all historical lead rows by only post-launch page views. Start a fresh measurement period when this version is deployed. Report actual conversations separately from clicks, using the operator's follow-up record. Preserve the uploaded Search Console baseline: 13 clicks / 779 impressions / 45 days ending 3 September; coverage last observed 28 August. No historic call analytics were available.

## Recovery and release boundary

Baseline source is commit `279c67b063d1730a2f372eeff99e99c51c1a17cf`, saved version 221. Local branch `phase1-baseline-20260905` preserves that source; BASELINE.json records page routes and the sitemap. No existing route or package price was removed.

The new migration only adds `measurement_events`; it does not alter or delete lead records. An application rollback can leave this unused additive table in place. Existing migrations are immutable.

Before production release, finish a dependency-complete build, apply the additive migration through Sites, and verify the hosted binding and a controlled enquiry capture with outbound notifications disabled. No real SMS or WhatsApp message was sent in these checks.

Remaining Phase 3 hardening: shared form, stable request idempotency for ambiguous network retries, server-enforced durable abuse protection, and agreed operator notification configuration. The existing lead throttling is isolate-local and is not advertised as durable abuse protection. A successful capture proves storage, not that a provider delivered a message or that the owner read it.
