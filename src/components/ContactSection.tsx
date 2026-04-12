import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Phone, Clock, MapPin, Shield, Mail } from "lucide-react";

const ContactSection = () => {
  const handleWhatsAppClick = () => {
    const message = "Olá! Gostaria de saber mais sobre os serviços de investigação.";
    const phoneNumber = "5561982844543";
    
    // Use wa.me as primary method (more reliable)
    const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    try {
      window.open(waUrl, '_blank');
    } catch (error) {
      // Fallback to direct phone call
      window.open("tel:+5561982844543", "_blank");
    }
  };

  const handlePhoneClick = () => {
    window.open("tel:+5561982844543", "_blank");
  };

  const handleEmailClick = () => {
    window.open("mailto:contatoregis.com.br", "_blank");
  };

  const contactInfo = [
    {
      icon: <MessageCircle className="w-6 h-6 text-detective-gold" />,
      title: "WhatsApp",
      value: "(61) 98284-4543",
      description: "Atendimento rápido e direto",
      action: handleWhatsAppClick
    },
    {
      icon: <Phone className="w-6 h-6 text-detective-gold" />,
      title: "Telefone",
      value: "(61) 98284-4543",
      description: "Ligação direta",
      action: handlePhoneClick
    },
    {
      icon: <Mail className="w-6 h-6 text-detective-gold" />,
      title: "E-mail",
      value: "contatoregis.com.br",
      description: "Contato por e-mail",
      action: handleEmailClick
    },
    {
      icon: <MapPin className="w-6 h-6 text-detective-gold" />,
      title: "Escritório",
      value: "Asa Sul, Brasília DF",
      description: "Atendimento em todo o Distrito Federal"
    },
    {
      icon: <Clock className="w-6 h-6 text-detective-gold" />,
      title: "Horário",
      value: "24 horas por dia",
      description: "Atendimento de emergência disponível"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-detective-navy to-detective-navy-light text-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-section text-white mb-6">
            Entre em Contato
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Consulta inicial gratuita e totalmente confidencial. 
            Estamos prontos para ajudar você a resolver sua situação.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <Card 
              key={index} 
              className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300 cursor-pointer"
              onClick={info.action}
            >
              <CardHeader className="text-center pb-2">
                <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-detective-gold/20 flex items-center justify-center">
                  {info.icon}
                </div>
                <CardTitle className="text-lg text-white">{info.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="font-semibold text-detective-gold mb-1">{info.value}</p>
                <p className="text-sm text-white/80">{info.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main CTA */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-8 text-center">
              <Shield className="w-16 h-16 mx-auto mb-6 text-detective-gold" />
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Precisa de uma Investigação Profissional?
              </h3>
              <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
                Nossa primeira consulta é sempre gratuita e confidencial. 
                Entre em contato agora e vamos discutir como podemos ajudar você a resolver sua situação.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={handleWhatsAppClick}
                  className="btn-accent"
                  size="lg"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Consulta Gratuita no WhatsApp
                </Button>
            <Button 
              onClick={handlePhoneClick}
              variant="outline-light"
              size="lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Ligar Agora
            </Button>
              </div>

              {/* Privacy Notice */}
              <div className="mt-8 pt-6 border-t border-white/20">
                <div className="flex items-center justify-center gap-2 text-white/80">
                  <Shield className="w-4 h-4" />
                  <span className="text-sm">
                    Todas as conversas são estritamente confidenciais e protegidas por sigilo profissional
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;