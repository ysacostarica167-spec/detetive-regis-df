import { Shield, Award, MapPin, CheckCircle, Users } from "lucide-react";

const AboutSection = () => {
  const differentials = [
    "Sigilo absoluto e confidencialidade garantida",
    "Relatórios detalhados com fotos e vídeos",
    "Equipamentos modernos de investigação",
    "Atendimento personalizado 24 horas",
    "Preços justos e transparentes",
    "Metodologia profissional comprovada"
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 -translate-y-1/2 -right-48 w-96 h-96 bg-detective-gold/[0.04] rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Left — Editorial intro */}
          <div className="lg:col-span-5">
            <span className="heading-editorial text-detective-gold mb-4 block">Sobre o Detetive Regis</span>
            <div className="section-divider mb-8"></div>
            
            <h2 className="heading-section text-detective-navy mb-8">
              Experiência que<br />
              <span className="text-gold-gradient">inspira confiança</span>
            </h2>

            <div className="space-y-5 text-professional-grey leading-relaxed">
              <p>
                Com formação acadêmica completa em investigação profissional e mais de 15 anos 
                de atuação no mercado, o Detetive Regis é referência em investigação particular 
                no Distrito Federal.
              </p>
              <p>
                Especialista em investigações conjugais, corporativas e localização de pessoas, 
                combina técnicas tradicionais com tecnologia de ponta para garantir resultados 
                concretos e utilizáveis legalmente.
              </p>
            </div>

            {/* Credenciais */}
            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-4 p-4 bg-detective-navy/[0.03] rounded-xl">
                <div className="w-12 h-12 rounded-full bg-detective-gold/10 flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-detective-gold" />
                </div>
                <div>
                  <span className="font-semibold text-detective-navy block text-sm">Graduado em Investigação</span>
                  <span className="text-xs text-professional-grey">Formação acadêmica completa</span>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-detective-navy/[0.03] rounded-xl">
                <div className="w-12 h-12 rounded-full bg-detective-gold/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-detective-gold" />
                </div>
                <div>
                  <span className="font-semibold text-detective-navy block text-sm">Escritório na Asa Sul</span>
                  <span className="text-xs text-professional-grey">Atendimento em todo o DF</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Differentials + visual card */}
          <div className="lg:col-span-7">
            {/* Big quote / statement */}
            <div className="bg-detective-navy rounded-2xl p-10 md:p-14 mb-10 relative noise-overlay overflow-hidden">
              <div className="relative z-10">
                <blockquote className="font-playfair text-2xl md:text-3xl text-white/90 leading-relaxed mb-8 italic">
                  "Cada caso é tratado com a seriedade e discrição que a situação exige. 
                  Nosso compromisso é com a verdade."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-detective-gold/20 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-detective-gold" />
                  </div>
                  <div>
                    <span className="text-white font-semibold block">Detetive Regis</span>
                    <span className="text-white/50 text-sm font-mono">Investigador Profissional</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Differentials grid */}
            <div>
              <h3 className="heading-editorial text-detective-gold mb-6">Diferenciais</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {differentials.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-3 p-4 rounded-xl border border-border hover:border-detective-gold/30 hover:bg-detective-gold/[0.02] transition-all duration-300"
                  >
                    <CheckCircle className="w-5 h-5 text-detective-gold mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-professional-grey">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;