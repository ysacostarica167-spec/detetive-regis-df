import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Menu, X, Shield } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleWhatsAppClick = () => {
    const message = "Olá! Gostaria de mais informações sobre investigação particular.";
    const phoneNumber = "5561982844543";
    const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    try {
      window.open(waUrl, '_blank');
    } catch {
      window.open("tel:+5561982844543", "_blank");
    }
  };

  const scrollToSection = (sectionId: string) => {
    if (window.location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: "Início", action: () => { navigate('/'); setIsMenuOpen(false); } },
    { label: "Serviços", action: () => scrollToSection('servicos') },
    { label: "Conteúdo", action: () => scrollToSection('conteudo') },
    { label: "Sobre", action: () => scrollToSection('sobre') },
    { label: "Contato", action: () => scrollToSection('contato') },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-border/50 transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <Shield className="w-7 h-7 text-detective-gold group-hover:rotate-12 transition-transform duration-300" />
            <div>
              <div className="font-playfair font-bold text-detective-navy text-lg leading-tight">Detetive Regis</div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-professional-grey">Investigação Profissional</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={item.action}
                className="text-sm text-professional-grey hover:text-detective-navy transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-detective-gold transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={handleWhatsAppClick}
              size="sm"
              className="bg-detective-gold hover:bg-detective-gold-light text-detective-navy font-semibold text-xs px-5"
            >
              <MessageCircle className="w-3.5 h-3.5 mr-1.5" />
              WhatsApp
            </Button>
          </div>

          {/* Mobile Menu */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-border/50 animate-fade-in">
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={item.action}
                  className="text-left text-professional-grey hover:text-detective-navy px-3 py-3 rounded-lg hover:bg-muted transition-all text-sm"
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={handleWhatsAppClick}
                className="btn-accent mt-4 w-full"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;