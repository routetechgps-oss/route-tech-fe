# Route Tech simple homepage design QA

final result: passed

## Source visual truth

- Reference image: `/var/folders/6v/tsrf5q3s4zq75hqlgvpss3sc0000gn/T/codex-clipboard-d19e724c-1c1d-4073-ae1a-7a47f6dbeee9.png`
- Source pixels: 1024 × 1536.
- Source role: page content order, visual-service emphasis, blue/orange brand balance, Bihar coverage proof, and direct conversion flow.
- Intentional deviation: the final homepage uses short, plain English copy and larger images because the requested audience relies heavily on visual recognition.

## Browser-rendered implementation evidence

- Desktop hero: `qa/home-simple-desktop-hero.png`
- Desktop service choices: `qa/home-simple-desktop-services.png`
- Desktop Bihar coverage: `qa/home-simple-desktop-coverage.png`
- Phone hero: `qa/home-simple-mobile-hero.png`
- Phone service choices: `qa/home-simple-mobile-services.png`
- Combined source/implementation comparison: `qa/home-simple-comparison.jpg`
- Desktop CSS viewport and capture pixels: 1440 × 1000 at device scale factor 1.
- Phone CSS viewport and capture pixels: 390 × 844 at device scale factor 1.
- Density normalization: none required; source and implementation evidence were compared at CSS-pixel density 1.
- Tested route: `http://127.0.0.1:3010/`
- Tested state: default homepage, service-choice section, Bihar coverage section, mobile menu open and closed.

## Full-view comparison evidence

The combined comparison board places the complete supplied reference beside sequential browser captures of the implementation. The final page preserves the reference flow:

1. Clear truck/GPS/Bihar hero.
2. Short visual benefit strip.
3. Four picture-led vehicle choices.
4. Three-step call → fitment → mobile tracking explanation.
5. Bihar map and 38-district proof.
6. Direct call, dealer, and help actions.

The redesigned hierarchy is intentionally less text-heavy than the reference. It communicates the product through a truck, physical GPS device, bus, mining fleet, commercial truck, large Bihar map, and familiar phone/fitment/mobile icons.

## Focused comparison evidence

- Hero: `qa/home-simple-desktop-hero.png` and `qa/home-simple-mobile-hero.png` confirm that the truck, Bihar map, GPS device, headline, and primary call action are readable without overlap.
- Service choices: `qa/home-simple-desktop-services.png` and `qa/home-simple-mobile-services.png` confirm that each category has a distinct one-use image, large tap area, short label, and visible destination affordance.
- Coverage: `qa/home-simple-desktop-coverage.png` confirms the district map, “38 districts” proof, local-installation message, and dealer/help actions are visually grouped.

## Required fidelity surfaces

- Fonts and typography: passed. Heavy display weights create a clear English hierarchy; body copy stays at practical reading sizes; headings wrap cleanly on phone and desktop.
- Spacing and layout rhythm: passed. Sections have distinct visual jobs, large mobile tap targets, consistent card spacing, and no horizontal overflow.
- Colors and tokens: passed. Route Tech navy, cobalt, orange, white, and pale blue are used consistently with strong foreground contrast.
- Image quality and asset fidelity: passed. Six purpose-made WebP assets load sharply, use matching daylight art direction, and are not reused within the page.
- Copy and content: passed. Copy is short, literal, entirely English, and keeps the SEO-relevant AIS-140, Bihar, truck, bus, mining, and GPS language visible.
- Icons: passed. Existing project iconography is consistently sized and paired with short labels; icons support rather than replace essential text.
- Accessibility: passed. Heading order, descriptive image alt text, focus rings, semantic links, visible phone hrefs, and practical mobile control sizes are present.

## Primary interactions tested

- Mobile navigation opens, exposes all five route links plus the installation phone action, and closes correctly.
- Primary hero call action resolves to `tel:+919123200739`.
- Service cards resolve to the existing AIS-140 or mining GPS service routes.
- Dealer coverage action resolves to `/dealer-network`.
- Desktop width/scroll width: 1440/1440.
- Phone width/scroll width: 390/390.
- Browser console errors and warnings: none.
- Production build, TypeScript checking, and static generation: passed for all 15 pages.

## Comparison history

### Iteration 1

- [P2] Mobile hero image was forced into a tall desktop-style background, causing the truck and GPS device to crop too aggressively.
- [P2] A fixed mobile call bar duplicated and overlapped the main hero call action.
- Fix: separated the mobile hero image into its own 16:9 panel above the copy and removed the duplicate fixed call bar.
- Post-fix evidence: `qa/home-simple-mobile-hero.png`.

### Iteration 2

- [P2] The phone service heading wrapped awkwardly at its original size.
- Fix: reduced the phone-only heading size while retaining the desktop scale.
- Post-fix evidence: `qa/home-simple-mobile-services.png`.

### Iteration 3

- The user requested English-only homepage content.
- Fix: replaced every Hindi and mixed-language label with short, plain English and removed all Devanagari characters from the homepage component.
- Post-fix evidence: `qa/home-simple-desktop-hero.png` and `qa/home-simple-mobile-hero.png`.

### Iteration 4

- [P2] The desktop hero cropped the lower GPS device and cable, while a strong white overlay washed out the highway on the left.
- Fix: changed the large-screen artwork to a right-aligned, full-fit composition and removed the desktop washout overlay. The complete device, connector cable, truck, and road are now visible.
- Post-fix evidence: `qa/home-simple-desktop-hero.png`.

### Iteration 5

- [P2] The 16:9 desktop artwork could not fill an ultra-wide hero without either cropping the GPS hardware or leaving large white outer columns.
- Fix: produced a dedicated 1942 × 809 panoramic desktop hero, removed the hero maximum-width constraint, and used edge-to-edge cover framing only on large screens. Mobile retains its original 16:9 artwork.
- Post-fix evidence: `qa/home-simple-desktop-hero.png`.

### Iteration 6

- Added an image-led mobile-tracking section between the installation steps and Bihar coverage.
- The section uses a unique 4:3 visual, four short outcome cards and a direct call action to explain live location, route history, movement alerts and emergency status.
- Verified at 1440 × 1000 and 390 × 844 with no horizontal overflow.
- Post-fix evidence: `qa/home-simple-desktop-mobile-tracking.png`.

## Remaining findings

- P0: none.
- P1: none.
- P2: none.
- P3: the shared navigation and footer can be simplified further when the remaining site pages are redesigned.
