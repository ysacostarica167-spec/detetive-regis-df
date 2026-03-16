import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FloatingCTA from "@/components/FloatingCTA";
import { Button } from "@/components/ui/button";
import { breadcrumbSchema } from "@/data/structuredData";
import { usePageTracking } from "@/hooks/usePageTracking";
import { trackWhatsAppClick } from "@/utils/analytics";
import { MessageCircle, Shield, Search, MapPin, Building2, Users, Car, CheckCircle } from "lucide-react";

const DetetiveBrasilia = () => {
  usePageTracking('Detetive Particular Brasília', 'Landing Page Principal');

  const structuredData = [
    breadcrumbSchema([
      { name: "Início", url: "/" },
      { name: "Detetive Particular Brasília", url: "/detetive-particular-brasilia" }
    ])
  ];

  const handleWhatsAppClick = (section: string) => {
    const message = `Olá! Gostaria de informações sobre os serviços de detetive particular em Brasília.`;
    const waUrl = `https://wa.me/5561982844543?text=${encodeURIComponent(message)}`;
    trackWhatsAppClick(`Landing Brasília - ${section}`);
    window.open(waUrl, '_blank');
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Detetive Particular em Brasília DF | Investigador Profissional | (61) 98284-4543"
        description="Detetive particular em Brasília DF com mais de 20 anos de experiência. Investigação conjugal, empresarial, localização de pessoas. Atendimento em todo DF: Águas Claras, Taguatinga, Plano Piloto. Sigilo absoluto."
        keywords="detetive particular brasília, detetive particular df, detetive em brasília, investigador particular brasília, detetive profissional brasília, detetive águas claras, detetive taguatinga, detetive plano piloto"
        canonical="/detetive-particular-brasilia"
        structuredData={structuredData}
      />

      <Header />

      {/* Hero */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-detective-navy to-detective-navy/90">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            Mais de 20 anos de experiência
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
            Detetive Particular em Brasília DF
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Investigador particular profissional com atuação em todo o Distrito Federal. Sigilo absoluto, metodologia comprovada e resultados concretos para o seu caso.
          </p>
          <Button
            onClick={() => handleWhatsAppClick('Hero')}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            size="lg"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Consulta Gratuita (61) 98284-4543
          </Button>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-muted-foreground leading-relaxed mb-4">
            Contratar um <strong className="text-foreground">detetive particular em Brasília</strong> é uma decisão importante que exige confiança e profissionalismo. Em um cenário onde informações precisas fazem toda a diferença — seja em questões pessoais, familiares ou empresariais — contar com um <strong className="text-foreground">investigador particular experiente no DF</strong> pode ser o caminho para obter respostas e provas legítimas.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            O <strong className="text-foreground">Detetive Regis</strong> atua há mais de duas décadas na área de investigação particular em Brasília e em todo o Distrito Federal. Com formação técnica, equipamentos de última geração e uma rede de contatos estratégica, oferecemos um serviço completo e absolutamente sigiloso.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Nossa missão é entregar a verdade ao cliente com ética, discrição e dentro dos limites legais. Atendemos casos de investigação conjugal, empresarial, localização de pessoas, investigação veicular e muito mais — sempre com relatórios detalhados e provas que podem ser utilizadas judicialmente.
          </p>
        </div>
      </section>

      {/* H2 - Investigação Conjugal */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <Search className="w-8 h-8 text-accent" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Investigação Conjugal</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">
            A <strong className="text-foreground">investigação conjugal em Brasília</strong> é o serviço mais procurado por clientes que suspeitam de traição ou infidelidade. Quando a desconfiança começa a afetar o relacionamento e a saúde emocional, a melhor decisão é buscar a verdade com provas concretas.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Nosso <strong className="text-foreground">detetive para traição em Brasília</strong> utiliza técnicas avançadas de monitoramento, vigilância discreta e análise comportamental para documentar cada movimentação suspeita. Todas as provas são coletadas de forma legal e podem ser apresentadas em processos judiciais de divórcio, guarda ou pensão.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Entendemos a delicadeza emocional envolvida nesses casos. Por isso, oferecemos acolhimento profissional, sigilo absoluto e relatórios claros com fotos, vídeos e documentação completa. Muitos clientes encontram paz ao finalmente obter a <strong className="text-foreground">prova de traição em Brasília</strong> que precisavam para tomar decisões importantes.
          </p>
          <ul className="space-y-2 mb-4">
            {["Monitoramento e vigilância discreta", "Provas fotográficas e em vídeo", "Relatórios detalhados para uso judicial", "Investigação de infidelidade no DF e entorno"].map((item) => (
              <li key={item} className="flex items-start gap-2 text-muted-foreground">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* H2 - Investigação Empresarial */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <Building2 className="w-8 h-8 text-accent" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Investigação Empresarial</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">
            A <strong className="text-foreground">investigação empresarial em Brasília</strong> é essencial para empresas que precisam proteger seus interesses contra fraudes internas, desvios de conduta, concorrência desleal ou vazamento de informações confidenciais.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Nosso detetive particular realiza levantamentos completos sobre funcionários suspeitos, sócios, fornecedores e parceiros comerciais. Utilizamos técnicas de inteligência investigativa para identificar irregularidades, documentar evidências e fornecer relatórios que amparam decisões administrativas e jurídicas.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Atuamos com total discrição dentro do ambiente corporativo, evitando qualquer exposição desnecessária. Empresas de todos os portes em Brasília confiam no Detetive Regis para manter seus negócios seguros e seus colaboradores honestos.
          </p>
        </div>
      </section>

      {/* H2 - Localização de Pessoas */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-8 h-8 text-accent" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Localização de Pessoas</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Precisa <strong className="text-foreground">localizar uma pessoa em Brasília</strong> ou no Distrito Federal? Seja para fins judiciais, cobrança, reencontro familiar ou para cumprir notificações legais, nosso serviço de localização é rápido e eficiente.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Utilizamos ferramentas de inteligência de dados, análise de redes sociais e investigação de campo para <strong className="text-foreground">encontrar pessoas pelo nome</strong>, CPF, telefone ou qualquer informação disponível. Nossa taxa de sucesso é superior a 90% nos casos aceitos.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Realizamos <strong className="text-foreground">investigação de paradeiro em Brasília</strong> tanto para pessoas físicas quanto jurídicas. Entregamos endereço atualizado, dados cadastrais e informações complementares que auxiliam no andamento de processos legais e pessoais.
          </p>
        </div>
      </section>

      {/* H2 - Detetive em Águas Claras */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <MapPin className="w-8 h-8 text-accent" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Detetive em Águas Claras</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Águas Claras é uma das regiões administrativas mais populosas e dinâmicas do Distrito Federal. Com sua alta concentração de condomínios residenciais e intensa movimentação urbana, a região apresenta demandas específicas para serviços de investigação particular.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Nosso <strong className="text-foreground">detetive particular em Águas Claras</strong> conhece profundamente a região — seus acessos, rotinas, comércios e dinâmicas sociais. Essa familiaridade local é essencial para operações de monitoramento e vigilância eficientes, sem levantar suspeitas.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Atendemos moradores e empresas de Águas Claras com a mesma excelência e sigilo que aplicamos em todo o DF. Seja para investigação conjugal, empresarial ou localização, estamos prontos para atuar na sua região com agilidade.
          </p>
        </div>
      </section>

      {/* H2 - Detetive em Taguatinga */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <MapPin className="w-8 h-8 text-accent" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Detetive em Taguatinga</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Taguatinga é um dos maiores centros comerciais e residenciais do Distrito Federal, com uma população expressiva e uma economia local vibrante. A demanda por serviços de <strong className="text-foreground">detetive particular em Taguatinga</strong> cresce a cada ano, acompanhando o desenvolvimento da região.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Nosso investigador atua diretamente em Taguatinga Norte, Taguatinga Sul, Taguatinga Centro e nas áreas adjacentes como Ceilândia e Samambaia. Conhecemos os pontos estratégicos, as vias de acesso e os estabelecimentos, o que nos permite conduzir operações com máxima eficiência e discrição.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Se você mora ou trabalha em Taguatinga e precisa de um investigador particular confiável, entre em contato para uma consulta gratuita e sigilosa.
          </p>
        </div>
      </section>

      {/* H2 - Detetive no Plano Piloto */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <MapPin className="w-8 h-8 text-accent" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Detetive no Plano Piloto</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">
            O Plano Piloto é o coração político e administrativo de Brasília. Com suas superquadras, Asa Norte, Asa Sul, Lago Norte e Lago Sul, a região concentra profissionais influentes, diplomatas e empresários que frequentemente necessitam de serviços investigativos com o mais alto nível de sigilo.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Nosso <strong className="text-foreground">detetive no Plano Piloto</strong> atende com a discrição que a região exige. Operamos em áreas nobres como o Sudoeste, Noroeste, Park Way e adjacências, sempre com veículos descaracterizados e equipe preparada para cenários de alta complexidade.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Seja para investigar infidelidade, verificar a conduta de funcionários ou localizar pessoas, nossa presença no Plano Piloto garante atendimento rápido e resultados precisos para clientes que exigem o melhor.
          </p>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-r from-detective-navy to-detective-navy/90">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Fale com o Detetive Regis Agora
          </h3>
          <p className="text-primary-foreground/80 mb-8 text-lg leading-relaxed">
            Consulta inicial gratuita e 100% sigilosa. Atendemos em todas as regiões do DF — Águas Claras, Taguatinga, Plano Piloto, Ceilândia, Samambaia, Gama e entorno.
          </p>
          <Button
            onClick={() => handleWhatsAppClick('CTA Final')}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-10 py-5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-lg"
            size="lg"
          >
            <MessageCircle className="w-6 h-6 mr-2" />
            WhatsApp (61) 98284-4543
          </Button>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default DetetiveBrasilia;
