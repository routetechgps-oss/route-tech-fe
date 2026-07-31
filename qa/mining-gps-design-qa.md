# Design QA — Mining GPS page

## Scope

- Route: `/services/mining-gps`
- Source visual: user-provided AIS-140 reference composition, adapted to the existing Route Tech design system and the completed AIS-140 service page
- Intended viewports: desktop and phone
- Copy language: English

## Implemented surfaces

- Full-width mining hero with Bihar coverage, tipper, excavator and GPS device
- Direct mining-specific headline, supporting copy and call/quote actions
- Four-item service assurance strip
- Six large icon-led tracking features
- Five reasons to choose Route Tech
- Five image-led fleet categories with one unique image per card
- Four-step installation and onboarding flow
- All-38-district coverage callout
- Mining GPS FAQ and phone CTA
- Mining-specific metadata, Open Graph data and Service/FAQ/Breadcrumb structured data

## Asset inspection

- `mining-gps-hero-bihar.jpg`: 2200 × 1238; strong blank-left composition for copy; mining vehicles and GPS device remain on the right
- Five fleet images: 1200 × 900 each; subjects are distinct and fit the 4:3 card slots
- No image is reused in more than one page location
- Generated images contain no visible text, logos or watermarks

## Automated verification

- `npx tsc --noEmit`: passed
- Isolated `npm run build`: passed
- `/services/mining-gps`: statically generated successfully
- Image dimensions and output paths: verified

## Visual comparison

The implementation could not be opened through the permitted browser-control surface because local page access is blocked by the browser security policy in this task. I did not use an alternate browser or workaround.

Reference-vs-implementation viewport comparison, responsive overflow checks and live interaction checks therefore remain unverified.

## Final result

**blocked**

Code and production-build verification passed, but final visual QA requires desktop and phone screenshots from the running page.
