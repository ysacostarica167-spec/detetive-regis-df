import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Video, Download, Award, Clock, TrendingUp } from "lucide-react";
import LazyImage from "@/components/LazyImage";
import articleHero from "@/assets/article-hero.jpg";
import digitalInvestigation from "@/assets/digital-investigation.jpg";
import corporateFraud from "@/assets/corporate-fraud.jpg";
import legalInvestigation from "@/assets/legal-investigation.jpg";

const ContentSection = () => {
  const articles = [
    {
      category: "Guia Prático",
      title: "Como Identificar Sinais de Infidelidade: Guia Completo 2024",
      description: "Um guia detalhado com os principais indicadores comportamentais e digitais que podem sugerir infidelidade conjugal, baseado em 15 anos de experiência.",
      image: articleHero,
      readTime: "8 min",
      tags: ["Investigação Conjugal", "Comportamento", "Sinais"],
      featured: true
    },
    {
      category: "Análise Técnica",
      title: "Investigação Digital: Ferramentas e Técnicas Legais",
      description: "Explore as técnicas modernas de investigação digital respeitando os limites legais e éticos da profissão.",
      image: digitalInvestigation,
      readTime: "12 min",
      tags: ["Tecnologia", "Legal", "Digital"],
      featured: false
    },
    {
      category: "Caso de Estudo",  
      title: "Fraude Corporativa: Como Proteger Sua Empresa",
      description: "Análise de casos reais de fraude empresarial e estratégias preventivas para proteger seu negócio.",
      image: corporateFraud,
      readTime: "15 min",
      tags: ["Corporativo", "Fraude", "Prevenção"],
      featured: false
    },
    {
      category: "Legal",
      title: "Direitos e Limites da Investigação Particular no Brasil",
      description: "Entenda o que é legal e ético na investigação particular brasileira, baseado na legislação atual.",
      image: legalInvestigation,
      readTime: "10 min",
      tags: ["Legislação", "Ética", "Direitos"],
      featured: false
    }
  ];

  const resources = [
    {
      type: "video",
      title: "Webinar: Fundamentos da Investigação Profissional",
      description: "Apresentação completa sobre os pilares da investigação particular moderna",
      duration: "45 min",
      icon: <Video className="w-6 h-6 text-detective-gold" />
    },
    {
      type: "download",
      title: "E-book: Checklist de Segurança Digital Pessoal",
      description: "Guia prático para proteger sua privacidade online",
      pages: "24 páginas",
      icon: <Download className="w-6 h-6 text-detective-gold" />
    },
    {
      type: "guide",
      title: "Guia: Quando Contratar um Detetive Particular",
      description: "Orientações para identificar a necessidade de investigação profissional",
      pages: "16 páginas",
      icon: <BookOpen className="w-6 h-6 text-detective-gold" />
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-detective-gold/20 backdrop-blur-sm border border-detective-gold/30 rounded-full px-6 py-2 mb-6">
            <Award className="w-5 h-5 text-detective-gold" />
            <span className="text-detective-gold font-medium">Conteúdo Especializado</span>
          </div>
          <h2 className="heading-section text-detective-navy mb-6">
            Conhecimento e Autoridade
          </h2>
          <p className="text-professional max-w-3xl mx-auto">
            Compartilhamos conhecimento especializado e insights do mercado de investigação particular, 
            baseados em anos de experiência e casos reais.
          </p>
        </div>

        {/* Featured Article */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-detective-navy to-detective-navy-light rounded-2xl p-1 shadow-xl">
            <div className="bg-white rounded-xl p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 bg-detective-gold/20 rounded-full px-4 py-1 mb-4">
                    <TrendingUp className="w-4 h-4 text-detective-gold" />
                    <span className="text-sm font-medium text-detective-gold">Artigo em Destaque</span>
                  </div>
                  <h3 className="text-3xl font-bold text-detective-navy mb-4">
                    {articles.find(a => a.featured)?.title}
                  </h3>
                  <p className="text-professional-grey mb-6">
                    {articles.find(a => a.featured)?.description}
                  </p>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center gap-2 text-sm text-professional-grey">
                      <Clock className="w-4 h-4" />
                      {articles.find(a => a.featured)?.readTime} de leitura
                    </div>
                    <div className="flex gap-2">
                      {articles.find(a => a.featured)?.tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-detective-gold/20 text-detective-gold text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Button 
                    onClick={() => {
                      const message = "Olá! Gostaria de ler o artigo sobre sinais de infidelidade.";
                      const phoneNumber = "5561982844543";
                      const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                      
                      // Track conversion
                      if (typeof window !== 'undefined' && (window as any).gtag_report_conversion) {
                        (window as any).gtag_report_conversion(waUrl);
                      } else {
                        window.open(waUrl, '_blank');
                      }
                    }}
                    className="btn-professional"
                  >
                    <BookOpen className="w-4 h-4 mr-2" />
                    Solicitar Artigo Completo
                  </Button>
                </div>
                <div className="relative">
                  <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                    <LazyImage
                      src={articles.find(a => a.featured)?.image || ""}
                      alt={articles.find(a => a.featured)?.title || ""}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-detective-navy mb-8 text-center">
            Artigos Especializados
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.filter(article => !article.featured).map((article, index) => (
              <Card key={index} className="card-professional hover:shadow-[var(--shadow-accent)] hover:-translate-y-2 transition-all duration-300 group">
                <div className="aspect-video rounded-t-lg overflow-hidden">
                  <LazyImage
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-detective-gold font-medium bg-detective-gold/20 px-2 py-1 rounded-full">
                      {article.category}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-professional-grey">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </div>
                  </div>
                  <CardTitle className="heading-card text-detective-navy group-hover:text-detective-gold transition-colors duration-300">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-professional-grey mb-4">
                    {article.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {article.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-2 py-1 bg-muted text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button 
                    onClick={() => {
                      const message = `Olá! Gostaria de ler o artigo: ${article.title}`;
                      const phoneNumber = "5561982844543";
                      const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                      
                      // Track conversion
                      if (typeof window !== 'undefined' && (window as any).gtag_report_conversion) {
                        (window as any).gtag_report_conversion(waUrl);
                      } else {
                        window.open(waUrl, '_blank');
                      }
                    }}
                    variant="outline" 
                    className="w-full group-hover:bg-detective-gold group-hover:text-white transition-colors duration-300"
                  >
                    <BookOpen className="w-4 h-4 mr-2" />
                    Solicitar Artigo
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Resources Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-detective-navy mb-8 text-center">
            Recursos Gratuitos
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <Card key={index} className="card-professional hover:shadow-[var(--shadow-accent)] hover:scale-105 transition-all duration-300 group text-center">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-detective-gold/20 to-detective-navy/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {resource.icon}
                  </div>
                  <CardTitle className="heading-card text-detective-navy">
                    {resource.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-professional-grey mb-4">
                    {resource.description}
                  </CardDescription>
                  <div className="text-sm text-detective-gold font-medium mb-4">
                    {resource.duration || resource.pages}
                  </div>
                  <Button 
                    onClick={() => {
                      const message = `Olá! Gostaria de acessar: ${resource.title}`;
                      const phoneNumber = "5561982844543";
                      const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                      
                      // Track conversion
                      if (typeof window !== 'undefined' && (window as any).gtag_report_conversion) {
                        (window as any).gtag_report_conversion(waUrl);
                      } else {
                        window.open(waUrl, '_blank');
                      }
                    }}
                    variant="outline" 
                    className="w-full"
                  >
                    {resource.type === 'video' && <Video className="w-4 h-4 mr-2" />}
                    {resource.type === 'download' && <Download className="w-4 h-4 mr-2" />}
                    {resource.type === 'guide' && <BookOpen className="w-4 h-4 mr-2" />}
                    Solicitar {resource.type === 'video' ? 'Vídeo' : resource.type === 'download' ? 'Download' : 'Guia'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-detective-navy to-detective-navy-light rounded-2xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">Mantenha-se Atualizado</h3>
            <p className="text-lg mb-6 text-white/90">
              Receba conteúdo exclusivo, análises de casos e insights do mercado de investigação
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1 px-4 py-3 rounded-lg text-detective-navy placeholder:text-detective-navy/60 focus:outline-none focus:ring-2 focus:ring-detective-gold"
              />
              <Button 
                onClick={() => {
                  const email = (document.querySelector('input[type="email"]') as HTMLInputElement)?.value;
                  const message = email ? 
                    `Olá! Gostaria de me inscrever na newsletter com o email: ${email}` :
                    "Olá! Gostaria de me inscrever na newsletter.";
                  const phoneNumber = "5561982844543";
                  const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                  
                  // Track conversion
                  if (typeof window !== 'undefined' && (window as any).gtag_report_conversion) {
                    (window as any).gtag_report_conversion(waUrl);
                  } else {
                    window.open(waUrl, '_blank');
                  }
                }}
                className="btn-accent"
              >
                <BookOpen className="w-4 h-4 mr-2" />
                Inscrever-se
              </Button>
            </div>
            <p className="text-sm text-white/70 mt-4">
              Sem spam. Cancele a qualquer momento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;