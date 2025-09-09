import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle, CheckCircle, MessageCircle } from "lucide-react";

const FAQSection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5561982844543", "_blank");
  };

  const faqs = [
    {
      question: "Quanto custa um detetive particular em Brasília DF?",
      answer: "O valor do detetive particular DF varia conforme o tipo de investigação. Oferecemos preços justos e competitivos no mercado de Brasília. Entre em contato para um orçamento personalizado e gratuito via WhatsApp."
    },
    {
      question: "Onde encontrar detetive particular barato no DF?",
      answer: "Como detetive particular DF com preços acessíveis, oferecemos consultas gratuitas e orçamentos transparentes. Nossos valores são justos para investigações profissionais em todo o Distrito Federal."
    },
    {
      question: "Como funciona a investigação de um detetive em Brasília DF?",
      answer: "O detetive em Brasília DF segue metodologias profissionais: análise inicial do caso, planejamento estratégico, coleta de evidências, relatório detalhado. Tudo com sigilo absoluto e dentro da legalidade."
    },
    {
      question: "Qual a área de atuação do detetive particular no DF?",
      answer: "Atendemos como detetive particular no DF em todas as regiões administrativas: Plano Piloto, Taguatinga, Ceilândia, Sobradinho, Gama, Águas Claras, Samambaia, Santa Maria e demais cidades do Distrito Federal."
    },
    {
      question: "O detetive particular Brasília oferece que tipos de investigação?",
      answer: "Como detetive particular Brasília, oferecemos: investigação conjugal, investigação corporativa, localização de pessoas, verificação de antecedentes, vigilância e monitoramento, perícias particulares."
    },
    {
      question: "É legal contratar detetive particular em Brasília DF?",
      answer: "Sim, contratar detetive particular Brasília DF é totalmente legal. Somos profissionais regulamentados que atuam dentro da lei, com formação específica em investigação profissional."
    },
    {
      question: "Como escolher o melhor detetive no DF?",
      answer: "Escolha um detetive no DF com: formação profissional comprovada, experiência no mercado, sigilo garantido, preços transparentes, relatórios detalhados e atendimento personalizado 24h."
    },
    {
      question: "Quanto tempo leva uma investigação com detetive DF?",
      answer: "O prazo varia conforme a complexidade do caso. Como detetive DF experiente, algumas investigações são resolvidas em dias, outras podem levar semanas. Fornecemos estimativas realistas na consulta inicial."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-detective-gold/10 rounded-full px-6 py-2 mb-4">
            <HelpCircle className="w-5 h-5 text-detective-gold" />
            <span className="text-detective-gold font-medium">Perguntas Frequentes</span>
          </div>
          <h2 className="heading-section text-detective-navy mb-6">
            Dúvidas Sobre Detetive Particular DF
          </h2>
          <p className="text-professional max-w-3xl mx-auto">
            Respostas às principais dúvidas sobre serviços de detetive particular em Brasília DF, 
            preços, valores e como funciona a investigação profissional.
          </p>
        </div>

        {/* FAQ Content */}
        <div className="max-w-4xl mx-auto">
          <Card className="card-professional">
            <CardContent className="p-0">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b border-border last:border-b-0">
                    <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-muted/50 transition-colors">
                      <span className="font-medium text-detective-navy">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <p className="text-professional-grey leading-relaxed">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          {/* CTA Card */}
          <Card className="card-professional mt-8 bg-gradient-to-r from-detective-navy/5 to-detective-gold/5">
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-detective-gold/20 flex items-center justify-center">
                <MessageCircle className="w-8 h-8 text-detective-gold" />
              </div>
              <CardTitle className="heading-card text-detective-navy">
                Ainda tem dúvidas sobre detetive particular DF?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-professional-grey mb-6">
                Entre em contato conosco para esclarecer suas dúvidas sobre investigação profissional, 
                preços e como podemos ajudar no seu caso específico.
              </p>
              <button 
                onClick={handleWhatsAppClick}
                className="btn-professional"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Tirar Dúvidas no WhatsApp
              </button>
            </CardContent>
          </Card>
        </div>

        {/* Keywords Section */}
        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold text-detective-navy mb-4">
              Detetive Particular em Brasília - Serviços Profissionais DF
            </h3>
            <div className="text-sm text-professional-grey space-y-2">
              <p>
                <strong>Detetive particular DF</strong> | <strong>Detetive particular Brasília</strong> | <strong>Detetive DF</strong> | <strong>Detetive em Brasília DF</strong>
              </p>
              <p>
                Investigação profissional • Preços justos • Atendimento 24h • Sigilo garantido • Todo o Distrito Federal
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;