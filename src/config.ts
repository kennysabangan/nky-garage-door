/**
 * siteConfig.ts — Central configuration for the site.
 *
 * To clone this template for a new niche site, ONLY edit this file
 * (and swap photos in /public/photos/). Everything else is generic.
 */

export interface Service {
  title: string;
  slug: string;
  description: string;
  photo: string;
}

export interface City {
  name: string;
  slug: string;
  lat: string;
  lng: string;
  intro: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export const siteConfig = {
  // ── Business identity ──────────────────────────────────────────────
  businessName: "NKY Garage Door Pros",
  phone: "(859) 900-8065",
  phoneE164: "+18599008065",
  domain: "nkygaragedoorpros.com",
  siteUrl: "https://nkygaragedoorpros.com",

  // ── Form Webhook ───────────────────────────────────────────────
  // Google Sheets web app URL (set after deploying google-sheets-webhook.gs)
  formWebhookUrl: "",

  // ── Analytics ───────────────────────────────────────────────────────
  // Set these to your real GA4 / GTM IDs to enable tracking.
  // Leave as placeholders (or empty) to disable — the site still works.
  ga4MeasurementId: "G-XXXXXXXXXX",   // Google Analytics 4
  gtmContainerId: "GTM-XXXXXXX",      // Google Tag Manager

  // Google Search Console → Add property → URL prefix → "HTML tag" method.
  // Paste only the content="..." value here. Leave empty if verified via DNS.
  googleSiteVerification: "",

  // helper: truthy only when the value looks like a real ID
  get hasGA4() {
    return this.ga4MeasurementId && !this.ga4MeasurementId.startsWith('G-XX');
  },
  get hasGTM() {
    return this.gtmContainerId && !this.gtmContainerId.startsWith('GTM-XX');
  },

  // ── Location ───────────────────────────────────────────────────────
  city: "Northern Kentucky",
  state: "KY",
  region: "NKY",
  geoLat: "39.0",
  geoLng: "-84.5",

  // ── SEO keywords ──────────────────────────────────────────────────
  serviceKeyword: "garage door repair",
  serviceKeywordPlural: "garage door repair services",
  brandColor: "#1a6bb5",

  // ── Hero content ─────────────────────────────────────────────────
  heroTagline: "Northern Kentucky Garage Door Repair Service",
  heroSubtext: "Broken springs, stuck doors, noisy openers — we fix them. Call for a free quote.",
  heroAlt: "Professional garage door technician repairing a residential garage door",

  // ── Computed city lists ──────────────────────────────────────────
  get cityListShort() {
    return this.cities.slice(0, 4).map(c => c.name.replace(/, KY$/, '')).join(', ');
  },
  get cityListLong() {
    return this.cities.slice(0, 8).map(c => c.name.replace(/, KY$/, '')).join(', ');
  },

  // ── Opening hours ─────────────────────────────────────────────────
  openingHours: "Mo-Sa 08:00-18:00",

  // ── Services ──────────────────────────────────────────────────────
  services: [
    {
      title: "Garage Door Spring Repair",
      slug: "spring-repair",
      description:
        "Broken torsion and extension spring replacement. Most springs break without warning, leaving your door stuck. We carry common spring sizes, so many spring jobs are finished in one visit. If your door won't open or is sagging on one side, a broken spring is the usual cause.",
      photo: "/photos/residential.jpg",
    },
    {
      title: "Garage Door Opener Repair & Installation",
      slug: "opener-repair",
      description:
        "We repair all brands of garage door openers and install new ones when it's time to upgrade. Smart opener upgrades available for phone control and monitoring. We specialize in quiet belt-drive systems for attached garages where noise matters. Brands include LiftMaster, Chamberlain, Genie, and more.",
      photo: "/photos/commercial.jpg",
    },
    {
      title: "Garage Door Panel Replacement",
      slug: "panel-replacement",
      description:
        "Damaged panels from dents, rust, or backing into the door? We replace individual panels so you don't need a whole new door. Replacement panels are matched to your door's style and color whenever the manufacturer still makes them. We source panels for all major brands including Clopay, Amarr, and Wayne Dalton.",
      photo: "/photos/panel-replacement.jpg",
    },
  ] as Service[],

  // ── FAQs ──────────────────────────────────────────────────────────
  faqs: [
    {
      question: "How much does garage door spring repair cost?",
      answer:
        "It depends on the spring type (torsion or extension), how many springs the door uses, and whether you choose standard or high-cycle springs. Call (859) 900-8065 for a free quote.",
    },
    {
      question: "My garage door won't open. What should I do?",
      answer:
        "First, check if the opener has power. If the door is stuck closed, don't force it — you could cause more damage. Call us to schedule a repair.",
    },
    {
      question: "How long do garage door springs last?",
      answer:
        "Spring life is rated in cycles, where one cycle is one open and one close. Standard springs are commonly rated around 10,000 cycles; high-cycle springs are rated for more. We offer both and recommend upgrading to high-cycle when replacing.",
    },
    {
      question: "Can I replace a spring myself?",
      answer:
        "We strongly recommend against it. Garage door springs are under extreme tension and can cause serious injury or death if mishandled. Always hire a professional.",
    },
    {
      question: "How soon can you come out?",
      answer:
        "Call (859) 900-8065 and we'll give you the next available appointment. If your door is stuck open or closed, say so when you call so we can schedule it as early as possible.",
    },
    {
      question: "How much does a new garage door cost?",
      answer:
        "Contact us for a free estimate on new garage door installations.",
    },
    {
      question: "Do you service all brands?",
      answer:
        "Yes. We repair and install all major brands: LiftMaster, Chamberlain, Genie, Clopay, Amarr, Wayne Dalton, and more.",
    },
    {
      question: "How do I schedule?",
      answer:
        "Call (859) 900-8065. Our main service areas are Florence, Covington, Fort Thomas, Newport, Fort Mitchell, Erlanger, Edgewood, and Independence.",
    },
  ] as FAQ[],

  // ── Cities served ─────────────────────────────────────────────────
  cities: [
    {
      name: "Florence, KY",
      slug: "florence-ky",
      lat: "38.9989",
      lng: "-84.6266",
      intro:
        "Florence homeowners count on NKY Garage Door Pros when their garage door springs snap or their opener stops working. Whether you're near the Florence Mall area or in a neighborhood off US-42, we carry common spring sizes and opener parts, so many repairs are finished on the first visit. Florence's mix of older ranch homes and newer builds means a wide range of garage door setups, from single-car doors with extension springs to double doors with torsion systems.",
    },
    {
      name: "Covington, KY",
      slug: "covington-ky",
      lat: "39.0836",
      lng: "-84.5085",
      intro:
        "Covington's older homes often have garage doors and openers that need extra attention. NKY Garage Door Pros works on the unique setups you find in Covington — from Victorian-era carriage houses near Licking Riverside to attached garages along Madison Avenue. We know how to source replacement parts for older door models, and we can retrofit modern openers onto existing tracks.",
    },
    {
      name: "Fort Mitchell, KY",
      slug: "fort-mitchell-ky",
      lat: "39.0458",
      lng: "-84.5533",
      intro:
        "Fort Mitchell homeowners expect careful work. From the stately homes along Dixie Highway to the well-maintained colonials on side streets, NKY Garage Door Pros handles spring repairs, opener replacements, and panel fixes on all major brands. We show up when scheduled, explain the problem, and give you the price before starting.",
    },
    {
      name: "Erlanger, KY",
      slug: "erlanger-ky",
      lat: "39.0169",
      lng: "-84.6027",
      intro:
        "Erlanger residents know a broken garage door isn't just inconvenient — it's a security problem. NKY Garage Door Pros serves this thriving community with fast, affordable garage door repair. Whether you're in a ranch-style home near the city park or a two-story house off Stevenson Road, we've got the parts and know-how to fix it. We also serve Erlanger's growing commercial corridor, keeping business garage doors and rolling steel doors operating reliably.",
    },
    {
      name: "Independence, KY",
      slug: "independence-ky",
      lat: "38.9431",
      lng: "-84.5431",
      intro:
        "Independence is one of the fastest-growing cities in Kenton County, and new homes mean new garage doors that eventually need service. NKY Garage Door Pros handles everything from spring replacements to full opener installations for Independence homeowners. Whether you're in a newer subdivision near Taylor Mill Road or closer to downtown, we repair garage doors on homes old and new. Most standard repairs are completed in a single visit.",
    },
    {
      name: "Newport, KY",
      slug: "newport-ky",
      lat: "39.0915",
      lng: "-84.4954",
      intro:
        "Newport has transformed into one of the region's most vibrant communities, and NKY Garage Door Pros helps keep it running smoothly. From the Newport on the Levee district to residential streets in the East Row and Clifton, we provide garage door repair for homes and businesses. Newport's older housing stock means garage doors and openers here often need specialized attention — we know how to work with vintage setups and modern systems alike.",
    },
    {
      name: "Edgewood, KY",
      slug: "edgewood-ky",
      lat: "39.0142",
      lng: "-84.5779",
      intro:
        "Edgewood's tree-lined streets and well-kept homes make it one of Kenton County's most charming communities — and NKY Garage Door Pros helps keep every garage in working order. We provide careful, professional garage door repair for homes along Turkeyfoot Road and the quiet cul-de-sacs throughout the city, handling springs, openers, panels, and tracks efficiently and affordably.",
    },
    {
      name: "Fort Thomas, KY",
      slug: "fort-thomas-ky",
      lat: "39.0758",
      lng: "-84.4480",
      intro:
        "Fort Thomas is known for its stunning hilltop views and historic homes — and the garage doors here need expert care. NKY Garage Door Pros handles the unique challenges Fort Thomas presents: older door mechanisms, steep driveways that affect door alignment, and multi-level homes with oversized garage openings. We adjust and repair each door so it runs safely and quietly on these hilltop lots.",
    },
  ] as City[],
};
