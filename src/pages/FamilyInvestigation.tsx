import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { serviceSchema, breadcrumbSchema } from "@/data/structuredData";
import { 
  Heart, 
  MessageCircle, 
  Users, 
  Shield, 
  Search, 
  Baby, 
  GraduationCap, 
  Eye,
  FileText,
  Clock,
  Smartphone,
  AlertTriangle
} from "lucide-react";

const FamilyInvestigation = () => {
  const structuredData = [
    serviceSchema(
      "Investigação Familiar em Brasília - Detetive para Filhos em Brasília",
      "Investigação familiar em Brasília. Detetive para filhos em Brasília especializado em investigação de menores, segurança familiar e proteção infantil no DF."
    ),
    breadcrumbSchema([
      { name: "Início", url: "/" },
      { name: "Investigação Familiar", url: "/investigacao-familiar" }
    ])
  ];

  const handleWhatsAppClick = () => {
    const message = "Olá! Preciso de investigação familiar. Detetive para filhos em Brasília.";
    const phoneNumber = "5561982844543";
    
    const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    try {
      window.open(waUrl, '_blank');
    } catch (error) {
      window.open("tel:+5561982844543", "_blank");
    }
  };

  const familyServices = [
    {
      icon: <Baby className="w-8 h-8 text-detective-gold" />,
      title: "Detetive para Filhos em Brasília",
      description: "Investigação especializada em segurança e proteção de menores de idade.",
      features: ["Investigação de companhias", "Monitoramento de segurança", "Verificação de atividades", "Proteção contra riscos"]
    },
    {
      icon: <Users className="w-8 h-8 text-detective-gold" />,
      title: "Investigação Familiar em Brasília",
      description: "Investigação completa de questões familiares e relacionamentos.",
      features: ["Investigação de paternidade", "Questões de guarda", "Alienação parental", "Conflitos familiares"]
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-detective-gold" />,
      title: "Segurança Escolar",
      description: "Monitoramento e investigação de situações escolares e bullying.",
      features: ["Investigação de bullying", "Segurança no transporte", "Verificação de ambiente escolar", "Proteção estudantil"]
    },
    {
      icon: <Smartphone className="w-8 h-8 text-detective-gold" />,
      title: "Monitoramento Digital de Menores",
      description: "Investigação de atividades digitais para proteção de crianças e adolescentes.",
      features: ["Análise de redes sociais", "Investigação de cyberbullying", "Proteção contra predadores", "Educação digital"]
    }
  ];

  const familyIssues = [
    "Guarda de filhos",
    "Alienação parental", 
    "Bullying escolar",
    "Drogas e vícios",
    "Companhias inadequadas",
    "Segurança digital",
    "Proteção contra abusos",
    "Investigação de paternidade"
  ];

  const protectionAreas = [
    {
      icon: <Shield className="w-6 h-6 text-detective-gold" />,
      title: "Proteção Física",
      description: "Segurança pessoal e proteção contra riscos físicos."
    },
    {
      icon: <Smartphone className="w-6 h-6 text-detective-gold" />,
      title: "Proteção Digital", 
      description: "Segurança online e proteção contra crimes virtuais."
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-detective-gold" />,
      title: "Ambiente Escolar",
      description: "Segurança na escola e no transporte escolar."
    },
    {
      icon: <Users className="w-6 h-6 text-detective-gold" />,
      title: "Relacionamentos",
      description: "Investigação de amizades e relacionamentos."
    }
  ];

  const benefits = [
    "Abordagem sigilosa e discreta",
    "Experiência com menores",
    "Suporte às famílias", 
    "Métodos não invasivos",
    "Relatórios detalhados",
    "Orientação preventiva"
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Investigação Familiar em Brasília - Detetive para Filhos em Brasília | Proteção de Menores DF"
        description="Investigação familiar em Brasília. Detetive para filhos em Brasília especializado em proteção de menores, segurança familiar e investigação de questões familiares no DF."
        keywords="investigação familiar em brasília, detetive para filhos em brasília, detetive particular df, proteção de menores df, segurança familiar brasília, investigação de paternidade df, guarda de filhos brasília"
        canonical="/investigacao-familiar"
        structuredData={structuredData}
      />
      <Header />
      <Breadcrumbs />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-detective-navy via-detective-navy/95 to-detective-navy/90">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge className="mb-6 bg-detective-gold/20 text-detective-gold border-detective-gold/30">
              <Heart className="w-4 h-4 mr-2" />
              Especialista em Investigação Familiar
            </Badge>
            
            <h1 className="heading-hero mb-6">
              <span className="block">Investigação</span>
              <span className="block text-detective-gold">Familiar em Brasília</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-3xl mx-auto leading-relaxed">
              Detetive para Filhos • Proteção de Menores • Segurança Familiar
            </p>
            
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Detetive particular especializado em investigação familiar em Brasília. 
              Proteção de filhos, segurança familiar e resolução de questões familiares no DF.
            </p>

            <Button 
              onClick={handleWhatsAppClick}
              className="btn-accent group"
              size="lg"
            >
              <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Proteção Familiar
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading-section text-detective-navy mb-6">
              Serviços de Investigação Familiar
            </h2>
            <p className="text-professional max-w-3xl mx-auto">
              Oferecemos investigação familiar especializada em Brasília DF com foco na proteção 
              de crianças, adolescentes e resolução de conflitos familiares.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {familyServices.map((service, index) => (
              <Card key={index} className="card-professional hover:shadow-lg transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-detective-gold/20 to-detective-navy/20 flex items-center justify-center">
                    {service.icon}
                  </div>
                  <CardTitle className="text-detective-navy">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-professional-grey mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-professional-grey">
                        <div className="w-1.5 h-1.5 rounded-full bg-detective-gold mt-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Protection Areas */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {protectionAreas.map((area, index) => (
              <Card key={index} className="card-professional text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-detective-gold/20 to-detective-navy/20 flex items-center justify-center">
                    {area.icon}
                  </div>
                  <h3 className="font-semibold text-detective-navy mb-2">{area.title}</h3>
                  <p className="text-sm text-professional-grey">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Family Issues */}
          <div className="bg-gradient-to-br from-muted/50 to-muted rounded-2xl p-8 mb-16">
            <h3 className="heading-card text-detective-navy text-center mb-8">
              Questões Familiares Investigadas
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {familyIssues.map((issue, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-white/60 rounded-lg">
                  <AlertTriangle className="w-5 h-5 text-detective-gold flex-shrink-0" />
                  <span className="text-professional-grey font-medium">{issue}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="text-center">
            <h3 className="heading-card text-detective-navy mb-8">
              Diferenciais da Nossa Investigação Familiar
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
                  <Heart className="w-5 h-5 text-detective-gold flex-shrink-0" />
                  <span className="text-professional-grey font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading-section text-detective-navy mb-6">
              Processo de Investigação Familiar
            </h2>
            <p className="text-professional max-w-3xl mx-auto">
              Metodologia cuidadosa e respeitosa para investigação familiar com foco 
              na proteção e bem-estar de todos os envolvidos.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <Card className="card-professional text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-detective-gold/20 to-detective-navy/20 flex items-center justify-center">
                  <Users className="w-8 h-8 text-detective-gold" />
                </div>
                <h3 className="font-semibold text-detective-navy mb-3">1. Consulta Familiar</h3>
                <p className="text-professional-grey">
                  Conversa sigilosa para entender a situação e definir objetivos.
                </p>
              </CardContent>
            </Card>

            <Card className="card-professional text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-detective-gold/20 to-detective-navy/20 flex items-center justify-center">
                  <Eye className="w-8 h-8 text-detective-gold" />
                </div>
                <h3 className="font-semibold text-detective-navy mb-3">2. Investigação Discreta</h3>
                <p className="text-professional-grey">
                  Coleta de informações com métodos respeitosos e não invasivos.
                </p>
              </CardContent>
            </Card>

            <Card className="card-professional text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-detective-gold/20 to-detective-navy/20 flex items-center justify-center">
                  <FileText className="w-8 h-8 text-detective-gold" />
                </div>
                <h3 className="font-semibold text-detective-navy mb-3">3. Análise Cuidadosa</h3>
                <p className="text-professional-grey">
                  Avaliação das informações com foco no bem-estar familiar.
                </p>
              </CardContent>
            </Card>

            <Card className="card-professional text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-detective-gold/20 to-detective-navy/20 flex items-center justify-center">
                  <Heart className="w-8 h-8 text-detective-gold" />
                </div>
                <h3 className="font-semibold text-detective-navy mb-3">4. Orientação e Suporte</h3>
                <p className="text-professional-grey">
                  Relatório com orientações para proteção e resolução familiar.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-detective-navy/95 to-detective-navy">
        <div className="container mx-auto px-4 text-center">
          <h2 className="heading-section text-white mb-6">
            Proteja sua Família com Investigação Profissional
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Entre em contato para uma consulta sigilosa sobre investigação familiar. 
            Atendimento especializado e respeitoso em Brasília DF.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleWhatsAppClick}
              className="btn-accent group"
              size="lg"
            >
              <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              WhatsApp (61) 98284-4543
            </Button>
            <Button 
              onClick={handleWhatsAppClick}
              variant="outline-light" 
              size="lg"
            >
              <Heart className="w-5 h-5 mr-2" />
              Proteção Familiar
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FamilyInvestigation;