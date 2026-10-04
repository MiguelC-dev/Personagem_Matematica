// ===============================
// MATÉRIAS
// ===============================

const temas = [
    {
        nome: "Tabela-Verdade",
        descricao: "Aprenda o conteúdo passo a passo com o Lógima.",
        disponivel: true,
        conteudo: "tabela-verdade"
    },
    {
        nome: "Conjuntos",
        descricao: "Aprenda os conceitos básicos de conjuntos com o Lógima.",
        disponivel: true,
        conteudo: "conjuntos"
    },
    {
        nome: "Álgebra dos Conjuntos",
        descricao: "Aprenda as operações e propriedades dos conjuntos.",
        disponivel: true,
        conteudo: "algebra-conjuntos"
    },
    {
        nome: "Funções",
        descricao: "Entenda o conceito de função, domínio, contradomínio e imagem.",
        disponivel: true,
        conteudo: "funcoes"
    },
    {
        nome: "Função Afim",
        descricao: "Aprenda a forma f(x) = ax + b e como interpretar seus elementos.",
        disponivel: true,
        conteudo: "funcao-afim"
    },
    {
        nome: "Função Linear",
        descricao: "Aprenda a função linear e sua representação no plano cartesiano.",
        disponivel: true,
        conteudo: "funcao-linear"
    },
    {
        nome: "Função Constante",
        descricao: "Aprenda como funciona uma função cujo resultado não muda.",
        disponivel: true,
        conteudo: "funcao-constante"
    },
    {
        nome: "Função Quadrática",
        descricao: "Aprenda a função do segundo grau, sua parábola e seus elementos.",
        disponivel: true,
        conteudo: "funcao-quadratica"
    }
];

// ===============================
// AULAS
// ===============================

