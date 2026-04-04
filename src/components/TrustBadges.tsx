import { Shield, Award, Star, Clock, Lock, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const TrustBadges = () => {
  const badges = [
    { icon: <Shield className="w-4 h-4" />, text: "100% Sigiloso" },
    { icon: <Award className="w-4 h-4" />, text: "20+ Anos" },
    { icon: <Star className="w-4 h-4" />, text: "2.500+ Casos" },
    { icon: <Clock className="w-4 h-4" />, text: "24 Horas" },
    { icon: <Lock className="w-4 h-4" />, text: "Provas Legais" },
    { icon: <CheckCircle className="w-4 h-4" />, text: "Consulta Grátis" },
  ];

  return (
    <section className="bg-[hsl(var(--detective-navy))] border-t border-white/[0.04]">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-x-1 gap-y-0 py-5">
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="flex items-center gap-2 px-4 md:px-5 py-2.5"
            >
              <span className="text-[hsl(var(--detective-gold)/0.5)]">{badge.icon}</span>
              <span className="text-white/40 text-xs font-medium">{badge.text}</span>
              {index < badges.length - 1 && (
                <span className="text-white/10 ml-3 hidden md:inline">|</span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
