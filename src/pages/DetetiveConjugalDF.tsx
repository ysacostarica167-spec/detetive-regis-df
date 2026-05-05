import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MessageCircle, Phone, Shield, Clock, CheckCircle, Award, Heart, FileSearch, Camera } from "lucide-react";
import SEO from "@/components/SEO";
import LazyImage from "@/components/LazyImage";
import heroImage from "@/assets/detective-hero-hq.jpg";
import { serviceSchema } from "@/data/structuredData";
import { trackWhatsAppClick } from "@/lib/whatsapp";

const PHONE = "5561982844543";
const PHONE_DISPLAY = "(61) 98284-4543";

const DetetiveConjugalDF = () => {
  const handleWhats = () =>
    trackWhatsAppClick({
      location: "lp_conjugal",
      campaign: "lp_conjugal_df",
      message: "Olá! Quero uma investigação conjugal discreta em Brasília. Pode me ajudar?",
    });
  const handleCall = () => window.open(`tel:+${PHONE}`, "_blank");

  const benefits = [
    {
      icon: <Shield className="w-6 h-6 text-detective-gold" />,
      title: "100% Sigiloso",
      description: "Sigilo profissional garantido em contrato. Ninguém saberá da investigação.",
    },
    {
      icon: <Camera className="w-6 h-6 text-detective-gold" />,
      title: "Provas Reais",
      description: "Relatório com fotos, vídeos e datas — material com validade para uso legal.",
    },
    {
      icon: <Clock className="w-6 h-6 text-detective-gold" />,
      title: "Resultado em até 48h",
      description: "Início imediato após contratação. A maioria dos casos é concluída em poucos dias.",
    },
  ];

  const steps = [
    "Conversa inicial gratuita e confidencial pelo WhatsApp",
    "Definição da estratégia e orçamento transparente",
    "Investigação de campo com equipamentos profissionais",
    "Entrega do relatório completo com evidências",
  ];

  const faqs = [
    {
      q: "A investigação conjugal é legal em Brasília?",
      a: "Sim. A atividade de detetive particular é regulamentada pela Lei 13.432/2017 e o relatório pode ser usado como prova auxiliar em processos judiciais.",
    },
    {
      q: "Quanto custa uma investigação conjugal no DF?",
      a: "O valor depende da rotina do investigado e do tempo de acompanhamento. Fazemos orçamento gratuito e personalizado pelo WhatsApp, sem compromisso.",
    },
    {
      q: "Em quanto tempo recebo o resultado?",
      a: "A maioria dos casos é concluída entre 2 e 7 dias. Casos mais complexos podem levar mais tempo, mas você recebe atualizações constantes.",
    },
    {
      q: "Como garanto que ninguém vai descobrir?",
      a: "Trabalhamos com discrição absoluta: contato apenas pelo seu canal preferido, sem registros visíveis e equipe treinada para passar despercebida.",
    },
  ];

  const structuredData = serviceSchema(
    "Investigação Conjugal em Brasília DF",
    "Investigação conjugal sigilosa no Distrito Federal com provas em fotos e vídeos, conduzida por detetive particular graduado."
  );

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Detetive de Traição em Brasília DF | Investigação Conjugal Sigilosa"
        description="Investigação conjugal em Brasília DF com provas em fotos e vídeos. Detetive particular graduado, sigilo absoluto e resultado em até 48h. Orçamento gratuito no WhatsApp."
        keywords="detetive de traição df, investigação conjugal brasília, detetive conjugal df, investigação de traição df, detetive particular conjugal brasília"
        canonical="/detetive-conjugal-df"
        structuredData={structuredData}
      />

      {/* Closed header — só logo + WhatsApp */}
      <header className="sticky top-0 z-50 bg-detective-navy text-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Award className="w-6 h-6 text-detective-gold" />
            <span className="font-bold">Detetive Regis • DF</span>
          </div>
          <Button onClick={handleWhats} className="btn-accent" size="sm">
            <MessageCircle className="w-4 h-4 mr-2" />
            {PHONE_DISPLAY}
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <LazyImage
            src={heroImage}
            alt="Detetive de traição em Brasília DF"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-detective-navy/95 via-detective-navy/85 to-detective-navy/70" />
        </div>
        <div className="relative z-10 container mx-auto px-4 py-16 text-white">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-detective-gold/20 border border-detective-gold/30 rounded-full px-4 py-1 mb-5">
              <Heart className="w-4 h-4 text-detective-gold" />
              <span className="text-detective-gold text-sm font-medium">Investigação Conjugal • DF</span>
            </div>
            <h1 className="heading-hero mb-5">
              <span className="block">Descubra a Verdade</span>
              <span className="block text-detective-gold">com Provas Reais em até 48h</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-6">
              Investigação conjugal em Brasília DF com fotos, vídeos e relatório detalhado.
              Sigilo absoluto. Detetive particular graduado, com 15+ anos de experiência.
            </p>
            <ul className="space-y-2 mb-8">
              {["Sigilo profissional garantido em contrato", "Material com validade legal", "Orçamento gratuito e sem compromisso"].map((t) => (
                <li key={t} className="flex items-center gap-2 text-white/90">
                  <CheckCircle className="w-5 h-5 text-detective-gold flex-shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button onClick={handleWhats} className="btn-accent" size="lg">
                <MessageCircle className="w-5 h-5 mr-2" />
                Falar Agora no WhatsApp
              </Button>
              <Button onClick={handleCall} variant="outline-light" size="lg">
                <Phone className="w-5 h-5 mr-2" />
                Ligar {PHONE_DISPLAY}
              </Button>
            </div>
            <p className="text-white/70 text-sm mt-4">
              Atendimento imediato • Resposta em minutos • Brasília e todo o DF
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((b) => (
              <Card key={b.title} className="card-professional text-center">
                <CardContent className="p-6">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-detective-gold/15 flex items-center justify-center">
                    {b.icon}
                  </div>
                  <h3 className="font-bold text-detective-navy mb-2">{b.title}</h3>
                  <p className="text-professional-grey text-sm">{b.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-muted/40">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="heading-section text-detective-navy text-center mb-10">Como Funciona</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {steps.map((s, i) => (
              <div key={i} className="flex items-start gap-4 bg-background p-5 rounded-xl shadow-sm">
                <div className="w-10 h-10 rounded-full bg-detective-navy text-detective-gold font-bold flex items-center justify-center flex-shrink-0">
                  {i + 1}
                </div>
                <p className="text-professional-grey pt-1">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="heading-section text-detective-navy text-center mb-10">
            Resultados que Falam por Si
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            {[
              { n: "2.500+", l: "Casos Resolvidos" },
              { n: "15 anos", l: "de Experiência" },
              { n: "98%", l: "Taxa de Sucesso" },
            ].map((s) => (
              <Card key={s.l} className="card-professional">
                <CardContent className="p-6">
                  <p className="text-4xl font-bold text-detective-gold">{s.n}</p>
                  <p className="text-professional-grey mt-1">{s.l}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-muted/40">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="heading-section text-detective-navy text-center mb-10">
            Perguntas Frequentes
          </h2>
          <Accordion type="single" collapsible className="bg-background rounded-xl shadow-sm">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`f-${i}`} className="px-4">
                <AccordionTrigger className="text-left text-detective-navy font-medium">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-professional-grey">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-detective-navy to-detective-navy-light text-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <FileSearch className="w-14 h-14 mx-auto mb-5 text-detective-gold" />
          <h2 className="heading-section text-white mb-4">
            Fale Agora com um Detetive e Descubra a Verdade Hoje
          </h2>
          <p className="text-white/90 mb-8">
            Consulta gratuita e 100% confidencial. Resposta imediata pelo WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button onClick={handleWhats} className="btn-accent" size="lg">
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp {PHONE_DISPLAY}
            </Button>
            <Button onClick={handleCall} variant="outline-light" size="lg">
              <Phone className="w-5 h-5 mr-2" />
              Ligar Agora
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-detective-navy text-white/70 py-6 text-center text-sm">
        © {new Date().getFullYear()} Detetive Particular Regis • Brasília DF • {PHONE_DISPLAY}
      </footer>
    </div>
  );
};

export default DetetiveConjugalDF;