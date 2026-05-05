import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Building2, MapPin, Car, Phone } from "lucide-react";
import investigationIcon from "@/assets/investigation-icon-hq.jpg";
import surveillanceIcon from "@/assets/surveillance-icon-hq.jpg";
import LazyImage from "@/components/LazyImage";

const ServicesSection = () => {
  const services = [
    {
      icon: <Search className="w-8 h-8 text-detective-gold" />,
      title: "Investigação Conjugal (Traição)",
      description: "Provas em fotos e vídeos com data e hora em até 48h. Relatório com validade jurídica para divórcio. Sigilo absoluto.",
      image: investigationIcon,
    },
    {
      icon: <Building2 className="w-8 h-8 text-detective-gold" />,
      title: "Investigação Empresarial",
      description: "Apuração de fraudes internas, desvios, concorrência desleal e due diligence. Mais de 400 empresas no DF atendidas.",
      image: surveillanceIcon,
    },
    {
      icon: <MapPin className="w-8 h-8 text-detective-gold" />,
      title: "Localização de Pessoas",
      description: "Localização de devedores, herdeiros, parentes e desaparecidos no DF e entorno. Resultado médio em 7 dias úteis.",
    },
    {
      icon: <Car className="w-8 h-8 text-detective-gold" />,
      title: "Investigação Veicular",
      description: "Rastreamento e recuperação de veículos, verificação de uso indevido por terceiros e acompanhamento de rotas.",
    },
  ];

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

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-section text-detective-navy mb-6">
            Serviços Profissionais
          </h2>
          <p className="text-professional max-w-3xl mx-auto">
            Oferecemos uma ampla gama de serviços de investigação particular com total discrição, 
            profissionalismo e uso de tecnologia de ponta para garantir os melhores resultados.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="card-professional hover:shadow-[var(--shadow-accent)] hover:-translate-y-2 transition-all duration-300 group animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <CardHeader className="text-center">
                {service.image && (
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br from-detective-gold/20 to-detective-navy/20 flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-detective-gold/20">
                    <LazyImage
                      src={service.image} 
                      alt={`${service.title} - Detetive Particular DF`}
                      className="w-16 h-16 object-cover rounded-full group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                {!service.image && (
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-detective-gold/20 to-detective-navy/20 flex items-center justify-center group-hover:scale-110 transition-transform group-hover:shadow-lg group-hover:shadow-detective-gold/20">
                    {service.icon}
                  </div>
                )}
                <CardTitle className="heading-card text-detective-navy group-hover:text-detective-gold transition-colors duration-300">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-professional-grey text-center">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center animate-fade-in">
          <div className="bg-gradient-to-r from-detective-navy to-detective-navy-light rounded-2xl p-8 text-white hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
            <h3 className="text-2xl font-semibold mb-4">Precisa de uma Investigação?</h3>
            <p className="text-lg mb-6 text-white/90">
              Entre em contato para uma consulta gratuita e confidencial
            </p>
            <button 
              onClick={handleWhatsAppClick}
              className="btn-accent group"
            >
              <Phone className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Falar com Especialista
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;