const aulas = {

    // ===============================
    // TABELA-VERDADE
    // ===============================

    "tabela-verdade": [
        {
            titulo: "Olá!",
            texto: "Olá! Eu sou o Lógima. Vamos aprender lógica de programação juntos!"
        },
        {
            titulo: "O que vamos aprender?",
            texto: "Nesta aula vamos aprender sobre Tabela-Verdade, negação, conjunção e disjunção. Depois teremos algumas perguntas para testar seus conhecimentos."
        },
        {
            titulo: "O que é uma tabela-verdade?",
            texto: "Uma tabela-verdade mostra todas as possibilidades de valores Verdadeiro e Falso para uma expressão lógica."
        },
        {
            titulo: "Vamos usar A e B",
            texto: "Para nossos exemplos, vamos utilizar apenas as letras A e B. Elas representam proposições que podem ser Verdadeiras ou Falsas."
        },
        {
            titulo: "Negação — NÃO A",
            texto: "A negação troca o valor lógico. Se A é Verdadeiro, NÃO A é Falso. Se A é Falso, NÃO A é Verdadeiro.",
            tabela: [
                ["A", "NÃO A"],
                ["V", "F"],
                ["F", "V"]
            ]
        },
        {
            titulo: "Conjunção — A E B",
            texto: "A conjunção usa o operador E. O resultado só será Verdadeiro quando A e B forem Verdadeiros.",
            tabela: [
                ["A", "B", "A E B"],
                ["V", "V", "V"],
                ["V", "F", "F"],
                ["F", "V", "F"],
                ["F", "F", "F"]
            ]
        },
        {
            titulo: "Disjunção — A OU B",
            texto: "A disjunção usa o operador OU. O resultado será Verdadeiro quando pelo menos uma das proposições for Verdadeira.",
            tabela: [
                ["A", "B", "A OU B"],
                ["V", "V", "V"],
                ["V", "F", "V"],
                ["F", "V", "V"],
                ["F", "F", "F"]
            ]
        },
        {
            titulo: "Hora de testar!",
            texto: "Você já aprendeu os conceitos básicos. Agora vamos fazer algumas perguntas!"
        }
    ],

    // ===============================
    // CONJUNTOS
    // ===============================

    "conjuntos": [
        {
            titulo: "Olá novamente!",
            texto: "Muito bem! Agora vamos aprender sobre Conjuntos. Eu vou explicar tudo passo a passo, com exemplos simples."
        },
        {
            titulo: "O que é um conjunto?",
            texto: "Um conjunto é uma coleção de elementos que possuem alguma característica em comum. Normalmente usamos letras maiúsculas para representar os conjuntos."
        },
        {
            titulo: "Um exemplo",
            texto: "Imagine um conjunto A formado pelos números 1, 2 e 3."
        },
        {
            titulo: "Representando um conjunto",
            texto: "Podemos escrever o conjunto A assim: A = {1, 2, 3}. Os números 1, 2 e 3 são os elementos que pertencem ao conjunto A.",
            tabela: [
                ["Conjunto A"],
                ["{1, 2, 3}"]
            ]
        },
        {
            titulo: "O que são elementos?",
            texto: "Os elementos são os objetos ou valores que fazem parte de um conjunto. No nosso exemplo, 1, 2 e 3 são elementos do conjunto A."
        },
        {
            titulo: "Pertinência",
            texto: "Quando queremos dizer que um elemento pertence a um conjunto, usamos o símbolo ∈. Por exemplo: 2 ∈ A significa que 2 pertence ao conjunto A."
        },
        {
            titulo: "Quando não pertence",
            texto: "Quando um elemento não faz parte do conjunto, usamos o símbolo ∉. Por exemplo: 5 ∉ A significa que 5 não pertence ao conjunto A."
        },
        {
            titulo: "Vamos conferir",
            texto: "Se A = {1, 2, 3}, então podemos dizer: 1 ∈ A, 2 ∈ A e 3 ∈ A. Já o número 5 não pertence ao conjunto: 5 ∉ A."
        },
        {
            titulo: "Conjunto vazio",
            texto: "Um conjunto vazio é um conjunto que não possui nenhum elemento. Podemos representá-lo pelo símbolo ∅ ou por {}."
        },
        {
            titulo: "União",
            texto: "A união junta os elementos de dois conjuntos. Os elementos repetidos aparecem apenas uma vez. O símbolo da união é ∪."
        },
        {
            titulo: "Exemplo de união",
            texto: "Se A = {1, 2, 3} e B = {3, 4, 5}, então A ∪ B = {1, 2, 3, 4, 5}. Perceba que o número 3 não é repetido."
        },
        {
            titulo: "Interseção",
            texto: "A interseção mostra os elementos que pertencem aos dois conjuntos ao mesmo tempo. O símbolo da interseção é ∩."
        },
        {
            titulo: "Exemplo de interseção",
            texto: "Se A = {1, 2, 3} e B = {3, 4, 5}, o único elemento que aparece nos dois conjuntos é o 3. Portanto, A ∩ B = {3}."
        },
        {
            titulo: "Diferença",
            texto: "A diferença mostra os elementos que estão no primeiro conjunto, mas não estão no segundo."
        },
        {
            titulo: "Exemplo de diferença",
            texto: "Se A = {1, 2, 3} e B = {3, 4, 5}, então A − B = {1, 2}. O número 3 não aparece porque ele também pertence a B."
        },
        {
            titulo: "Subconjunto",
            texto: "Um conjunto é subconjunto de outro quando todos os seus elementos também pertencem ao outro conjunto. Usamos o símbolo ⊂."
        },
        {
            titulo: "Exemplo de subconjunto",
            texto: "Se A = {1, 2, 3} e B = {1, 2, 3, 4, 5}, então A ⊂ B, porque todos os elementos de A também estão em B."
        },
        {
            titulo: "Resumo",
            texto: "Vamos lembrar: ∈ significa pertence, ∉ significa não pertence, ∪ representa união, ∩ representa interseção e ⊂ representa subconjunto."
        },
        {
            titulo: "Hora de praticar!",
            texto: "Muito bem! Agora que você aprendeu os conceitos básicos de conjuntos, vamos testar seus conhecimentos."
        }
    ],

    // ===============================
    // ÁLGEBRA DOS CONJUNTOS
    // ===============================

    "algebra-conjuntos": [
        {
            titulo: "Vamos avançar!",
            texto: "Você já aprendeu o que são conjuntos. Agora vamos estudar como realizar operações entre eles e conhecer algumas propriedades importantes."
        },
        {
            titulo: "O que é Álgebra dos Conjuntos?",
            texto: "A Álgebra dos Conjuntos estuda operações realizadas entre conjuntos, como união, interseção, diferença e complemento."
        },
        {
            titulo: "Vamos usar dois conjuntos",
            texto: "Para os nossos exemplos, vamos considerar A = {1, 2, 3} e B = {3, 4, 5}."
        },
        {
            titulo: "União",
            texto: "A união reúne todos os elementos que pertencem a A ou a B. Elementos repetidos aparecem apenas uma vez."
        },
        {
            titulo: "Exemplo de união",
            texto: "Se A = {1, 2, 3} e B = {3, 4, 5}, então A ∪ B = {1, 2, 3, 4, 5}."
        },
        {
            titulo: "Interseção",
            texto: "A interseção reúne somente os elementos que pertencem aos dois conjuntos ao mesmo tempo."
        },
        {
            titulo: "Exemplo de interseção",
            texto: "Se A = {1, 2, 3} e B = {3, 4, 5}, então A ∩ B = {3}."
        },
        {
            titulo: "Diferença",
            texto: "A diferença A − B contém os elementos que pertencem a A, mas não pertencem a B."
        },
        {
            titulo: "Exemplo de diferença",
            texto: "Se A = {1, 2, 3} e B = {3, 4, 5}, então A − B = {1, 2}."
        },
        {
            titulo: "E a diferença B − A?",
            texto: "Agora fazemos o contrário. B − A contém os elementos de B que não estão em A. Portanto, B − A = {4, 5}."
        },
        {
            titulo: "Complemento",
            texto: "O complemento de um conjunto contém os elementos que estão no conjunto universo, mas não pertencem ao conjunto analisado."
        },
        {
            titulo: "Exemplo de complemento",
            texto: "Considere U = {1, 2, 3, 4, 5} e A = {1, 2, 3}. O complemento de A é formado pelos elementos de U que não estão em A: Aᶜ = {4, 5}."
        },
        {
            titulo: "Propriedade comutativa",
            texto: "Na união e na interseção, podemos trocar a ordem dos conjuntos sem alterar o resultado. A ∪ B = B ∪ A e A ∩ B = B ∩ A."
        },
        {
            titulo: "Propriedade associativa",
            texto: "Também podemos agrupar os conjuntos de maneiras diferentes. Na união: (A ∪ B) ∪ C = A ∪ (B ∪ C). O mesmo vale para a interseção."
        },
        {
            titulo: "Propriedade distributiva",
            texto: "A união e a interseção também possuem propriedades distributivas. Por exemplo: A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C)."
        },
        {
            titulo: "Leis de De Morgan",
            texto: "As Leis de De Morgan relacionam complemento, união e interseção. O complemento de uma união é igual à interseção dos complementos."
        },
        {
            titulo: "De Morgan — primeira lei",
            texto: "A primeira lei pode ser escrita assim: (A ∪ B)ᶜ = Aᶜ ∩ Bᶜ."
        },
        {
            titulo: "De Morgan — segunda lei",
            texto: "A segunda lei diz: (A ∩ B)ᶜ = Aᶜ ∪ Bᶜ."
        },
        {
            titulo: "Resumo",
            texto: "Na Álgebra dos Conjuntos, estudamos operações como união, interseção, diferença e complemento, além de propriedades como comutativa, associativa, distributiva e as Leis de De Morgan."
        },
        {
            titulo: "Hora de praticar!",
            texto: "Muito bem! Agora vamos testar o que você aprendeu sobre Álgebra dos Conjuntos."
        }
    ],

    // ===============================
    // FUNÇÕES
    // ===============================

    "funcoes": [
        {
            titulo: "Vamos aprender funções!",
            texto: "Agora vamos entrar em um assunto muito importante da matemática: as funções. Vou explicar de forma simples e passo a passo."
        },
        {
            titulo: "O que é uma função?",
            texto: "Uma função é uma relação que associa cada elemento de um conjunto de entrada a um único elemento de um conjunto de saída."
        },
        {
            titulo: "Entrada e saída",
            texto: "Podemos imaginar uma função como uma máquina: colocamos um valor de entrada e ela produz um valor de saída."
        },
        {
            titulo: "A variável x",
            texto: "Normalmente usamos x para representar o valor de entrada. O resultado da função pode ser representado por f(x)."
        },
        {
            titulo: "Um exemplo",
            texto: "Considere f(x) = x + 2. Se colocarmos x = 3, teremos f(3) = 3 + 2 = 5."
        },
        {
            titulo: "Domínio",
            texto: "O domínio é o conjunto formado pelos valores que podem entrar na função. São os valores de entrada permitidos."
        },
        {
            titulo: "Contradomínio",
            texto: "O contradomínio é o conjunto que contém os possíveis valores de saída definidos para a função."
        },
        {
            titulo: "Imagem",
            texto: "A imagem é formada pelos valores que realmente são obtidos como resultado da função para os elementos do domínio."
        },
        {
            titulo: "Representação",
            texto: "Uma função pode ser representada por uma expressão, uma tabela, um diagrama ou um gráfico."
        },
        {
            titulo: "Calculando uma função",
            texto: "Se f(x) = 2x + 1, para calcular f(4), substituímos x por 4: f(4) = 2 · 4 + 1 = 9."
        },
        {
            titulo: "Resumo",
            texto: "Lembre-se: o domínio representa as entradas, o contradomínio representa o conjunto de saídas possíveis e a imagem representa os resultados que realmente aparecem."
        },
        {
            titulo: "Hora de praticar!",
            texto: "Muito bem! Agora vamos testar seus conhecimentos sobre funções."
        }
    ],

    // ===============================
    // FUNÇÃO AFIM
    // ===============================

    "funcao-afim": [
        {
            titulo: "Função Afim",
            texto: "Agora vamos estudar a função afim, uma das funções mais importantes para entender gráficos e situações do dia a dia."
        },
        {
            titulo: "Forma da função",
            texto: "A função afim pode ser escrita como f(x) = ax + b, em que a e b são números reais."
        },
        {
            titulo: "O coeficiente a",
            texto: "O número a é chamado de coeficiente angular. Ele indica a inclinação da reta no gráfico."
        },
        {
            titulo: "O coeficiente b",
            texto: "O número b é chamado de coeficiente linear. Ele indica onde a reta corta o eixo y."
        },
        {
            titulo: "Exemplo",
            texto: "Considere f(x) = 2x + 3. Nesse caso, a = 2 e b = 3."
        },
        {
            titulo: "Calculando um valor",
            texto: "Para x = 4, temos f(4) = 2 · 4 + 3 = 11."
        },
        {
            titulo: "Crescimento",
            texto: "Quando a é positivo, a função é crescente: conforme x aumenta, os valores de f(x) também aumentam."
        },
        {
            titulo: "Decrescimento",
            texto: "Quando a é negativo, a função é decrescente: conforme x aumenta, os valores de f(x) diminuem."
        },
        {
            titulo: "Gráfico",
            texto: "O gráfico de uma função afim é uma reta. O valor de b ajuda a localizar o ponto em que essa reta cruza o eixo y."
        },
        {
            titulo: "Resumo",
            texto: "Na função afim f(x) = ax + b, o a indica a inclinação da reta e o b indica o ponto de encontro com o eixo y."
        },
        {
            titulo: "Hora de praticar!",
            texto: "Agora vamos testar o que você aprendeu sobre função afim."
        }
    ],

    // ===============================
    // FUNÇÃO LINEAR
    // ===============================

    "funcao-linear": [
        {
            titulo: "Função Linear",
            texto: "A função linear é um caso especial da função afim. Vamos entender o que muda nela."
        },
        {
            titulo: "Forma da função",
            texto: "A função linear tem a forma f(x) = ax, ou seja, não possui o termo independente b."
        },
        {
            titulo: "Por que ela é especial?",
            texto: "Como b = 0, o gráfico da função linear sempre passa pela origem do plano cartesiano, o ponto (0, 0)."
        },
        {
            titulo: "Exemplo",
            texto: "Considere f(x) = 3x. Se x = 2, então f(2) = 3 · 2 = 6."
        },
        {
            titulo: "Quando a é positivo",
            texto: "Se a > 0, a função linear é crescente. Os valores de f(x) aumentam quando x aumenta."
        },
        {
            titulo: "Quando a é negativo",
            texto: "Se a < 0, a função linear é decrescente. Os valores de f(x) diminuem quando x aumenta."
        },
        {
            titulo: "Gráfico",
            texto: "O gráfico de uma função linear é uma reta que passa obrigatoriamente pela origem (0, 0)."
        },
        {
            titulo: "Resumo",
            texto: "A função linear tem a forma f(x) = ax e é um caso particular da função afim em que b = 0."
        },
        {
            titulo: "Hora de praticar!",
            texto: "Muito bem! Agora vamos testar seus conhecimentos sobre função linear."
        }
    ],

    // ===============================
    // FUNÇÃO CONSTANTE
    // ===============================

    "funcao-constante": [
        {
            titulo: "Função Constante",
            texto: "Agora vamos conhecer uma função em que o resultado permanece igual, mesmo quando o valor de x muda."
        },
        {
            titulo: "Forma da função",
            texto: "A função constante pode ser escrita como f(x) = b, em que b é um número fixo."
        },
        {
            titulo: "Um exemplo",
            texto: "Considere f(x) = 5. Não importa qual valor de x escolhermos, o resultado será sempre 5."
        },
        {
            titulo: "Calculando valores",
            texto: "Temos f(1) = 5, f(2) = 5 e f(100) = 5. O valor de saída permanece constante."
        },
        {
            titulo: "Gráfico",
            texto: "O gráfico de uma função constante é uma reta horizontal, paralela ao eixo x."
        },
        {
            titulo: "Coeficiente angular",
            texto: "Na função constante, podemos pensar que o coeficiente angular é zero, pois o gráfico não sobe nem desce."
        },
        {
            titulo: "Exemplo no cotidiano",
            texto: "Imagine uma situação em que uma taxa fixa seja de 20 reais, independentemente da quantidade considerada. Podemos representar essa saída constante por f(x) = 20."
        },
        {
            titulo: "Resumo",
            texto: "Na função constante, o resultado não depende do valor de x. Sua forma é f(x) = b e seu gráfico é uma reta horizontal."
        },
        {
            titulo: "Hora de praticar!",
            texto: "Agora vamos testar seus conhecimentos sobre função constante."
        }
    ],

    // ===============================
    // FUNÇÃO QUADRÁTICA
    // ===============================

    "funcao-quadratica": [
        {
            titulo: "Função Quadrática",
            texto: "Chegamos à função quadrática, também conhecida como função do segundo grau. Vamos estudar sua forma e seus principais elementos."
        },
        {
            titulo: "Forma da função",
            texto: "A função quadrática tem a forma f(x) = ax² + bx + c, com a diferente de zero."
        },
        {
            titulo: "O que significa a ≠ 0?",
            texto: "Se a fosse igual a zero, o termo x² desapareceria e teríamos uma função de primeiro grau. Por isso, na função quadrática, a deve ser diferente de zero."
        },
        {
            titulo: "Exemplo",
            texto: "Considere f(x) = x² + 2x + 1. Nesse caso, a = 1, b = 2 e c = 1."
        },
        {
            titulo: "A parábola",
            texto: "O gráfico de uma função quadrática é uma curva chamada parábola."
        },
        {
            titulo: "Concavidade",
            texto: "Quando a é positivo, a parábola tem concavidade voltada para cima. Quando a é negativo, ela tem concavidade voltada para baixo."
        },
        {
            titulo: "Raízes da função",
            texto: "As raízes são os valores de x para os quais f(x) = 0. No gráfico, elas correspondem aos pontos em que a parábola cruza o eixo x."
        },
        {
            titulo: "Delta",
            texto: "Para encontrar as raízes pela fórmula de Bhaskara, usamos o discriminante Delta: Δ = b² − 4ac."
        },
        {
            titulo: "Fórmula de Bhaskara",
            texto: "Quando queremos encontrar as raízes, podemos usar x = (−b ± √Δ) / 2a, desde que o cálculo seja possível nos números reais."
        },
        {
            titulo: "Vértice",
            texto: "O vértice é o ponto de máximo ou mínimo da parábola. Ele é importante para analisar o comportamento da função."
        },
        {
            titulo: "Exemplo completo",
            texto: "Na função f(x) = x² − 4x + 3, temos a = 1, b = −4 e c = 3. O gráfico é uma parábola voltada para cima."
        },
        {
            titulo: "Resumo",
            texto: "A função quadrática tem a forma ax² + bx + c, seu gráfico é uma parábola e seus principais elementos incluem raízes, vértice, concavidade e discriminante."
        },
        {
            titulo: "Hora de praticar!",
            texto: "Parabéns por chegar até aqui! Agora vamos testar seus conhecimentos sobre função quadrática."
        }
    ]
};

