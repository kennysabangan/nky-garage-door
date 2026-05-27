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

export interface Testimonial {
  quote: string;
  name: string;
  city: string;
}

export const siteConfig = {
  // ── Business identity ──────────────────────────────────────────────
  businessName: "NKY Garage Door Pros",
  phone: "(859) 555-0800",
  phoneE164: "+18595550800",
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
  heroTagline: "Northern Kentucky's Trusted Garage Door Repair Service",
  heroSubtext: "Broken springs, stuck doors, noisy openers — we fix it fast. Call for same-day service.",
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
        "Broken torsion and extension spring replacement. Most springs break without warning, leaving your door stuck. We carry all common spring sizes on our trucks for same-day repair across Northern Kentucky. Whether your door won't open or it's sagging on one side, we'll get it working again fast.",
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
        "Damaged panels from dents, rust, or backing into the door? We replace individual panels so you don't need a whole new door. Panels are color-matched to your existing door for a seamless look. We source panels for all major brands including Clopay, Amarr, and Wayne Dalton.",
      photo: "/photos/screen-cleaning.jpg",
    },
  ] as Service[],

  // ── FAQs ──────────────────────────────────────────────────────────
  faqs: [
    {
      question: "How much does garage door spring repair cost?",
      answer:
        "$150-$350 per spring depending on size. We carry standard springs on our trucks for same-day service. Call (859) 555-0800 for a free quote.",
    },
    {
      question: "My garage door won't open. What should I do?",
      answer:
        "First, check if the opener has power. If the door is stuck closed, don't force it — you could cause more damage. Call us and we'll come out same day in most cases.",
    },
    {
      question: "How long do garage door springs last?",
      answer:
        "Standard springs last 7-10 years or about 10,000 cycles. High-cycle springs last 20,000+ cycles. We recommend upgrading to high-cycle when replacing.",
    },
    {
      question: "Can I replace a spring myself?",
      answer:
        "We strongly recommend against it. Garage door springs are under extreme tension and can cause serious injury or death if mishandled. Always hire a professional.",
    },
    {
      question: "Do you offer same-day service?",
      answer:
        "Yes. For emergency repairs like broken springs or stuck doors, we offer same-day service across Northern Kentucky.",
    },
    {
      question: "How much does a new garage door cost?",
      answer:
        "$800-$3,000+ installed depending on style, material, and insulation. We offer free estimates for new installations.",
    },
    {
      question: "Do you service all brands?",
      answer:
        "Yes. We repair and install all major brands: LiftMaster, Chamberlain, Genie, Clopay, Amarr, Wayne Dalton, and more.",
    },
    {
      question: "How do I schedule?",
      answer:
        "Call (859) 555-0800. We serve Florence, Covington, Fort Mitchell, Erlanger, and all of Northern Kentucky.",
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
        "Florence homeowners count on NKY Garage Door Pros when their garage door springs snap or their opener stops working. Whether you're near the Florence Mall area or in a neighborhood off US-42, we respond fast — usually same day. Our trucks are stocked with common spring sizes and opener parts, so most repairs happen on the first visit. Florence's mix of older ranch homes and newer builds means we've worked on every type of garage door setup in town.",
    },
    {
      name: "Covington, KY",
      slug: "covington-ky",
      lat: "39.0836",
      lng: "-84.5085",
      intro:
        "Covington's older homes often have garage doors and openers that need extra attention. NKY Garage Door Pros has years of experience with the unique setups you find in Covington — from Victorian-era carriage houses near Licking Riverside to attached garages along Madison Avenue. We know how to source replacement parts for older door models, and we're experts at retrofitting modern openers onto existing tracks. Covington residents trust us because we get it right the first time.",
    },
    {
      name: "Fort Mitchell, KY",
      slug: "fort-mitchell-ky",
      lat: "39.0458",
      lng: "-84.5533",
      intro:
        "Fort Mitchell homeowners expect quality service, and NKY Garage Door Pros delivers. From the stately homes along Dixie Highway to the well-maintained colonials on side streets, we handle every garage door repair with precision. Our technicians are background-checked, fully insured, and trained on all major brands. Fort Mitchell residents choose us for spring repairs, opener replacements, and panel fixes because we show up on time and do the job right.",
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
        "Independence is one of the fastest-growing cities in Kenton County, and new homes mean new garage doors that eventually need service. NKY Garage Door Pros handles everything from spring replacements to full opener installations for Independence homeowners. Whether you're in a newer subdivision near Taylor Mill Road or closer to downtown, we provide same-day garage door repair that Northern Kentucky residents count on. Most standard repairs are completed in a single visit.",
    },
    {
      name: "Newport, KY",
      slug: "newport-ky",
      lat: "39.0915",
      lng: "-84.4954",
      intro:
        "Newport has transformed into one of the region's most vibrant communities, and NKY Garage Door Pros helps keep it running smoothly. From the Newport on the Levee district to residential streets in Clifton and Southgate, we provide expert garage door repair for homes and businesses. Newport's older housing stock means garage doors and openers here often need specialized attention — we know how to work with vintage setups and modern systems alike.",
    },
    {
      name: "Edgewood, KY",
      slug: "edgewood-ky",
      lat: "39.0142",
      lng: "-84.5779",
      intro:
        "Edgewood's tree-lined streets and well-kept homes make it one of Kenton County's most charming communities — and NKY Garage Door Pros helps keep every garage in working order. We've served Edgewood homeowners for years, providing the kind of careful, professional garage door repair this community deserves. From homes along Turkeyfoot Road to the quiet cul-de-sacs throughout the city, we know how to handle every garage door issue efficiently and affordably.",
    },
    {
      name: "Fort Thomas, KY",
      slug: "fort-thomas-ky",
      lat: "39.0758",
      lng: "-84.4480",
      intro:
        "Fort Thomas is known for its stunning hilltop views and historic homes — and the garage doors here need expert care. NKY Garage Door Pros handles the unique challenges Fort Thomas presents: older door mechanisms, steep driveways that affect door alignment, and multi-level homes with oversized garage openings. Our team handles it all with skill, ensuring your garage door operates safely and quietly in this beautiful hilltop community.",
    },
    {
      name: "Bellevue, KY",
      slug: "bellevue-ky",
      lat: "39.1042",
      lng: "-84.4762",
      intro:
        "Bellevue's revitalized Fairfield Avenue corridor and charming hillside homes make it a standout in Northern Kentucky. NKY Garage Door Pros serves Bellevue residents and business owners with top-quality garage door repair. We understand the mix of historic and modern properties here, and we approach each job with the attention your home or business deserves. From spring repairs to opener installations, Bellevue is a community we're proud to serve.",
    },
    {
      name: "Cold Spring, KY",
      slug: "cold-spring-ky",
      lat: "39.0114",
      lng: "-84.4369",
      intro:
        "Cold Spring's spacious properties often include large garages with heavy-duty doors that need specialized service. NKY Garage Door Pros provides Cold Spring homeowners with expert garage door repair — from broken springs and faulty openers to damaged panels. Whether your home overlooks Alexandria Pike or sits in a peaceful residential development, we'll get your garage door working properly. Same-day service available for emergencies.",
    },
    {
      name: "Taylor Mill, KY",
      slug: "taylor-mill-ky",
      lat: "39.0003",
      lng: "-84.5013",
      intro:
        "Taylor Mill has grown into a thriving community, and NKY Garage Door Pros is proud to serve the homes and businesses here. From established neighborhoods along Taylor Mill Road to newer developments, we provide garage door repair that Taylor Mill residents trust. Our team understands how Northern Kentucky's changing seasons affect garage door springs and openers — from summer heat expanding tracks to winter cold stiffening lubricants. We tailor our approach to each situation.",
    },
    {
      name: "Villa Hills, KY",
      slug: "villa-hills-ky",
      lat: "39.0625",
      lng: "-84.5916",
      intro:
        "Villa Hills is one of Northern Kentucky's premier residential communities, and the homes here deserve reliable garage door service. NKY Garage Door Pros delivers premium garage door repair that matches Villa Hills' high standards. Many properties feature oversized or custom garage doors that require experienced technicians. Our team handles everything from high-cycle spring replacements to smart opener upgrades, keeping your garage operating flawlessly.",
    },
    {
      name: "Crescent Springs, KY",
      slug: "crescent-springs-ky",
      lat: "39.0544",
      lng: "-84.5829",
      intro:
        "Crescent Springs residents appreciate quality, and NKY Garage Door Pros delivers it with every service call. We've been serving this close-knit community with reliable garage door repair that homeowners depend on. Whether your property is along Buttermilk Pike or in a well-maintained neighborhood, we bring the same commitment to excellence. From noisy rollers to misaligned tracks to broken springs, we diagnose and fix it fast.",
    },
    {
      name: "Lakeside Park, KY",
      slug: "lakeside-park-ky",
      lat: "39.0331",
      lng: "-84.5711",
      intro:
        "Lakeside Park may be one of Northern Kentucky's smaller cities, but its residents expect top-tier garage door service. NKY Garage Door Pros is proud to serve Lakeside Park with professional garage door repair that keeps homes secure and functional. The well-maintained properties here require a careful touch, and our technicians deliver exactly that. From spring repairs to full opener replacements, Lakeside Park homeowners count on us.",
    },
    {
      name: "Park Hills, KY",
      slug: "park-hills-ky",
      lat: "39.0667",
      lng: "-84.5285",
      intro:
        "Park Hills' hilltop location means some unique garage door setups — steep driveways, split-level entries, and custom-sized openings. NKY Garage Door Pros is experienced with every configuration Park Hills has to offer. We handle spring repairs, opener installations, and panel replacements on homes that overlook Devou Park and the Cincinnati skyline beyond. Our technicians are equipped to work safely on any terrain.",
    },
    // ── Cincinnati-area cities ────────────────────────────────────────
    {
      name: "Walnut Hills, OH",
      slug: "walnut-hills-oh",
      lat: "39.1212",
      lng: "-84.4872",
      intro:
        "Walnut Hills is one of Cincinnati's most historic neighborhoods, and NKY Garage Door Pros is proud to extend our garage door repair services here. From Victorian homes along Gilbert Avenue to modern apartments near Peeble's Corner, we handle every type of garage door setup. Walnut Hills' mix of older and newer construction means we see everything — vintage side-hinged doors, modern sectional doors, and everything in between.",
    },
    {
      name: "Hyde Park, OH",
      slug: "hyde-park-oh",
      lat: "39.1373",
      lng: "-84.4463",
      intro:
        "Hyde Park is one of Cincinnati's most desirable neighborhoods, known for beautiful homes with high-end garage doors that need expert care. NKY Garage Door Pros brings our professional garage door repair expertise across the river to serve Hyde Park residents. Whether you need a spring replacement on a carriage-style door or a smart opener upgrade for a modern home, we deliver the quality this neighborhood expects.",
    },
    {
      name: "Norwood, OH",
      slug: "norwood-oh",
      lat: "39.1556",
      lng: "-84.4597",
      intro:
        "Norwood is a thriving independent city just a short drive from Northern Kentucky. NKY Garage Door Pros serves Norwood's dense residential neighborhoods and growing commercial district with reliable, affordable garage door repair. Norwood's older homes often have aging garage door mechanisms that need attention — we specialize in bringing them back to life or upgrading to modern systems.",
    },
    {
      name: "Montgomery, OH",
      slug: "montgomery-oh",
      lat: "39.2289",
      lng: "-84.3541",
      intro:
        "Montgomery's tree-canopied streets and stately homes include some impressive garage setups. NKY Garage Door Pros extends our premium garage door repair services to Montgomery homeowners. Multi-car garages with heavy custom doors, smart home integrations, and high-cycle spring systems — our team handles the sophisticated setups that Montgomery's finest homes require.",
    },
    {
      name: "Deer Park, OH",
      slug: "deer-park-oh",
      lat: "39.2053",
      lng: "-84.3922",
      intro:
        "Deer Park is a welcoming, family-friendly community, and NKY Garage Door Pros is proud to bring our garage door repair services to this great neighborhood. From ranch homes along Blue Ash Road to two-story colonials in the side streets, we keep Deer Park garages working safely. We offer flexible scheduling, fair pricing, and the dependable service that this community values.",
    },
    {
      name: "Amberly, OH",
      slug: "amberly-oh",
      lat: "39.1987",
      lng: "-84.4281",
      intro:
        "Amberley Village is one of the Cincinnati area's most exclusive residential communities, and the garage doors here are often custom or oversized. NKY Garage Door Pros provides the premium garage door repair service that Amberley homes demand. Our fully insured, background-checked technicians handle high-end setups with care — from insulated steel doors to custom wood carriage doors with smart openers.",
    },
    {
      name: "Westwood, OH",
      slug: "westwood-oh",
      lat: "39.1531",
      lng: "-84.6164",
      intro:
        "Westwood is one of Cincinnati's largest and most established neighborhoods, with a wide range of homes and garages. NKY Garage Door Pros serves Westwood with the same reliable garage door repair that Northern Kentucky residents trust. From charming Victorians along Harrison Avenue to mid-century homes throughout the area, we've fixed every type of garage door Westwood has to offer.",
    },
    {
      name: "Fort Heights, OH",
      slug: "fort-heights-oh",
      lat: "39.0947",
      lng: "-84.5256",
      intro:
        "Fort Wright and the Fort Mitchell Heights area are a natural extension of our Northern Kentucky service area. NKY Garage Door Pros brings our garage door repair expertise to Fort Heights homeowners who want the same quality service their NKY neighbors enjoy. The elevated terrain here can affect garage door track alignment, and we know how to address those issues properly.",
    },
    {
      name: "Mt. Adams, OH",
      slug: "mt-adams-oh",
      lat: "39.1089",
      lng: "-84.4981",
      intro:
        "Mt. Adams is one of Cincinnati's most iconic hilltop neighborhoods, with steep streets and unique property layouts. NKY Garage Door Pros brings expert garage door repair to Mt. Adams homeowners who need reliable service. The hillside homes and unusual garage configurations here require experienced technicians — our team has the skills to handle any setup safely.",
    },
    {
      name: "Mt. Lookout, OH",
      slug: "mt-lookout-oh",
      lat: "39.1283",
      lng: "-84.4317",
      intro:
        "Mt. Lookout is a charming, walkable neighborhood on Cincinnati's east side. NKY Garage Door Pros serves Mt. Lookout homeowners with professional garage door repair that keeps homes secure. The neighborhood's mix of older bungalows, updated colonials, and new construction means we see every garage door type. We diagnose fast and fix it right the first time.",
    },
    {
      name: "Oakley, OH",
      slug: "oakley-oh",
      lat: "39.1536",
      lng: "-84.4228",
      intro:
        "Oakley is one of Cincinnati's fastest-growing neighborhoods, with new developments and updated homes throughout the area. NKY Garage Door Pros serves Oakley's homes and businesses with garage door repair that matches the neighborhood's momentum. From homes around Oakley Square to new builds with modern garage setups, we provide thorough, affordable, and reliable service.",
    },
    {
      name: "Columbia-Tusculum, OH",
      slug: "columbia-tusculum-oh",
      lat: "39.1128",
      lng: "-84.4136",
      intro:
        "Columbia-Tusculum is Cincinnati's oldest neighborhood, nestled along the Ohio River. NKY Garage Door Pros brings our garage door repair services to this historic riverfront community, where homes range from restored 19th-century cottages to modern condos. The humidity from the river can accelerate rust on springs and tracks — we know how to combat that and keep your garage door running smoothly.",
    },
    {
      name: "Pleasant Ridge, OH",
      slug: "pleasant-ridge-oh",
      lat: "39.1842",
      lng: "-84.4403",
      intro:
        "Pleasant Ridge is a vibrant, family-friendly neighborhood on Cincinnati's north side. NKY Garage Door Pros is happy to extend our garage door repair services to Pleasant Ridge residents. The neighborhood's diverse housing stock — from classic foursquares to updated ranches — means varied garage door setups, and we adapt our approach to each property. Fast, friendly, and thorough every time.",
    },
  ] as City[],

  // ── Testimonials ──────────────────────────────────────────────────
  testimonials: [
    {
      quote:
        "My garage door spring broke on a Sunday morning. NKY Garage Door Pros came out the same day and had it fixed in an hour. Fast, fair pricing. Highly recommend in Florence.",
      name: "Jennifer M.",
      city: "Florence, KY",
    },
    {
      quote:
        "They replaced our old garage door opener with a quiet belt-drive system. Night and day difference. Professional installation in Covington. Great garage door company.",
      name: "Robert T.",
      city: "Covington, KY",
    },
    {
      quote:
        "Had a dented panel from backing into the door. They replaced just the panel and color-matched it perfectly. Saved us from buying a whole new door. Best garage door service in NKY.",
      name: "Sarah K.",
      city: "Fort Mitchell, KY",
    },
    {
      quote:
        "We use NKY Garage Door Pros for all our rental properties. Spring repairs, opener replacements, maintenance — they do it all. Reliable and affordable.",
      name: "Karen L.",
      city: "Edgewood, KY",
    },
  ] as Testimonial[],

  // ── Reviews (for reviews page) ────────────────────────────────────
  reviews: [
    {
      name: "Jennifer M.",
      location: "Florence, KY",
      text: "My garage door spring broke on a Sunday morning and I couldn't get my car out. NKY Garage Door Pros came out the same day and had it fixed in an hour. Fast, fair pricing. Best garage door repair service we've used in Northern Kentucky.",
    },
    {
      name: "Robert T.",
      location: "Covington, KY",
      text: "Our old garage door opener was so loud it shook the whole house. These guys replaced it with a quiet belt-drive system and it's like night and day. Professional installation, clean work. Very happy with the garage door service in Covington.",
    },
    {
      name: "Sarah K.",
      location: "Fort Mitchell, KY",
      text: "I backed into my garage door and dented a panel badly. NKY Garage Door Pros replaced just the panel and color-matched it perfectly. Saved me from buying a whole new door. Best garage door company in Fort Mitchell.",
    },
    {
      name: "Mike D.",
      location: "Erlanger, KY",
      text: "Called them for a garage door opener repair at our shop in Erlanger. They diagnosed the problem quickly and had the part on the truck. Fixed it same day. Our bay door works perfectly now. Great garage door service.",
    },
    {
      name: "Jennifer P.",
      location: "Independence, KY",
      text: "We just moved into a new home in Independence and the garage door was making terrible noises. NKY Garage Door Pros came out, adjusted the tracks, replaced the rollers, and lubricated everything. Door runs silently now. Highly recommend their garage door repair service.",
    },
    {
      name: "Dave S.",
      location: "Newport, KY",
      text: "Garage door spring snapped and the door was stuck shut. Called NKY Garage Door Pros and they were at our Newport home within two hours. Replaced both springs and the door works better than before. Fair price, fast service.",
    },
    {
      name: "Karen L.",
      location: "Edgewood, KY",
      text: "We use NKY Garage Door Pros for all our rental properties. Spring repairs, opener replacements, maintenance — they do it all. Reliable and affordable. Best garage door company in Northern Kentucky that we trust completely.",
    },
    {
      name: "Tom W.",
      location: "Fort Thomas, KY",
      text: "Our Fort Thomas home has a heavy custom wood garage door that needed new high-cycle springs. These guys knew exactly what to do. Door operates smoothly and quietly now. They also installed a new smart opener we can control from our phones. Best garage door service in NKY.",
    },
  ] as { name: string; location: string; text: string }[],
};
