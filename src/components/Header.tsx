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
    
    // Use wa.me as primary method (more reliable)
    const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    try {
      window.open(waUrl, '_blank');
    } catch (error) {
      // Fallback to direct phone call
      window.open("tel:+5561982844543", "_blank");
    }
  };

  const scrollToSection = (sectionId: string) => {
    // Check if we're on the home page
    if (window.location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to home page using React Router, then scroll
      navigate('/', { replace: true });
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-[var(--shadow-card)] transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group hover:scale-105 transition-transform duration-300">
            <Shield className="w-8 h-8 text-detective-gold group-hover:rotate-12 transition-transform duration-300" />
            <div>
              <div className="font-bold text-detective-navy text-lg group-hover:text-detective-gold transition-colors duration-300">Detetive Regis</div>
              <div className="text-xs text-professional-grey">Investigação Profissional</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              to="/"
              className="text-professional-grey hover:text-detective-navy transition-all duration-300 relative group"
            >
              <span className="relative">
                Início
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-detective-gold transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
            <button 
              onClick={() => scrollToSection('servicos')}
              className="text-professional-grey hover:text-detective-navy transition-all duration-300 relative group"
            >
              <span className="relative">
                Serviços
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-detective-gold transition-all duration-300 group-hover:w-full"></span>
              </span>
            </button>
            <button 
              onClick={() => scrollToSection('conteudo')}
              className="text-professional-grey hover:text-detective-navy transition-all duration-300 relative group"
            >
              <span className="relative">
                Conteúdo
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-detective-gold transition-all duration-300 group-hover:w-full"></span>
              </span>
            </button>
            <Link 
              to="/servicos-ciberneticos"
              className="text-professional-grey hover:text-detective-navy transition-all duration-300 relative group"
            >
              <span className="relative">
                Serviços Cibernéticos
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-detective-gold transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
            <Link 
              to="/investigacao-juridica"
              className="text-professional-grey hover:text-detective-navy transition-all duration-300 relative group"
            >
              <span className="relative">
                Investigação Jurídica
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-detective-gold transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-professional-grey hover:text-detective-navy transition-all duration-300 relative group"
            >
              <span className="relative">
                Sobre
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-detective-gold transition-all duration-300 group-hover:w-full"></span>
              </span>
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-professional-grey hover:text-detective-navy transition-all duration-300 relative group"
            >
              <span className="relative">
                Contato
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-detective-gold transition-all duration-300 group-hover:w-full"></span>
              </span>
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button 
              onClick={handleWhatsAppClick}
              className="btn-professional group hover:scale-105 transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4 mr-2 group-hover:animate-pulse" />
              WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-detective-gold/10 rounded-lg transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-detective-navy transform rotate-90 transition-transform duration-300" />
            ) : (
              <Menu className="w-6 h-6 text-detective-navy hover:scale-110 transition-transform duration-300" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/"
                className="text-left text-professional-grey hover:text-detective-navy hover:bg-detective-gold/10 rounded-lg px-3 py-2 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </Link>
              <button 
                onClick={() => scrollToSection('servicos')}
                className="text-left text-professional-grey hover:text-detective-navy hover:bg-detective-gold/10 rounded-lg px-3 py-2 transition-all duration-300"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('conteudo')}
                className="text-left text-professional-grey hover:text-detective-navy hover:bg-detective-gold/10 rounded-lg px-3 py-2 transition-all duration-300"
              >
                Conteúdo
              </button>
              <Link 
                to="/servicos-ciberneticos"
                className="text-left text-professional-grey hover:text-detective-navy hover:bg-detective-gold/10 rounded-lg px-3 py-2 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Serviços Cibernéticos
              </Link>
              <Link 
                to="/investigacao-juridica"
                className="text-left text-professional-grey hover:text-detective-navy hover:bg-detective-gold/10 rounded-lg px-3 py-2 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Investigação Jurídica
              </Link>
              <button 
                onClick={() => scrollToSection('sobre')}
                className="text-left text-professional-grey hover:text-detective-navy hover:bg-detective-gold/10 rounded-lg px-3 py-2 transition-all duration-300"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="text-left text-professional-grey hover:text-detective-navy hover:bg-detective-gold/10 rounded-lg px-3 py-2 transition-all duration-300"
              >
                Contato
              </button>
              <Button 
                onClick={handleWhatsAppClick}
                className="btn-professional w-full mt-4 hover:scale-105 transition-all duration-300 group"
              >
                <MessageCircle className="w-4 h-4 mr-2 group-hover:animate-pulse" />
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