// ===============================
// PERGUNTAS
// ===============================

const perguntas = [

    // TABELA-VERDADE
    {
        tema: "tabela-verdade",
        pergunta: "Qual é o resultado de A E B quando A = V e B = F?",
        opcoes: ["Verdadeiro", "Falso"],
        resposta: "Falso",
        explicacao: "Na conjunção, A E B só é Verdadeiro quando A e B são Verdadeiros."
    },
    {
        tema: "tabela-verdade",
        pergunta: "Qual é o resultado de A OU B quando A = F e B = V?",
        opcoes: ["Verdadeiro", "Falso"],
        resposta: "Verdadeiro",
        explicacao: "Na disjunção, basta uma das proposições ser Verdadeira."
    },
    {
        tema: "tabela-verdade",
        pergunta: "Se A = V, qual é o resultado de NÃO A?",
        opcoes: ["Verdadeiro", "Falso"],
        resposta: "Falso",
        explicacao: "A negação troca o valor lógico."
    },

    // CONJUNTOS
    {
        tema: "conjuntos",
        pergunta: "Se A = {1, 2, 3}, qual elemento pertence ao conjunto A?",
        opcoes: ["2", "5", "8"],
        resposta: "2",
        explicacao: "O número 2 pertence ao conjunto A."
    },
    {
        tema: "conjuntos",
        pergunta: "Se A = {1, 2, 3}, qual afirmação está correta?",
        opcoes: ["5 ∈ A", "2 ∈ A", "8 ∈ A"],
        resposta: "2 ∈ A",
        explicacao: "O número 2 faz parte do conjunto A."
    },
    {
        tema: "conjuntos",
        pergunta: "Se A = {1, 2, 3} e B = {3, 4, 5}, qual é A ∩ B?",
        opcoes: ["{1, 2}", "{3}", "{1, 2, 3, 4, 5}"],
        resposta: "{3}",
        explicacao: "A interseção contém os elementos que aparecem nos dois conjuntos."
    },
    {
        tema: "conjuntos",
        pergunta: "Se A = {1, 2, 3} e B = {3, 4, 5}, qual é A ∪ B?",
        opcoes: ["{3}", "{1, 2}", "{1, 2, 3, 4, 5}"],
        resposta: "{1, 2, 3, 4, 5}",
        explicacao: "A união reúne todos os elementos dos dois conjuntos."
    },

    // ÁLGEBRA DOS CONJUNTOS
    {
        tema: "algebra-conjuntos",
        pergunta: "Se A = {1, 2, 3} e B = {3, 4, 5}, qual é A ∪ B?",
        opcoes: ["{3}", "{1, 2, 3, 4, 5}", "{1, 2}"],
        resposta: "{1, 2, 3, 4, 5}",
        explicacao: "A união reúne todos os elementos."
    },
    {
        tema: "algebra-conjuntos",
        pergunta: "Se A = {1, 2, 3} e B = {3, 4, 5}, qual é A ∩ B?",
        opcoes: ["{1, 2}", "{3}", "{4, 5}"],
        resposta: "{3}",
        explicacao: "A interseção contém somente o elemento em comum."
    },
    {
        tema: "algebra-conjuntos",
        pergunta: "Se A = {1, 2, 3} e B = {3, 4, 5}, qual é A − B?",
        opcoes: ["{1, 2}", "{3}", "{4, 5}"],
        resposta: "{1, 2}",
        explicacao: "São os elementos de A que não pertencem a B."
    },
    {
        tema: "algebra-conjuntos",
        pergunta: "Se U = {1, 2, 3, 4, 5} e A = {1, 2, 3}, qual é o complemento de A?",
        opcoes: ["{1, 2, 3}", "{4, 5}", "{1, 4, 5}"],
        resposta: "{4, 5}",
        explicacao: "O complemento contém os elementos do universo que não estão em A."
    },
    {
        tema: "algebra-conjuntos",
        pergunta: "Qual propriedade está representada por A ∪ B = B ∪ A?",
        opcoes: ["Propriedade comutativa", "Propriedade associativa", "Propriedade distributiva"],
        resposta: "Propriedade comutativa",
        explicacao: "Podemos trocar a ordem dos conjuntos sem alterar o resultado."
    },

    // FUNÇÕES
    {
        tema: "funcoes",
        pergunta: "O que é o domínio de uma função?",
        opcoes: [
            "O conjunto dos valores de entrada",
            "O conjunto dos resultados",
            "Somente o gráfico"
        ],
        resposta: "O conjunto dos valores de entrada",
        explicacao: "O domínio reúne os valores que podem ser utilizados como entrada."
    },
    {
        tema: "funcoes",
        pergunta: "Se f(x) = x + 2, quanto vale f(3)?",
        opcoes: ["3", "5", "6"],
        resposta: "5",
        explicacao: "f(3) = 3 + 2 = 5."
    },
    {
        tema: "funcoes",
        pergunta: "O que é a imagem de uma função?",
        opcoes: [
            "Os valores que realmente aparecem como resultado",
            "Os valores proibidos",
            "O nome da função"
        ],
        resposta: "Os valores que realmente aparecem como resultado",
        explicacao: "A imagem é formada pelos valores de saída realmente obtidos."
    },

    // FUNÇÃO AFIM
    {
        tema: "funcao-afim",
        pergunta: "Qual é a forma de uma função afim?",
        opcoes: ["f(x) = ax + b", "f(x) = ax²", "f(x) = b"],
        resposta: "f(x) = ax + b",
        explicacao: "A função afim possui a forma f(x) = ax + b."
    },
    {
        tema: "funcao-afim",
        pergunta: "Na função f(x) = 2x + 3, qual é o coeficiente angular?",
        opcoes: ["2", "3", "5"],
        resposta: "2",
        explicacao: "O coeficiente angular é o número que acompanha x."
    },
    {
        tema: "funcao-afim",
        pergunta: "Quando o coeficiente angular é positivo, a função é...",
        opcoes: ["Crescente", "Decrescente", "Constante"],
        resposta: "Crescente",
        explicacao: "Quando a > 0, a função é crescente."
    },

    // FUNÇÃO LINEAR
    {
        tema: "funcao-linear",
        pergunta: "Qual é a forma de uma função linear?",
        opcoes: ["f(x) = ax", "f(x) = ax + b", "f(x) = ax² + bx + c"],
        resposta: "f(x) = ax",
        explicacao: "A função linear possui b = 0."
    },
    {
        tema: "funcao-linear",
        pergunta: "Por qual ponto passa o gráfico de uma função linear?",
        opcoes: ["(0, 0)", "(1, 1) sempre", "(0, 1) sempre"],
        resposta: "(0, 0)",
        explicacao: "O gráfico passa pela origem."
    },
    {
        tema: "funcao-linear",
        pergunta: "Se f(x) = 3x, quanto vale f(2)?",
        opcoes: ["5", "6", "9"],
        resposta: "6",
        explicacao: "f(2) = 3 · 2 = 6."
    },

    // FUNÇÃO CONSTANTE
    {
        tema: "funcao-constante",
        pergunta: "Qual é a forma de uma função constante?",
        opcoes: ["f(x) = b", "f(x) = ax", "f(x) = ax² + bx + c"],
        resposta: "f(x) = b",
        explicacao: "O resultado da função constante é sempre o mesmo."
    },
    {
        tema: "funcao-constante",
        pergunta: "Se f(x) = 5, quanto vale f(100)?",
        opcoes: ["5", "100", "105"],
        resposta: "5",
        explicacao: "O resultado não depende do valor de x."
    },
    {
        tema: "funcao-constante",
        pergunta: "Como é o gráfico de uma função constante?",
        opcoes: ["Uma reta horizontal", "Uma parábola", "Uma reta vertical"],
        resposta: "Uma reta horizontal",
        explicacao: "O gráfico é uma reta horizontal."
    },

    // FUNÇÃO QUADRÁTICA
    {
        tema: "funcao-quadratica",
        pergunta: "Qual é a forma de uma função quadrática?",
        opcoes: [
            "f(x) = ax² + bx + c",
            "f(x) = ax + b",
            "f(x) = b"
        ],
        resposta: "f(x) = ax² + bx + c",
        explicacao: "A função quadrática possui a forma ax² + bx + c, com a diferente de zero."
    },
    {
        tema: "funcao-quadratica",
        pergunta: "Qual é o gráfico de uma função quadrática?",
        opcoes: ["Uma parábola", "Uma reta horizontal", "Um círculo"],
        resposta: "Uma parábola",
        explicacao: "O gráfico de uma função quadrática é uma parábola."
    },
    {
        tema: "funcao-quadratica",
        pergunta: "Quando a > 0, a parábola possui concavidade...",
        opcoes: ["Para cima", "Para baixo", "Para os lados"],
        resposta: "Para cima",
        explicacao: "Quando a é positivo, a parábola fica voltada para cima."
    },
    {
        tema: "funcao-quadratica",
        pergunta: "Qual fórmula representa o discriminante Delta?",
        opcoes: [
            "Δ = b² − 4ac",
            "Δ = a² − 4bc",
            "Δ = b − 4ac"
        ],
        resposta: "Δ = b² − 4ac",
        explicacao: "O discriminante é calculado por Δ = b² − 4ac."
    }
];

