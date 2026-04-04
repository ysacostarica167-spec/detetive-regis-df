import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Menu, X, Shield, Phone } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    const message = "Olá! Gostaria de mais informações sobre investigação particular.";
    const phoneNumber = "5561982844543";
    const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    if (typeof window !== 'undefined' && (window as any).gtag_report_conversion) {
      (window as any).gtag_report_conversion(waUrl);
    } else {
      try { window.open(waUrl, '_blank'); } catch { window.open("tel:+5561982844543", "_blank"); }
    }
  };

  const scrollToSection = (sectionId: string) => {
    if (window.location.pathname === '/') {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/', { replace: true });
      setTimeout(() => document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' }), 100);
    }
    setIsMenuOpen(false);
  };

  const navLinks = [
    { label: "Início", to: "/", type: "link" },
    { label: "Serviços", action: () => scrollToSection('servicos'), type: "button" },
    { label: "Blog", to: "/blog", type: "link" },
    { label: "Sobre", action: () => scrollToSection('sobre'), type: "button" },
    { label: "Contato", action: () => scrollToSection('contato'), type: "button" },
  ];

  return (
    <header className={`fixed top-10 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? "!top-0 bg-white/98 backdrop-blur-xl shadow-[var(--shadow-sm)] border-b border-border/30" 
        : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
              isScrolled ? "bg-detective-navy" : "bg-white/10 backdrop-blur-sm border border-white/20"
            }`}>
              <Shield className={`w-5 h-5 transition-colors ${isScrolled ? "text-detective-gold" : "text-detective-gold"}`} />
            </div>
            <div>
              <div className={`font-display font-bold text-lg tracking-tight transition-colors ${isScrolled ? "text-detective-navy" : "text-white"}`}>
                Detetive Regis
              </div>
              <div className={`text-[10px] uppercase tracking-[0.2em] font-medium transition-colors ${isScrolled ? "text-professional-grey" : "text-white/60"}`}>
                Investigação Profissional
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              link.type === "link" ? (
                <Link
                  key={link.label}
                  to={link.to!}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isScrolled 
                      ? "text-professional-grey hover:text-detective-navy hover:bg-muted" 
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </Link>
              ) : (
                <button
                  key={link.label}
                  onClick={link.action}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isScrolled 
                      ? "text-professional-grey hover:text-detective-navy hover:bg-muted" 
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </button>
              )
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:+5561982844543" className={`flex items-center gap-2 text-sm font-medium transition-colors ${
              isScrolled ? "text-professional-grey hover:text-detective-navy" : "text-white/80 hover:text-white"
            }`}>
              <Phone className="w-4 h-4" />
              (61) 98284-4543
            </a>
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-detective-gold hover:bg-detective-gold-dark text-detective-navy font-bold rounded-xl px-6 shadow-[var(--shadow-gold)] hover:shadow-[var(--shadow-xl)] hover:-translate-y-0.5 transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-all ${isScrolled ? "hover:bg-muted" : "hover:bg-white/10"}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? "text-detective-navy" : "text-white"}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? "text-detective-navy" : "text-white"}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <nav className="py-4 border-t border-border/50 flex flex-col gap-1 bg-white rounded-b-xl">
                {navLinks.map((link) => (
                  link.type === "link" ? (
                    <Link
                      key={link.label}
                      to={link.to!}
                      className="px-4 py-3 text-professional-grey hover:text-detective-navy hover:bg-muted rounded-lg font-medium transition-all"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <button
                      key={link.label}
                      onClick={link.action}
                      className="text-left px-4 py-3 text-professional-grey hover:text-detective-navy hover:bg-muted rounded-lg font-medium transition-all"
                    >
                      {link.label}
                    </button>
                  )
                ))}
                <div className="px-4 pt-3 border-t border-border/50 mt-2">
                  <Button 
                    onClick={handleWhatsAppClick}
                    className="w-full bg-detective-gold hover:bg-detective-gold-dark text-detective-navy font-bold rounded-xl shadow-[var(--shadow-gold)]"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp (61) 98284-4543
                  </Button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;