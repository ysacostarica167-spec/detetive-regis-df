# Otimização de Quality Score para CPC Reduzido

## 🎯 O que é Quality Score?

O Quality Score (Índice de Qualidade) é uma métrica do Google Ads (1-10) que afeta diretamente o CPC e a posição do anúncio. Quanto maior o Quality Score, menor o CPC e melhor a posição.

### Componentes do Quality Score:
1. **CTR Esperado** (40%): Taxa de cliques esperada
2. **Relevância do Anúncio** (30%): Correspondência entre anúncio e palavra-chave
3. **Experiência na Landing Page** (30%): Qualidade da página de destino

## ✅ Otimizações Já Implementadas

### 1. Landing Pages de Alta Qualidade
- ✅ Velocidade de carregamento otimizada
- ✅ Mobile-friendly responsivo
- ✅ Conteúdo relevante e específico por serviço
- ✅ CTAs claros e visíveis
- ✅ Schema markup estruturado
- ✅ SSL/HTTPS seguro
- ✅ Meta tags otimizadas

### 2. Rastreamento de Engajamento
- ✅ Scroll depth tracking (25%, 50%, 75%, 90%)
- ✅ Time on page tracking (30s, 1min, 2min, 5min)
- ✅ Click tracking em todos os CTAs
- ✅ Service view tracking para remarketing

### 3. Conversões Configuradas
- ✅ WhatsApp clicks (principal)
- ✅ Phone calls (secundária)
- ✅ Form submissions (se implementados)
- ✅ Enhanced conversions habilitadas

## 📊 Como Melhorar Cada Componente

### 🖱️ 1. CTR Esperado (40% do Score)

#### Headlines que Convertem Mais:
```
✅ BOAS:
- "Investigação Conjugal DF | Consulta Grátis | (61) 98284-4543"
- "Como Descobrir Traição em Brasília? | Detetive Especializado"
- "Detetive Particular DF | 15 Anos Experiência | Sigilo Total"

❌ RUINS:
- "Serviços de Detetive"
- "Investigação Profissional"
- "Contrate um Detetive"
```

#### Descrições Otimizadas:
```
✅ BOAS:
- "Detetive graduado com 15+ anos de experiência em Brasília. Investigação sigilosa em todo o DF. Consulta gratuita pelo WhatsApp agora mesmo!"
- "Descubra a verdade com investigação profissional. Preço justo, sigilo absoluto garantido. Atendimento 24h em todas as regiões de Brasília."

❌ RUINS:
- "Oferecemos serviços de investigação em várias áreas."
- "Entre em contato conosco para saber mais."
```

#### Dicas para CTR Alto:
1. **Use números**: "15+ anos", "24h", "100% sigiloso"
2. **Inclua telefone**: (61) 98284-4543
3. **Destaque benefícios**: "Consulta Grátis", "Sigilo Total"
4. **Urgência sutil**: "Atendimento Imediato", "Agora"
5. **Localização**: "Brasília", "DF", "Águas Claras"

### 🎯 2. Relevância do Anúncio (30% do Score)

#### Estrutura de Grupos de Anúncios:

**Grupo 1: Investigação Conjugal**
- Palavras-chave (5-20):
  - investigação conjugal brasília
  - como descobrir traição em brasília
  - detetive para infidelidade df
  - investigação de traição brasília
  - detetive conjugal df

- Landing Page: `/investigacao-conjugal`
- Headline: "Investigação Conjugal DF | Como Descobrir Traição"
- Descrição deve mencionar: conjugal, traição, infidelidade

**Grupo 2: Investigação Empresarial**
- Palavras-chave (5-20):
  - investigação empresarial df
  - detetive para funcionários brasília
  - investigação corporativa df
  - fraudes internas brasília

- Landing Page: `/investigacao-empresarial`
- Headline: "Investigação Empresarial DF | Detetive para Funcionários"
- Descrição deve mencionar: empresarial, corporativo, funcionários

**Grupo 3: Localização de Pessoas**
- Palavras-chave (5-20):
  - localização pessoas desaparecidas df
  - encontrar devedor pensão brasília
  - investigação familiar brasília

