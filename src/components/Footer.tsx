import { MessageCircle, MapPin, Shield, Clock, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const handleWhatsAppClick = () => {
    const message = "Olá! Gostaria de falar com o Detetive Regis.";
    const phoneNumber = "5561982844543";
    const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    try {
      window.open(waUrl, '_blank');
    } catch {
      window.open("tel:+5561982844543", "_blank");
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[hsl(210,45%,8%)] text-white relative noise-overlay overflow-hidden">
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-4">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <Shield className="w-8 h-8 text-detective-gold group-hover:rotate-12 transition-transform duration-300" />
              <div>
                <div className="font-playfair font-bold text-xl">Detetive Regis</div>
                <div className="text-xs text-white/40 font-mono uppercase tracking-wider">Investigação Profissional</div>
              </div>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Graduado em investigação profissional, oferecendo serviços com total discrição 
              e eficiência em todo o Distrito Federal.
            </p>
            <div className="flex items-center gap-2 text-detective-gold/70 text-xs font-mono uppercase tracking-wider">
              <div className="glow-dot !w-1.5 !h-1.5"></div>
              <span>100% Confidencial</span>
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h3 className="heading-editorial text-detective-gold mb-6">Contato</h3>
            <div className="space-y-4">
              <button
                onClick={handleWhatsAppClick}
                className="flex items-center gap-3 text-white/60 hover:text-detective-gold transition-colors text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>(61) 98284-4543</span>
              </button>
              <a
                href="mailto:contato@regis.com.br"
                className="flex items-center gap-3 text-white/60 hover:text-detective-gold transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                <span>contato@regis.com.br</span>
              </a>
              <div className="flex items-center gap-3 text-white/60 text-sm">
                <MapPin className="w-4 h-4" />
                <span>Escritório: Asa Sul, Brasília DF</span>
              </div>
              <div className="flex items-center gap-3 text-white/60 text-sm">
                <Clock className="w-4 h-4" />
                <span>Atendimento 24 horas</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="md:col-span-4">
            <h3 className="heading-editorial text-detective-gold mb-6">Serviços</h3>
            <ul className="space-y-3">
              {[
                "Investigação Conjugal",
                "Vigilância e Monitoramento",
                "Investigação de Antecedentes",
                "Investigação Corporativa",
                "Localização de Pessoas",
                "Perícia e Consultoria"
              ].map((service) => (
                <li key={service} className="text-white/50 text-sm hover:text-white/80 transition-colors cursor-default">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-white/30 text-xs">
            © {currentYear} Detetive Particular Regis. Todos os direitos reservados.
          </span>
          <div className="flex items-center gap-2 text-white/30 text-xs">
            <Shield className="w-3 h-3" />
            <span>Sigilo profissional garantido por lei</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;