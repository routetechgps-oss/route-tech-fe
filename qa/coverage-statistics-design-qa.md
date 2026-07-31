# Design QA — Bihar coverage statistics panel

## Scope

- Route: `/`
- Target: statistics panel inside `section#bihar-coverage`
- Source state: user browser annotation screenshot at 1440 × 900
- Requested change: enhance the selected panel without changing the surrounding coverage layout

## Source-state issue

- The horizontal metric layout did not fit the available column width.
- “25000+” clipped against the right edge.
- Icons, values and labels had inconsistent breathing room.
- The four metrics did not read as individual cards.

## Implemented changes

- Converted each metric to a centred vertical card.
- Added consistent gaps, rounded cards and subtle borders.
- Added a small orange top accent to strengthen hierarchy.
- Reduced and responsively constrained the counter typography.
- Added `min-w-0` protection to prevent grid overflow.
- Kept the existing four statistics and surrounding coverage composition.

## Verification

- Desktop browser capture at 1440 × 900: passed
- Phone browser capture at 390 × 844: passed
- “5000+” and “25000+” are fully visible at both sizes.
- All four cards remain aligned and readable.
- Browser console warnings/errors: none
- `npx tsc --noEmit`: passed
- `git diff --check`: passed

## Final result

**passed**
