"use client";

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "AutomotiveBusiness",
    "name": "Super Shield",
    "alternateName": "Super Shield - Heat Free Sun",
    "description": "Premium automotive window films, vinyl wrap, and paint protection film with 20+ years expertise",
    "url": "https://supershield.co.in",
    "telephone": "+91-9370665551",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Mayfair Apartment, Near All India Reporter, Dhantoli",
      "addressLocality": "Nagpur",
      "addressRegion": "Maharashtra",
      "postalCode": "440012",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "21.1458",
      "longitude": "79.0882"
    },
    "openingHours": "Mo-Su 09:00-19:00",
    "priceRange": "₹₹₹",
    "image": "https://supershield.co.in/images/cars/desert-red-supercar.jpg",
    "sameAs": []
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Automotive Window Film Installation",
    "provider": {
      "@type": "AutomotiveBusiness",
      "name": "Super Shield"
    },
    "areaServed": {
      "@type": "City",
      "name": "Nagpur",
      "containedIn": {
        "@type": "State",
        "name": "Maharashtra"
      }
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Window Film Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Ultra Super 70 (US70) Window Film",
            "description": "Multi-layer Precious Metal Sputtering technology with 95% IR rejection and 99% UV rejection"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Super 70 (S70) Window Film",
            "description": "Titanium Nitrate Nano Ceramic with 98% IR rejection and 99% UV rejection"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Nano Ceramic (IR70) Window Film",
            "description": "Nano-ceramic particles with 95% IR rejection and 99% UV rejection"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sunroof Window Film",
            "description": "Specialized sunroof tinting with superior heat rejection"
          }
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}
