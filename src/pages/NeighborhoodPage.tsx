import { useParams, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FloatingCTA from "@/components/FloatingCTA";
import { Button } from "@/components/ui/button";
import { breadcrumbSchema } from "@/data/structuredData";
import { neighborhoodPages } from "@/data/neighborhoodPages";
import { usePageTracking } from "@/hooks/usePageTracking";
import { trackWhatsAppClick } from "@/utils/analytics";
import { MessageCircle, Shield, CheckCircle, MapPin, Search, Building2, Users } from "lucide-react";
import { Link } from "react-router-dom";

const NeighborhoodPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const page = neighborhoodPages.find(p => p.slug === slug);

  usePageTracking(page?.title || 'Página de Bairro', 'Local SEO');

  if (!page) {
    return <Navigate to="/" replace />;
  }

  const structuredData = [
    breadcrumbSchema([
      { name: "Início", url: "/" },
      { name: "Detetive Particular Brasília", url: "/detetive-particular-brasilia" },
      { name: page.name, url: `/${page.slug}` }
    ])
  ];

  const handleWhatsAppClick = (section: string) => {
    const message = `Olá! Preciso de um detetive particular em ${page.name}. Gostaria de mais informações.`;
    const waUrl = `https://wa.me/5561982844543?text=${encodeURIComponent(message)}`;
    trackWhatsAppClick(`${page.name} - ${section}`);
    window.open(waUrl, '_blank');
  };

  const otherNeighborhoods = neighborhoodPages.filter(p => p.slug !== page.slug).slice(0, 4);

  return (
    <div className="min-h-screen">
      <SEO
        title={page.seoTitle}
        description={page.seoDescription}
        keywords={page.seoKeywords}
        canonical={`/${page.slug}`}
        structuredData={structuredData}
      />

      <Header />

      {/* Breadcrumb */}
      <nav className="bg-muted/50 py-3 pt-20" aria-label="Breadcrumb">
        <div className="container mx-auto px-4">
          <ol className="flex items-center space-x-2 text-sm">
            <li><Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Início</Link></li>
            <li className="text-muted-foreground">/</li>
            <li><Link to="/detetive-particular-brasilia" className="text-muted-foreground hover:text-foreground transition-colors">Brasília</Link></li>
            <li className="text-muted-foreground">/</li>
            <li className="text-foreground font-medium">{page.name}</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-16 bg-gradient-to-b from-detective-navy to-detective-navy/90">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
            <MapPin className="w-4 h-4" />
            Atendimento em {page.name}
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
            {page.title}
          </h1>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Investigador particular profissional com atuação direta em {page.name}. Sigilo absoluto, equipamentos modernos e mais de 20 anos de experiência.
          </p>
          <Button
            onClick={() => handleWhatsAppClick('Hero')}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            size="lg"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Consulta Gratuita (61) 98284-4543
          </Button>
        </div>
      </section>

      {/* Intro Content */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          {page.intro.map((paragraph, i) => (
            <p key={i} className="text-muted-foreground leading-relaxed mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <Search className="w-7 h-7 text-accent" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Serviços de Investigação em {page.name}
            </h2>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Oferecemos uma gama completa de serviços investigativos para moradores e empresas de {page.name}. Cada caso é analisado individualmente para garantir a melhor estratégia de atuação.
          </p>
          <ul className="grid md:grid-cols-2 gap-3">
            {page.services.map((service, i) => (
              <li key={i} className="flex items-start gap-2 text-muted-foreground">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                {service}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Local Info */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <MapPin className="w-7 h-7 text-accent" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Conhecimento Local em {page.name}
            </h2>
          </div>
          {page.localInfo.map((paragraph, i) => (
            <p key={i} className="text-muted-foreground leading-relaxed mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-7 h-7 text-accent" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Por Que Escolher o Detetive Regis em {page.name}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Experiência Local", desc: `Mais de 20 anos atuando em ${page.name} e em todo o Distrito Federal.` },
              { title: "Sigilo Absoluto", desc: "Todas as operações são conduzidas com máxima discrição e confidencialidade." },
              { title: "Provas Legais", desc: "Relatórios e evidências que podem ser utilizados em processos judiciais." },
              { title: "Atendimento 24h", desc: "Disponibilidade integral para casos urgentes e consultas emergenciais." },
              { title: "Equipamentos Modernos", desc: "Tecnologia de ponta para monitoramento, vigilância e coleta de provas." },
              { title: "Consulta Gratuita", desc: "Avaliação inicial do caso sem compromisso e com total confidencialidade." }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Areas */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Também Atendemos Regiões Próximas
          </h2>
          <p className="text-muted-foreground mb-6">
            Além de {page.name}, nosso detetive particular atende nas seguintes regiões:
          </p>
          <div className="flex flex-wrap gap-3">
            {page.nearby.map((area, i) => (
              <span key={i} className="px-4 py-2 bg-muted rounded-full text-sm text-foreground">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Other Neighborhood Pages */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="text-xl font-bold text-foreground mb-6">Detetive Particular em Outras Regiões do DF</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {otherNeighborhoods.map(n => (
              <Link
                key={n.slug}
                to={`/${n.slug}`}
                className="p-4 bg-card rounded-xl border border-border hover:border-accent/50 hover:shadow-md transition-all text-center"
              >
                <MapPin className="w-5 h-5 text-accent mx-auto mb-2" />
                <p className="text-sm font-medium text-foreground">{n.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-r from-detective-navy to-detective-navy/90">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Precisa de um Detetive em {page.name}?
          </h3>
          <p className="text-primary-foreground/80 mb-8 text-lg leading-relaxed">
            Consulta inicial gratuita e 100% sigilosa. Fale agora com o Detetive Regis e resolva o seu caso com profissionalismo.
          </p>
          <Button
            onClick={() => handleWhatsAppClick('CTA Final')}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-10 py-5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-lg"
            size="lg"
          >
            <MessageCircle className="w-6 h-6 mr-2" />
            WhatsApp (61) 98284-4543
          </Button>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default NeighborhoodPage;
