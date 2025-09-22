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
  Eye, 
  Camera, 
  Smartphone, 
  FileText, 
  Shield, 
  AlertCircle,
  Search,
  Clock,
  Users,
  MapPin
} from "lucide-react";

const ConjugalInvestigation = () => {
  const structuredData = [
    serviceSchema(
      "Investigação Conjugal DF - Como Descobrir Traição em Brasília",
      "Detetive para infidelidade DF. Como descobrir traição em Brasília com investigação conjugal profissional e sigilosa. Investigação de relacionamentos, infidelidade e suspeitas conjugais."
    ),
    breadcrumbSchema([
      { name: "Início", url: "/" },
      { name: "Investigação Conjugal", url: "/investigacao-conjugal" }
    ])
  ];

  const handleWhatsAppClick = () => {
    const message = "Olá! Preciso de investigação conjugal. Como descobrir traição em Brasília?";
    const phoneNumber = "5561982844543";
    
    const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    try {
      window.open(waUrl, '_blank');
    } catch (error) {
      window.open("tel:+5561982844543", "_blank");
    }
  };

  const conjugalServices = [
    {
      icon: <Eye className="w-8 h-8 text-detective-gold" />,
      title: "Como Descobrir Traição em Brasília",
      description: "Investigação sigilosa de infidelidade conjugal com métodos profissionais e discretos.",
      features: ["Vigilância discreta", "Coleta de evidências", "Relatório detalhado", "Suporte emocional"]
    },
    {
      icon: <Smartphone className="w-8 h-8 text-detective-gold" />,
      title: "Detetive Particular para Celular",
      description: "Investigação digital de dispositivos móveis para descobrir infidelidade e traição.",
      features: ["Análise de mensagens", "Redes sociais", "Apps de namoro", "Localização GPS"]
    },
    {
      icon: <Camera className="w-8 h-8 text-detective-gold" />,
      title: "Documentação de Infidelidade",
      description: "Coleta profissional de provas de traição com validade legal para processos de divórcio.",
      features: ["Fotografias como evidência", "Vídeos discretos", "Relatórios técnicos", "Testemunhas"]
    },
    {
      icon: <Users className="w-8 h-8 text-detective-gold" />,
      title: "Investigação de Relacionamentos",
      description: "Verificação completa de parceiros e investigação de comportamentos suspeitos.",
      features: ["Background check", "Investigação de passado", "Verificação de vínculos", "Análise comportamental"]
    }
  ];

  const suspicionSigns = [
    "Mudanças no comportamento",
    "Uso excessivo do celular", 
    "Horários inexplicáveis",
    "Gastos não justificados",
    "Distanciamento emocional",
    "Mentiras constantes",
    "Mudança na intimidade",
    "Segredos sobre trabalho"
  ];

  const investigationProcess = [
    {
      icon: <Search className="w-8 h-8 text-detective-gold" />,
      title: "Análise do Caso",
      description: "Entrevista sigilosa para entender as suspeitas e definir estratégia de investigação."
    },
    {
      icon: <Eye className="w-8 h-8 text-detective-gold" />,
      title: "Investigação Discreta", 
      description: "Vigilância profissional e coleta de evidências sem comprometer o sigilo."
    },
    {
      icon: <FileText className="w-8 h-8 text-detective-gold" />,
      title: "Relatório Completo",
      description: "Entrega de evidências documentadas com fotos, vídeos e relatório detalhado."
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Investigação Conjugal DF - Como Descobrir Traição em Brasília | Detetive para Infidelidade"
        description="Como descobrir traição em Brasília? Detetive para infidelidade DF com investigação conjugal profissional e sigilosa. Investigação de relacionamentos, suspeitas conjugais e infidelidade em Brasília DF."
        keywords="investigação conjugal df, como descobrir traição em brasília, detetive para infidelidade df, detetive particular df, investigação de traição brasília, infidelidade conjugal df, suspeitas conjugais brasília, investigação relacionamento df, detetive particular águas claras, detetive particular taguatinga, detetive particular ceilândia, detetive particular guará, detetive particular lago sul, detetive particular asa norte, detetive particular entorno de brasília"
        canonical="/investigacao-conjugal"
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
              Especialista em Investigação Conjugal
            </Badge>
            
            <h1 className="heading-hero mb-6">
              <span className="block">Como Descobrir</span>
              <span className="block text-detective-gold">Traição em Brasília</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-3xl mx-auto leading-relaxed">
              Investigação Conjugal DF • Detetive para Infidelidade • Investigação Sigilosa
            </p>
            
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Detetive particular especializado em investigação conjugal em Brasília DF. 
              Descubra a verdade sobre infidelidade com sigilo absoluto e evidências legais.
            </p>

            <Button 
              onClick={handleWhatsAppClick}
              className="btn-accent group"
              size="lg"
            >
              <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Consulta Sigilosa
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading-section text-detective-navy mb-6">
              Serviços de Investigação Conjugal
            </h2>
            <p className="text-professional max-w-3xl mx-auto">
              Oferecemos investigação conjugal completa em Brasília DF para descobrir traição 
              e infidelidade com máximo sigilo e profissionalismo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {conjugalServices.map((service, index) => (
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

          {/* Suspicion Signs */}
          <div className="bg-gradient-to-br from-muted/50 to-muted rounded-2xl p-8 mb-16">
            <h3 className="heading-card text-detective-navy text-center mb-8">
              Sinais de Possível Infidelidade
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {suspicionSigns.map((sign, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-white/60 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-detective-gold flex-shrink-0" />
                  <span className="text-professional-grey font-medium">{sign}</span>
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
              Como Funciona a Investigação Conjugal
            </h2>
            <p className="text-professional max-w-3xl mx-auto">
              Processo sigiloso e profissional para descobrir a verdade sobre infidelidade 
              em Brasília DF com máxima discrição.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {investigationProcess.map((step, index) => (
              <Card key={index} className="card-professional text-center">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-detective-gold/20 to-detective-navy/20 flex items-center justify-center">
                    {step.icon}
                  </div>
                  <h3 className="font-semibold text-detective-navy mb-3">{index + 1}. {step.title}</h3>
                  <p className="text-professional-grey">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-detective-navy/95 to-detective-navy">
        <div className="container mx-auto px-4 text-center">
          <h2 className="heading-section text-white mb-6">
            Suspeita de Traição? Descubra a Verdade
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Entre em contato para uma consulta sigilosa sobre investigação conjugal em Brasília. 
            Atendimento discreto e confidencial 24 horas.
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
              <Shield className="w-5 h-5 mr-2" />
              Consulta Sigilosa
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ConjugalInvestigation;