// ===============================
// ESTADO
// ===============================

let temaAtual = "tabela-verdade";
let etapa = 0;
let modoQuiz = false;
let perguntaAtual = 0;
let quizRespondido = false;
let aulaFinalizada = false;

// ===============================
// ELEMENTOS
// ===============================

const logima = document.getElementById("logima");
const nomeFalante = document.getElementById("nomeFalante");
const contador = document.getElementById("contador");
const fala = document.getElementById("fala");
const dica = document.getElementById("dica");
const btnContinuar = document.getElementById("btnContinuar");
const btnMaterias = document.getElementById("btnMaterias");
const materias = document.getElementById("materias");
const listaMaterias = document.getElementById("listaMaterias");
const resumo = document.getElementById("resumo");
const resumoTexto = document.getElementById("resumoTexto");
const btnRecomecar = document.getElementById("btnRecomecar");

// ===============================
// MOSTRAR FALA
// ===============================

function mostrarFala(aula) {
    nomeFalante.textContent = "Lógima";
    fala.textContent = aula.texto;

    contador.textContent =
        `${etapa + 1} / ${aulas[temaAtual].length}`;

    dica.textContent = "";

    removerTabelaDialogo();
    removerOpcoesQuiz();

    btnContinuar.disabled = false;
    btnContinuar.textContent = "Continuar";

    aulaFinalizada = false;

    if (aula.tabela) {
        fala.appendChild(criarTabela(aula.tabela));
    }
}

