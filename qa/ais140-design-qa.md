# Route Tech AIS-140 service page design QA

final result: passed

## Scope

- Route: `/services/ais-140-gps-solutions-in-bihar`
- Source visual: `codex-clipboard-efef76c3-8f8f-4db8-bc3b-28a4d0fcb0bd.png`
- Source size: 759 × 1600 pixels
- Requirement: preserve the established Route Tech layout and replace the full-page content with every item shown in the supplied reference.

## Content parity

- Hero: trusted-partner label, AIS140 GPS Solutions headline, government-compliance subheading, four trust points, description and both CTAs.
- Assurance strip: AIS140 certified devices, NIC/Vahan integration and government compliance.
- Six feature cards: certification, panic button, fuel monitoring, real-time tracking, geofence and 24/7 support.
- Five Route Tech reasons: installation, Bihar-wide service, compliance, expert team and three-year warranty.
- Five industries: school bus, mining, commercial vehicles, ambulance and passenger transport.
- Four installation steps: order, fitment, NIC registration and live vehicle.
- Dealer banner: dealer message, four partner benefits and partner CTA.
- Testimonials: all three named clients, locations/roles, quotations and five-star ratings.
- FAQ: all six reference questions plus the support card and phone number.

## Visual verification

- Desktop viewport: 1440 × 900 — passed.
- Phone viewport: 390 × 844 — passed.
- Tablet-width viewport: 751 × 983 — passed.
- Hero image crop, text contrast and CTA visibility: passed.
- Dealer and testimonial card wrapping: passed.
- Phone document width: 390 pixels; no horizontal overflow.
- Tablet document width: 751 pixels; no horizontal overflow.
- FAQ interaction: six accordions found; non-default accordion opens successfully.
- Browser console warnings/errors: none.

## Build verification

- `npx tsc --noEmit`: passed.
- `git diff --check`: passed.
- Isolated `npm run build`: passed.
- Static generation: all 15 routes passed.


