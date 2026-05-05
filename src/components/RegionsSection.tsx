import { MapPin } from "lucide-react";

const regions = [
  "Asa Sul", "Asa Norte", "Lago Sul", "Lago Norte", "Sudoeste", "Noroeste",
  "Águas Claras", "Taguatinga", "Ceilândia", "Samambaia", "Guará", "Cruzeiro",
  "Sobradinho", "Planaltina", "Gama", "Santa Maria", "Recanto das Emas",
  "Riacho Fundo", "Núcleo Bandeirante", "Park Way", "Jardim Botânico",
  "São Sebastião", "Paranoá", "Itapoã", "Vicente Pires", "Brazlândia",
  "Candangolândia", "SIA", "Estrutural", "Varjão", "Fercal", "Arniqueira", "Entorno DF"
];

const RegionsSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-detective-gold/20 border border-detective-gold/30 rounded-full px-6 py-2 mb-6">
            <MapPin className="w-5 h-5 text-detective-gold" />
            <span className="text-detective-gold font-medium">Cobertura Total no DF</span>
          </div>
          <h2 className="heading-section text-detective-navy mb-4">
            Atendimento em Todo o Distrito Federal
          </h2>
          <p className="text-professional max-w-3xl mx-auto">
            Equipe própria com investigadores em todas as 33 regiões administrativas do DF
            e Entorno (Goiás). Deslocamento rápido e conhecimento local detalhado.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {regions.map((region) => (
            <div
              key={region}
              className="flex items-center gap-2 bg-background border border-border rounded-lg px-4 py-3 hover:border-detective-gold hover:shadow-md transition-all duration-300"
            >
              <MapPin className="w-4 h-4 text-detective-gold flex-shrink-0" />
              <span className="text-sm text-detective-navy font-medium">{region}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RegionsSection;