// ===============================
// CRIAR TABELA
// ===============================

function criarTabela(dados) {
    const tabela = document.createElement("table");

    tabela.classList.add("tabela-dialogo");

    dados.forEach((linha, indice) => {

        const tr = document.createElement("tr");

        linha.forEach((celula) => {

            const elemento =
                indice === 0
                    ? document.createElement("th")
                    : document.createElement("td");

            elemento.textContent = celula;

            tr.appendChild(elemento);
        });

        tabela.appendChild(tr);
    });

    return tabela;
}

// ===============================
// REMOVER ELEMENTOS
// ===============================

function removerTabelaDialogo() {

    const tabelaExistente =
        fala.querySelector(".tabela-dialogo");

    if (tabelaExistente) {
        tabelaExistente.remove();
    }
}

function removerOpcoesQuiz() {

    const opcoes =
        fala.querySelector(".opcoes-dialogo");

    if (opcoes) {
        opcoes.remove();
    }

    const explicacao =
        fala.querySelector(".explicacao-quiz");

    if (explicacao) {
        explicacao.remove();
    }
}

// ===============================
// AVANÇAR AULA
// ===============================

function avancarAula() {

    if (modoQuiz) {
        return;
    }

    etapa++;

    if (etapa < aulas[temaAtual].length) {

        mostrarFala(
            aulas[temaAtual][etapa]
        );

    } else {

        iniciarQuiz();
    }
}

