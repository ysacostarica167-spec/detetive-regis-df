export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://detetive-regis.lovable.app#business",
  "name": "Detetive Particular Regis",
  "description": "Detetive particular em Brasília DF com mais de 15 anos de experiência. Investigação profissional, conjugal, corporativa e localização de pessoas.",
  "telephone": "+5561982844543",
  "url": "https://detetive-regis.lovable.app",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Brasília",
    "addressLocality": "Brasília", 
    "addressRegion": "DF",
    "addressCountry": "BR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "-15.7942",
    "longitude": "-47.8822"
  },
  "areaServed": {
    "@type": "State",
    "name": "Distrito Federal"
  },
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates", 
      "latitude": "-15.7942",
      "longitude": "-47.8822"
    },
    "geoRadius": "50"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Serviços de Investigação",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Investigação Conjugal",
          "description": "Investigação de infidelidade conjugal com discrição total"
        }
      },
      {
        "@type": "Offer", 
        "itemOffered": {
          "@type": "Service",
          "name": "Investigação Corporativa", 
          "description": "Investigação empresarial e verificação de funcionários"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Localização de Pessoas",
          "description": "Localização de pessoas desaparecidas ou paradeiro desconhecido"
        }
      }
    ]
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+5561982844543",
    "contactType": "customer service",
    "availableLanguage": "Portuguese",
    "hoursAvailable": {
      "@type": "OpeningHoursSpecification", 
      "opens": "00:00",
      "closes": "23:59",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", 
        "Friday", "Saturday", "Sunday"
      ]
    }
  },
  "openingHours": "Mo-Su 00:00-23:59",
  "priceRange": "$$",
  "paymentAccepted": ["Cash", "Credit Card", "Debit Card", "PIX"],
  "currenciesAccepted": "BRL"
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Detetive Particular Regis",
  "url": "https://detetive-regis.lovable.app",
  "logo": "https://detetive-regis.lovable.app/detective-logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+5561982844543",
    "contactType": "customer service"
  },
  "sameAs": []
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite", 
  "name": "Detetive Particular Regis",
  "url": "https://detetive-regis.lovable.app",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://detetive-regis.lovable.app/?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

export const breadcrumbSchema = (items: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList", 
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": `https://detetive-regis.lovable.app${item.url}`
  }))
});

export const serviceSchema = (serviceName: string, description: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": serviceName,
  "description": description,
  "provider": {
    "@type": "LocalBusiness",
    "name": "Detetive Particular Regis",
    "telephone": "+5561982844543",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Brasília",
      "addressRegion": "DF", 
      "addressCountry": "BR"
    }
  },
  "areaServed": "Distrito Federal",
  "serviceType": "Investigação Particular"
});