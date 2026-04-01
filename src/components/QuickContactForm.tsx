import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, Shield, ArrowRight } from "lucide-react";
import { trackCTAClick } from "@/utils/analytics";
import { motion } from "framer-motion";

const QuickContactForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const safeName = name.trim().slice(0, 100);
    const safePhone = phone.trim().replace(/[^\d\s()-+]/g, '').slice(0, 20);
    
    if (!safeName || !safePhone) return;

    const message = `Olá! Meu nome é ${safeName}. Meu telefone é ${safePhone}. Gostaria de uma consulta gratuita.`;
    const waUrl = `https://wa.me/5561982844543?text=${encodeURIComponent(message)}`;
    trackCTAClick('Quick Contact Form', 'quick_form');
    window.open(waUrl, '_blank');
  };

  return (
    <section className="py-16 bg-gradient-to-b from-muted/50 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto"
        >
          <div className="bg-white rounded-3xl shadow-[var(--shadow-xl)] border border-border/50 overflow-hidden">
            <div className="bg-detective-navy p-6 text-center">
              <Shield className="w-8 h-8 text-detective-gold mx-auto mb-3" />
              <h3 className="text-xl font-display font-bold text-white">
                Consulta Gratuita em 5 Minutos
              </h3>
              <p className="text-white/50 text-sm mt-1">
                Preencha e receba atendimento imediato
              </p>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="Seu nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-12 rounded-xl border-border/80 focus:border-detective-gold"
                  required
                  maxLength={100}
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="Seu telefone (DDD + número)"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="h-12 rounded-xl border-border/80 focus:border-detective-gold"
                  required
                  maxLength={20}
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-detective-gold hover:bg-detective-gold-dark text-detective-navy font-bold py-6 rounded-xl shadow-[var(--shadow-gold)] hover:shadow-[var(--shadow-xl)] hover:-translate-y-0.5 transition-all duration-300 text-base group"
                size="lg"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Quero Consulta Gratuita
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <p className="text-center text-xs text-muted-foreground flex items-center justify-center gap-1">
                <Shield className="w-3 h-3" />
                Seus dados são 100% protegidos por sigilo profissional
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuickContactForm;
