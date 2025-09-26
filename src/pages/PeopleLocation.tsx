import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { serviceSchema, breadcrumbSchema } from "@/data/structuredData";
import { 
  MapPin, 
  MessageCircle, 
  Search, 
  Users, 
  Heart, 
  DollarSign, 
  Clock, 
  Shield,
  FileText,
  Eye,
  Phone,
  Globe
} from "lucide-react";

const PeopleLocation = () => {
  const structuredData = [
    serviceSchema(
      "Localização de Pessoas Desaparecidas DF - Encontrar Devedor de Pensão DF",
      "Localização de pessoas desaparecidas DF. Encontrar devedor de pensão DF. Investigação familiar em Brasília com detetive particular especializado em localização."
    ),
    breadcrumbSchema([
      { name: "Início", url: "/" },
      { name: "Localização de Pessoas", url: "/localizacao-pessoas" }
    ])
  ];

  const handleWhatsAppClick = () => {
    const message = "Olá! Preciso localizar uma pessoa desaparecida em Brasília DF.";
    const phoneNumber = "5561982844543";
    
    const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    try {
      window.open(waUrl, '_blank');
    } catch (error) {
      window.open("tel:+5561982844543", "_blank");
    }
  };

  const locationServices = [
    {
      icon: <MapPin className="w-8 h-8 text-detective-gold" />,
      title: "Localização de Pessoas Desaparecidas DF",
      description: "Investigação especializada para encontrar pessoas desaparecidas em Brasília e região.",
      features: ["Busca nacional e internacional", "Análise de rastros digitais", "Investigação de campo", "Suporte às famílias"]
    },
    {
      icon: <DollarSign className="w-8 h-8 text-detective-gold" />,
      title: "Encontrar Devedor de Pensão DF",
      description: "Localização de devedores de pensão alimentícia para execução judicial.",
      features: ["Investigação patrimonial", "Localização de endereço", "Verificação de renda", "Suporte legal completo"]
    },
    {
      icon: <Heart className="w-8 h-8 text-detective-gold" />,
      title: "Investigação Familiar em Brasília",
      description: "Investigação de questões familiares, localização de parentes e reunificação.",
      features: ["Busca de familiares", "Investigação de paternidade", "Localização de herdeiros", "Genealogia investigativa"]
    },
    {
      icon: <Users className="w-8 h-8 text-detective-gold" />,
      title: "Localização de Testemunhas",
      description: "Encontrar testemunhas importantes para processos judiciais e investigações.",
      features: ["Busca de testemunhas", "Verificação de identidade", "Coleta de depoimentos", "Suporte processual"]
    }
  ];

  const searchMethods = [
    "Bancos de dados oficiais",
    "Redes sociais e internet", 
    "Investigação de campo",
    "Análise de documentos",
    "Contatos e relacionamentos",
    "Registros públicos",
    "Investigação digital",
    "Parcerias profissionais"
  ];

  const caseTypes = [
    {
      icon: <Heart className="w-6 h-6 text-detective-gold" />,
      title: "Pessoas Desaparecidas",
      description: "Familiares, amigos ou conhecidos que perderam contato."
    },
    {
      icon: <DollarSign className="w-6 h-6 text-detective-gold" />,
      title: "Devedores de Pensão", 
      description: "Localização para execução de pensão alimentícia."
    },
    {
      icon: <Users className="w-6 h-6 text-detective-gold" />,
      title: "Parentes Distantes",
      description: "Busca de familiares para questões de herança."
    },
    {
      icon: <FileText className="w-6 h-6 text-detective-gold" />,
      title: "Testemunhas Judiciais",
      description: "Localização para processos e investigações."
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Localização de Pessoas Desaparecidas DF - Encontrar Devedor de Pensão DF | Investigação Familiar Brasília"
        description="Localização de pessoas desaparecidas DF. Encontrar devedor de pensão DF. Investigação familiar em Brasília com detetive particular especializado em localização de pessoas em Brasília DF."
        keywords="localização de pessoas desaparecidas df, encontrar devedor de pensão df, investigação familiar em brasília, detetive particular df, localização pessoas brasília, busca familiares df, encontrar pessoa desaparecida brasília, detetive particular águas claras, detetive particular taguatinga, detetive particular ceilândia, detetive particular guará, detetive particular lago sul, detetive particular asa norte, detetive particular entorno de brasília"
        canonical="/localizacao-pessoas"
        structuredData={structuredData}
      />
      <Header />
      <Breadcrumbs />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-detective-navy via-detective-navy/95 to-detective-navy/90">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge className="mb-6 bg-detective-gold/20 text-detective-gold border-detective-gold/30">
              <MapPin className="w-4 h-4 mr-2" />
              Especialista em Localização de Pessoas
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="block text-white">Localização de</span>
              <span className="block text-detective-gold bg-gradient-to-r from-detective-gold to-detective-gold/80 bg-clip-text text-transparent">Pessoas Desaparecidas DF</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-3xl mx-auto leading-relaxed">
              Encontrar Devedor de Pensão • Investigação Familiar • Localização Profissional
            </p>
            
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Detetive particular especializado em localização de pessoas desaparecidas DF. 
              Encontrar devedor de pensão e investigação familiar em Brasília com métodos avançados.
            </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
              size="lg"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Solicitar Localização
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
              Serviços de Localização de Pessoas
            </h2>
            <p className="text-professional max-w-3xl mx-auto">
              Oferecemos localização profissional de pessoas em Brasília DF com métodos avançados 
              de investigação e ampla rede de contatos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {locationServices.map((service, index) => (
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

          {/* Case Types */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {caseTypes.map((caseType, index) => (
              <Card key={index} className="card-professional text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-detective-gold/20 to-detective-navy/20 flex items-center justify-center">
                    {caseType.icon}
                  </div>
                  <h3 className="font-semibold text-detective-navy mb-2">{caseType.title}</h3>
                  <p className="text-sm text-professional-grey">{caseType.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Search Methods */}
          <div className="bg-gradient-to-br from-muted/50 to-muted rounded-2xl p-8">
            <h3 className="text-xl md:text-2xl font-semibold text-detective-navy text-center mb-8">
              Métodos de Busca e Localização
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {searchMethods.map((method, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-white/60 rounded-lg">
                  <Search className="w-5 h-5 text-detective-gold flex-shrink-0" />
                  <span className="text-professional-grey font-medium">{method}</span>
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
              Como Funciona a Localização de Pessoas
            </h2>
            <p className="text-professional max-w-3xl mx-auto">
              Processo estruturado e eficiente para localização de pessoas desaparecidas 
              com máxima discrição e profissionalismo.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <Card className="card-professional text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-detective-gold/20 to-detective-navy/20 flex items-center justify-center">
                  <FileText className="w-8 h-8 text-detective-gold" />
                </div>
                <h3 className="font-semibold text-detective-navy mb-3">1. Coleta de Dados</h3>
                <p className="text-professional-grey">
                  Reunião de todas as informações disponíveis sobre a pessoa procurada.
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
                  Busca sistemática usando múltiplas fontes e métodos de investigação.
                </p>
              </CardContent>
            </Card>

            <Card className="card-professional text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-detective-gold/20 to-detective-navy/20 flex items-center justify-center">
                  <Eye className="w-8 h-8 text-detective-gold" />
                </div>
                <h3 className="font-semibold text-detective-navy mb-3">3. Verificação</h3>
                <p className="text-professional-grey">
                  Confirmação da identidade e localização através de investigação de campo.
                </p>
              </CardContent>
            </Card>

            <Card className="card-professional text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-detective-gold/20 to-detective-navy/20 flex items-center justify-center">
                  <Phone className="w-8 h-8 text-detective-gold" />
                </div>
                <h3 className="font-semibold text-detective-navy mb-3">4. Relatório</h3>
                <p className="text-professional-grey">
                  Entrega de relatório completo com localização e informações encontradas.
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
            Precisa Localizar Alguém? Podemos Ajudar
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Entre em contato para uma consulta sobre localização de pessoas desaparecidas. 
            Atendimento discreto e profissional em Brasília DF.
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
              <MapPin className="w-5 h-5 mr-2" />
              Solicitar Localização
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PeopleLocation;