import { Shield, Award, Clock, CheckCircle, Star, Lock } from "lucide-react";

const TrustBadges = () => {
  const badges = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "100% Sigiloso",
      subtitle: "Confidencialidade Total"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "15+ Anos",
      subtitle: "Experiência Comprovada"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "500+ Casos",
      subtitle: "Resolvidos com Sucesso"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24 Horas",
      subtitle: "Atendimento Imediato"
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Provas Legais",
      subtitle: "Validade Jurídica"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Consulta Grátis",
      subtitle: "Sem Compromisso"
    }
  ];

  return (
    <section className="py-8 bg-gradient-to-r from-detective-navy via-detective-navy/95 to-detective-navy border-y border-detective-gold/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {badges.map((badge, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-detective-gold/20 flex items-center justify-center mb-3 text-detective-gold group-hover:scale-110 transition-transform">
                {badge.icon}
              </div>
              <span className="text-white font-semibold text-sm">{badge.title}</span>
              <span className="text-white/60 text-xs mt-1">{badge.subtitle}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
