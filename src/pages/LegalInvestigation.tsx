import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { serviceSchema, breadcrumbSchema } from "@/data/structuredData";
import { 
  Scale, 
  MessageCircle, 
  FileText, 
  Camera, 
  Users, 
  Building, 
  Shield, 
  Search,
  Gavel,
  FileSearch,
  ClipboardCheck,
  AlertCircle,
  Eye,
  MapPin
} from "lucide-react";

const LegalInvestigation = () => {
  const structuredData = [
    serviceSchema(
      "Investigação Jurídica e Perícia Judicial",
      "Investigação jurídica profissional, perícia judicial, coleta de provas e suporte legal especializado para advogados em Brasília DF"
    ),
    breadcrumbSchema([
      { name: "Início", url: "/" },
      { name: "Investigação Jurídica", url: "/investigacao-juridica" }
    ])
  ];

  const handleWhatsAppClick = () => {
    const message = "Olá! Preciso de investigação jurídica para um caso.";
    const phoneNumber = "5561982844543";
    const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Track conversion
    if (typeof window !== 'undefined' && (window as any).gtag_report_conversion) {
      (window as any).gtag_report_conversion(waUrl);
    } else {
      try {
        window.open(waUrl, '_blank');
      } catch (error) {
        window.open("tel:+5561982844543", "_blank");
      }
    }
  };


  const legalServices = [
    {
      icon: <FileSearch className="w-8 h-8 text-detective-gold" />,
      title: "Perícia Judicial",
      description: "Perícia técnica especializada para processos judiciais com validade legal completa.",
      features: ["Laudos periciais técnicos", "Análise de documentos", "Perícia grafotécnica", "Avaliação de danos"]
    },
    {
      icon: <Search className="w-8 h-8 text-detective-gold" />,
      title: "Investigação para Advogados",
      description: "Apoio investigativo especializado para escritórios de advocacia e causas judiciais.",
      features: ["Coleta de provas", "Localização de testemunhas", "Investigação de patrimônio", "Suporte processual"]
    },
    {
      icon: <Camera className="w-8 h-8 text-detective-gold" />,
      title: "Produção de Provas",
      description: "Coleta profissional de evidências com validade jurídica para processos legais.",
      features: ["Documentação fotográfica", "Gravações autorizadas", "Relatórios detalhados", "Cadeia de custódia"]
    },
    {
      icon: <Building className="w-8 h-8 text-detective-gold" />,
      title: "Investigação Empresarial",
      description: "Investigações corporativas para resolução de conflitos e proteção empresarial.",
      features: ["Fraudes internas", "Concorrência desleal", "Due diligence", "Investigação de sócios"]
    },
    {
      icon: <Users className="w-8 h-8 text-detective-gold" />,
      title: "Investigação de Pessoas",
      description: "Localização e investigação de pessoas para processos de família e sucessão.",
      features: ["Localização de herdeiros", "Investigação de abandono", "Busca de devedores", "Verificação de idoneidade"]
    },
    {
      icon: <MapPin className="w-8 h-8 text-detective-gold" />,
      title: "Investigação Patrimonial",
      description: "Levantamento completo de bens e patrimônio para execuções judiciais.",
      features: ["Busca de bens ocultos", "Análise patrimonial", "Investigação de fraudes", "Suporte à execução"]
    }
  ];

  const legalAreas = [
    "Direito de Família",
    "Direito Trabalhista", 
    "Direito Civil",
    "Direito Penal",
    "Direito Empresarial",
    "Direito Sucessório",
    "Direito do Consumidor",
    "Direito Previdenciário"
  ];

  const benefits = [
    "Laudos com validade legal",
    "Metodologia científica comprovada",
    "Sigilo profissional absoluto",
    "Prazos adequados aos processos",
    "Experiência em tribunais",
    "Relatórios detalhados e precisos"
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Investigação Jurídica - Detetive Particular DF | Perícia Judicial Brasília"
        description="Investigação jurídica e perícia judicial em Brasília DF. Suporte para advogados, coleta de provas, laudos periciais com validade legal. Detetive especializado em casos jurídicos."
        keywords="investigação jurídica df, perícia judicial brasília, detetive particular df, investigador particular df, agência de detetives df, melhor detetive brasília, detetive para advogados df, coleta provas brasília, laudo pericial df, investigação legal brasília, investigação empresarial df, localização de pessoas desaparecidas df, detetive particular águas claras, detetive particular taguatinga, detetive particular ceilândia, detetive particular guará, detetive particular lago sul, detetive particular asa norte, detetive particular entorno de brasília"
        canonical="/investigacao-juridica"
        structuredData={structuredData}
      />
      <Header />
      <Breadcrumbs />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-detective-navy via-detective-navy/95 to-detective-navy/90">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge className="mb-6 bg-detective-gold/20 text-detective-gold border-detective-gold/30">
              <Scale className="w-4 h-4 mr-2" />
              Especialista em Investigação Jurídica
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="block text-white">Investigação</span>
              <span className="block text-detective-gold bg-gradient-to-r from-detective-gold to-detective-gold/80 bg-clip-text text-transparent">Jurídica</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-3xl mx-auto leading-relaxed">
              Detetive Particular DF • Perícia Judicial • Suporte Legal Especializado
            </p>
            
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Investigação jurídica profissional em Brasília DF com 15 anos de experiência. 
              Perícias, laudos técnicos e coleta de provas com validade legal.
            </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
              size="lg"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Consulta Jurídica
            </Button>
          </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-detective-navy mb-6">
              Serviços de Investigação Jurídica
            </h2>
            <p className="text-professional max-w-3xl mx-auto">
              Oferecemos suporte investigativo especializado para advogados, escritórios de advocacia 
              e processos judiciais com metodologia técnica e validade legal.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {legalServices.map((service, index) => (
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

          {/* Legal Areas */}
          <div className="bg-gradient-to-br from-muted/50 to-muted rounded-2xl p-8 mb-16">
            <h3 className="text-xl md:text-2xl font-semibold text-detective-navy text-center mb-8">
              Áreas do Direito Atendidas
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {legalAreas.map((area, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-white/60 rounded-lg">
                  <Gavel className="w-5 h-5 text-detective-gold flex-shrink-0" />
                  <span className="text-professional-grey font-medium">{area}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="text-center">
            <h3 className="text-xl md:text-2xl font-semibold text-detective-navy mb-8">
              Diferenciais da Nossa Investigação Jurídica
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
                  <ClipboardCheck className="w-5 h-5 text-detective-gold flex-shrink-0" />
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
            <h2 className="text-3xl md:text-4xl font-bold text-detective-navy mb-6">
              Processo de Investigação Jurídica
            </h2>
            <p className="text-professional max-w-3xl mx-auto">
              Metodologia técnica rigorosa para garantir a validade e admissibilidade das provas coletadas.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <Card className="card-professional text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-detective-gold/20 to-detective-navy/20 flex items-center justify-center">
                  <FileText className="w-8 h-8 text-detective-gold" />
                </div>
                <h3 className="font-semibold text-detective-navy mb-3">1. Análise do Caso</h3>
                <p className="text-professional-grey">
                  Estudo detalhado da demanda jurídica e definição da estratégia investigativa.
                </p>
              </CardContent>
            </Card>

            <Card className="card-professional text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-detective-gold/20 to-detective-navy/20 flex items-center justify-center">
                  <Search className="w-8 h-8 text-detective-gold" />
                </div>
                <h3 className="font-semibold text-detective-navy mb-3">2. Investigação</h3>
                <p className="text-professional-grey">
                  Coleta de evidências seguindo protocolos técnicos e preservação da cadeia de custódia.
                </p>
              </CardContent>
            </Card>

            <Card className="card-professional text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-detective-gold/20 to-detective-navy/20 flex items-center justify-center">
                  <Camera className="w-8 h-8 text-detective-gold" />
                </div>
                <h3 className="font-semibold text-detective-navy mb-3">3. Documentação</h3>
                <p className="text-professional-grey">
                  Registro detalhado de todas as evidências com documentação fotográfica e técnica.
                </p>
              </CardContent>
            </Card>

            <Card className="card-professional text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-detective-gold/20 to-detective-navy/20 flex items-center justify-center">
                  <ClipboardCheck className="w-8 h-8 text-detective-gold" />
                </div>
                <h3 className="font-semibold text-detective-navy mb-3">4. Laudo Técnico</h3>
                <p className="text-professional-grey">
                  Elaboração de relatório técnico com validade legal para uso processual.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-detective-navy/95 to-detective-navy">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Precisa de Suporte Investigativo Jurídico?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Entre em contato para uma consultoria especializada sobre seu caso jurídico. 
            Oferecemos suporte técnico para advogados e escritórios.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
              size="lg"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp (61) 98284-4543
            </Button>
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 font-semibold px-8 py-4 rounded-lg backdrop-blur-sm transition-all duration-300 w-full sm:w-auto"
              size="lg"
            >
              <Scale className="w-5 h-5 mr-2" />
              Consultoria Jurídica
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LegalInvestigation;