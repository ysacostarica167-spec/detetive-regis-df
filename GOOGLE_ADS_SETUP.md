# Configuração do Google Ads para CPC Otimizado

Este guia explica como configurar o Google Ads para campanhas de CPC (Custo Por Clique) otimizadas para conversão.

## 📊 Estrutura de Rastreamento Implementada

### 1. Google Tag Manager (GTM)
- ✅ ID: `GTM-M5CXZTLM`
- Localização: `index.html`

### 2. Google Analytics 4 (GA4)
- ✅ ID: `GT-KVHVXKNX`
- Localização: `src/components/SEO.tsx`

### 3. Google Ads Conversion Tracking
- ⚠️ **AÇÃO NECESSÁRIA**: Substitua `AW-XXXXXXXXX` pelo seu ID real do Google Ads
- Localização: 
  - `src/components/SEO.tsx` (linhas 87)
  - `src/utils/analytics.ts` (linha 11)

## 🎯 Eventos de Conversão Configurados

### Conversões Principais (Alto Valor)
1. **WhatsApp Click** 💰 Principal conversão
   - Label: `whatsapp_click`
   - Valor: R$ 1.00 por conversão
   - Uso: Landing pages, botões de CTA

2. **Phone Call** 📞 Conversão secundária
   - Label: `phone_call`
   - Valor: R$ 1.00 por conversão
   - Uso: Botões de ligação direta

3. **Contact Form Submit** 📝 Lead qualificado
   - Label: `contact_submit`
   - Valor: R$ 10.00 por conversão
   - Uso: Formulários de contato (se implementados)

### Eventos de Remarketing
- Service page views (visualização de serviços)
- Scroll depth (profundidade de rolagem)
- Time on page (tempo na página)
- CTA clicks (cliques em botões)

## 🔧 Como Configurar no Google Ads

