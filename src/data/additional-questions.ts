import type { Question } from "@/src/types/quiz";

export const additionalQuestions: Question[] = [
  // =====================================================
  // FUNDAMENTOS / ÁGUA / pH
  // =====================================================

  {
    id: "bio-extra-001",
    category: "Fundamentos",
    question: "O que melhor define o metabolismo?",
    options: [
      { id: "a", text: "Apenas a degradação de nutrientes" },
      {
        id: "b",
        text: "O conjunto de reações químicas que ocorre no organismo",
      },
      { id: "c", text: "Somente a produção de ATP" },
      { id: "d", text: "A digestão de proteínas no intestino" },
    ],
    correctOptionId: "b",
    explanation:
      "Metabolismo corresponde ao conjunto de reações químicas do organismo, incluindo processos de síntese (anabolismo) e degradação (catabolismo).",
  },

  {
    id: "bio-extra-002",
    category: "Fundamentos",
    question: "Qual alternativa caracteriza corretamente o catabolismo?",
    options: [
      { id: "a", text: "Síntese de moléculas complexas" },
      { id: "b", text: "Armazenamento exclusivo de glicose" },
      {
        id: "c",
        text: "Degradação de moléculas com possibilidade de liberação de energia",
      },
      { id: "d", text: "Síntese de proteínas exclusivamente" },
    ],
    correctOptionId: "c",
    explanation:
      "O catabolismo envolve a quebra de moléculas complexas em moléculas menores e frequentemente está associado à liberação de energia.",
  },

  {
    id: "bio-extra-003",
    category: "Água e pH",
    question: "Por que a água é considerada um excelente solvente biológico?",
    options: [
      { id: "a", text: "Porque é totalmente apolar" },
      {
        id: "b",
        text: "Porque apresenta polaridade e pode interagir com íons e moléculas polares",
      },
      { id: "c", text: "Porque não participa de reações químicas" },
      { id: "d", text: "Porque dissolve igualmente qualquer substância" },
    ],
    correctOptionId: "b",
    explanation:
      "A polaridade da água permite interações com íons e moléculas polares, tornando-a fundamental como solvente dos sistemas biológicos.",
  },

  {
    id: "bio-extra-004",
    category: "Água e pH",
    question: "Qual é a principal função de um sistema tampão?",
    options: [
      { id: "a", text: "Impedir completamente qualquer alteração de pH" },
      { id: "b", text: "Aumentar permanentemente a acidez" },
      { id: "c", text: "Reduzir alterações bruscas de pH" },
      { id: "d", text: "Eliminar todos os íons H+" },
    ],
    correctOptionId: "c",
    explanation:
      "Um tampão não mantém o pH absolutamente fixo, mas resiste a alterações bruscas quando ácidos ou bases são adicionados.",
  },

  {
    id: "bio-extra-005",
    category: "Sais minerais",
    question:
      "Qual íon possui papel especialmente importante no potencial de membrana e na função muscular e cardíaca?",
    options: [
      { id: "a", text: "K+" },
      { id: "b", text: "I−" },
      { id: "c", text: "Fe3+" },
      { id: "d", text: "PO4³−" },
    ],
    correctOptionId: "a",
    explanation:
      "O potássio é fundamental para o potencial elétrico das membranas celulares e para a atividade muscular, inclusive cardíaca.",
  },

  // =====================================================
  // AMINOÁCIDOS
  // =====================================================

  {
    id: "bio-extra-006",
    category: "Aminoácidos",
    question:
      "Qual parte da estrutura de um aminoácido determina grande parte de suas propriedades químicas?",
    options: [
      { id: "a", text: "Carbono alfa" },
      { id: "b", text: "Grupo carboxila" },
      { id: "c", text: "Radical R" },
      { id: "d", text: "Grupo amino" },
    ],
    correctOptionId: "c",
    explanation:
      "O radical R varia entre os aminoácidos e determina características como polaridade, carga, tamanho e hidrofobicidade.",
  },

  {
    id: "bio-extra-007",
    category: "Aminoácidos",
    question:
      "Qual aminoácido é uma exceção importante por não possuir carbono alfa quiral?",
    options: [
      { id: "a", text: "Histidina" },
      { id: "b", text: "Glicina" },
      { id: "c", text: "Glutamato" },
      { id: "d", text: "Leucina" },
    ],
    correctOptionId: "b",
    explanation:
      "Na glicina, o radical R é outro átomo de hidrogênio. Por isso, o carbono alfa não possui quatro substituintes diferentes.",
  },

  {
    id: "bio-extra-008",
    category: "Aminoácidos",
    question: "O que caracteriza a forma zwitteriônica de um aminoácido?",
    options: [
      { id: "a", text: "A molécula não apresenta nenhuma carga elétrica" },
      { id: "b", text: "A molécula possui apenas carga positiva" },
      {
        id: "c",
        text: "A molécula apresenta simultaneamente grupos com cargas positiva e negativa",
      },
      { id: "d", text: "O aminoácido perde o grupo carboxila" },
    ],
    correctOptionId: "c",
    explanation:
      "Na forma zwitteriônica, o grupo amino pode estar protonado como NH3+ e o grupo carboxila desprotonado como COO−.",
  },

  {
    id: "bio-extra-009",
    category: "Aminoácidos",
    question: "O que representa o ponto isoelétrico (pI)?",
    options: [
      {
        id: "a",
        text: "O pH em que a molécula apresenta carga líquida igual a zero",
      },
      {
        id: "b",
        text: "O pH em que todas as ligações peptídicas são rompidas",
      },
      { id: "c", text: "A temperatura de desnaturação da proteína" },
      { id: "d", text: "A concentração máxima do aminoácido" },
    ],
    correctOptionId: "a",
    explanation:
      "O ponto isoelétrico é o pH no qual a molécula possui carga líquida igual a zero.",
  },

  {
    id: "bio-extra-010",
    category: "Aminoácidos",
    question:
      "Aspartato e glutamato são classificados principalmente como aminoácidos:",
    options: [
      { id: "a", text: "Básicos" },
      { id: "b", text: "Ácidos" },
      { id: "c", text: "Aromáticos" },
      { id: "d", text: "Apolares alifáticos" },
    ],
    correctOptionId: "b",
    explanation:
      "Aspartato e glutamato apresentam cadeias laterais ácidas e geralmente possuem carga negativa em pH fisiológico.",
  },

  // =====================================================
  // PEPTÍDEOS E PROTEÍNAS
  // =====================================================

  {
    id: "bio-extra-011",
    category: "Peptídeos",
    question: "A ligação peptídica ocorre entre quais grupos?",
    options: [
      { id: "a", text: "Dois grupos carboxila" },
      { id: "b", text: "Dois grupos amino" },
      {
        id: "c",
        text: "Grupo carboxila de um aminoácido e grupo amino de outro",
      },
      { id: "d", text: "Dois radicais R" },
    ],
    correctOptionId: "c",
    explanation:
      "A ligação peptídica resulta da reação entre o grupo carboxila de um aminoácido e o grupo amino de outro.",
  },

  {
    id: "bio-extra-012",
    category: "Peptídeos",
    question: "Qual extremidade de um peptídeo possui o grupo amino livre?",
    options: [
      { id: "a", text: "C-terminal" },
      { id: "b", text: "N-terminal" },
      { id: "c", text: "Extremidade R" },
      { id: "d", text: "Extremidade peptídica" },
    ],
    correctOptionId: "b",
    explanation:
      "O N-terminal corresponde à extremidade da cadeia que apresenta o grupo amino livre.",
  },

  {
    id: "bio-extra-013",
    category: "Proteínas",
    question:
      "Qual nível estrutural corresponde à sequência linear dos aminoácidos?",
    options: [
      { id: "a", text: "Primário" },
      { id: "b", text: "Secundário" },
      { id: "c", text: "Terciário" },
      { id: "d", text: "Quaternário" },
    ],
    correctOptionId: "a",
    explanation:
      "A estrutura primária corresponde à sequência específica de aminoácidos unidos por ligações peptídicas.",
  },

  {
    id: "bio-extra-014",
    category: "Proteínas",
    question:
      "A alfa-hélice e a folha beta pertencem a qual nível de organização proteica?",
    options: [
      { id: "a", text: "Primário" },
      { id: "b", text: "Secundário" },
      { id: "c", text: "Terciário" },
      { id: "d", text: "Quaternário" },
    ],
    correctOptionId: "b",
    explanation:
      "Alfa-hélices e folhas beta são estruturas secundárias estabilizadas principalmente por ligações de hidrogênio.",
  },

  {
    id: "bio-extra-015",
    category: "Proteínas",
    question: "A hemoglobina é um bom exemplo de proteína com estrutura:",
    options: [
      { id: "a", text: "Somente primária" },
      { id: "b", text: "Quaternária" },
      { id: "c", text: "Sem estrutura terciária" },
      { id: "d", text: "Exclusivamente secundária" },
    ],
    correctOptionId: "b",
    explanation:
      "A hemoglobina possui estrutura quaternária porque sua forma funcional envolve a associação de múltiplas subunidades.",
  },

  {
    id: "bio-extra-016",
    category: "Proteínas",
    question:
      "Durante uma desnaturação proteica simples, qual estrutura tende a permanecer preservada?",
    options: [
      { id: "a", text: "Primária" },
      { id: "b", text: "Secundária" },
      { id: "c", text: "Terciária" },
      { id: "d", text: "Quaternária" },
    ],
    correctOptionId: "a",
    explanation:
      "A desnaturação geralmente altera estruturas secundária, terciária e quaternária sem necessariamente romper as ligações peptídicas da estrutura primária.",
  },

  {
    id: "bio-extra-017",
    category: "Proteínas",
    question: "Qual das alternativas é uma proteína conjugada?",
    options: [
      { id: "a", text: "Hemoglobina associada ao grupo heme" },
      { id: "b", text: "Peptídeo constituído somente por aminoácidos" },
      { id: "c", text: "Uma cadeia isolada de glicina" },
      { id: "d", text: "Um aminoácido livre" },
    ],
    correctOptionId: "a",
    explanation:
      "Proteínas conjugadas possuem uma parte proteica associada a um componente não proteico. Na hemoglobina, esse componente inclui o grupo heme.",
  },

  // =====================================================
  // ENZIMAS
  // =====================================================

  {
    id: "bio-extra-018",
    category: "Enzimas",
    question: "Qual é a principal função de uma enzima?",
    options: [
      { id: "a", text: "Aumentar a energia de ativação" },
      { id: "b", text: "Diminuir a energia de ativação e acelerar a reação" },
      { id: "c", text: "Ser consumida permanentemente na reação" },
      {
        id: "d",
        text: "Alterar obrigatoriamente o equilíbrio final da reação",
      },
    ],
    correctOptionId: "b",
    explanation:
      "Enzimas aceleram reações diminuindo a energia de ativação e não são consumidas permanentemente no processo.",
  },

  {
    id: "bio-extra-019",
    category: "Enzimas",
    question: "No esquema E + S ⇄ ES → E + P, o que representa ES?",
    options: [
      { id: "a", text: "Energia do substrato" },
      { id: "b", text: "Complexo enzima-substrato" },
      { id: "c", text: "Enzima desnaturada" },
      { id: "d", text: "Produto final" },
    ],
    correctOptionId: "b",
    explanation:
      "ES representa o complexo temporário formado pela ligação entre a enzima e seu substrato.",
  },

  {
    id: "bio-extra-020",
    category: "Enzimas",
    question: "Na inibição competitiva clássica, qual alteração é esperada?",
    options: [
      { id: "a", text: "Km aumenta e Vmax permanece igual" },
      { id: "b", text: "Km diminui e Vmax aumenta" },
      { id: "c", text: "Km permanece igual e Vmax diminui" },
      { id: "d", text: "Km e Vmax diminuem obrigatoriamente" },
    ],
    correctOptionId: "a",
    explanation:
      "Na inibição competitiva, é necessária maior concentração de substrato para atingir determinada velocidade, aumentando o Km aparente, enquanto a Vmax pode ser atingida.",
  },

  {
    id: "bio-extra-021",
    category: "Enzimas",
    question:
      "Na inibição não competitiva pura, qual alteração clássica ocorre?",
    options: [
      { id: "a", text: "Vmax diminui e Km permanece igual" },
      { id: "b", text: "Vmax aumenta e Km aumenta" },
      { id: "c", text: "Vmax permanece igual e Km aumenta" },
      { id: "d", text: "Vmax e Km aumentam" },
    ],
    correctOptionId: "a",
    explanation:
      "Na inibição não competitiva pura, a capacidade máxima da enzima é reduzida, diminuindo a Vmax, sem alterar o Km.",
  },

  {
    id: "bio-extra-022",
    category: "Enzimas",
    question:
      "Um Km menor, no modelo clássico de Michaelis-Menten, geralmente indica:",
    options: [
      { id: "a", text: "Menor afinidade aparente pelo substrato" },
      { id: "b", text: "Maior afinidade aparente pelo substrato" },
      { id: "c", text: "Ausência de ligação com o substrato" },
      { id: "d", text: "Desnaturação obrigatória da enzima" },
    ],
    correctOptionId: "b",
    explanation:
      "Didaticamente, um Km menor indica que uma menor concentração de substrato é necessária para atingir metade da Vmax, associando-se a maior afinidade aparente.",
  },

  // =====================================================
  // METABOLISMO
  // =====================================================

  {
    id: "bio-extra-023",
    category: "Glicólise",
    question: "Onde ocorre a glicólise?",
    options: [
      { id: "a", text: "Núcleo" },
      { id: "b", text: "Citoplasma" },
      { id: "c", text: "Matriz mitocondrial" },
      { id: "d", text: "Lisossomo" },
    ],
    correctOptionId: "b",
    explanation:
      "A glicólise ocorre no citoplasma e converte glicose em piruvato.",
  },

  {
    id: "bio-extra-024",
    category: "Glicólise",
    question:
      "Qual é o saldo líquido de ATP da glicólise por molécula de glicose?",
    options: [
      { id: "a", text: "1 ATP" },
      { id: "b", text: "2 ATP" },
      { id: "c", text: "4 ATP" },
      { id: "d", text: "8 ATP" },
    ],
    correctOptionId: "b",
    explanation:
      "A glicólise produz quatro ATP, mas utiliza dois durante suas etapas iniciais, resultando em saldo líquido de dois ATP.",
  },

  {
    id: "bio-extra-025",
    category: "Metabolismo energético",
    question:
      "Qual molécula conecta diretamente a oxidação do piruvato ao ciclo de Krebs?",
    options: [
      { id: "a", text: "Lactato" },
      { id: "b", text: "Acetil-CoA" },
      { id: "c", text: "Glicogênio" },
      { id: "d", text: "Ribose-5-fosfato" },
    ],
    correctOptionId: "b",
    explanation:
      "O complexo piruvato desidrogenase converte piruvato em acetil-CoA, que pode entrar no ciclo de Krebs.",
  },

  {
    id: "bio-extra-026",
    category: "Ciclo de Krebs",
    question: "Onde ocorre principalmente o ciclo de Krebs?",
    options: [
      { id: "a", text: "Citoplasma" },
      { id: "b", text: "Matriz mitocondrial" },
      { id: "c", text: "Membrana plasmática" },
      { id: "d", text: "Núcleo" },
    ],
    correctOptionId: "b",
    explanation:
      "Nas células eucarióticas, a maior parte das reações do ciclo de Krebs ocorre na matriz mitocondrial.",
  },

  {
    id: "bio-extra-027",
    category: "Ciclo de Krebs",
    question:
      "Qual é uma das principais funções energéticas do ciclo de Krebs?",
    options: [
      { id: "a", text: "Produzir grandes quantidades de ATP diretamente" },
      { id: "b", text: "Produzir NADH e FADH2 para a cadeia respiratória" },
      { id: "c", text: "Produzir glicose diretamente" },
      { id: "d", text: "Armazenar oxigênio" },
    ],
    correctOptionId: "b",
    explanation:
      "O ciclo de Krebs gera principalmente transportadores reduzidos, como NADH e FADH2, que levam elétrons para a cadeia respiratória.",
  },

  {
    id: "bio-extra-028",
    category: "Cadeia respiratória",
    question:
      "Onde está localizada a cadeia transportadora de elétrons na mitocôndria?",
    options: [
      { id: "a", text: "Membrana externa" },
      { id: "b", text: "Matriz" },
      { id: "c", text: "Membrana interna" },
      { id: "d", text: "Citoplasma" },
    ],
    correctOptionId: "c",
    explanation:
      "Os complexos da cadeia respiratória estão localizados na membrana interna mitocondrial.",
  },

  {
    id: "bio-extra-029",
    category: "Cadeia respiratória",
    question: "Qual é o aceptor final de elétrons da cadeia respiratória?",
    options: [
      { id: "a", text: "Glicose" },
      { id: "b", text: "Oxigênio" },
      { id: "c", text: "Piruvato" },
      { id: "d", text: "ATP" },
    ],
    correctOptionId: "b",
    explanation:
      "O oxigênio recebe os elétrons ao final da cadeia respiratória e participa da formação de água.",
  },

  {
    id: "bio-extra-030",
    category: "Aplicações farmacêuticas",
    question: "Qual enzima é o principal alvo das estatinas?",
    options: [
      { id: "a", text: "Acetilcolinesterase" },
      { id: "b", text: "HMG-CoA redutase" },
      { id: "c", text: "ATP sintase" },
      { id: "d", text: "Piruvato desidrogenase" },
    ],
    correctOptionId: "b",
    explanation:
      "As estatinas inibem a HMG-CoA redutase, enzima importante na síntese hepática de colesterol.",
  },

  // =====================================================
  // CÁLCULOS
  // =====================================================

  {
    id: "bio-extra-031",
    category: "Água e pH",
    question: "Uma solução apresenta [H+] = 1 × 10⁻³ mol/L. Qual é seu pH?",
    options: [
      { id: "a", text: "2" },
      { id: "b", text: "3" },
      { id: "c", text: "7" },
      { id: "d", text: "11" },
    ],
    correctOptionId: "b",
    explanation: "pH = −log[H+]. Portanto, pH = −log(10⁻³) = 3.",
  },

  {
    id: "bio-extra-032",
    category: "Água e pH",
    question: "Se [H+] = 1 × 10⁻⁵ mol/L, qual é o pH da solução?",
    options: [
      { id: "a", text: "5" },
      { id: "b", text: "7" },
      { id: "c", text: "9" },
      { id: "d", text: "10" },
    ],
    correctOptionId: "a",
    explanation:
      "Aplicando pH = −log[H+], temos pH = −log(10⁻⁵) = 5. A solução é ácida porque seu pH é menor que 7.",
  },

  {
    id: "bio-extra-033",
    category: "Água e pH",
    question: "Uma solução possui [H+] = 1 × 10⁻⁸ mol/L. Qual é seu pH?",
    options: [
      { id: "a", text: "6" },
      { id: "b", text: "7" },
      { id: "c", text: "8" },
      { id: "d", text: "10" },
    ],
    correctOptionId: "c",
    explanation:
      "Aplicando pH = −log[H+], temos pH = −log(10⁻⁸) = 8. A solução é básica porque seu pH é maior que 7.",
  },

  {
    id: "bio-extra-034",
    category: "Aminoácidos",
    question:
      "A glicina possui pKa1 = 2,34 e pKa2 = 9,60. Qual é aproximadamente seu ponto isoelétrico?",
    options: [
      { id: "a", text: "3,63" },
      { id: "b", text: "5,97" },
      { id: "c", text: "7,26" },
      { id: "d", text: "11,94" },
    ],
    correctOptionId: "b",
    explanation: "Para a glicina, pI = (2,34 + 9,60) ÷ 2 = 11,94 ÷ 2 = 5,97.",
  },

  {
    id: "bio-extra-035",
    category: "Aminoácidos",
    question:
      "Para o glutamato, considere os pKa 2,19 e 4,25 que cercam sua forma de carga líquida zero. Qual é aproximadamente o pI?",
    options: [
      { id: "a", text: "2,19" },
      { id: "b", text: "3,22" },
      { id: "c", text: "4,25" },
      { id: "d", text: "6,44" },
    ],
    correctOptionId: "b",
    explanation: "pI = (2,19 + 4,25) ÷ 2 = 6,44 ÷ 2 = 3,22.",
  },

  {
    id: "bio-extra-036",
    category: "Aminoácidos",
    question:
      "Para a histidina, considere pKa = 6,00 e 9,17 ao redor da forma neutra. Qual é aproximadamente o pI?",
    options: [
      { id: "a", text: "6,00" },
      { id: "b", text: "6,59" },
      { id: "c", text: "7,59" },
      { id: "d", text: "9,17" },
    ],
    correctOptionId: "c",
    explanation:
      "pI = (6,00 + 9,17) ÷ 2 = 15,17 ÷ 2 = 7,585, aproximadamente 7,59.",
  },

  {
    id: "bio-extra-037",
    category: "Peptídeos",
    question:
      "Uma cadeia linear formada por 7 aminoácidos possui quantas ligações peptídicas?",
    options: [
      { id: "a", text: "5" },
      { id: "b", text: "6" },
      { id: "c", text: "7" },
      { id: "d", text: "8" },
    ],
    correctOptionId: "b",
    explanation:
      "Em uma cadeia linear, o número de ligações peptídicas é n − 1. Para 7 aminoácidos: 7 − 1 = 6.",
  },

  {
    id: "bio-extra-038",
    category: "Peptídeos",
    question:
      "Quantas moléculas de água são liberadas na formação de um tripeptídeo linear a partir de três aminoácidos?",
    options: [
      { id: "a", text: "1" },
      { id: "b", text: "2" },
      { id: "c", text: "3" },
      { id: "d", text: "4" },
    ],
    correctOptionId: "b",
    explanation:
      "Um tripeptídeo possui duas ligações peptídicas. Cada ligação formada por condensação libera uma molécula de água, totalizando 2.",
  },

  {
    id: "bio-extra-039",
    category: "Peptídeos",
    question:
      "Um peptídeo linear contendo 10 aminoácidos possui quantas ligações peptídicas?",
    options: [
      { id: "a", text: "8" },
      { id: "b", text: "9" },
      { id: "c", text: "10" },
      { id: "d", text: "11" },
    ],
    correctOptionId: "b",
    explanation:
      "O número de ligações peptídicas de uma cadeia linear é n − 1. Portanto: 10 − 1 = 9.",
  },

  {
    id: "bio-extra-040",
    category: "Enzimas",
    question:
      "Uma enzima possui Vmax = 100 µmol/min, Km = 5 mmol/L e [S] = 5 mmol/L. Pela equação de Michaelis-Menten, qual é a velocidade da reação?",
    options: [
      { id: "a", text: "25 µmol/min" },
      { id: "b", text: "50 µmol/min" },
      { id: "c", text: "75 µmol/min" },
      { id: "d", text: "100 µmol/min" },
    ],
    correctOptionId: "b",
    explanation: "v = Vmax[S]/(Km+[S]) = 100×5/(5+5) = 500/10 = 50 µmol/min.",
  },

  {
    id: "bio-extra-041",
    category: "Enzimas",
    question:
      "Uma enzima possui Vmax = 120 µmol/min, Km = 3 mmol/L e [S] = 9 mmol/L. Qual é a velocidade inicial?",
    options: [
      { id: "a", text: "30 µmol/min" },
      { id: "b", text: "60 µmol/min" },
      { id: "c", text: "90 µmol/min" },
      { id: "d", text: "120 µmol/min" },
    ],
    correctOptionId: "c",
    explanation: "v = 120×9/(3+9) = 1080/12 = 90 µmol/min.",
  },

  {
    id: "bio-extra-042",
    category: "Enzimas",
    question:
      "Considere Vmax = 80 µmol/min, Km = 2 mmol/L e [S] = 6 mmol/L. Qual é a velocidade?",
    options: [
      { id: "a", text: "20 µmol/min" },
      { id: "b", text: "40 µmol/min" },
      { id: "c", text: "60 µmol/min" },
      { id: "d", text: "80 µmol/min" },
    ],
    correctOptionId: "c",
    explanation: "v = 80×6/(2+6) = 480/8 = 60 µmol/min.",
  },

  {
    id: "bio-extra-043",
    category: "Enzimas",
    question:
      "Uma enzima possui Vmax = 60 µmol/min, Km = 4 mmol/L e [S] = 2 mmol/L. Qual é a velocidade?",
    options: [
      { id: "a", text: "10 µmol/min" },
      { id: "b", text: "20 µmol/min" },
      { id: "c", text: "30 µmol/min" },
      { id: "d", text: "40 µmol/min" },
    ],
    correctOptionId: "b",
    explanation: "v = 60×2/(4+2) = 120/6 = 20 µmol/min.",
  },

  {
    id: "bio-extra-044",
    category: "Enzimas",
    question:
      "Quando [S] é exatamente igual a Km e Vmax é 200 µmol/min, qual é a velocidade da reação?",
    options: [
      { id: "a", text: "50 µmol/min" },
      { id: "b", text: "100 µmol/min" },
      { id: "c", text: "150 µmol/min" },
      { id: "d", text: "200 µmol/min" },
    ],
    correctOptionId: "b",
    explanation:
      "Quando [S] = Km, v = Vmax/2. Portanto, 200 ÷ 2 = 100 µmol/min.",
  },

  {
    id: "bio-extra-045",
    category: "Glicólise",
    question:
      "Se cada molécula de glicose fornece saldo líquido de 2 ATP na glicólise, qual será o saldo para 3 moléculas de glicose?",
    options: [
      { id: "a", text: "3 ATP" },
      { id: "b", text: "4 ATP" },
      { id: "c", text: "6 ATP" },
      { id: "d", text: "12 ATP" },
    ],
    correctOptionId: "c",
    explanation:
      "Cada glicose fornece 2 ATP líquidos. Para três moléculas: 3 × 2 = 6 ATP.",
  },

  {
    id: "bio-extra-046",
    category: "Glicólise",
    question:
      "Se cada glicose gera 2 NADH durante a glicólise, quantos NADH são formados a partir de 5 moléculas de glicose?",
    options: [
      { id: "a", text: "5 NADH" },
      { id: "b", text: "8 NADH" },
      { id: "c", text: "10 NADH" },
      { id: "d", text: "20 NADH" },
    ],
    correctOptionId: "c",
    explanation:
      "São produzidos 2 NADH por glicose. Portanto: 5 × 2 = 10 NADH.",
  },

  {
    id: "bio-extra-047",
    category: "Glicólise",
    question:
      "Quantas moléculas de piruvato são produzidas pela glicólise de 5 moléculas de glicose?",
    options: [
      { id: "a", text: "5" },
      { id: "b", text: "8" },
      { id: "c", text: "10" },
      { id: "d", text: "15" },
    ],
    correctOptionId: "c",
    explanation:
      "Cada glicose é convertida em duas moléculas de piruvato. Logo: 5 × 2 = 10 piruvatos.",
  },

  {
    id: "bio-extra-048",
    category: "Ciclo de Krebs",
    question:
      "Cada volta do ciclo de Krebs por acetil-CoA gera 3 NADH. Quantos NADH são produzidos a partir de 4 acetil-CoA?",
    options: [
      { id: "a", text: "4 NADH" },
      { id: "b", text: "8 NADH" },
      { id: "c", text: "12 NADH" },
      { id: "d", text: "16 NADH" },
    ],
    correctOptionId: "c",
    explanation:
      "Cada acetil-CoA gera 3 NADH no ciclo. Portanto: 4 × 3 = 12 NADH.",
  },

  {
    id: "bio-extra-049",
    category: "Ciclo de Krebs",
    question:
      "Cada acetil-CoA gera 1 FADH2 no ciclo de Krebs. Quantos FADH2 são produzidos a partir de 3 acetil-CoA?",
    options: [
      { id: "a", text: "1 FADH2" },
      { id: "b", text: "2 FADH2" },
      { id: "c", text: "3 FADH2" },
      { id: "d", text: "6 FADH2" },
    ],
    correctOptionId: "c",
    explanation:
      "A produção é de 1 FADH2 por acetil-CoA. Portanto: 3 × 1 = 3 FADH2.",
  },

  {
    id: "bio-extra-050",
    category: "Ciclo de Krebs",
    question:
      "Cada acetil-CoA libera 2 CO2 no ciclo de Krebs. Quantas moléculas de CO2 são liberadas por 2 acetil-CoA?",
    options: [
      { id: "a", text: "2 CO2" },
      { id: "b", text: "3 CO2" },
      { id: "c", text: "4 CO2" },
      { id: "d", text: "6 CO2" },
    ],
    correctOptionId: "c",
    explanation:
      "Cada acetil-CoA produz 2 CO2 no ciclo de Krebs. Para 2 acetil-CoA: 2 × 2 = 4 CO2.",
  },
];