// ===============================
// ANIMAÇÃO
// ===============================

function animarRobo() {

    logima.animate(
        [
            {
                transform: "translateY(0) scale(1)"
            },
            {
                transform: "translateY(-12px) scale(1.03)"
            },
            {
                transform: "translateY(0) scale(1)"
            }
        ],
        {
            duration: 450,
            easing: "ease-out"
        }
    );
}

// ===============================
// INICIAR QUIZ
// ===============================

function iniciarQuiz() {

    modoQuiz = true;
    perguntaAtual = 0;
    quizRespondido = false;

    mostrarPergunta();
}

// ===============================
// MOSTRAR PERGUNTA
// ===============================

function mostrarPergunta() {

    const perguntasDoTema =
        perguntas.filter(
            pergunta =>
                pergunta.tema === temaAtual
        );

    const pergunta =
        perguntasDoTema[perguntaAtual];

    if (!pergunta) {
        finalizarAula();
        return;
    }

    nomeFalante.textContent = "Lógima";

    contador.textContent =
        `Quiz — ${perguntaAtual + 1} / ${perguntasDoTema.length}`;

    fala.textContent = pergunta.pergunta;

    dica.textContent =
        "Escolha uma resposta:";

    removerTabelaDialogo();
    removerOpcoesQuiz();

    quizRespondido = false;

    const opcoes =
        document.createElement("div");

    opcoes.classList.add(
        "opcoes-dialogo"
    );

    pergunta.opcoes.forEach((opcao) => {

        const botao =
            document.createElement("button");

        botao.textContent = opcao;

        botao.addEventListener(
            "click",
            () => verificarResposta(opcao)
        );

        opcoes.appendChild(botao);
    });

    fala.appendChild(opcoes);

    btnContinuar.textContent =
        "Escolha uma resposta";

    btnContinuar.disabled = true;
}

