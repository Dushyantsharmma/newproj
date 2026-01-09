import { Helmet } from "react-helmet-async";

const SEO = ({
  title,
  description,
  keywords,
  canonical,
  image,
  village,
  type = "website"
}) => {
  const site = "https://rajannrajdrivingschool.com";
  const phone = "+919882034930";
  const business = "Raj Ann Raj Driving Training School";
  const founder = "Pushp Raj";

  const pageUrl = canonical || (typeof window !== "undefined" ? window.location.href.split("?")[0] : site);

  const defaultTitle =
    "Raj Ann Raj Driving School | Best Driving Training in Karsog & Mandi";

  const defaultDescription =
    "Government registered driving school in HP-30 Karsog. Learn hill driving, RTO test, learner license & car training from expert Pushp Raj.";

  const defaultKeywords =
    "driving school karsog, driving school mandi, hp-30 rto driving school, car driving training himachal, hill driving course, learning license karsog";

  const pageTitle = title ? `${title} | ${business}` : defaultTitle;
  const pageDesc = description || defaultDescription;
  const pageImage = image
    ? image.startsWith("http")
      ? image
      : `${site}${image}`
    : `${site}/banners/driving-school-karsog-mandi-hp.webp`;

  const servedVillage = village || "Karsog";

  // =========================
  //  MAIN BUSINESS SCHEMA
  // =========================
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "AutoDrivingSchool",
    "name": business,
    "url": site,
    "logo": `${site}/branding/raj-ann-raj-logo.jpeg`,
    "image": [
      `${site}/branding/raj-ann-raj-logo.jpeg`,
      `${site}/banners/driving-school-karsog-mandi-hp.webp`
    ],
    "telephone": phone,
    "priceRange": "₹2500 – ₹5000",
    "founder": { "@type": "Person", "name": founder },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Bhanthal, Karsog",
      "addressLocality": "Karsog",
      "addressRegion": "Himachal Pradesh",
      "postalCode": "175011",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "31.3260",
      "longitude": "77.2030"
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "HP-30 Karsog RTO"
    },
    "sameAs": [
      "https://wa.me/919882034930"
    ]
  };

  // =========================
  //  VILLAGE PAGE SEO
  // =========================
  const villageSchema = village
    ? {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Driving School",
        "provider": {
          "@type": "AutoDrivingSchool",
          "name": business
        },
        "areaServed": {
          "@type": "Place",
          "name": village + ", Karsog (HP-30)"
        }
      }
    : null;

  // =========================
  //  RTO SEO
  // =========================
  const rtoSchema = {
    "@context": "https://schema.org",
    "@type": "GovernmentOffice",
    "name": "Karsog RTO (HP-30)",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Karsog",
      "addressRegion": "Himachal Pradesh",
      "postalCode": "175011",
      "addressCountry": "IN"
    }
  };

  return (
    <Helmet>
      <html lang="en-IN" />

      {/* BASIC SEO */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDesc} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <link rel="canonical" href={pageUrl} />
      <meta name="robots" content="index,follow" />

      {/* GEO SEO */}
      <meta name="geo.region" content="IN-HP" />
      <meta name="geo.placename" content={servedVillage + ", Karsog"} />
      <meta name="geo.position" content="31.3260;77.2030" />

      {/* OPEN GRAPH */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDesc} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:site_name" content={business} />

      {/* TWITTER */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDesc} />
      <meta name="twitter:image" content={pageImage} />

      {/* SCHEMA */}
      <script type="application/ld+json">{JSON.stringify(businessSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(rtoSchema)}</script>
      {village && (
        <script type="application/ld+json">
          {JSON.stringify(villageSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
