import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { serviceSchema, breadcrumbSchema } from "@/data/structuredData";
import { 
  Building, 
  MessageCircle, 
  Users, 
  Shield, 
  Search, 
  FileText, 
  AlertTriangle, 
  Eye,
  Briefcase,
  Computer,
  Camera,
  Clock
} from "lucide-react";

const CorporateInvestigation = () => {
  const structuredData = [
    serviceSchema(
      "Investigação Empresarial DF - Detetive para Funcionários Brasília",
      "Investigação empresarial DF. Detetive para funcionários Brasília. Investigação corporativa, fraudes internas, concorrência desleal e segurança empresarial."
    ),
    breadcrumbSchema([
      { name: "Início", url: "/" },
      { name: "Investigação Empresarial", url: "/investigacao-empresarial" }
    ])
  ];

  const handleWhatsAppClick = () => {
    const message = "Olá! Preciso de investigação empresarial. Detetive para funcionários Brasília.";
    const phoneNumber = "5561982844543";
    
    const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    try {
      window.open(waUrl, '_blank');
    } catch (error) {
      window.open("tel:+5561982844543", "_blank");
    }
  };

  const corporateServices = [
    {
      icon: <Users className="w-8 h-8 text-detective-gold" />,
      title: "Detetive para Funcionários Brasília",
      description: "Investigação de funcionários suspeitos, comportamentos inadequados e violações contratuais.",
      features: ["Investigação de conduta", "Verificação de antecedentes", "Monitoramento de atividades", "Relatório de comportamento"]
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-detective-gold" />,
      title: "Investigação de Fraudes Internas",
      description: "Detecção e investigação de fraudes, desvios e irregularidades dentro da empresa.",
      features: ["Auditoria investigativa", "Análise financeira", "Coleta de evidências", "Suporte legal"]
    },
    {
      icon: <Shield className="w-8 h-8 text-detective-gold" />,
      title: "Segurança Empresarial",
      description: "Avaliação de riscos e implementação de medidas de segurança corporativa.",
      features: ["Análise de vulnerabilidades", "Plano de segurança", "Treinamento de equipe", "Consultoria preventiva"]
    },
    {
      icon: <Computer className="w-8 h-8 text-detective-gold" />,
      title: "Investigação Digital Corporativa",
      description: "Investigação de crimes digitais e vazamentos de informações confidenciais.",
      features: ["Perícia forense digital", "Investigação de vazamentos", "Segurança da informação", "Análise de sistemas"]
    }
  ];

  const investigationTypes = [
    "Fraude interna",
    "Roubo de informações", 
    "Concorrência desleal",
    "Assédio no trabalho",
    "Violação de contrato",
    "Espionagem industrial",
    "Desvio de recursos",
    "Sabotagem empresarial"
  ];

  const benefits = [
    "Sigilo absoluto garantido",
    "Relatórios com validade legal",
    "Investigadores especializados",
    "Metodologia profissional",
    "Suporte jurídico completo",
    "Atuação em todo o DF"
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Investigação Empresarial DF - Detetive para Funcionários Brasília | Fraudes Corporativas"
        description="Investigação empresarial DF. Detetive para funcionários Brasília especializado em fraudes internas, concorrência desleal e segurança corporativa. Investigação corporativa profissional em Brasília DF."
        keywords="investigação empresarial df, detetive para funcionários brasília, investigação corporativa df, fraudes internas brasília, segurança empresarial df, concorrência desleal brasília, detetive particular df, investigação de funcionários df, detetive particular águas claras, detetive particular taguatinga, detetive particular ceilândia, detetive particular guará, detetive particular lago sul, detetive particular asa norte, detetive particular entorno de brasília"
        canonical="/investigacao-empresarial"
        structuredData={structuredData}
      />
      <Header />
      <Breadcrumbs />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-detective-navy via-detective-navy/95 to-detective-navy/90">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge className="mb-6 bg-detective-gold/20 text-detective-gold border-detective-gold/30">
              <Building className="w-4 h-4 mr-2" />
              Especialista em Investigação Empresarial
            </Badge>
            
            <h1 className="heading-hero mb-6">
              <span className="block">Investigação</span>
              <span className="block text-detective-gold">Empresarial DF</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-3xl mx-auto leading-relaxed">
              Detetive para Funcionários Brasília • Investigação Corporativa • Segurança Empresarial
            </p>
            
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Investigação empresarial especializada em Brasília DF. Proteja sua empresa de fraudes internas, 
              concorrência desleal e riscos corporativos com investigação profissional.
            </p>

            <Button 
              onClick={handleWhatsAppClick}
              className="btn-accent group"
              size="lg"
            >
              <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Consultoria Empresarial
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading-section text-detective-navy mb-6">
              Serviços de Investigação Empresarial
            </h2>
            <p className="text-professional max-w-3xl mx-auto">
              Oferecemos investigação empresarial completa em Brasília DF para proteger seu negócio 
              contra fraudes, vazamentos e riscos corporativos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {corporateServices.map((service, index) => (
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

          {/* Investigation Types */}
          <div className="bg-gradient-to-br from-muted/50 to-muted rounded-2xl p-8 mb-16">
            <h3 className="heading-card text-detective-navy text-center mb-8">
              Tipos de Investigação Empresarial
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {investigationTypes.map((type, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-white/60 rounded-lg">
                  <Briefcase className="w-5 h-5 text-detective-gold flex-shrink-0" />
                  <span className="text-professional-grey font-medium">{type}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="text-center">
            <h3 className="heading-card text-detective-navy mb-8">
              Vantagens da Nossa Investigação Empresarial
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
                  <Shield className="w-5 h-5 text-detective-gold flex-shrink-0" />
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
              Processo de Investigação Corporativa
            </h2>
            <p className="text-professional max-w-3xl mx-auto">
              Metodologia profissional para investigação empresarial com máximo sigilo 
              e eficácia na coleta de evidências.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <Card className="card-professional text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-detective-gold/20 to-detective-navy/20 flex items-center justify-center">
                  <Search className="w-8 h-8 text-detective-gold" />
                </div>
                <h3 className="font-semibold text-detective-navy mb-3">1. Análise</h3>
                <p className="text-professional-grey">
                  Avaliação da situação empresarial e definição da estratégia investigativa.
                </p>
              </CardContent>
            </Card>

            <Card className="card-professional text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-detective-gold/20 to-detective-navy/20 flex items-center justify-center">
                  <Eye className="w-8 h-8 text-detective-gold" />
                </div>
                <h3 className="font-semibold text-detective-navy mb-3">2. Investigação</h3>
                <p className="text-professional-grey">
                  Coleta discreta de evidências e monitoramento de atividades suspeitas.
                </p>
              </CardContent>
            </Card>

            <Card className="card-professional text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-detective-gold/20 to-detective-navy/20 flex items-center justify-center">
                  <FileText className="w-8 h-8 text-detective-gold" />
                </div>
                <h3 className="font-semibold text-detective-navy mb-3">3. Documentação</h3>
                <p className="text-professional-grey">
                  Registro detalhado das evidências com documentação legal completa.
                </p>
              </CardContent>
            </Card>

            <Card className="card-professional text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-detective-gold/20 to-detective-navy/20 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-detective-gold" />
                </div>
                <h3 className="font-semibold text-detective-navy mb-3">4. Relatório</h3>
                <p className="text-professional-grey">
                  Entrega de relatório técnico com recomendações e suporte legal.
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
            Proteja sua Empresa com Investigação Profissional
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Entre em contato para uma consultoria especializada em investigação empresarial. 
            Atendimento sigiloso e profissional para empresas em Brasília DF.
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
              <Building className="w-5 h-5 mr-2" />
              Consultoria Empresarial
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CorporateInvestigation;