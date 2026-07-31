# Compact Homepage Hero QA

## Evidence

- Source visual truth: two browser annotation screenshots supplied with the request.
- Mobile implementation: `/private/tmp/route-tech-home-hero-compact-mobile.png`
- Tablet implementation: `/private/tmp/route-tech-home-hero-compact-tablet.png`
- Desktop regression view: `/private/tmp/route-tech-home-hero-compact-desktop.png`
- Tested viewports:
  - `393 × 852` CSS pixels.
  - `751 × 983` CSS pixels.
  - `1440 × 900` CSS pixels.
- State: homepage loaded at the top.

## Findings and fixes

1. Annotated state — P1:
   the mobile and tablet hero/card consumed excessive vertical space because the
   actions and assurance points were stacked in single columns with desktop-scale
   spacing.
2. Fix:
   reduced the small-screen hero minimum height, card padding, badge dimensions,
   headline scale and vertical gaps. Both CTAs now share one row and the assurance
   points use a two-column grid.
3. Post-fix evidence:
   the mobile hero finishes within `620px` and the tablet hero within `640px`,
   revealing substantially more background image and the next section earlier.

## Fidelity surfaces

- Typography: the same Route Tech hierarchy, weights and wording remain intact;
  only responsive sizes were reduced.
- Spacing and layout: excess mobile/tablet whitespace was removed while keeping
  clear separation between badges, headline, actions and assurance points.
- Colors: existing navy, blue, orange and white treatments are unchanged.
- Image quality: existing homepage hero assets and focal treatment are preserved.
- Copy: no hero content was removed or rewritten.

## Responsive and runtime checks

- Mobile client width: `393px`.
- Mobile scroll width: `393px`.
- Horizontal overflow: none.
- Tablet composition: compact two-column controls and assurance points confirmed.
- Desktop composition: unchanged at the `lg` breakpoint.
- Browser console errors: none.

## Final result

passed
