import { Shield, Award, BookOpen, Briefcase, Scale, GraduationCap, BadgeCheck, Building2 } from "lucide-react";
import { motion } from "framer-motion";

const AuthoritySection = () => {
  const credentials = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Formação Acadêmica",
      description: "Graduado em Investigação Profissional com especializações em técnicas avançadas de vigilância e análise forense."
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: "Atuação Legal",
      description: "Investigações conduzidas dentro da legalidade brasileira. Provas válidas para processos judiciais e administrativos."
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Atualização Constante",
      description: "Cursos regulares em investigação digital, contra-inteligência e novas tecnologias de monitoramento."
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Experiência Corporativa",
      description: "Atendimento a escritórios de advocacia, empresas e instituições públicas com relatórios técnicos profissionais."
    },
  ];

  const mediaFeatures = [
    "Citado em artigos sobre investigação particular no DF",
    "Referência em segurança corporativa em Brasília",
    "Consultor de investigação para escritórios de advocacia",
    "Palestrante em eventos de segurança empresarial",
  ];

  return (
    <section className="py-24 bg-detective-navy relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '48px 48px' }} />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="gold-line mx-auto mb-6" />
          <h2 className="heading-section text-white mb-4">
            Por Que Somos Referência no DF
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            Credenciais, formação e reconhecimento que fazem do Detetive Regis a escolha número 1 em Brasília
          </p>
        </motion.div>

        {/* Credentials Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {credentials.map((cred, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-5 p-6 rounded-2xl bg-white/[0.04] border border-white/[0.06] hover:border-detective-gold/20 hover:bg-white/[0.07] transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-xl bg-detective-gold/10 border border-detective-gold/20 flex items-center justify-center text-detective-gold flex-shrink-0">
                {cred.icon}
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-2 font-display">{cred.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{cred.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Authority Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-gradient-to-r from-detective-gold/10 via-detective-gold/5 to-detective-gold/10 border border-detective-gold/20 p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <BadgeCheck className="w-6 h-6 text-detective-gold" />
            <h3 className="text-white font-bold text-lg font-display">Reconhecimento e Atuação</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {mediaFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-detective-gold mt-2 flex-shrink-0" />
                <span className="text-white/60 text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Trust Numbers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { icon: <Shield className="w-5 h-5" />, value: "100%", label: "Sigilo Garantido" },
            { icon: <Award className="w-5 h-5" />, value: "2.500+", label: "Investigações" },
            { icon: <Building2 className="w-5 h-5" />, value: "33", label: "Regiões do DF" },
            { icon: <BadgeCheck className="w-5 h-5" />, value: "98%", label: "Satisfação" },
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 rounded-xl bg-white/[0.03] border border-white/[0.05]">
              <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-detective-gold/10 flex items-center justify-center text-detective-gold">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-white font-display">{stat.value}</div>
              <div className="text-white/40 text-xs uppercase tracking-wider mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AuthoritySection;