// ===============================
// VERIFICAR RESPOSTA
// ===============================

function verificarResposta(resposta) {

    if (quizRespondido) {
        return;
    }

    const perguntasDoTema =
        perguntas.filter(
            pergunta =>
                pergunta.tema === temaAtual
        );

    const pergunta =
        perguntasDoTema[perguntaAtual];

    const botoes =
        document.querySelectorAll(
            ".opcoes-dialogo button"
        );

    quizRespondido = true;

    botoes.forEach((botao) => {

        botao.disabled = true;

        if (
            botao.textContent ===
            pergunta.resposta
        ) {
            botao.classList.add("correta");
        }

        if (
            botao.textContent === resposta &&
            resposta !== pergunta.resposta
        ) {
            botao.classList.add("errada");
        }
    });

    if (
        resposta === pergunta.resposta
    ) {

        dica.textContent =
            "🎉 Muito bem! Você acertou!";

    } else {

        dica.textContent =
            "💡 Quase! Veja a explicação abaixo.";
    }

    const explicacao =
        document.createElement("p");

    explicacao.classList.add(
        "explicacao-quiz"
    );

    explicacao.textContent =
        pergunta.explicacao;

    fala.appendChild(explicacao);

    btnContinuar.disabled = false;

    if (
        perguntaAtual <
        perguntasDoTema.length - 1
    ) {

        btnContinuar.textContent =
            "Próxima pergunta";

    } else {

        btnContinuar.textContent =
            "Finalizar aula";
    }
}

