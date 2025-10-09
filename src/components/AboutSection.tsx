import { Card, CardContent } from "@/components/ui/card";
import { Award, Shield, Clock, Users, MapPin, CheckCircle } from "lucide-react";

const AboutSection = () => {
  const achievements = [
    {
      icon: <Award className="w-6 h-6 text-detective-gold" />,
      title: "Graduado em Investigação",
      description: "Formação completa em técnicas de investigação profissional"
    },
    {
      icon: <Shield className="w-6 h-6 text-detective-gold" />,
      title: "15+ Anos de Experiência",
      description: "Mais de década e meia atuando em investigações particulares"
    },
    {
      icon: <Users className="w-6 h-6 text-detective-gold" />,
      title: "500+ Casos Resolvidos",
      description: "Centenas de investigações concluídas com sucesso"
    },
    {
      icon: <MapPin className="w-6 h-6 text-detective-gold" />,
      title: "Cobertura Total DF",
      description: "Atendimento em todas as regiões do Distrito Federal"
    }
  ];

  const differentials = [
    "Sigilo absoluto e confidencialidade garantida",
    "Relatórios detalhados com evidências legais",
    "Equipamentos modernos de investigação",
    "Atendimento personalizado 24 horas",
    "Preços justos e transparentes",
    "Metodologia profissional comprovada"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-section text-detective-navy mb-6">
            Detetive Particular em Brasília: Experiência e Credibilidade
          </h2>
          <p className="text-professional max-w-3xl mx-auto">
            <strong>Detetive particular graduado</strong> com vasta experiência em investigações conjugais, 
            corporativas e localização de pessoas. Atuando há mais de 15 anos com ética, discrição e 
            eficiência em Brasília e todo o Distrito Federal. Atendemos todas as regiões do DF incluindo 
            Asa Norte, Asa Sul, Lago Sul, Águas Claras, Taguatinga e Ceilândia.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Professional Story */}
          <div>
            <h3 className="heading-card text-detective-navy mb-6">
              Experiência e Profissionalismo
            </h3>
            <div className="space-y-4 text-professional-grey">
              <p>
                Com formação acadêmica completa em investigação profissional e mais de 15 anos de experiência 
                no mercado, o Detetive Regis especializou-se em oferecer soluções investigativas precisas e 
                discretas para pessoas físicas e jurídicas em todo o Distrito Federal e região.
              </p>
              <p>
                Durante sua carreira, desenvolveu expertise em investigações conjugais, corporativas, 
                localização de pessoas e verificação de antecedentes, sempre mantendo os mais altos 
                padrões de ética e confidencialidade. Atua em Brasília, Águas Claras, Taguatinga, 
                Ceilândia, Guará, Lago Sul, Asa Norte e todo o entorno do DF.
              </p>
              <p>
                Nossa metodologia combina técnicas modernas de investigação digital com métodos tradicionais 
                comprovados de vigilância e análise comportamental. Utilizamos equipamentos de última geração 
                para garantir evidências claras e precisas que podem ser utilizadas legalmente quando necessário.
              </p>
              <p>
                Cada caso é tratado com máxima seriedade e confidencialidade. Oferecemos relatórios detalhados, 
                documentação fotográfica e videográfica profissional, além de orientação jurídica sobre como 
                utilizar as evidências coletadas. Todo trabalho é realizado dentro dos limites legais estabelecidos 
                pela legislação brasileira.
              </p>
              <p>
                O compromisso com a verdade e a ética profissional são os pilares do nosso trabalho. Entendemos 
                que cada cliente passa por um momento delicado e oferecemos não apenas serviços de investigação, 
                mas também suporte e orientação durante todo o processo. A consulta inicial é sempre gratuita e 
                confidencial, permitindo que você conheça nossa metodologia antes de contratar os serviços.
              </p>
            </div>
          </div>

          {/* Achievements Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="card-professional text-center">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-detective-gold/20 to-detective-navy/20 flex items-center justify-center">
                    {achievement.icon}
                  </div>
                  <h4 className="font-semibold text-detective-navy mb-2">{achievement.title}</h4>
                  <p className="text-sm text-professional-grey">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Differentials */}
        <div className="bg-gradient-to-br from-muted/50 to-muted rounded-2xl p-8">
          <h3 className="heading-card text-detective-navy text-center mb-8">
            Diferenciais do Nosso Trabalho
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {differentials.map((differential, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-detective-gold mt-0.5 flex-shrink-0" />
                <span className="text-professional-grey">{differential}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;