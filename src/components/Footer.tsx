import { MessageCircle, Phone, MapPin, Shield, Clock, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const handleWhatsAppClick = () => {
    const message = "Olá! Gostaria de falar com o Detetive Regis.";
    const phoneNumber = "5561982844543";
    const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    if (typeof window !== 'undefined' && (window as any).gtag_report_conversion) {
      (window as any).gtag_report_conversion(waUrl);
    } else {
      try { window.open(waUrl, '_blank'); } catch { window.open("tel:+5561982844543", "_blank"); }
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[hsl(220,45%,8%)] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-detective-gold/10 flex items-center justify-center">
                <Shield className="w-5 h-5 text-detective-gold" />
              </div>
              <div>
                <div className="font-display font-bold text-lg">Detetive Regis</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-white/40">Investigação Profissional</div>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-5">
              Graduado em investigação profissional, oferecendo serviços com total discrição 
              e eficiência em todo o Distrito Federal.
            </p>
            <div className="flex items-center gap-2 text-detective-gold text-xs">
              <Shield className="w-3.5 h-3.5" />
              <span>100% Confidencial e Profissional</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-5 text-white/60">Contato</h3>
            <div className="space-y-4">
              <button onClick={handleWhatsAppClick} className="flex items-center gap-3 text-white/60 hover:text-detective-gold transition-colors text-sm">
                <MessageCircle className="w-4 h-4" />
                <span>(61) 98284-4543</span>
              </button>
              <a href="mailto:contato@regis.com.br" className="flex items-center gap-3 text-white/60 hover:text-detective-gold transition-colors text-sm">
                <Mail className="w-4 h-4" />
                <span>contato@regis.com.br</span>
              </a>
              <div className="flex items-start gap-3 text-white/60 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p>CRS 505 Bl A EN 64A AP 305</p>
                  <p>Asa Sul, Brasília - DF</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-white/60 text-sm">
                <Clock className="w-4 h-4" />
                <span>Atendimento 24 horas</span>
              </div>
            </div>
          </div>

          {/* Services & Areas */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-5 text-white/60">Serviços</h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { to: "/investigacao-conjugal", label: "Investigação Conjugal" },
                { to: "/servicos-ciberneticos", label: "Serviços Cibernéticos" },
                { to: "/investigacao-juridica", label: "Investigação Jurídica" },
                { to: "/investigacao-empresarial", label: "Investigação Corporativa" },
                { to: "/localizacao-pessoas", label: "Localização de Pessoas" },
                { to: "/investigacao-familiar", label: "Investigação Familiar" },
                { to: "/investigacao-veicular", label: "Investigação Veicular" },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-white/50 hover:text-detective-gold transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
            
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 mt-8 text-white/60">Áreas</h3>
            <div className="flex flex-wrap gap-2">
              {[
                { to: "/detetive-asa-norte", label: "Asa Norte" },
                { to: "/detetive-asa-sul", label: "Asa Sul" },
                { to: "/detetive-aguas-claras-df", label: "Águas Claras" },
                { to: "/detetive-taguatinga-df", label: "Taguatinga" },
                { to: "/detetive-lago-sul", label: "Lago Sul" },
                { to: "/detetive-lago-norte", label: "Lago Norte" },
                { to: "/detetive-sudoeste", label: "Sudoeste" },
                { to: "/detetive-cruzeiro", label: "Cruzeiro" },
              ].map(({ to, label }) => (
                <Link key={to} to={to} className="text-[11px] px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-white/50 hover:text-detective-gold hover:border-detective-gold/20 transition-all">
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/[0.06] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-white/30 text-xs">
            © {currentYear} Detetive Particular Regis. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-2 text-white/30 text-xs">
            <Shield className="w-3.5 h-3.5" />
            <span>Sigilo profissional garantido por lei</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;