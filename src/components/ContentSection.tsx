import { BookOpen, Clock, TrendingUp, Award } from "lucide-react";
import LazyImage from "@/components/LazyImage";
import articleHero from "@/assets/article-hero.jpg";
import digitalInvestigation from "@/assets/digital-investigation.jpg";
import corporateFraud from "@/assets/corporate-fraud.jpg";
import legalInvestigation from "@/assets/legal-investigation.jpg";

const ContentSection = () => {
  const articles = [
    {
      category: "Guia Prático",
      title: "Como Identificar Sinais de Infidelidade",
      description: "Guia detalhado com indicadores comportamentais e digitais baseado em 15 anos de experiência.",
      image: articleHero,
      readTime: "8 min",
      featured: true
    },
    {
      category: "Análise Técnica",
      title: "Investigação Digital: Ferramentas e Técnicas Legais",
      description: "Técnicas modernas de investigação digital respeitando limites legais e éticos.",
      image: digitalInvestigation,
      readTime: "12 min",
    },
    {
      category: "Caso de Estudo",
      title: "Fraude Corporativa: Como Proteger Sua Empresa",
      description: "Análise de casos reais e estratégias preventivas para proteção empresarial.",
      image: corporateFraud,
      readTime: "15 min",
    },
    {
      category: "Legal",
      title: "Direitos e Limites da Investigação Particular",
      description: "O que é legal e ético na investigação particular brasileira.",
      image: legalInvestigation,
      readTime: "10 min",
    }
  ];

  const featured = articles[0];
  const others = articles.slice(1);

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-2xl mb-20">
          <span className="heading-editorial text-detective-gold mb-4 block">Conteúdo Especializado</span>
          <div className="section-divider mb-6"></div>
          <h2 className="heading-section text-detective-navy mb-6">
            Conhecimento e<br />
            <span className="text-gold-gradient">Autoridade</span>
          </h2>
          <p className="text-professional">
            Insights do mercado de investigação particular baseados em anos de experiência e casos reais.
          </p>
        </div>

        {/* Featured Article — asymmetric layout */}
        <div className="grid lg:grid-cols-12 gap-8 mb-20">
          <div className="lg:col-span-7 relative rounded-2xl overflow-hidden group">
            <div className="aspect-[4/3] lg:aspect-auto lg:h-full">
              <LazyImage
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(210,45%,8%)] via-transparent to-transparent"></div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 text-xs font-mono uppercase tracking-wider bg-detective-gold text-detective-navy rounded-full">
                  {featured.category}
                </span>
                <span className="text-white/50 text-xs flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {featured.readTime}
                </span>
              </div>
              <h3 className="font-playfair text-2xl md:text-3xl font-bold text-white leading-tight">
                {featured.title}
              </h3>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6">
            {others.map((article, index) => (
              <div key={index} className="group flex gap-5 p-5 rounded-xl border border-border hover:border-detective-gold/30 hover:bg-detective-gold/[0.02] transition-all duration-300 cursor-pointer">
                <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                  <LazyImage
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-detective-gold">
                      {article.category}
                    </span>
                    <span className="text-[10px] text-professional-grey flex items-center gap-1">
                      <Clock className="w-2.5 h-2.5" /> {article.readTime}
                    </span>
                  </div>
                  <h4 className="font-playfair font-semibold text-detective-navy text-sm leading-snug group-hover:text-detective-gold transition-colors duration-300 line-clamp-2">
                    {article.title}
                  </h4>
                  <p className="text-xs text-professional-grey mt-1 line-clamp-2">{article.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;