// ===============================
// CONTINUAR QUIZ
// ===============================

function continuarQuiz() {

    if (!quizRespondido) {
        return;
    }

    const perguntasDoTema =
        perguntas.filter(
            pergunta =>
                pergunta.tema === temaAtual
        );

    if (
        perguntaAtual <
        perguntasDoTema.length - 1
    ) {

        perguntaAtual++;

        mostrarPergunta();

    } else {

        finalizarAula();
    }
}

// ===============================
// FINALIZAR AULA
// ===============================

function finalizarAula() {

    modoQuiz = false;
    aulaFinalizada = true;

    const tema =
        temas.find(
            tema =>
                tema.conteudo === temaAtual
        );

    nomeFalante.textContent = "Lógima";

    contador.textContent =
        "Aula concluída!";

    fala.textContent =
        `Parabéns! Você terminou a aula de ${tema.nome}.`;

    dica.textContent =
        "Continue estudando e praticando!";

    removerTabelaDialogo();
    removerOpcoesQuiz();

    resumo.classList.remove(
        "escondido"
    );

    resumoTexto.innerHTML = `
        <strong>Você estudou:</strong>
        <ul>
            ${aulas[temaAtual]
                .slice(1, -1)
                .map(
                    aula =>
                        `<li>${aula.titulo}</li>`
                )
                .join("")}
        </ul>
    `;

    btnContinuar.disabled = false;

    btnContinuar.textContent =
        "Recomeçar aula";
}

// ===============================
// CARREGAR MATÉRIAS
// ===============================

function carregarMaterias() {

    listaMaterias.innerHTML = "";

    temas
        .filter(tema => tema.disponivel)
        .forEach((tema) => {

            const botao =
                document.createElement("button");

            botao.textContent =
                tema.nome;

            botao.addEventListener(
                "click",
                () => iniciarTema(tema.conteudo)
            );

            listaMaterias.appendChild(
                botao
            );
        });
}

// ===============================
// INICIAR TEMA
// ===============================

function iniciarTema(conteudo) {

    if (!aulas[conteudo]) {

        alert(
            "Esta matéria ainda não possui uma aula cadastrada."
        );

        return;
    }

    temaAtual = conteudo;

    etapa = 0;
    modoQuiz = false;
    perguntaAtual = 0;
    quizRespondido = false;
    aulaFinalizada = false;

    resumo.classList.add(
        "escondido"
    );

    materias.classList.add(
        "escondido"
    );

    mostrarFala(
        aulas[temaAtual][0]
    );

    animarRobo();
}

// ===============================
// RECOMEÇAR AULA
// ===============================

function reiniciarAula() {

    etapa = 0;
    modoQuiz = false;
    perguntaAtual = 0;
    quizRespondido = false;
    aulaFinalizada = false;

    resumo.classList.add(
        "escondido"
    );

    mostrarFala(
        aulas[temaAtual][0]
    );

    animarRobo();
}

// ===============================
// EVENTOS
// ===============================

logima.addEventListener(
    "click",
    () => {

        if (modoQuiz) {
            return;
        }

        if (aulaFinalizada) {
            return;
        }

        avancarAula();

        animarRobo();
    }
);

btnContinuar.addEventListener(
    "click",
    () => {

        if (btnContinuar.disabled) {
            return;
        }

        if (modoQuiz) {

            continuarQuiz();

        } else if (aulaFinalizada) {

            reiniciarAula();

        } else {

            avancarAula();
        }
    }
);

btnMaterias.addEventListener(
    "click",
    () => {

        materias.classList.toggle(
            "escondido"
        );

        if (
            !materias.classList.contains(
                "escondido"
            )
        ) {
            carregarMaterias();
        }
    }
);

btnRecomecar.addEventListener(
    "click",
    reiniciarAula
);

// ===============================
// INICIAR SISTEMA
// ===============================

mostrarFala(
    aulas[temaAtual][0]
);