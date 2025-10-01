import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle, CheckCircle, MessageCircle } from "lucide-react";
import { faqSchema } from "@/data/structuredData";
import { Helmet } from "react-helmet-async";

const FAQSection = () => {
  const handleWhatsAppClick = () => {
    const message = "Olá! Tenho algumas dúvidas sobre investigação particular.";
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

  const faqs = [
    {
      question: "Qual o preço de um detetive particular em Brasília DF?",
      answer: "O valor do detetive particular DF varia conforme o tipo de investigação e complexidade do caso. Oferecemos preços justos e competitivos no mercado de Brasília, com consulta inicial gratuita. Valores a partir de R$ 1.500 para casos simples. Entre em contato para um orçamento personalizado via WhatsApp (61) 98284-4543."
    },
    {
      question: "Como encontrar detetive particular confiável no DF?",
      answer: "Para encontrar um detetive particular confiável em Brasília DF, verifique: formação profissional graduada, experiência comprovada (15+ anos), sigilo absoluto garantido, preços transparentes, atendimento 24h e avaliações positivas de clientes. Somos detetives graduados com registro profissional."
    },
    {
      question: "Como funciona a investigação conjugal em Brasília DF?",
      answer: "A investigação conjugal em Brasília DF segue processo profissional: consulta sigilosa inicial, análise do caso, planejamento estratégico da investigação, coleta discreta de evidências, documentação fotográfica quando necessário, relatório detalhado com provas. Tudo dentro da legalidade e com sigilo total."
    },
    {
      question: "Detetive particular atende em quais cidades do DF?",
      answer: "Atendemos como detetive particular em todo o Distrito Federal: Brasília (Plano Piloto), Taguatinga, Ceilândia, Sobradinho, Gama, Águas Claras, Samambaia, Santa Maria, São Sebastião, Paranoá, Planaltina, Brazlândia, Núcleo Bandeirante, Riacho Fundo, Guará, Candangolândia, Cruzeiro, Lago Sul, Lago Norte, Park Way, SCIA, Vicente Pires e região do Entorno."
    },
    {
      question: "Que tipos de investigação um detetive particular DF realiza?",
      answer: "Como detetive particular especializado em Brasília DF, realizamos: investigação conjugal (descobrir traição), investigação empresarial (funcionários e fraudes), investigação digital (celulares e computadores), localização de pessoas desaparecidas, encontrar devedor de pensão alimentícia, investigação familiar, perícia particular, verificação de antecedentes e investigação jurídica para advogados."
    },
    {
      question: "É legal contratar detetive particular em Brasília?",
      answer: "Sim, é totalmente legal contratar detetive particular em Brasília DF. Somos profissionais graduados e regulamentados que atuam dentro da lei brasileira. A investigação particular é uma profissão reconhecida no Brasil, desde que respeitados os limites legais e éticos. Nossos relatórios têm validade jurídica."
    },
    {
      question: "Como descobrir traição do marido ou esposa em Brasília?",
      answer: "Para descobrir traição em Brasília, um detetive particular especializado realiza: análise comportamental, investigação digital discreta, monitoramento de atividades, documentação de evidências, relatório completo com provas. Método 100% sigiloso e legal. Consulta inicial gratuita para avaliar seu caso específico."
    },
    {
      question: "Quanto tempo demora uma investigação particular no DF?",
      answer: "O prazo da investigação particular no DF varia conforme a complexidade: casos simples de 7 a 15 dias, casos médios de 15 a 30 dias, casos complexos de 30 a 60 dias. Como detetive DF experiente, fornecemos estimativas realistas na consulta inicial. Alguns casos urgentes podem ser priorizados."
    },
    {
      question: "Detetive particular garante sigilo absoluto?",
      answer: "Sim, garantimos sigilo absoluto e confidencialidade total. É princípio fundamental da profissão de detetive particular. Todas as informações do cliente, detalhes da investigação e resultados são mantidos em absoluta discrição. Temos compromisso ético e legal com a privacidade dos nossos clientes em Brasília DF."
    },
    {
      question: "Como funciona a localização de pessoas desaparecidas no DF?",
      answer: "A localização de pessoas desaparecidas no DF envolve: coleta de dados pessoais e histórico, investigação em bases de dados oficiais, verificação em redes sociais e internet, investigação de campo em locais de interesse, contato com familiares e conhecidos, uso de técnicas avançadas de localização. Especialistas em encontrar devedores de pensão e pessoas desaparecidas em Brasília."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema(faqs))}
        </script>
      </Helmet>
      
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-detective-gold/10 rounded-full px-6 py-2 mb-4">
            <HelpCircle className="w-5 h-5 text-detective-gold" />
            <span className="text-detective-gold font-medium">Perguntas Frequentes</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-detective-navy mb-6">
            Perguntas Frequentes - Detetive Particular DF
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
                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
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