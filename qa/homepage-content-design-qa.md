# Design QA — Homepage content update

## Scope

- Route: `/`
- Source visual: `codex-clipboard-a2f42874-716c-4f93-bdb5-d8f042097487.png`
- Requested constraint: preserve the existing layout and update content only

## Implemented changes

- Hero headline changed to “Bihar’s Most Trusted AIS-140 GPS Solutions”
- Supporting line changed to “Complete Compliance. Complete Safety.”
- Hero coverage badge changed to “All 38 districts covered”
- Hero actions changed to “Request installation” and “Our solutions”
- Four hero proof points now cover certification, government compliance, NIC/Vahan integration and real-time tracking
- Six navy-strip trust points now cover AIS-140 certification, VLTD installation, NIC/Vahan, real-time tracking, expert support and compliance
- Ambulance GPS card removed
- Truck GPS renamed to “Commercial Vehicles”
- Vehicle grid adjusted to four equal desktop columns and two phone/tablet columns
- Bihar coverage section changed to the reference’s three-part desktop composition
- District names and all-38-district coverage are shown on the left
- Existing Bihar map is centred in its own visual column
- Navy statistics panel now shows customers, devices, district coverage and support availability
- Coverage content stacks in a clear text → map → statistics order on phones

## Automated verification

- `npx tsc --noEmit`: passed
- Isolated `npm run build`: passed
- Homepage static generation: passed
- `git diff --check`: passed

## Visual comparison

The rendered homepage could not be captured through the permitted browser-control surface because local page access is blocked by the browser security policy in this task. No alternate browser or workaround was used.

Live desktop and phone layout comparison therefore remains unverified.

## Final result

**blocked**

The requested content changes and automated checks are complete. Final visual QA needs current desktop and phone screenshots from the running homepage.
