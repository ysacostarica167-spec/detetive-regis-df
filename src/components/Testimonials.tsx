import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria S.",
      location: "Águas Claras, DF",
      rating: 5,
      text: "Profissionalismo exemplar. Descobri a verdade que precisava com total sigilo. Recomendo muito o trabalho do Detetive Regis.",
      service: "Investigação Conjugal"
    },
    {
      name: "Carlos R.",
      location: "Taguatinga, DF", 
      rating: 5,
      text: "Empresa séria e competente. Resolveram meu caso de fraude corporativa em poucas semanas. Evidências claras e relatório detalhado.",
      service: "Investigação Empresarial"
    },
    {
      name: "Ana Paula M.",
      location: "Asa Sul, DF",
      rating: 5,
      text: "Encontraram meu pai após 10 anos sem contato. Trabalho incrível de localização. Eternamente grata pela dedicação.",
      service: "Localização de Pessoas"
    },
    {
      name: "Roberto F.",
      location: "Guará, DF",
      rating: 5,
      text: "Atendimento 24h real. Me ligaram numa madrugada de sábado e resolveram minha urgência. Preço justo e honesto.",
      service: "Investigação Conjugal"
    },
    {
      name: "Juliana L.",
      location: "Lago Sul, DF",
      rating: 5,
      text: "Discreto e eficiente. Ninguém soube da investigação. As provas foram aceitas no processo de divórcio sem problemas.",
      service: "Documentação Legal"
    },
    {
      name: "Fernando A.",
      location: "Ceilândia, DF",
      rating: 5,
      text: "Consulta gratuita muito esclarecedora. Detetive honesto que explicou tudo antes de começar. Resultado excelente.",
      service: "Investigação Conjugal"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-detective-navy mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-professional-grey max-w-2xl mx-auto">
            Mais de 500 casos resolvidos em Brasília e região. Veja depoimentos reais de clientes satisfeitos.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 fill-detective-gold text-detective-gold" />
              ))}
            </div>
            <span className="text-detective-navy font-semibold">4.9/5</span>
            <span className="text-professional-grey">• 500+ avaliações</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-professional hover:shadow-lg transition-all duration-300 group">
              <CardContent className="pt-6">
                <Quote className="w-8 h-8 text-detective-gold/30 mb-4 group-hover:text-detective-gold/50 transition-colors" />
                
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-detective-gold text-detective-gold" />
                  ))}
                </div>
                
                <p className="text-professional-grey mb-4 italic">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t border-border pt-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold text-detective-navy">{testimonial.name}</p>
                      <p className="text-sm text-professional-grey">{testimonial.location}</p>
                    </div>
                    <span className="text-xs bg-detective-gold/10 text-detective-gold px-2 py-1 rounded-full">
                      {testimonial.service}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