- Landing Page: `/localizacao-pessoas`
- Headline: "Localização de Pessoas DF | Encontrar Devedor de Pensão"
- Descrição deve mencionar: localização, pessoas, desaparecidas

#### Regra de Ouro:
**A palavra-chave DEVE aparecer em:**
1. ✅ Headline do anúncio
2. ✅ Descrição do anúncio
3. ✅ URL de exibição
4. ✅ H1 da landing page
5. ✅ Primeiros 100 caracteres da landing page

### 📱 3. Experiência na Landing Page (30% do Score)

#### Checklist da Landing Page Perfeita:

**Velocidade** ✅
- [x] Carregamento < 3 segundos
- [x] Imagens otimizadas (WebP)
- [x] Lazy loading implementado
- [x] CSS/JS minificados

**Mobile-Friendly** ✅
- [x] Design responsivo
- [x] Botões grandes (44px+)
- [x] Texto legível (16px+)
- [x] Sem pop-ups intrusivos

**Conteúdo Relevante** ✅
- [x] H1 corresponde à palavra-chave
- [x] Palavra-chave aparece 3-5 vezes
- [x] Conteúdo único (não duplicado)
- [x] 500+ palavras de conteúdo

**Navegação Clara** ✅
- [x] CTA visível acima da dobra
- [x] Menu simples e intuitivo
- [x] Breadcrumbs para navegação
- [x] Links internos relevantes

**Confiança** ✅
- [x] Telefone visível
- [x] WhatsApp sempre acessível
- [x] Credenciais profissionais
- [x] Depoimentos (se disponível)
- [x] HTTPS/SSL

**Sem Problemas Técnicos** ✅
- [x] Sem erros 404
- [x] Sem links quebrados
- [x] Compatível com todos navegadores
- [x] Sem avisos de segurança

## 🚀 Ações Imediatas para Aumentar Quality Score

### Prioridade ALTA (Faça Agora):

1. **Configurar Google Ads ID**
   - Substitua `AW-XXXXXXXXX` em:
     - `src/utils/analytics.ts` (linha 11)
     - `src/components/SEO.tsx` (linha 87)

2. **Criar Ações de Conversão**
   - WhatsApp Click
   - Phone Call
   - Form Submit (se houver)

3. **Estruturar Campanhas**
   - 1 campanha por tipo de serviço
   - 3-5 grupos de anúncios por campanha
   - 5-20 palavras-chave por grupo
   - 3 anúncios por grupo

4. **Adicionar Extensões**
   - Chamada: (61) 98284-4543
   - Local: Asa Sul, Brasília DF
   - Sitelinks (4): Serviços principais
   - Snippets: Especialidades

### Prioridade MÉDIA (Primeira Semana):

5. **Otimizar Headlines e Descrições**
   - Incluir palavra-chave exata
   - Adicionar número de telefone
   - Destacar USPs (consulta grátis, sigilo)
   - Usar call-to-action forte

6. **Palavras-chave Negativas**
   - Adicionar lista de negativas:
     - grátis, gratuito (exceto quando você oferece)
     - filme, série, jogo, livro
     - curso, formação, como ser detetive
     - piadas, memes

7. **Segmentação Geográfica**
   - Brasília + 20km raio
   - Águas Claras, Taguatinga, Ceilândia, Guará
   - Lago Sul, Asa Norte, Sobradinho
   - Ajustar lances por localização

### Prioridade BAIXA (Otimização Contínua):

8. **Testes A/B**
   - Testar 3 headlines diferentes
   - Testar 2 descrições diferentes
   - Testar 2 CTAs diferentes
   - Manter o que funciona melhor

9. **Ajustes de Lance**
   - Aumentar para dispositivos móveis (+20%)
   - Aumentar para horários de pico (+15%)
   - Reduzir para baixo desempenho (-30%)

10. **Análise de Dados**
    - Revisar Quality Score semanalmente
    - Pausar palavras-chave QS < 5
    - Duplicar budget para QS 8-10
    - Ajustar lances por QS

## 📈 Metas de Quality Score

### Por Tipo de Palavra-chave:

**Marca (Brand)**
- Meta Quality Score: 9-10/10
- CTR Esperado: > 15%
- CPC Médio: R$ 0,50 - R$ 2,00

