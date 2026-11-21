# Phase 1 verification, 5 September 2026

## Implemented

- Lead and creation-event inserts are atomic. Storage failure returns HTTP 503 and `persisted: false`; notification attempts only happen after capture.
- Both existing forms require confirmed persistence before success. The contact form no longer opens WhatsApp automatically; an explicit optional link carries the brief. Values remain on failure.
- Call preference is stored as `call`, with matching contact validation. Automatic customer SMS requires the SMS preference and acknowledgement consent. Provider notification requests have a four-second timeout and failure does not undo capture.
- Pricing links use `/contact#enquiry`; the contact target and legacy homepage `#brief` and `#enquiry` targets exist.
- First-party, minimal measurement endpoint and additive migration; dock clicks have one collection path; no raw WhatsApp brief URL in analytics. Saved lead rows are the source of truth for completed enquiries.
- Shared design tokens imported, full copy deck and scene storyboard recorded, authentic brand assets reviewed, recoverable source and route baseline recorded.

## Passed evidence

`node --test tests/phase1-foundation.test.mjs`: eight tests passed against an isolated in-memory SQLite database implementing the D1 statement/batch contract. Actual generated migrations and application route handlers are used. Tests cover invalid payload shape; unavailable storage; atomic successful lead/event capture with callback/source; transaction rollback; notification failure and prevention of unwanted customer SMS; selected-channel validation; allowed measurement persistence without extra payload fields; query-string, spoofed-success and cross-origin rejection plus DNT and unavailable measurement storage.

Changed TypeScript/TSX files passed transpilation syntax diagnostics. `git diff --check` passed. New migration inspected: a single additive `CREATE TABLE measurement_events`, no edits to the existing migration. This is not a whole-project type check or production D1 test.

## Build limitation

The standard dependency installer could not complete: the network approval was cancelled before a decision. A safer offline install using already available package cache also could not complete because `three@0.185.1` was not cached. Existing locally available matching packages were reused only for isolated verification. No dependency manifest or lockfile was changed.

The required full build was attempted with the standard Sites build helper. It failed at module resolution because `lucide-react` was unavailable. This is an incomplete local dependency environment, not a successful build. No archive from this failed build is suitable for publication. Save source-only for supported remote-build fallback; do not claim release readiness.

## Not claimed

No production deployment, live enquiry submission, outbound message, hosted migration application, browser/visual QA, Core Web Vitals result or GA4 connection was verified in Phase 1. No cinematic hero or transformation has been implemented yet; those are Phase 2. Measurement is verified in isolation and requires the hosted migration/binding check on release.

Phase 1 foundation work is saved; its production-readiness gate remains open until the dependency-complete build and hosted verification succeed. Final redesigned shared-form idempotency and durable throttling remain in the Phase 3 backlog, as documented in the handoff.
