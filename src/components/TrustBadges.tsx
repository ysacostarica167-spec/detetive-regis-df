import { Shield, Award, Star, Clock, Lock, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const TrustBadges = () => {
  const badges = [
    { icon: <Shield className="w-5 h-5" />, title: "100% Sigiloso", subtitle: "Confidencialidade Total" },
    { icon: <Award className="w-5 h-5" />, title: "20+ Anos", subtitle: "Experiência Comprovada" },
    { icon: <Star className="w-5 h-5" />, title: "2.500+ Casos", subtitle: "Resolvidos com Sucesso" },
    { icon: <Clock className="w-5 h-5" />, title: "24 Horas", subtitle: "Atendimento Imediato" },
    { icon: <Lock className="w-5 h-5" />, title: "Provas Legais", subtitle: "Validade Jurídica" },
    { icon: <CheckCircle className="w-5 h-5" />, title: "Consulta Grátis", subtitle: "Sem Compromisso" },
  ];

  return (
    <section className="relative -mt-1 bg-detective-navy border-y border-detective-gold/10">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex flex-col items-center text-center p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.04] hover:border-detective-gold/20 transition-all duration-500 group"
            >
              <div className="w-10 h-10 rounded-lg bg-detective-gold/10 flex items-center justify-center mb-2 text-detective-gold group-hover:bg-detective-gold/20 transition-colors">
                {badge.icon}
              </div>
              <span className="text-white font-semibold text-xs">{badge.title}</span>
              <span className="text-white/40 text-[10px] mt-0.5">{badge.subtitle}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;