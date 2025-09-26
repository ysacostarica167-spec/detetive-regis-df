import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  structuredData?: object;
}

const SEO = ({ 
  title, 
  description, 
  keywords, 
  canonical, 
  ogImage = "https://lovable.dev/opengraph-image-p98pqg.png",
  structuredData 
}: SEOProps) => {
  const baseUrl = "https://detetive-regis.lovable.app";
  const fullCanonical = canonical ? `${baseUrl}${canonical}` : baseUrl;

  return (
    <Helmet>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullCanonical} />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://wa.me" />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content="Detetive Particular Regis" />
      
      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Local Business */}
      <meta name="geo.region" content="BR-DF" />
      <meta name="geo.placename" content="Brasília" />
      <meta name="ICBM" content="-15.7942,-47.8822" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;