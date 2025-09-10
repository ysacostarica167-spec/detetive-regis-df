import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { serviceSchema, breadcrumbSchema } from "@/data/structuredData";
import { 
  Shield, 
  MessageCircle, 
  Smartphone, 
  Wifi, 
  Database, 
  Eye, 
  Lock, 
  AlertTriangle,
  Search,
  FileText,
  Computer,
  Network
} from "lucide-react";

const CyberServices = () => {
  const structuredData = [
    serviceSchema(
      "Serviços Cibernéticos de Investigação",
      "Investigação digital profissional, perícia forense, análise de dispositivos móveis e segurança cibernética em Brasília DF"
    ),
    breadcrumbSchema([
      { name: "Início", url: "/" },
      { name: "Serviços Cibernéticos", url: "/servicos-ciberneticos" }
    ])
  ];

  const handleWhatsAppClick = () => {
    const message = "Olá! Tenho interesse nos serviços cibernéticos de investigação.";
    const phoneNumber = "5561982844543";
    
    // Try multiple WhatsApp URL formats for better compatibility
    const urls = [
      `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`,
      `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`,
      `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`,
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    ];
    
    // Try to open WhatsApp, fallback to web version if app is not available
    let opened = false;
    for (const url of urls) {
      try {
        window.open(url, '_blank');
        opened = true;
        break;
      } catch (error) {
        continue;
      }
    }
    
    // Final fallback - open direct tel link
    if (!opened) {
      window.open("tel:+5561982844543", "_blank");
    }
  };

  const cyberServices = [
    {
      icon: <Smartphone className="w-8 h-8 text-detective-gold" />,
      title: "Investigação Digital de Celulares",
      description: "Análise forense de dispositivos móveis, recuperação de dados deletados, histórico de conversas e localização.",
      features: ["Recuperação de mensagens apagadas", "Análise de WhatsApp, Telegram, Instagram", "Rastreamento de localização", "Histórico de navegação"]
    },
    {
      icon: <Computer className="w-8 h-8 text-detective-gold" />,
      title: "Perícia em Computadores",
      description: "Análise forense completa de computadores e laptops para coleta de evidências digitais.",
      features: ["Recuperação de arquivos deletados", "Análise de histórico de atividades", "Investigação de fraudes digitais", "Coleta de evidências legais"]
    },
    {
      icon: <Network className="w-8 h-8 text-detective-gold" />,
      title: "Investigação de Redes Sociais",
      description: "Monitoramento e análise de atividades em redes sociais, perfis falsos e comportamentos suspeitos.",
      features: ["Análise de perfis suspeitos", "Investigação de cyberbullying", "Rastreamento de contas falsas", "Coleta de evidências digitais"]
    },
    {
      icon: <Database className="w-8 h-8 text-detective-gold" />,
      title: "Recuperação de Dados",
      description: "Recuperação profissional de dados perdidos, deletados ou corrompidos em diversos dispositivos.",
      features: ["Recuperação de fotos e vídeos", "Restauração de documentos", "Dados de HDs danificados", "Backup de evidências"]
    },
    {
      icon: <Eye className="w-8 h-8 text-detective-gold" />,
      title: "Monitoramento Digital",
      description: "Monitoramento legal de atividades digitais para investigações conjugais e corporativas.",
      features: ["Monitoramento de funcionários", "Investigação de infidelidade digital", "Controle parental", "Vigilância empresarial"]
    },
    {
      icon: <Lock className="w-8 h-8 text-detective-gold" />,
      title: "Segurança Cibernética",
      description: "Avaliação de vulnerabilidades e proteção contra ameaças digitais para empresas e pessoas físicas.",
      features: ["Análise de vulnerabilidades", "Proteção contra hackers", "Consultoria em segurança", "Treinamento preventivo"]
    }
  ];

  const investigationTypes = [
    "Infidelidade Digital",
    "Fraudes Online",
    "Cyberbullying",
    "Chantagem Digital",
    "Vazamento de Dados",
    "Espionagem Industrial",
    "Roubo de Identidade",
    "Crimes Virtuais"
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Serviços Cibernéticos - Detetive Particular DF | Investigação Digital Brasília"
        description="Detetive especializado em investigação digital, perícia forense, análise de celulares e computadores em Brasília DF. Crimes cibernéticos, recuperação de dados, evidências digitais."
        keywords="investigação digital df, detetive cibernético brasília, perícia forense digital, investigação celular df, crimes digitais brasília, recuperação dados df, evidências digitais"
        canonical="/servicos-ciberneticos"
        structuredData={structuredData}
      />
      <Header />
      <Breadcrumbs />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-detective-navy via-detective-navy/95 to-detective-navy/90">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge className="mb-6 bg-detective-gold/20 text-detective-gold border-detective-gold/30">
              <Shield className="w-4 h-4 mr-2" />
              Especialista em Investigação Digital
            </Badge>
            
            <h1 className="heading-hero mb-6">
              <span className="block">Serviços</span>
              <span className="block text-detective-gold">Cibernéticos</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-3xl mx-auto leading-relaxed">
              Investigação Digital Profissional • Perícia Forense • Segurança Cibernética
            </p>
            
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Detetive especializado em crimes digitais e investigação cibernética em Brasília DF. 
              Análise forense de dispositivos, recuperação de dados e evidências digitais.
            </p>

            <Button 
              onClick={handleWhatsAppClick}
              className="btn-accent group"
              size="lg"
            >
              <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Consulta Especializada
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading-section text-detective-navy mb-6">
              Serviços de Investigação Digital
            </h2>
            <p className="text-professional max-w-3xl mx-auto">
              Oferecemos serviços especializados em investigação cibernética, perícia forense digital 
              e segurança da informação para pessoas físicas e jurídicas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {cyberServices.map((service, index) => (
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
          <div className="bg-gradient-to-br from-muted/50 to-muted rounded-2xl p-8">
            <h3 className="heading-card text-detective-navy text-center mb-8">
              Tipos de Investigação Cibernética
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {investigationTypes.map((type, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-white/60 rounded-lg">
                  <AlertTriangle className="w-5 h-5 text-detective-gold flex-shrink-0" />
                  <span className="text-professional-grey font-medium">{type}</span>
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
              Processo de Investigação Digital
            </h2>
            <p className="text-professional max-w-3xl mx-auto">
              Metodologia profissional e certificada para garantir a validade legal das evidências coletadas.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="card-professional text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-detective-gold/20 to-detective-navy/20 flex items-center justify-center">
                  <Search className="w-8 h-8 text-detective-gold" />
                </div>
                <h3 className="font-semibold text-detective-navy mb-3">1. Análise Inicial</h3>
                <p className="text-professional-grey">
                  Avaliação dos dispositivos e definição da estratégia de investigação digital mais adequada.
                </p>
              </CardContent>
            </Card>

            <Card className="card-professional text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-detective-gold/20 to-detective-navy/20 flex items-center justify-center">
                  <Database className="w-8 h-8 text-detective-gold" />
                </div>
                <h3 className="font-semibold text-detective-navy mb-3">2. Coleta Forense</h3>
                <p className="text-professional-grey">
                  Extração segura e preservação das evidências digitais seguindo protocolos técnicos rigorosos.
                </p>
              </CardContent>
            </Card>

            <Card className="card-professional text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-detective-gold/20 to-detective-navy/20 flex items-center justify-center">
                  <FileText className="w-8 h-8 text-detective-gold" />
                </div>
                <h3 className="font-semibold text-detective-navy mb-3">3. Relatório Legal</h3>
                <p className="text-professional-grey">
                  Elaboração de laudo técnico detalhado com validade legal para uso em processos judiciais.
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
            Precisa de Investigação Digital?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Entre em contato para uma consulta especializada e orçamento personalizado 
            para seu caso de investigação cibernética.
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
              variant="outline-light" 
              size="lg"
            >
              <Shield className="w-5 h-5 mr-2" />
              Consulta Gratuita
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CyberServices;