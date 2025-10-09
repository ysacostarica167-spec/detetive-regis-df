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
      question: "Quanto custa investigação conjugal em Brasília?",
      answer: "O preço de investigação conjugal em Brasília varia conforme complexidade. Detetive particular preço DF começa em R$ 1.500 para casos simples de investigação de suspeita de infidelidade. Oferecemos orçamento transparente e consulta gratuita. Entre em contato pelo WhatsApp (61) 98284-4543 para preço personalizado."
    },
    {
      question: "Como funciona investigação de traição no DF?",
      answer: "A investigação de traição DF é realizada por detetive particular Brasília DF graduado. Processo inclui: análise inicial sigilosa, investigação conjugal Brasília com monitoramento discreto, coleta de evidências legais, relatório completo com provas. Tudo dentro da legalidade com sigilo absoluto garantido."
    },
    {
      question: "Qual o melhor detetive para casal em Brasília?",
      answer: "O melhor detetive para casal Brasília tem: graduação profissional, 15+ anos de experiência em investigação conjugal Brasília, sigilo absoluto, preços justos, atendimento 24h. Somos especializados em investigação de suspeita de infidelidade Brasília com metodologia comprovada e relatórios detalhados."
    },
    {
      question: "Qual o preço de um detetive particular em Brasília DF?",
      answer: "O valor do detetive particular Brasília DF varia conforme tipo de investigação. Detetive particular preço DF: investigação conjugal a partir de R$ 1.500, investigação empresarial desde R$ 2.500, localização de pessoas desde R$ 1.800. Consulta inicial gratuita. Preços transparentes sem taxas ocultas. WhatsApp (61) 98284-4543."
    },
    {
      question: "Como descobrir infidelidade com detetive particular DF?",
      answer: "Para descobrir infidelidade, o detetive particular Brasília DF realiza investigação conjugal Brasília profissional: análise comportamental, investigação de traição DF discreta, monitoramento legal, coleta de provas válidas juridicamente. Especialistas em investigação de suspeita de infidelidade Brasília com 15+ anos de experiência."
    },
    {
      question: "Detetive para casal resolve problemas de traição?",
      answer: "Sim, detetive para casal Brasília especializado em investigação conjugal Brasília pode confirmar ou descartar suspeitas de infidelidade. Realizamos investigação de traição DF com evidências concretas, relatório detalhado e orientação sobre próximos passos. Consulta gratuita para avaliar seu caso."
    },
    {
      question: "Investigação conjugal Brasília tem validade legal?",
      answer: "Sim, investigação conjugal Brasília realizada por detetive particular Brasília DF graduado tem validade legal. As provas coletadas na investigação de traição DF podem ser usadas em processos de divórcio. Trabalhamos dentro dos limites legais com metodologia profissional aprovada."
    },
    {
      question: "Quanto tempo demora investigação de suspeita de infidelidade?",
      answer: "A investigação de suspeita de infidelidade Brasília dura em média 15 a 30 dias. O detetive particular Brasília DF analisa cada caso individualmente. Investigação conjugal Brasília pode ser mais rápida em situações urgentes. Fornecemos estimativa realista na consulta inicial gratuita."
    },
    {
      question: "Detetive particular preço DF é acessível?",
      answer: "Sim, nosso detetive particular preço DF é justo e transparente. Investigação conjugal Brasília desde R$ 1.500, investigação de traição DF com parcelamento disponível. Como detetive para casal Brasília, oferecemos orçamento personalizado e consulta gratuita para avaliar custo-benefício do seu caso."
    },
    {
      question: "Como contratar investigação de traição no DF?",
      answer: "Para contratar investigação de traição DF: 1) Entre em contato via WhatsApp (61) 98284-4543, 2) Consulta sigilosa gratuita com detetive particular Brasília DF, 3) Avaliação do caso e orçamento, 4) Início da investigação conjugal Brasília. Processo 100% discreto e profissional."
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
            Perguntas Frequentes sobre Investigação Conjugal Brasília
          </h2>
          <p className="text-professional max-w-3xl mx-auto">
            Dúvidas sobre <strong>detetive particular Brasília DF</strong>, preços de investigação conjugal, 
            investigação de traição DF e como funciona o trabalho de <strong>detetive para casal Brasília</strong>. 
            Tire suas dúvidas sobre <strong>investigação de suspeita de infidelidade Brasília</strong>.
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