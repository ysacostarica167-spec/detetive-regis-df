import { Card, CardContent } from "@/components/ui/card";
import { Search, TrendingUp, Target } from "lucide-react";
import { Link } from "react-router-dom";

const LongTailKeywords = () => {
  const keywordCategories = [
    {
      title: "Investigação Conjugal",
      icon: <Search className="w-5 h-5 text-detective-gold" />,
      keywords: [
        { text: "investigação conjugal Brasília", link: "/investigacao-conjugal" },
        { text: "investigação de traição DF", link: "/investigacao-conjugal" },
        { text: "detetive para casal Brasília", link: "/investigacao-conjugal" },
        { text: "investigação de suspeita de infidelidade Brasília", link: "/investigacao-conjugal" },
        { text: "como descobrir traição em Brasília", link: "/investigacao-conjugal" },
        { text: "detetive conjugal Brasília preço", link: "/investigacao-conjugal" }
      ]
    },
    {
      title: "Detetive Particular",
      icon: <Target className="w-5 h-5 text-detective-gold" />,
      keywords: [
        { text: "detetive particular Brasília DF", link: "/" },
        { text: "detetive particular preço DF", link: "/#contato" },
        { text: "melhor detetive particular Brasília", link: "/#sobre" },
        { text: "detetive particular Brasília 24 horas", link: "/#contato" },
        { text: "contratar detetive particular DF", link: "/#contato" },
        { text: "detetive particular Brasília barato", link: "/#contato" }
      ]
    },
    {
      title: "Serviços Especializados",
      icon: <TrendingUp className="w-5 h-5 text-detective-gold" />,
      keywords: [
        { text: "investigação empresarial Brasília DF", link: "/investigacao-empresarial" },
        { text: "localização de pessoas desaparecidas DF", link: "/localizacao-pessoas" },
        { text: "detetive para empresa Brasília", link: "/investigacao-empresarial" },
        { text: "investigação de funcionário DF", link: "/investigacao-empresarial" },
        { text: "encontrar devedor de pensão Brasília", link: "/localizacao-pessoas" },
        { text: "investigação familiar Brasília DF", link: "/investigacao-familiar" }
      ]
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-detective-navy mb-4">
            Encontre Seu Serviço de Investigação
          </h2>
          <p className="text-professional max-w-2xl mx-auto">
            Navegue pelos nossos principais serviços de <strong>detetive particular Brasília DF</strong> e 
            <strong> investigação conjugal Brasília</strong>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {keywordCategories.map((category, index) => (
            <Card key={index} className="card-professional hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-10 h-10 rounded-full bg-detective-gold/20 flex items-center justify-center">
                    {category.icon}
                  </div>
                  <h3 className="font-semibold text-detective-navy text-lg">{category.title}</h3>
                </div>
                <div className="space-y-2">
                  {category.keywords.map((keyword, kIndex) => (
                    <Link
                      key={kIndex}
                      to={keyword.link}
                      className="block p-3 rounded-lg hover:bg-detective-gold/10 transition-all duration-300 group"
                    >
                      <p className="text-sm text-detective-navy group-hover:text-detective-gold font-medium transition-colors">
                        → {keyword.text}
                      </p>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-detective-navy to-detective-navy-light rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            Precisa de Investigação Conjugal Brasília?
          </h3>
          <p className="text-lg mb-6 text-white/90 max-w-2xl mx-auto">
            <strong>Detetive particular Brasília DF</strong> especializado em <strong>investigação de traição DF</strong> e 
            <strong> investigação de suspeita de infidelidade</strong>. Consulta gratuita e <strong>detetive particular preço DF</strong> justo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5561982844543?text=Olá!%20Preciso%20de%20investigação%20conjugal%20em%20Brasília"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              WhatsApp: Investigação Conjugal
            </a>
            <a
              href="tel:+5561982844543"
              className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 font-semibold px-8 py-4 rounded-lg backdrop-blur-sm transition-all duration-300"
            >
              Ligar: (61) 98284-4543
            </a>
          </div>
        </div>

        {/* Additional Keywords Section */}
        <div className="mt-12 text-center">
          <div className="max-w-4xl mx-auto bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-detective-navy mb-6">
              Serviços de Detetive Particular Brasília DF
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "detetive particular Brasília DF",
                "investigação conjugal Brasília",
                "investigação de traição DF",
                "detetive para casal Brasília",
                "detetive particular preço DF",
                "investigação de suspeita de infidelidade Brasília",
                "detetive conjugal DF",
                "investigação de infidelidade Brasília",
                "detetive particular Brasília 24h",
                "investigação discreta Brasília"
              ].map((keyword, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-detective-gold/10 text-detective-navy rounded-full text-sm font-medium hover:bg-detective-gold hover:text-white transition-all duration-300 cursor-pointer"
                >
                  {keyword}
                </span>
              ))}
            </div>
            <p className="text-sm text-professional-grey mt-6">
              Especialistas em <strong>investigação conjugal Brasília</strong>, <strong>investigação de traição DF</strong> e todos os tipos de investigação particular no Distrito Federal
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LongTailKeywords;
