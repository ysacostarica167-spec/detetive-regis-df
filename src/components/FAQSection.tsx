import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MessageCircle } from "lucide-react";

const FAQSection = () => {
  const handleWhatsAppClick = () => {
    const message = "Olá! Tenho algumas dúvidas sobre investigação particular.";
    const phoneNumber = "5561982844543";
    const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    try {
      window.open(waUrl, '_blank');
    } catch {
      window.open("tel:+5561982844543", "_blank");
    }
  };

  const faqs = [
    {
      question: "Quanto custa um detetive particular em Brasília DF?",
      answer: "O valor varia conforme o tipo de investigação. Oferecemos preços justos e competitivos. Entre em contato para um orçamento personalizado e gratuito via WhatsApp."
    },
    {
      question: "Como funciona a investigação?",
      answer: "Seguimos metodologias profissionais: análise inicial do caso, planejamento estratégico, coleta de evidências e relatório detalhado. Tudo com sigilo absoluto e dentro da legalidade."
    },
    {
      question: "Qual a área de atuação?",
      answer: "Atendemos todas as regiões administrativas do DF: Plano Piloto, Taguatinga, Ceilândia, Sobradinho, Gama, Águas Claras, Samambaia, Santa Maria e demais cidades."
    },
    {
      question: "Que tipos de investigação são oferecidos?",
      answer: "Investigação conjugal, corporativa, localização de pessoas, verificação de antecedentes, vigilância e monitoramento, perícias particulares."
    },
    {
      question: "É legal contratar detetive particular?",
      answer: "Sim, é totalmente legal. Somos profissionais regulamentados que atuam dentro da lei, com formação específica em investigação profissional."
    },
    {
      question: "Quanto tempo leva uma investigação?",
      answer: "O prazo varia conforme a complexidade. Algumas investigações são resolvidas em dias, outras podem levar semanas. Fornecemos estimativas realistas na consulta inicial."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Left — header */}
          <div className="lg:col-span-4">
            <span className="heading-editorial text-detective-gold mb-4 block">FAQ</span>
            <div className="section-divider mb-6"></div>
            <h2 className="heading-section text-detective-navy mb-6">
              Dúvidas<br />
              <span className="text-gold-gradient">frequentes</span>
            </h2>
            <p className="text-professional mb-8">
              Respostas às principais perguntas sobre investigação particular no DF.
            </p>
            <button onClick={handleWhatsAppClick} className="btn-accent">
              <MessageCircle className="w-5 h-5 mr-2" />
              Tirar Dúvidas
            </button>
          </div>

          {/* Right — accordion */}
          <div className="lg:col-span-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-border">
                  <AccordionTrigger className="py-6 text-left hover:no-underline group">
                    <div className="flex items-start gap-4">
                      <span className="font-mono text-sm text-detective-gold/50 mt-1">0{index + 1}</span>
                      <span className="font-playfair text-lg font-medium text-detective-navy group-hover:text-detective-gold transition-colors duration-300">
                        {faq.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pl-10 pb-6">
                    <p className="text-professional-grey leading-relaxed">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* SEO Keywords */}
        <div className="mt-20 pt-12 border-t border-border text-center">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs text-professional-grey/50 leading-relaxed">
              <strong className="text-professional-grey/70">Detetive particular DF</strong> · <strong className="text-professional-grey/70">Detetive particular Brasília</strong> · <strong className="text-professional-grey/70">Detetive DF</strong> · Investigação profissional · Preços justos · Atendimento 24h · Sigilo garantido · Todo o Distrito Federal
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;