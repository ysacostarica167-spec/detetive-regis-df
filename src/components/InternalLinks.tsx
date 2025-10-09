import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Search, Building2, Users, Scale, Heart, Shield } from "lucide-react";

const InternalLinks = () => {
  const linkSections = [
    {
      title: "Investigação Conjugal e Familiar",
      icon: <Heart className="w-5 h-5 text-detective-gold" />,
      links: [
        { 
          text: "Investigação Conjugal Completa em Brasília DF", 
          url: "/investigacao-conjugal",
          description: "Descubra a verdade sobre infidelidade com discrição"
        },
        { 
          text: "Investigação Familiar e Proteção de Menores", 
          url: "/investigacao-familiar",
          description: "Verificação de convivência e proteção familiar"
        },
        { 
          text: "Localização de Pessoas Desaparecidas no DF", 
          url: "/localizacao-pessoas",
          description: "Encontre parentes, devedores e pessoas desaparecidas"
        }
      ]
    },
    {
      title: "Investigação Corporativa e Empresarial",
      icon: <Building2 className="w-5 h-5 text-detective-gold" />,
      links: [
        { 
          text: "Investigação Empresarial e Fraudes Internas", 
          url: "/investigacao-empresarial",
          description: "Proteja seu negócio de fraudes e desvios"
        },
        { 
          text: "Due Diligence e Verificação de Parceiros", 
          url: "/investigacao-juridica",
          description: "Análise completa antes de fechar negócios"
        }
      ]
    },
    {
      title: "Serviços Especializados",
      icon: <Shield className="w-5 h-5 text-detective-gold" />,
      links: [
        { 
          text: "Serviços Cibernéticos e Investigação Digital", 
          url: "/servicos-ciberneticos",
          description: "Perícia digital e investigação em mídias sociais"
        },
        { 
          text: "Investigação Jurídica e Perícia Particular", 
          url: "/investigacao-juridica",
          description: "Laudos técnicos para processos judiciais"
        }
      ]
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="heading-section text-detective-navy mb-4">
            Nossos Serviços de Investigação
          </h2>
          <p className="text-professional max-w-2xl mx-auto">
            Explore todos os nossos serviços especializados de <strong>detetive particular em Brasília DF</strong>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {linkSections.map((section, index) => (
            <Card key={index} className="card-professional hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-4">
                  {section.icon}
                  <h3 className="font-semibold text-detective-navy">{section.title}</h3>
                </div>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        to={link.url}
                        className="group block p-3 rounded-lg hover:bg-detective-gold/10 transition-all duration-300"
                      >
                        <div className="flex items-start gap-2">
                          <ArrowRight className="w-4 h-4 text-detective-gold mt-1 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                          <div>
                            <p className="text-sm font-medium text-detective-navy group-hover:text-detective-gold transition-colors">
                              {link.text}
                            </p>
                            <p className="text-xs text-professional-grey mt-1">
                              {link.description}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Access Keywords Section */}
        <div className="mt-12 p-8 bg-white rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold text-detective-navy mb-4 text-center">
            Detetive Particular por Região em Brasília
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Detetive Particular Asa Norte",
              "Detetive Particular Asa Sul", 
              "Detetive Águas Claras",
              "Detetive Taguatinga",
              "Detetive Ceilândia",
              "Detetive Lago Sul",
              "Detetive Guará",
              "Detetive Particular DF Barato"
            ].map((keyword, index) => (
              <Link
                key={index}
                to="/#contato"
                className="px-4 py-2 bg-detective-gold/10 text-detective-navy rounded-full text-sm hover:bg-detective-gold hover:text-white transition-all duration-300"
              >
                {keyword}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternalLinks;