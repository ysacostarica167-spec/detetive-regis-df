import { MessageCircle, Phone, MapPin, Shield, Clock, Mail } from "lucide-react";

const Footer = () => {
  const handleWhatsAppClick = () => {
    const message = "Olá! Gostaria de falar com o Detetive Regis.";
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

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-detective-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-8 h-8 text-detective-gold" />
              <div>
                <div className="font-bold text-xl">Detetive Regis</div>
                <div className="text-sm text-white/80">Investigação Profissional</div>
              </div>
            </div>
            <p className="text-white/80 mb-4">
              Graduado em investigação profissional, oferecendo serviços de investigação 
              particular com total discrição e eficiência em todo o Distrito Federal.
            </p>
            <div className="flex items-center gap-2 text-detective-gold">
              <Shield className="w-4 h-4" />
              <span className="text-sm">100% Confidencial e Profissional</span>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contato</h3>
            <div className="space-y-3">
              <button 
                onClick={handleWhatsAppClick}
                className="flex items-center gap-3 text-white/80 hover:text-detective-gold transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span>(61) 98284-4543</span>
              </button>
              <a 
                href="mailto:contato@regis.com.br"
                className="flex items-center gap-3 text-white/80 hover:text-detective-gold transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>contato@regis.com.br</span>
              </a>
              <div className="flex items-center gap-3 text-white/80">
                <MapPin className="w-5 h-5" />
                <span>Todo o Distrito Federal</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <Clock className="w-5 h-5" />
                <span>Atendimento 24 horas</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Principais Serviços</h3>
            <ul className="space-y-2 text-white/80">
              <li>• Investigação Conjugal</li>
              <li>• Vigilância e Monitoramento</li>
              <li>• Investigação de Antecedentes</li>
              <li>• Investigação Corporativa</li>
              <li>• Localização de Pessoas</li>
              <li>• Perícia e Consultoria</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-8 pt-6 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/60 text-sm">
              © {currentYear} Detetive Particular Regis. Todos os direitos reservados.
            </div>
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <Shield className="w-4 h-4" />
              <span>Sigilo profissional garantido por lei</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;