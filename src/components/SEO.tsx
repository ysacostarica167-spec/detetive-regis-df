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
  ogImage = "https://detetive-regis.lovable.app/src/assets/detective-hero-hq.jpg",
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
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Detetive Particular Regis - Investigação Profissional DF" />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content="Detetive Particular Regis" />
      <meta property="article:author" content="Regis" />
      <meta property="article:publisher" content="https://detetive-regis.lovable.app" />
      
      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content="Detetive Particular Regis - Investigação DF" />
      <meta name="twitter:site" content="@detetiveregis" />
      <meta name="twitter:creator" content="@detetiveregis" />
      
      {/* Local Business */}
      <meta name="geo.region" content="BR-DF" />
      <meta name="geo.placename" content="Brasília" />
      <meta name="ICBM" content="-15.7942,-47.8822" />
      
      {/* Additional SEO meta tags */}
      <meta name="rating" content="general" />
      <meta name="distribution" content="global" />
      <meta name="revisit-after" content="7 days" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      
      {/* Mobile optimization */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="format-detection" content="telephone=yes" />
      
      {/* Google tag (gtag.js) - Analytics */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=GT-KVHVXKNX"></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          
          // Google Analytics 4
          gtag('config', 'GT-KVHVXKNX', {
            'send_page_view': true,
            'anonymize_ip': true
          });
          
          // Google Ads Configuration (Substitua AW-XXXXXXXXX pelo seu ID)
          gtag('config', 'AW-XXXXXXXXX', {
            'phone_conversion_number': '+5561982844543',
            'allow_enhanced_conversions': true
          });
          
          // Enhanced Conversions
          gtag('set', 'user_data', {
            'phone_number': '+5561982844543',
            'address': {
              'city': 'Brasília',
              'region': 'DF',
              'country': 'BR'
            }
          });
        `}
      </script>
      
      {/* Google Ads Remarketing Tag */}
      <script>
        {`
          // Global site tag remarketing
          gtag('event', 'page_view', {
            'send_to': 'AW-XXXXXXXXX',
            'user_id': 'visitor_' + Date.now()
          });
        `}
      </script>
      
      {/* Meta Pixel (Facebook Ads) - Opcional */}
      <script>
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', 'YOUR_PIXEL_ID');
          fbq('track', 'PageView');
        `}
      </script>
      <noscript>
        {`<img height="1" width="1" style="display:none"
        src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1"/>`}
      </noscript>
      
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