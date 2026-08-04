#!/usr/bin/env bash
# Route Tech — remove confirmed-unused code & assets.
# Generated after a full import/reference audit. Docs (qa/, design-qa.md) are intentionally KEPT.
# Run from the project root:  bash cleanup-unused.sh
set -euo pipefail
cd "$(dirname "$0")"

echo "Removing unused components…"
rm -f components/BasicGpsTrackingAnimation.tsx   # replaced by tracking-3d map
rm -f components/HeroTracker.tsx                 # not imported anywhere
rm -f components/ImmersiveJourney.tsx            # not imported anywhere
rm -f components/Cta.tsx                         # not imported anywhere

echo "Removing unused CSS…"
rm -f app/services/service-page.css             # not imported by any page

echo "Removing unused root public files…"
rm -f public/logo.svg                            # not referenced (favicons come from app/icon.png)
rm -rf public/audio                              # empty folder

echo "Removing unused brand-final images (keeping route-tech-client-final.png)…"
rm -f public/brand-final/route-tech-client-favicon-180.png
rm -f public/brand-final/route-tech-client-favicon-32.png
rm -f public/brand-final/route-tech-client-favicon-512.png
rm -f public/brand-final/route-tech-favicon-180.png
rm -f public/brand-final/route-tech-favicon-32.png
rm -f public/brand-final/route-tech-favicon-512.png
rm -f public/brand-final/route-tech-favicon-chroma.png
rm -f public/brand-final/route-tech-favicon.png
rm -f public/brand-final/route-tech-logo-chroma.png
rm -f public/brand-final/route-tech-logo-final.png
rm -f public/brand-final/route-tech-logo.png

echo "Removing unused brand-options (logo drafts)…"
rm -rf public/brand-options

echo "Removing unused root images…"
rm -f public/images/ais140-truck-tracking.png
rm -f public/images/mining-gps-truck.png
rm -f public/images/route-tech-brand-mark.png
rm -f public/images/route-tech-logo-concept.png

echo "Removing unused route-tech images…"
rm -f public/images/route-tech/home-simple-ambulance.png
rm -f public/images/route-tech/home-simple-hero-wide.png
rm -f public/images/route-tech/services-ais140-bus.webp
rm -f public/images/route-tech/services-mining-fleet.webp
rm -f public/images/route-tech/home-mobile-tracking.jpg

echo "Done. Now verify:  npm run build"
