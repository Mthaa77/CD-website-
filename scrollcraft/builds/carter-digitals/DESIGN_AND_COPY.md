# Design system, copy deck and scroll storyboard

## Design floor

Runtime tokens are in `app/scrollcraft-foundation.css`. The new tokens are available without broadly restyling the existing homepage before the new components are built.

| Role | Decision |
|---|---|
| Canvas | `#090B10`, deep black with a cool bias |
| Raised surface | `#151A24` |
| Main text | `#F7F8FC` |
| Secondary text | `#B7C1D1` |
| Primary action accent | `#F04452`, dark label; verify final composited contrast |
| Alternate scene colour | `#315CFF`, use with white text after contrast verification |
| Metallic detail | `#DFB86F`, sparse, especially in object materials |
| Display | Existing Manrope, weight 800, tight optical tracking, real HTML |
| Editorial emphasis | Existing DM Serif Display italic, one phrase at a time |
| Body | Manrope 400/600, 17–18px desktop, 16–17px mobile, line-height 1.55–1.65 |
| Supporting technical labels | Existing Geist Mono only for actual data; no ornamental codes |
| Signature | Existing Sacramento confined to founder signature; no menu or body usage |
| Hero scale | `clamp(2.6rem, 5.8vw, 5.5rem)`, max two authored desktop lines; mobile wrap naturally |
| Section scale | `clamp(2rem, 4vw, 4rem)`, body measure at most 62ch |
| Spacing | 4px base; 8, 12, 16, 24, 32, 48, 64, 96px rhythm |
| Shape | 24px panels, 16px media crops, pill controls; no card nesting |
| Depth | Three elevations; offset shadow, top edge light, genuine overlap |
| Buttons | At least 48px high; clear primary and secondary contrast; icon supplementary |
| Focus | 3px visible ring, 4px offset, never clipped by rounded wrappers |

No new font downloads are needed for the approved type pairing. Phase 2 must reduce visual inconsistency by applying this system to the new components, rather than adding more display families.

## Navigation and control contract

Desktop: authentic Carter wordmark, Work, Services, Pricing and Start a project. About and Insights in the expanded menu. Mobile: wordmark and clearly labelled Menu button; opening produces an accessible modal navigation with Escape close, focus containment and focus restoration. No contact dock obscuring the menu or form.

Primary action label: Start a project. Secondary: View the work. Submission label: Send my enquiry. Pending: Saving your enquiry… Success: Your enquiry is saved. Error: Your enquiry could not be saved. Your details are still here: please retry or choose WhatsApp.

Interactive controls must have default, hover, focus, pressed, loading, error and disabled states as applicable. Touch never depends on hover. Links navigate; buttons change state. A click to call or WhatsApp is a contact action, not evidence of an actual conversation.

## Homepage copy deck

### Hero

Heading: **Your business deserves a better website.**

Supporting line: **Premium websites and digital experiences for Pretoria businesses ready to make a stronger impression and earn more enquiries.**

Actions: **Start a project** / **View the work**.

The brand and local context sit naturally in the heading/supporting text and navigation, not extra decorative labels. Four text elements maximum in the first composition.

### Selected work

Heading: **See what your next chapter could look like.**

Body: Explore website projects and prototypes shaped around the people who use them. Every example shows the thinking behind the experience, with its status clearly labelled.

Initial candidates: S.J. van der Merwe school prototype; Refresh Dental prototype; a confirmed client project only after its current screenshot and status are verified. Each label includes sector, project status, the actual design problem and a working destination. Do not claim either prototype is a paid client or that it increased bookings.

### Goal selector

Heading: **What should your website do better?**

- **Build credibility.** Help people feel confident choosing your business.
- **Earn enquiries.** Make the next conversation easier to start.
- **Explain the offer.** Make your services and their value easier to understand.

Helper: Choose your priority to explore a possible direction. Selection is optional; show a complete default demonstration labelled as an example.

### Signature transformation

Heading: **A different priority. A different website.**

Default supporting line: Watch the structure change around what matters most to your business.

Credibility state: Your work, your people and your expertise move forward.

Enquiries state: Your offer, contact options and next step become easier to find.

Clarity state: Your services and their differences become easier to compare.

Resolution: **Take this direction into your project.** Action: Start a project. Always label the scene “Illustrative website direction”; never fabricate a client's before-and-after result.

### Services Foundry

Heading: **The right pieces, built to work together.**

Websites: A clear digital home for your business, with considered design, useful content and an enquiry journey that works.

Brand identity: A distinctive visual identity that helps people recognise and remember your business.

