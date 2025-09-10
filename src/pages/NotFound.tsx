import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen">
      <SEO 
        title="Página Não Encontrada - Detetive Particular Regis DF"
        description="Página não encontrada. Acesse nossa página inicial para conhecer os serviços de investigação particular em Brasília DF. Detetive Regis - WhatsApp (61) 98284-4543"
        keywords="detetive particular df, detetive brasília, investigação profissional df"
      />
      <Header />
      
      {/* 404 Content */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-detective-navy via-detective-navy/95 to-detective-navy/90">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center text-white">
            <div className="mb-8">
              <h1 className="text-8xl font-bold text-detective-gold mb-4">404</h1>
              <h2 className="text-3xl font-bold mb-4">Página Não Encontrada</h2>
              <p className="text-xl text-white/90 mb-8">
                A página que você está procurando não existe ou foi movida.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="btn-accent" size="lg">
                <Link to="/">
                  <Home className="w-5 h-5 mr-2" />
                  Voltar ao Início
                </Link>
              </Button>
              <Button asChild variant="outline-light" size="lg">
                <Link to="/">
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Página Anterior
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Quick Access */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h3 className="heading-card text-detective-navy mb-8">
            Páginas Disponíveis
          </h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Button asChild variant="outline" className="h-auto p-6">
              <Link to="/" className="flex flex-col items-center gap-3">
                <Home className="w-8 h-8 text-detective-gold" />
                <div>
                  <div className="font-semibold">Página Inicial</div>
                  <div className="text-sm text-muted-foreground">Todos os serviços</div>
                </div>
              </Link>
            </Button>
            
            <Button asChild variant="outline" className="h-auto p-6">
              <Link to="/servicos-ciberneticos" className="flex flex-col items-center gap-3">
                <div className="w-8 h-8 bg-detective-gold/20 rounded-full flex items-center justify-center">
                  <span className="text-detective-gold font-bold">C</span>
                </div>
                <div>
                  <div className="font-semibold">Serviços Cibernéticos</div>
                  <div className="text-sm text-muted-foreground">Investigação digital</div>
                </div>
              </Link>
            </Button>
            
            <Button asChild variant="outline" className="h-auto p-6">
              <Link to="/investigacao-juridica" className="flex flex-col items-center gap-3">
                <div className="w-8 h-8 bg-detective-gold/20 rounded-full flex items-center justify-center">
                  <span className="text-detective-gold font-bold">J</span>
                </div>
                <div>
                  <div className="font-semibold">Investigação Jurídica</div>
                  <div className="text-sm text-muted-foreground">Perícia legal</div>
                </div>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NotFound;
