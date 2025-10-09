import { MessageCircle, Phone, MapPin, Shield, Clock, Mail } from "lucide-react";

const Footer = () => {
  const handleWhatsAppClick = () => {
    const message = "Olá! Gostaria de falar com o Detetive Regis.";
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
                <span>Escritório: Asa Sul, Brasília DF</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <Clock className="w-5 h-5" />
                <span>Atendimento 24 horas</span>
              </div>
            </div>
          </div>

          {/* Services with Internal Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Principais Serviços</h3>
            <ul className="space-y-2 text-white/80">
              <li>
                <a href="/investigacao-conjugal" className="hover:text-detective-gold transition-colors">
                  • Investigação Conjugal no DF
                </a>
              </li>
              <li>
                <a href="/servicos-ciberneticos" className="hover:text-detective-gold transition-colors">
                  • Serviços Cibernéticos e Digitais
                </a>
              </li>
              <li>
                <a href="/investigacao-juridica" className="hover:text-detective-gold transition-colors">
                  • Investigação de Antecedentes
                </a>
              </li>
              <li>
                <a href="/investigacao-empresarial" className="hover:text-detective-gold transition-colors">
                  • Investigação Corporativa
                </a>
              </li>
              <li>
                <a href="/localizacao-pessoas" className="hover:text-detective-gold transition-colors">
                  • Localização de Pessoas
                </a>
              </li>
              <li>
                <a href="/investigacao-familiar" className="hover:text-detective-gold transition-colors">
                  • Investigação Familiar
                </a>
              </li>
            </ul>
            
            {/* Service Areas */}
            <h3 className="font-semibold text-lg mb-4 mt-6">Áreas de Atendimento</h3>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>• Detetive Asa Norte Brasília</li>
              <li>• Detetive Asa Sul Brasília</li>
              <li>• Detetive Águas Claras</li>
              <li>• Detetive Taguatinga</li>
              <li>• Detetive Ceilândia</li>
              <li>• Detetive Lago Sul e Norte</li>
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