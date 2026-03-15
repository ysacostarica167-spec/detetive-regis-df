import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { serviceSchema, breadcrumbSchema } from "@/data/structuredData";
import { usePageTracking } from "@/hooks/usePageTracking";
import { trackWhatsAppClick, trackCTAClick, trackServiceInterest } from "@/utils/analytics";
import { 
  Car, 
  MessageCircle, 
  Search, 
  FileText, 
  Shield, 
  Eye,
  MapPin,
  AlertTriangle,
  Users,
  Clock
} from "lucide-react";

const VehicleInvestigation = () => {
  usePageTracking('Investigação Veicular DF', 'Investigação Veicular');
  
  const structuredData = [
    serviceSchema(
      "Descobrir Proprietário de Veículo - Levantamento de Endereço Proprietário Veículo DF",
      "Descobrir proprietário de veículo em Brasília DF. Levantamento de endereço proprietário veículo. Investigação veicular completa com detetive particular especializado."
    ),
    breadcrumbSchema([
      { name: "Início", url: "/" },
      { name: "Investigação Veicular", url: "/investigacao-veicular" }
    ])
  ];

  const handleWhatsAppClick = () => {
    const message = "Olá! Preciso de investigação veicular. Descobrir proprietário de veículo em Brasília.";
    const phoneNumber = "5561982844543";
    const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    trackWhatsAppClick('Investigação Veicular');
    trackCTAClick('WhatsApp - Investigação Veicular', 'veicular_page');
    trackServiceInterest('Investigação Veicular DF', 300);
    
    try {
      window.open(waUrl, '_blank');
    } catch (error) {
      window.open("tel:+5561982844543", "_blank");
    }
  };

  const vehicleServices = [
    {
      icon: <Car className="w-8 h-8 text-detective-gold" />,
      title: "Descobrir Proprietário de Veículo",
      description: "Identificação completa do proprietário de qualquer veículo através de investigação profissional.",
      features: ["Consulta por placa", "Identificação do proprietário", "Histórico do veículo", "Relatório completo"]
    },
    {
      icon: <MapPin className="w-8 h-8 text-detective-gold" />,
      title: "Levantamento de Endereço do Proprietário",
      description: "Localização do endereço residencial e comercial do proprietário do veículo investigado.",
      features: ["Endereço residencial", "Endereço comercial", "Confirmação in loco", "Mapeamento de rotina"]
    },
    {
      icon: <Search className="w-8 h-8 text-detective-gold" />,
      title: "Investigação de Histórico Veicular",
      description: "Levantamento completo do histórico do veículo incluindo multas, sinistros e proprietários anteriores.",
      features: ["Histórico de multas", "Registro de sinistros", "Proprietários anteriores", "Restrições judiciais"]
    },
    {
      icon: <Eye className="w-8 h-8 text-detective-gold" />,
      title: "Monitoramento de Veículo",
      description: "Acompanhamento e monitoramento discreto de veículos para investigações conjugais e empresariais.",
      features: ["Rastreamento de rotas", "Horários e destinos", "Documentação fotográfica", "Relatório de movimentação"]
    }
  ];

  const useCases = [
    "Acidente de trânsito - identificar condutor",
    "Investigação conjugal - veículo suspeito",
    "Cobrança de dívidas - localizar devedor",
    "Processo judicial - identificar parte",
    "Ameaças ou perseguição - identificar autor",
    "Verificação de veículo antes da compra",
    "Investigação empresarial - veículo corporativo",
    "Localização de testemunhas"
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Descobrir Proprietário de Veículo DF | Levantamento Endereço Proprietário | Detetive Brasília"
        description="Descobrir proprietário de veículo em Brasília DF. Levantamento de endereço proprietário veículo. Investigação veicular completa com detetive particular especializado em Brasília DF. Consulta sigilosa."
        keywords="descobrir proprietário de veículo, levantamento de endereço proprietário veículo, descobrir dono de veículo brasília, investigação veicular df, consulta proprietário veículo brasília, detetive particular brasília df, investigação de placa df, rastreamento de veículo brasília, detetive particular águas claras, detetive particular taguatinga"
        canonical="/investigacao-veicular"
        structuredData={structuredData}
      />
      <Header />
      <Breadcrumbs />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-detective-navy via-detective-navy/95 to-detective-navy/90">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge className="mb-6 bg-detective-gold/20 text-detective-gold border-detective-gold/30">
              <Car className="w-4 h-4 mr-2" />
              Especialista em Investigação Veicular
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="block text-white">Descobrir Proprietário</span>
              <span className="block text-detective-gold bg-gradient-to-r from-detective-gold to-detective-gold/80 bg-clip-text text-transparent">de Veículo em Brasília</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-3xl mx-auto leading-relaxed">
              Levantamento de Endereço • Identificação de Proprietário • Investigação Veicular DF
            </p>
            
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Detetive particular especializado em investigação veicular em Brasília DF. 
              Descubra o proprietário de qualquer veículo com sigilo absoluto e rapidez.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={handleWhatsAppClick}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
                size="lg"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Consultar Veículo
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
              Serviços de Investigação Veicular
            </h2>
            <p className="text-professional max-w-3xl mx-auto">
              Oferecemos investigação veicular completa em Brasília DF para descobrir proprietários, 
              levantar endereços e monitorar veículos com máximo sigilo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {vehicleServices.map((service, index) => (
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

          {/* Use Cases */}
          <div className="bg-gradient-to-br from-muted/50 to-muted rounded-2xl p-8">
            <h3 className="text-xl md:text-2xl font-semibold text-detective-navy text-center mb-8">
              Quando Investigar um Veículo?
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {useCases.map((useCase, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-white/60 rounded-lg">
                  <AlertTriangle className="w-5 h-5 text-detective-gold flex-shrink-0" />
                  <span className="text-professional-grey font-medium text-sm">{useCase}</span>
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
              Como Funciona a Investigação Veicular
            </h2>
            <p className="text-professional max-w-3xl mx-auto">
              Processo rápido e sigiloso para descobrir o proprietário de qualquer veículo 
              em Brasília DF e levantar endereço completo.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <Card className="card-professional text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-detective-gold/20 to-detective-navy/20 flex items-center justify-center">
                  <Car className="w-8 h-8 text-detective-gold" />
                </div>
                <h3 className="font-semibold text-detective-navy mb-3">1. Dados do Veículo</h3>
                <p className="text-professional-grey">
                  Informe a placa, modelo ou qualquer informação disponível sobre o veículo.
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
                  Realizamos consultas e investigação de campo para identificar o proprietário.
                </p>
              </CardContent>
            </Card>

            <Card className="card-professional text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-detective-gold/20 to-detective-navy/20 flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-detective-gold" />
                </div>
                <h3 className="font-semibold text-detective-navy mb-3">3. Localização</h3>
                <p className="text-professional-grey">
                  Levantamento do endereço completo do proprietário com confirmação presencial.
                </p>
              </CardContent>
            </Card>

            <Card className="card-professional text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-detective-gold/20 to-detective-navy/20 flex items-center justify-center">
                  <FileText className="w-8 h-8 text-detective-gold" />
                </div>
                <h3 className="font-semibold text-detective-navy mb-3">4. Relatório</h3>
                <p className="text-professional-grey">
                  Entrega de relatório completo com dados do proprietário e endereço verificado.
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
            Precisa Descobrir o Dono de um Veículo?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Entre em contato para uma consulta sigilosa sobre investigação veicular em Brasília DF.
            Resultados rápidos com total discrição.
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
              <Car className="w-5 h-5 mr-2" />
              Consultar Veículo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VehicleInvestigation;