### Passo 1: Obter seu ID do Google Ads
1. Acesse [Google Ads](https://ads.google.com)
2. Vá em: **Ferramentas e Configurações** → **Medição** → **Conversões**
3. Clique em **+ Nova conversão**
4. Escolha **Site**
5. Copie o ID (formato: `AW-XXXXXXXXX`)

### Passo 2: Criar Ações de Conversão

#### Para WhatsApp Click:
1. Nome: "WhatsApp Click - Investigação"
2. Categoria: Enviar formulário de lead
3. Valor: R$ 1,00
4. Contagem: Um por clique
5. Janela de conversão: 30 dias
6. Modelo de atribuição: Baseado em dados

#### Para Phone Call:
1. Nome: "Phone Call - Consulta"
2. Categoria: Chamada telefônica de anúncio
3. Valor: R$ 1,00
4. Contagem: Um por clique
5. Janela de conversão: 30 dias

### Passo 3: Atualizar os Arquivos

#### Arquivo 1: `src/utils/analytics.ts`
```typescript
// Linha 11 - Substitua:
const GOOGLE_ADS_ID = 'AW-XXXXXXXXX'; // ← Seu ID aqui
```

#### Arquivo 2: `src/components/SEO.tsx`
```typescript
// Linha 87 - Substitua:
gtag('config', 'AW-XXXXXXXXX', { // ← Seu ID aqui
```

### Passo 4: Configurar Campanhas de Pesquisa

#### Estrutura de Campanha Recomendada:

**Campanha 1: Marca (Brand)**
- Palavras-chave: "detetive regis", "detetive particular regis brasília"
- Lance: CPC manual baixo (R$ 0,50 - R$ 2,00)
- Objetivo: Proteger marca

**Campanha 2: Investigação Conjugal (Alta Intenção)**
- Palavras-chave:
  - "investigação conjugal brasília"
  - "como descobrir traição em brasília"
  - "detetive para infidelidade df"
  - "investigação de traição brasília"
- Lance: CPC máximo (Target CPA R$ 50-100)
- Budget: 50% do orçamento total

**Campanha 3: Serviços Gerais**
- Palavras-chave:
  - "detetive particular brasília"
  - "detetive particular df"
  - "investigador particular brasília"
- Lance: CPC otimizado
- Budget: 30% do orçamento total

**Campanha 4: Localização de Pessoas**
- Palavras-chave:
  - "localização pessoas desaparecidas df"
  - "encontrar devedor pensão brasília"
  - "investigação familiar brasília"
- Lance: Target CPA
- Budget: 20% do orçamento total

### Passo 5: Otimizações de Qualidade (Quality Score)

#### Landing Pages Otimizadas:
- ✅ `/` - Página inicial (geral)
- ✅ `/investigacao-conjugal` - Investigação conjugal
- ✅ `/investigacao-empresarial` - Investigação empresarial
- ✅ `/servicos-ciberneticos` - Serviços digitais
- ✅ `/investigacao-familiar` - Investigação familiar
- ✅ `/investigacao-juridica` - Investigação jurídica
- ✅ `/localizacao-pessoas` - Localização de pessoas

#### Extensões de Anúncios Recomendadas:
1. **Extensão de chamada**: (61) 98284-4543
2. **Extensão de local**: Asa Sul, Brasília DF
3. **Extensão de preço**: Consulta gratuita
4. **Extensões de sitelink**:
   - Investigação Conjugal
   - Localização de Pessoas
   - Investigação Empresarial
   - Consulta Gratuita
5. **Snippets estruturados**:
   - Serviços: Investigação Conjugal, Empresarial, Digital, Familiar
   - Áreas: Brasília, Águas Claras, Taguatinga, Ceilândia, Guará

## 📈 KPIs para Monitorar

### Métricas de Performance:
- **CTR (Click-Through Rate)**: Meta > 5%
- **Quality Score**: Meta > 7/10
- **Taxa de Conversão**: Meta > 10%
- **CPA (Custo por Aquisição)**: Meta < R$ 100
- **ROAS (Return on Ad Spend)**: Meta > 500%

### Métricas de Qualidade:
- **Bounce Rate**: Meta < 40%
- **Tempo na Página**: Meta > 2 minutos
- **Páginas por Sessão**: Meta > 2.5
- **Taxa de Rejeição do Formulário**: Meta < 30%

## 🎨 Testes A/B Recomendados

### Headlines para Testar:
1. "Detetive Particular DF | Consulta Grátis | (61) 98284-4543"
2. "Investigação Conjugal Brasília | Descobrir Traição | Sigilo Total"
3. "Como Descobrir Traição? | Detetive DF | 15 Anos Experiência"

### Descrições para Testar:
1. "Detetive graduado com 15+ anos. Investigação sigilosa em todo DF. Consulta gratuita pelo WhatsApp."
2. "Descubra a verdade com detetive profissional. Preço justo, sigilo absoluto. Atendimento 24h em Brasília."
3. "Investigação profissional DF: Conjugal, Empresarial, Familiar. Consulta gratuita agora!"

## 🔄 Estratégia de Remarketing

### Audiências para Criar:
1. **Visitantes do site (todos)**: 30 dias
2. **Páginas de serviço específicas**: 15 dias
3. **Engajamento alto** (2+ páginas ou 2+ min): 60 dias
4. **Clique em WhatsApp sem conversão**: 7 dias
5. **Visitantes de páginas de investigação conjugal**: 45 dias

### Campanhas de Remarketing:
- Display: Imagens profissionais + CTAs diretos
- YouTube: Anúncios de 15-30 segundos
- Gmail: Ofertas exclusivas para retorno

## 💡 Dicas para Melhorar CPC

1. **Use correspondência de frase** para palavras-chave principais
2. **Palavras-chave negativas**:
   - "grátis", "gratuito", "filme", "série", "jogo"
   - "curso detetive", "como ser detetive"
3. **Horários otimizados**: 8h-22h (horário de maior conversão)
4. **Dispositivos**: Mobile (60%), Desktop (40%)
5. **Localizações**: Brasília + 20km de raio

## 📱 Meta Pixel (Facebook/Instagram Ads)

⚠️ **AÇÃO NECESSÁRIA**: Substitua `YOUR_PIXEL_ID` pelo seu Pixel ID do Facebook
- Localização: `src/components/SEO.tsx` (linhas 131-137)

### Como obter:
1. Acesse [Meta Business Suite](https://business.facebook.com)
2. Gerenciador de Eventos → Pixels
3. Copie o ID do pixel

## ✅ Checklist de Lançamento

- [ ] Substituir `AW-XXXXXXXXX` pelo ID real do Google Ads
- [ ] Criar 3 ações de conversão no Google Ads
- [ ] Configurar 4 campanhas de pesquisa
- [ ] Adicionar extensões de anúncios
- [ ] Configurar audiências de remarketing
- [ ] Instalar Meta Pixel (opcional)
- [ ] Testar todas as conversões manualmente
- [ ] Configurar alertas de orçamento
- [ ] Vincular Google Ads ao Google Analytics
- [ ] Definir orçamento diário inicial (R$ 50-100/dia)

## 🎯 Budget Inicial Recomendado

**Total Mensal**: R$ 3.000 - R$ 5.000
- Pesquisa (Brand): R$ 300/mês
- Pesquisa (Investigação Conjugal): R$ 1.500/mês
- Pesquisa (Geral): R$ 900/mês
- Pesquisa (Localização): R$ 600/mês
- Display Remarketing: R$ 300/mês
- Reserva/Testes: R$ 400/mês

## 📞 Suporte

Precisa de ajuda? Entre em contato com especialistas em Google Ads ou marketing digital para otimização contínua das campanhas.

---

**Última atualização**: 2025-01-01
**Versão**: 1.0
