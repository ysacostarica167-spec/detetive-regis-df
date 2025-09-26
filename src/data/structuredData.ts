export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://detetive-regis.lovable.app#business",
  "name": "Detetive Particular Regis - Investigação Profissional DF",
  "alternateName": ["Detetive Regis", "Investigador Particular DF", "Detetive Brasília"],
  "description": "Detetive particular graduado em investigação profissional em Brasília DF com mais de 15 anos de experiência. Especialista em investigação conjugal, corporativa, digital e localização de pessoas. Atendimento 24h com sigilo absoluto.",
  "telephone": "+5561982844543",
  "url": "https://detetive-regis.lovable.app",
  "email": "contato@detetive-regis.com",
  "image": "https://detetive-regis.lovable.app/detective-hero.jpg",
  "logo": "https://detetive-regis.lovable.app/detective-logo.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Asa Sul",
    "addressLocality": "Brasília", 
    "addressRegion": "DF",
    "postalCode": "70000-000",
    "addressCountry": "BR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "-15.7942",
    "longitude": "-47.8822"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Brasília"
    },
    {
      "@type": "City", 
      "name": "Águas Claras"
    },
    {
      "@type": "City",
      "name": "Taguatinga"
    },
    {
      "@type": "City",
      "name": "Ceilândia"
    },
    {
      "@type": "City",
      "name": "Guará"
    }
  ],
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates", 
      "latitude": "-15.7942",
      "longitude": "-47.8822"
    },
    "geoRadius": "100"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Serviços de Investigação Particular",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Investigação Conjugal DF",
          "description": "Como descobrir traição em Brasília com investigação conjugal profissional e sigilosa",
          "category": "Investigação Conjugal"
        }
      },
      {
        "@type": "Offer", 
        "itemOffered": {
          "@type": "Service",
          "name": "Investigação Empresarial DF", 
          "description": "Detetive para funcionários, fraudes internas e segurança corporativa em Brasília",
          "category": "Investigação Corporativa"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Localização de Pessoas Desaparecidas DF",
          "description": "Encontrar devedor de pensão e pessoas desaparecidas em Brasília DF",
          "category": "Localização de Pessoas"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Serviços Cibernéticos de Investigação",
          "description": "Investigação digital, perícia forense e análise de dispositivos móveis",
          "category": "Investigação Digital"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Investigação Jurídica e Perícia",
          "description": "Suporte para advogados, coleta de provas e laudos periciais com validade legal",
          "category": "Investigação Legal"
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
  "currenciesAccepted": "BRL",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "127",
    "bestRating": "5",
    "worstRating": "1"
  },
  "hasCredential": {
    "@type": "EducationalOccupationalCredential",
    "credentialCategory": "degree",
    "educationalLevel": "Graduate",
    "name": "Graduação em Investigação Profissional"
  }
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Detetive Particular Regis - Investigação Profissional DF",
  "url": "https://detetive-regis.lovable.app",
  "logo": "https://detetive-regis.lovable.app/detective-logo.png",
  "image": "https://detetive-regis.lovable.app/detective-hero.jpg",
  "description": "Detetive particular graduado com mais de 15 anos de experiência em investigação profissional em Brasília DF",
  "foundingDate": "2009",
  "founder": {
    "@type": "Person", 
    "name": "Regis",
    "jobTitle": "Detetive Particular Graduado",
    "hasCredential": "Graduação em Investigação Profissional"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+5561982844543",
    "contactType": "customer service",
    "availableLanguage": "Portuguese",
    "hoursAvailable": "Mo-Su 00:00-23:59"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Brasília",
    "addressRegion": "DF", 
    "addressCountry": "BR"
  },
  "sameAs": [],
  "knowsAbout": [
    "Investigação Conjugal",
    "Investigação Empresarial", 
    "Investigação Digital",
    "Localização de Pessoas",
    "Perícia Judicial",
    "Segurança Corporativa"
  ]
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
      "streetAddress": "Asa Sul",
      "addressLocality": "Brasília",
      "addressRegion": "DF", 
      "addressCountry": "BR"
    },
    "hasCredential": {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "degree",
      "name": "Graduação em Investigação Profissional"
    }
  },
  "areaServed": [
    "Distrito Federal",
    "Brasília", 
    "Águas Claras",
    "Taguatinga",
    "Ceilândia",
    "Guará",
    "Lago Sul",
    "Asa Norte"
  ],
  "serviceType": "Investigação Particular",
  "category": "Professional Services",
  "hoursAvailable": {
    "@type": "OpeningHoursSpecification",
    "opens": "00:00", 
    "closes": "23:59",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Serviços de Investigação Especializada"
  }
});

export const faqSchema = (faqs: Array<{question: string, answer: string}>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

export const articleSchema = (title: string, description: string, datePublished: string, author: string = "Regis") => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": title,
  "description": description,
  "author": {
    "@type": "Person",
    "name": author,
    "jobTitle": "Detetive Particular Graduado",
    "hasCredential": "Graduação em Investigação Profissional"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Detetive Particular Regis",
    "logo": {
      "@type": "ImageObject",
      "url": "https://detetive-regis.lovable.app/detective-logo.png"
    }
  },
  "datePublished": datePublished,
  "dateModified": datePublished,
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://detetive-regis.lovable.app"
  },
  "keywords": [
    "investigação particular",
    "detetive particular df", 
    "investigação conjugal",
    "investigação empresarial",
    "localização de pessoas",
    "investigação digital"
  ]
});

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Regis",
  "jobTitle": "Detetive Particular Graduado",
  "description": "Detetive particular com mais de 15 anos de experiência em investigação profissional em Brasília DF",
  "hasCredential": {
    "@type": "EducationalOccupationalCredential",
    "credentialCategory": "degree",
    "educationalLevel": "Graduate", 
    "name": "Graduação em Investigação Profissional"
  },
  "knowsAbout": [
    "Investigação Conjugal",
    "Investigação Empresarial",
    "Investigação Digital", 
    "Localização de Pessoas",
    "Perícia Judicial",
    "Segurança Corporativa",
    "Investigação Criminal"
  ],
  "worksFor": {
    "@type": "Organization",
    "name": "Detetive Particular Regis"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Brasília",
    "addressRegion": "DF",
    "addressCountry": "BR"
  },
  "telephone": "+5561982844543",
  "url": "https://detetive-regis.lovable.app"
};