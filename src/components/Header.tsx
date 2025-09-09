import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Menu, X, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleWhatsAppClick = () => {
    const message = "Olá! Gostaria de mais informações sobre investigação particular.";
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-[var(--shadow-card)]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Shield className="w-8 h-8 text-detective-gold" />
            <div>
              <div className="font-bold text-detective-navy text-lg">Detetive Regis</div>
              <div className="text-xs text-professional-grey">Investigação Profissional</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-professional-grey hover:text-detective-navy transition-colors"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('servicos')}
              className="text-professional-grey hover:text-detective-navy transition-colors"
            >
              Serviços
            </button>
            <Link 
              to="/servicos-ciberneticos"
              className="text-professional-grey hover:text-detective-navy transition-colors"
            >
              Serviços Cibernéticos
            </Link>
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-professional-grey hover:text-detective-navy transition-colors"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-professional-grey hover:text-detective-navy transition-colors"
            >
              Contato
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button 
              onClick={handleWhatsAppClick}
              className="btn-professional"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-detective-navy" />
            ) : (
              <Menu className="w-6 h-6 text-detective-navy" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-left text-professional-grey hover:text-detective-navy transition-colors"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('servicos')}
                className="text-left text-professional-grey hover:text-detective-navy transition-colors"
              >
                Serviços
              </button>
              <Link 
                to="/servicos-ciberneticos"
                className="text-left text-professional-grey hover:text-detective-navy transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Serviços Cibernéticos
              </Link>
              <button 
                onClick={() => scrollToSection('sobre')}
                className="text-left text-professional-grey hover:text-detective-navy transition-colors"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="text-left text-professional-grey hover:text-detective-navy transition-colors"
              >
                Contato
              </button>
              <Button 
                onClick={handleWhatsAppClick}
                className="btn-professional w-full mt-4"
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