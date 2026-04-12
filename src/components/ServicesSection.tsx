import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Camera, UserCheck, Building2, Heart, Scale, Phone } from "lucide-react";
import investigationIcon from "@/assets/investigation-icon-hq.jpg";
import surveillanceIcon from "@/assets/surveillance-icon-hq.jpg";
import LazyImage from "@/components/LazyImage";

const ServicesSection = () => {
  const services = [
    {
      icon: <Search className="w-8 h-8 text-detective-gold" />,
      title: "Investigação Conjugal",
      description: "Investigação discreta de infidelidade e comportamento conjugal com relatórios detalhados e evidências.",
      image: investigationIcon,
    },
    {
      icon: <Camera className="w-8 h-8 text-detective-gold" />,
      title: "Vigilância e Monitoramento",
      description: "Serviços de vigilância profissional para pessoas físicas e jurídicas com equipamentos modernos.",
      image: surveillanceIcon,
    },
    {
      icon: <UserCheck className="w-8 h-8 text-detective-gold" />,
      title: "Investigação de Antecedentes",
      description: "Verificação completa de histórico pessoal, profissional e financeiro de pessoas e empresas.",
    },
    {
      icon: <Building2 className="w-8 h-8 text-detective-gold" />,
      title: "Investigação Corporativa",
      description: "Investigações empresariais, fraudes internas, concorrência desleal e due diligence.",
    },
    {
      icon: <Heart className="w-8 h-8 text-detective-gold" />,
      title: "Localização de Pessoas",
      description: "Busca e localização de pessoas desaparecidas, parentes distantes e devedores.",
    },
    {
      icon: <Scale className="w-8 h-8 text-detective-gold" />,
      title: "Perícia e Consultoria",
      description: "Laudos técnicos, perícias particulares e consultoria especializada em investigação.",
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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