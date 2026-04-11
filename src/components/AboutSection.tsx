import { Shield, Award, MapPin, CheckCircle, Clock, FileText } from "lucide-react";

const AboutSection = () => {
  const differentials = [
    { icon: <Shield className="w-4 h-4" />, text: "Sigilo absoluto garantido" },
    { icon: <FileText className="w-4 h-4" />, text: "Relatórios com fotos e vídeos" },
    { icon: <Clock className="w-4 h-4" />, text: "Atendimento 24 horas" },
    { icon: <CheckCircle className="w-4 h-4" />, text: "Metodologia profissional" },
  ];

  return (
    <section className="py-28 bg-background relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-1/2 -translate-y-1/2 -right-48 w-96 h-96 bg-detective-gold/[0.03] rounded-full blur-3xl"></div>
      <div className="absolute top-0 left-1/4 w-px h-24 bg-gradient-to-b from-detective-gold/20 to-transparent"></div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Left */}
          <div className="lg:col-span-5">
            <span className="heading-editorial text-detective-gold mb-4 block">Sobre o Detetive Regis</span>
            <div className="section-divider mb-8"></div>
            
            <h2 className="heading-section text-detective-navy mb-8">
              Experiência que<br />
              <span className="text-gold-gradient">inspira confiança</span>
            </h2>

            <div className="space-y-5 text-muted-foreground leading-relaxed">
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

            {/* Credentials */}
            <div className="mt-10 space-y-3">
              <div className="flex items-center gap-4 p-4 bg-detective-navy/[0.04] rounded-xl border border-border">
                <div className="w-11 h-11 rounded-full bg-detective-gold/10 flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-detective-gold" />
                </div>
                <div>
                  <span className="font-semibold text-foreground block text-sm">Graduado em Investigação</span>
                  <span className="text-xs text-muted-foreground">Formação acadêmica completa</span>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-detective-navy/[0.04] rounded-xl border border-border">
                <div className="w-11 h-11 rounded-full bg-detective-gold/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-detective-gold" />
                </div>
                <div>
                  <span className="font-semibold text-foreground block text-sm">Escritório na Asa Sul</span>
                  <span className="text-xs text-muted-foreground">Atendimento em todo o DF</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="lg:col-span-7">
            {/* Quote card */}
            <div className="bg-detective-navy rounded-2xl p-10 md:p-14 mb-10 relative noise-overlay overflow-hidden">
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-32 h-32 border-t border-r border-detective-gold/10 rounded-tr-2xl"></div>
              
              <div className="relative z-10">
                <div className="text-detective-gold/30 text-7xl font-playfair leading-none mb-4">"</div>
                <blockquote className="font-playfair text-2xl md:text-3xl text-white/90 leading-relaxed mb-8 -mt-6">
                  Cada caso é tratado com a seriedade e discrição que a situação exige. 
                  Nosso compromisso é com a verdade.
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-detective-gold/20 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-detective-gold" />
                  </div>
                  <div>
                    <span className="text-white font-semibold block">Detetive Regis</span>
                    <span className="text-white/40 text-sm font-mono">Investigador Profissional</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Differentials — horizontal strip */}
            <div>
              <h3 className="heading-editorial text-detective-gold mb-6">Diferenciais</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {differentials.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-3 p-4 rounded-xl border border-border hover:border-detective-gold/30 hover:bg-detective-gold/[0.02] transition-all duration-300 group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-detective-gold/10 flex items-center justify-center flex-shrink-0 text-detective-gold group-hover:bg-detective-gold group-hover:text-white transition-all duration-300">
                      {item.icon}
                    </div>
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{item.text}</span>
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