**Alta Intenção (Ex: "investigação conjugal brasília")**
- Meta Quality Score: 7-9/10
- CTR Esperado: > 8%
- CPC Médio: R$ 3,00 - R$ 8,00

**Intenção Geral (Ex: "detetive particular df")**
- Meta Quality Score: 6-8/10
- CTR Esperado: > 5%
- CPC Médio: R$ 2,00 - R$ 5,00

**Informacional (Ex: "como descobrir traição")**
- Meta Quality Score: 5-7/10
- CTR Esperado: > 3%
- CPC Médio: R$ 1,00 - R$ 3,00

## 🔍 Como Monitorar Quality Score

### No Google Ads:
1. Vá em **Campanhas** → **Palavras-chave**
2. Clique em **Colunas** → **Modificar colunas**
3. Adicione:
   - Índice de qualidade
   - CTR esperado
   - Relevância do anúncio
   - Experiência na landing page

### Análise Semanal:
- Identifique palavras-chave com QS < 5
- Verifique se headline/descrição tem a palavra-chave
- Confirme se landing page é relevante
- Considere pausar se não melhorar em 2 semanas

### Análise Mensal:
- Compare QS médio do mês anterior
- Identifique tendências (melhorando/piorando)
- Ajuste estratégia baseada em dados
- Documente o que funcionou

## 💡 Dicas Avançadas

### 1. Correspondência de Palavra-chave:
- **Correspondência exata**: `[investigação conjugal brasília]`
  - Mais controle, QS mais alto
  - CPC menor, volume menor
  - Use para palavras principais

- **Correspondência de frase**: `"investigação conjugal brasília"`
  - Bom equilíbrio
  - QS médio-alto
  - Use para variações

- **Correspondência ampla**: `investigação conjugal brasília`
  - Maior volume, menor controle
  - QS mais baixo geralmente
  - Use com cautela

### 2. URLs de Exibição:
```
✅ BOM: detetive-regis.lovable.app/Investigacao-Conjugal
❌ RUIM: detetive-regis.lovable.app
```

### 3. Landing Page por Palavra-chave:
- Palavra-chave: "investigação conjugal brasília"
  → Landing: `/investigacao-conjugal`

- Palavra-chave: "localização pessoas desaparecidas"
  → Landing: `/localizacao-pessoas`

### 4. Teste de Mensagem:
Antes de lançar, teste se:
- [ ] Palavra-chave está no H1
- [ ] CTA está visível em 3 segundos
- [ ] Página carrega em < 3s no mobile
- [ ] Telefone é clicável no mobile
- [ ] WhatsApp abre corretamente

## 📞 Troubleshooting

### "Meu Quality Score está baixo (< 5)"
1. Verifique se a palavra-chave está no anúncio
2. Verifique se a palavra-chave está na landing page
3. Considere mudar para correspondência exata
4. Teste headline diferente
5. Se não melhorar em 2 semanas, pause

### "Meu CTR está baixo (< 3%)"
1. Adicione número de telefone no headline
2. Use palavras de urgência ("Agora", "Hoje")
3. Destaque benefício único ("Consulta Grátis")
4. Teste headline com pergunta
5. Adicione extensões de anúncio

### "Minha landing page tem baixo score"
1. Verifique velocidade (PageSpeed Insights)
2. Teste em mobile (deve ser perfeito)
3. Remova elementos desnecessários
4. Adicione mais conteúdo relevante
5. Facilite o contato (WhatsApp/Telefone)

## 🎯 Resultado Esperado

### Com Quality Score 8-10:
- **CPC**: 30-50% mais baixo
- **Posição**: 1-3 no topo da página
- **CTR**: 8-15% (muito acima da média)
- **Taxa de Conversão**: 10-20%
- **ROI**: 500-1000%

### Linha do Tempo:
- **Semana 1-2**: Configuração e testes iniciais
- **Semana 3-4**: Primeiras otimizações baseadas em dados
- **Mês 2**: Quality Score começa a melhorar
- **Mês 3+**: QS 7-9, CPC otimizado, ROI positivo

---

**Lembre-se**: Quality Score é um jogo de longo prazo. Otimize continuamente e os resultados virão! 🚀