Creative materials: Posters and campaign visuals that carry the same quality into the places your customers see you.

Keep the Foundry's current interaction and visual character; improve layout, accessible states and destinations. Link additional app and business-system services from the service index without silently changing the Foundry's taxonomy.

### Packages

Heading: **A clear scope. A considered investment.**

Body: Start with the package closest to your needs. We will confirm the pages, features and delivery scope before the project begins.

Use the current pricing page as the authority: Landing R2,799; Launch R4,999; Growth R12,500; Signature R19,999. Do not introduce remembered packages from older conversations. Full inclusions and exclusions stay on `/pricing`. Show a manageable selection with View pricing rather than reproducing the entire comparison table on the homepage.

### Founder and process

Heading: **You work directly with the person building it.**

Body: I’m Kabelo, founder of Carter Digitals in Pretoria. I help businesses turn what they do into a clearer digital experience, from the first conversation to the final details.

Process: **Define the goal** — clarify audience, scope and priorities. **Shape the experience** — review the design and content together. **Build and refine** — develop the agreed pages and useful interactions. **Launch with care** — verify the journey and prepare the handover.

FAQ: Can you improve my current website? Yes; first review its content, platform and enquiry journey to identify what should carry forward. / Do I need all my content ready? Share what you have; we identify remaining content before agreeing the scope. / Can we start with a smaller website? Choose a suitable starting scope and discuss what could be added later. / Is SEO included? Clear page structure and agreed search foundations belong in the scope; rankings and traffic increases cannot be guaranteed.

### Closing brief

Heading: **Let’s make your next website worth the visit.**

Body: Tell us about your business and what you want to improve. We will use your answers to shape a practical next conversation.

Fields: name; business optional; service; chosen goal; selected response channel and matching contact detail; brief optional; budget optional. The final shared form is Phase 3. Phase 1 repairs both existing forms in place.

## Hero layer contract

| Plane | Content | Motion and occlusion |
|---|---|---|
| Far | Existing Hyperspeed, controlled density, black/blue/red | Lowest visual priority; pause offscreen; no light streak through body copy |
| Mid | Genuine project screen textures on dimensional browser planes | Small independent translation; fixed readable surface at entry |
| Subject | Assembled website composition | Deliberate 3D perspective with realistic material response, not unrelated geometric toys |
| Near | One cropped foreground screen edge belonging to the composition | Slightly larger travel than subject; never obscures CTA |
| Atmosphere | Rendered highlights and contact shadows | Anchored to the object; no full-screen coloured fog |
| Type and controls | Semantic HTML on a clear text area | Stable; never fade the only offer or primary action away |

Opening: headline and actions are fully visible beside the settled composition. Midpoint: near and far planes separate visibly, revealing how the website is constructed. Exit: the layers settle and the first work example enters naturally. The hero is not pinned.

Mobile: text first, a compact complete composition below; crop near edge out if it competes with the CTA. At 360×640, reduce media height before reducing legibility. Reduced motion and no-WebGL use a matching rendered poster. Posters are produced from the final scene in Phase 2, not guessed from an unrelated image.

## Scroll score

| Scene | Primary device | Desktop span target | Mobile / reduced motion |
|---|---|---:|---|
| Hero | Independent layer parallax | 1.15 viewports | Static dimensional composition; no pin |
| Work | Navigable media rail | 1.60 | Stacked or native swipe; keyboard reveals focused item |
| Goal | Direct choice controls | 0.60 | Same real controls; natural height |
| Transformation | One pinned assembly | 2.20 | Short unpinned illustration; selection still changes meaning |
| Foundry | Interactive service stage | 1.10 | Touch/keyboard selections; description always readable |
| Packages | Editorial reveal | 1.10 | Static scope content and links |
| Founder/process | Portrait and natural flow | 1.00 | Natural flow with small optional opacity entry |
| Brief | Working form | 0.90 | Content-driven height, no animation prerequisite |

Total reference: 9.65 desktop viewports, not a fixed page height. Four-plus families, no adjacent repeat, one visibly longest peak. Never truncate text to meet the span.

Transformation timeline: 0–15% settled example; 15–35% layers separate; 35–65% chosen goal changes ordering/emphasis; 65–85% composition assembles; 85–100% resolved example and usable CTA. All reverse-scroll positions must be coherent. Selecting a different goal mid-scene updates content without jumping the document scroll position.

Native scroll remains the owner. One timeline controls each animated property. Do not stack Scroll Craft, GSAP and existing observers on the same element. Keep animation values out of per-frame React state. Keep the shared Scroll Craft engine unchanged if adopted; adapt only the project-specific choreography.
