# Phase 2 implementation and verification

## Scope delivered in source

The existing Carter Digitals homepage now uses ScrollHero and GoalTransformation. SignalArchitecture and ConversionXray are replaced in the page composition; the logo-film welcome follows the new signature sequence. Other sections and the Services Foundry remain available for Phase 3. No existing page route or published package price is removed.

The shared CarterBubbleMenu export now renders StudioNavigation across the site: authentic logo, desktop shortcuts, primary enquiry link and a native modal dialog with full page navigation and contact alternatives. The dialog uses native keyboard focus containment, Escape handling, explicit close, focus restoration and temporary body-scroll locking. The old blocking route/first-load curtain is removed; the measurement listener remains.

## Hero visual contract

Original generated asset: `public/images/scrollcraft/browser-sculpture.webp`, 1536×1024, 77,526 bytes. It is photoreal 3D-rendered artwork, not an interactive Three.js model. The art was generated once and visually inspected before integration. It depicts a brushed-metal browser frame, a red frame and blue glass with restrained gold details. No invented copy, dashboard numbers or logo is baked into it.

Independent live planes: existing Hyperspeed background, rendered sculpture, school-prototype screenshot and dental-prototype screenshot. Scroll displacement differs by plane (32px, -48px and -92px maximum, respectively); pointer depth is additive. The school and dental captures retain explicit prototype labels. The heading, description and enquiry actions stay in stable semantic HTML. Pause motion disables the highway and resets the new parallax motion.

Mobile ≤760px receives a separate composition and no highway canvas. Reduced-motion users receive the same rendered artwork and complete screen composition with no position animation. The artwork is not swapped for an unrelated fallback; it is present from first render. Existing Hyperspeed pauses itself offscreen/when hidden and is now lazy-loaded inside a failure boundary.

## Signature and enquiry context

Choose credibility, enquiries or clarity. The chosen priority reorders three functional website modules: founder proof, contact channels and service choices. These are real HTML with actual destinations, labelled as an illustrative direction rather than a client outcome.

The assembly is pinned only on screens at least 1000px wide and 900px tall with motion enabled. Its 2.2-screen span progresses from settled composition to expanded depth and back to a resolved composition. Smaller screens and reduced-motion environments use unpinned natural reading order. Desktop has a keyboard-operable range control and a return-to-scroll control. Reordering animates the independent `translate` property; scroll owns `transform`, avoiding two animation systems writing the same property.

Selection passes through an allowlisted `goal` query value and optional session preference. Contact includes the chosen goal in its visible context, stored startingPoint and optional WhatsApp message; manually changing the starting-point choice does not discard it. The existing homepage brief receives the mapped priority. No personal input is added to the URL. New measurement events are `goal_select` and `direction_cta`; the existing allowlisted first-party endpoint accepts them with no schema migration.

## Scroll Craft integration

The Phase 1 brief, feeling curve, asset contract and empty local fingerprint registry were reused. This is the same planned build, not a second fingerprint entry. The upstream engine and stylesheet are retained unchanged under `reference-engine/`. They are not mounted as a second runtime: its mount API has no teardown method, so this React application uses project-local effects with listener cleanup and one owner per animated property. No upstream engine code was edited. Fingerprint shipping registration remains pending the full redesign release.

## Verified and remaining

Passed: four Node tests covering strict goal validation, enquiry destinations, scroll bounds and reversible assembly resolution. Required local imagery exists, and the new rendered asset was visually inspected. `git diff --check` passed. Source reviewed for desktop/mobile media-query agreement, stable semantic content and preservation of actual contact channels.

Not verified: whole-project TypeScript/build, browser screenshots, keyboard interaction in a browser, visual compositing at intermediate scroll states, real WebGL playback, or hosted enquiry persistence for this revision. These are not claimed as passed.

The standard dependency installation was attempted but the proxy connection timed out while downloading the pinned Vinext package. The standard build helper then stopped because Vinext was unavailable. No dependencies were replaced with different versions, and no archive from an unsuccessful build will be published. Source is saved for supported remote-build fallback. Phase 2's production-readiness gate remains open until the build and final visual/functional review succeed.

Workspace maintenance removed the previous checkout during work. The exact saved project source was re-cloned, and the generated artwork survived in the conversation workspace. No user data was deleted or fabricated to recover it.
