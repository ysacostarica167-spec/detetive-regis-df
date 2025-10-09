import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, MessageCircle } from "lucide-react";

const GeographicCoverage = () => {
  const handleWhatsAppClick = (location: string) => {
    const message = `Olá! Preciso de detetive particular em ${location}`;
    const phoneNumber = "5561982844543";
    const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    if (typeof window !== 'undefined' && (window as any).gtag_report_conversion) {
      (window as any).gtag_report_conversion(waUrl);
    } else {
      window.open(waUrl, '_blank');
    }
  };

  const regions = [
    {
      title: "Brasília - Plano Piloto",
      areas: [
        "Detetive Particular Asa Norte",
        "Detetive Particular Asa Sul",
        "Detetive Particular Lago Norte",
        "Detetive Particular Lago Sul",
        "Detetive Particular Sudoeste/Octogonal",
        "Detetive Particular Cruzeiro",
        "Detetive Particular Candangolândia"
      ]
    },
    {
      title: "Cidades Satélites - Região Central",
      areas: [
        "Detetive Particular Águas Claras",
        "Detetive Particular Taguatinga",
        "Detetive Particular Ceilândia",
        "Detetive Particular Guará",
        "Detetive Particular Vicente Pires",
        "Detetive Particular Riacho Fundo",
        "Detetive Particular Núcleo Bandeirante"
      ]
    },
    {
      title: "Cidades Satélites - Região Sul",
      areas: [
        "Detetive Particular Gama",
        "Detetive Particular Santa Maria",
        "Detetive Particular Recanto das Emas",
        "Detetive Particular Samambaia",
        "Detetive Particular Park Way",
        "Detetive Particular Riacho Fundo II"
      ]
    },
    {
      title: "Cidades Satélites - Região Norte",
      areas: [
        "Detetive Particular Sobradinho",
        "Detetive Particular Sobradinho II",
        "Detetive Particular Planaltina",
        "Detetive Particular Paranoá",
        "Detetive Particular Itapoã",
        "Detetive Particular São Sebastião"
      ]
    },
    {
      title: "Cidades Satélites - Região Oeste",
      areas: [
        "Detetive Particular Brazlândia",
        "Detetive Particular Cidade Estrutural",
        "Detetive Particular SIA",
        "Detetive Particular SCIA"
      ]
    },
    {
      title: "Entorno de Brasília - Goiás",
      areas: [
        "Detetive Particular Luziânia GO",
        "Detetive Particular Valparaíso GO",
        "Detetive Particular Novo Gama GO",
        "Detetive Particular Águas Lindas GO",
        "Detetive Particular Cidade Ocidental GO",
        "Detetive Particular Formosa GO",
        "Detetive Particular Planaltina GO",
        "Detetive Particular Santo Antônio do Descoberto GO"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-detective-gold/10 rounded-full px-6 py-2 mb-4">
            <MapPin className="w-5 h-5 text-detective-gold" />
            <span className="text-detective-gold font-medium">Cobertura Completa</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-detective-navy mb-6">
            Detetive Particular em Todo o Distrito Federal
          </h2>
          <p className="text-professional max-w-3xl mx-auto">
            Atendemos <strong>Brasília, todas as cidades satélites do DF e região do Entorno</strong>. 
            Investigação conjugal, empresarial e localização de pessoas em toda a região metropolitana.
          </p>
        </div>

        {/* Regions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {regions.map((region, index) => (
            <Card key={index} className="card-professional hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-5 h-5 text-detective-gold" />
                  <h3 className="font-semibold text-detective-navy">{region.title}</h3>
                </div>
                <ul className="space-y-2">
                  {region.areas.map((area, areaIndex) => (
                    <li 
                      key={areaIndex}
                      onClick={() => handleWhatsAppClick(area.replace('Detetive Particular ', ''))}
                      className="text-sm text-professional-grey hover:text-detective-gold cursor-pointer transition-colors flex items-center gap-2 p-2 rounded hover:bg-detective-gold/10"
                    >
                      <span className="text-detective-gold">→</span>
                      {area}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-detective-navy to-detective-navy-light rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center">
              Atendimento em Brasília e Toda Região do DF
            </h3>
            <p className="text-lg mb-8 text-white/90 text-center">
              <strong>Detetive particular Brasília</strong> atendendo Plano Piloto, Asa Norte, Asa Sul, 
              Taguatinga, Ceilândia, Águas Claras, Guará e todas as cidades satélites do DF. 
              Também atendemos o entorno: Luziânia, Valparaíso, Novo Gama e região.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-detective-gold" />
                  Distrito Federal Completo
                </h4>
                <p className="text-white/90 text-sm">
                  Cobertura total em todas as 33 regiões administrativas do DF. 
                  Investigação conjugal Brasília, investigação empresarial e todos os serviços de detetive particular.
                </p>
              </div>
              
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-detective-gold" />
                  Entorno e Região Metropolitana
                </h4>
                <p className="text-white/90 text-sm">
                  Atendimento estendido para as cidades do entorno de Brasília em Goiás. 
                  Investigação particular em Luziânia, Valparaíso, Águas Lindas e toda região RIDE.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => handleWhatsAppClick('Brasília')}
                className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp: Atendimento 24h
              </button>
              <a
                href="tel:+5561982844543"
                className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 font-semibold px-8 py-4 rounded-lg backdrop-blur-sm transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Ligar Agora: (61) 98284-4543
              </a>
            </div>
          </div>
        </div>

        {/* SEO Text Section */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-detective-navy mb-6 text-center">
              Detetive Particular em Brasília: Cobertura Completa no DF
            </h3>
            
            <div className="prose max-w-none text-professional-grey space-y-4">
              <p>
                Como <strong>detetive particular em Brasília</strong>, oferecemos serviços profissionais de investigação 
                em todo o Distrito Federal e região metropolitana. Nossa atuação abrange desde o Plano Piloto até as 
                cidades satélites mais distantes, garantindo o mesmo padrão de qualidade e discrição em todas as regiões.
              </p>
              
              <p>
                Nossos serviços de <strong>investigação conjugal Brasília</strong>, <strong>investigação empresarial</strong> e 
                <strong> localização de pessoas</strong> estão disponíveis em todas as 33 regiões administrativas do DF: 
                Águas Claras, Taguatinga, Ceilândia, Guará, Samambaia, Gama, Santa Maria, Sobradinho, Planaltina, 
                Paranoá, São Sebastião, Recanto das Emas, Riacho Fundo, Núcleo Bandeirante, Lago Norte, Lago Sul, 
                Asa Norte, Asa Sul, Cruzeiro, Sudoeste, Octogonal, Brazlândia, Vicente Pires, Park Way, SIA, SCIA, 
                Estrutural, Itapoã, Candangolândia e Varjão.
              </p>
              
              <p>
                Também atendemos o <strong>entorno de Brasília</strong> nas cidades goianas da região RIDE: Luziânia, 
                Valparaíso de Goiás, Novo Gama, Águas Lindas de Goiás, Cidade Ocidental, Planaltina de Goiás, 
                Formosa, Santo Antônio do Descoberto, Cristalina e Alexânia.
              </p>
              
              <p>
                Com mais de 15 anos de experiência como <strong>detetive particular Brasília DF</strong>, conhecemos 
                profundamente a dinâmica de cada região, o que nos permite atuar com máxima eficiência e discrição em 
                qualquer localidade do Distrito Federal e entorno.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <h4 className="font-semibold text-detective-navy mb-4">Principais Serviços por Região:</h4>
              <div className="grid sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-medium text-detective-gold mb-2">Plano Piloto e Adjacências:</p>
                  <ul className="space-y-1 text-professional-grey">
                    <li>• Investigação conjugal Asa Norte e Asa Sul</li>
                    <li>• Detetive empresarial Lago Sul e Norte</li>
                    <li>• Investigação particular Sudoeste</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-detective-gold mb-2">Cidades Satélites:</p>
                  <ul className="space-y-1 text-professional-grey">
                    <li>• Detetive Taguatinga e Ceilândia</li>
                    <li>• Investigação conjugal Águas Claras</li>
                    <li>• Detetive particular Guará e Samambaia</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeographicCoverage;
