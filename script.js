// ==========================================================
// LÓGIMA
// ==========================================================
//
// O personagem é o centro da experiência.
//
// O aluno clica no Lógima para avançar pelas explicações.
// Cada matéria pode ter suas próprias falas.
//
// ==========================================================


// ==========================================================
// MATÉRIAS
// ==========================================================

const temas = [

  {
    titulo: "Tabela-Verdade",

    descricao:
      "Aprenda o conteúdo passo a passo com o Lógima.",

    disponivel: true,

    conteudo:
      "tabela-verdade"
  },


  {
    titulo: "Operadores Lógicos",

    descricao:
      "Conteúdo que será adicionado durante a disciplina.",

    disponivel: false,

    conteudo:
      "operadores"
  },


  {
    titulo: "Proposições",

    descricao:
      "Conteúdo que será adicionado durante a disciplina.",

    disponivel: false,

    conteudo:
      "proposicoes"
  },


  {
    titulo: "Negação",

    descricao:
      "Conteúdo que será adicionado durante a disciplina.",

    disponivel: false,

    conteudo:
      "negacao"
  },


  {
    titulo: "Condicionais",

    descricao:
      "Conteúdo que será adicionado durante a disciplina.",

    disponivel: false,

    conteudo:
      "condicionais"
  },


  {
    titulo: "Equivalências Lógicas",

    descricao:
      "Conteúdo que será adicionado durante a disciplina.",

    disponivel: false,

    conteudo:
      "equivalencias"
  }

];



// ==========================================================
// AULAS DO LÓGIMA
// ==========================================================
//
// Cada objeto representa uma fala.
//
// Para criar uma nova explicação,
// basta adicionar outro objeto.
//
// ==========================================================

const aulas = {

  "tabela-verdade": [

    {
      titulo:
        "Olá!",

      texto:
        "Olá! Eu sou o Lógima. Hoje eu vou ensinar Tabela-Verdade para você. E vamos fazer isso juntos, passo a passo.",

      dica:
        "Clique em mim para continuar."
    },


    {
      titulo:
        "O que vamos aprender?",

      texto:
        "Primeiro vamos entender o que é uma tabela-verdade. Depois veremos a NEGAÇÃO, a CONJUNÇÃO e a DISJUNÇÃO. No final, vou fazer algumas perguntas para você.",

      dica:
        "Vamos começar?"
    },


    {
      titulo:
        "O que é uma tabela-verdade?",

      texto:
        "Uma tabela-verdade mostra todas as possíveis combinações de valores Verdadeiro (V) e Falso (F) de uma proposição lógica.",

      dica:
        "Agora vamos ver um exemplo simples."
    },


    {
      titulo:
        "Vamos usar A e B",

      texto:
        "Para os nossos exemplos, vamos utilizar somente as letras A e B. Assim, podemos descobrir o resultado de expressões como A E B e A OU B.",

      dica:
        "Clique para conhecer a negação."
    },


    {
      titulo:
        "Negação — NÃO A",

      texto:
        "A negação simplesmente inverte o valor lógico. Se A for V, então NÃO A será F. Se A for F, então NÃO A será V.",

      tabela: [

        ["A", "NÃO A"],

        ["V", "F"],

        ["F", "V"]

      ],

      dica:
        "A negação troca V por F e F por V."
    },


    {
      titulo:
        "Conjunção — A E B",

      texto:
        "Na conjunção, usamos a palavra E. O resultado só será verdadeiro quando A e B forem verdadeiras ao mesmo tempo.",

      tabela: [

        ["A", "B", "A E B"],

        ["V", "V", "V"],

        ["V", "F", "F"],

        ["F", "V", "F"],

        ["F", "F", "F"]

      ],

      dica:
        "Pense: os dois precisam ser verdadeiros."
    },


    {
      titulo:
        "Disjunção — A OU B",

      texto:
        "Na disjunção, usamos OU. O resultado só será falso quando A e B forem falsas. Se pelo menos um deles for verdadeiro, o resultado será verdadeiro.",

      tabela: [

        ["A", "B", "A OU B"],

        ["V", "V", "V"],

        ["V", "F", "V"],

        ["F", "V", "V"],

        ["F", "F", "F"]

      ],

      dica:
        "Agora você já conhece três operações importantes!"
    },


    {
      titulo:
        "Hora de testar!",

      texto:
        "Agora eu vou fazer algumas perguntas. Não tenha medo de errar: depois de cada resposta eu explico o motivo.",

      dica:
        "Clique para começar o desafio."
    }

  ]

};



// ==========================================================
// PERGUNTAS
// ==========================================================

const perguntas = [

  {

    pergunta:
      "Qual é o resultado de A E B quando A = V e B = F?",

    opcoes:
      [
        "Verdadeiro",
        "Falso"
      ],

    resposta:
      "Falso",

    explicacao:
      "Na conjunção (E), A e B precisam ser verdadeiras ao mesmo tempo. Como B é F, o resultado é Falso."

  },


  {

    pergunta:
      "Qual é o resultado de A OU B quando A = F e B = V?",

    opcoes:
      [
        "Verdadeiro",
        "Falso"
      ],

    resposta:
      "Verdadeiro",

    explicacao:
      "Na disjunção (OU), basta que um dos valores seja verdadeiro. Como B é V, o resultado é Verdadeiro."

  },


  {

    pergunta:
      "Se A = V, qual é o resultado de NÃO A?",

    opcoes:
      [
        "Verdadeiro",
        "Falso"
      ],

    resposta:
      "Falso",

    explicacao:
      "A negação inverte o valor. Portanto, se A = V, então NÃO A = F."

  }

];



// ==========================================================
// VARIÁVEIS
// ==========================================================

let temaAtual =
  "tabela-verdade";


let etapa =
  0;


let modoQuiz =
  false;


let perguntaAtual =
  0;



// ==========================================================
// ELEMENTOS DA PÁGINA
// ==========================================================

const logima =
  document.getElementById("logima");


const fala =
  document.getElementById("fala");


const contador =
  document.getElementById("contador");


const dica =
  document.getElementById("dica");


const btnContinuar =
  document.getElementById("btnContinuar");


const materias =
  document.getElementById("materias");


const resumo =
  document.getElementById("resumo");



// ==========================================================
// MOSTRAR UMA FALA
// ==========================================================

function mostrarFala(aula) {

  document.getElementById(
    "nomeFalante"
  ).textContent =
    "Lógima";


  fala.textContent =
    aula.texto;


  dica.textContent =
    aula.dica;


  contador.textContent =
    `${etapa + 1} / ${aulas[temaAtual].length}`;


  btnContinuar.textContent =
    "Continuar →";


  btnContinuar.classList.remove(
    "escondido"
  );


  removerTabelaDialogo();


  if (aula.tabela) {

    const tabela =
      criarTabela(aula.tabela);

    document
      .getElementById("dialogo")
      .appendChild(tabela);

  }

}



// ==========================================================
// CRIAR TABELA
// ==========================================================

function criarTabela(dados) {

  const tabela =
    document.createElement("table");


  tabela.className =
    "tabela-dialogo";


  dados.forEach(
    (linha, indice) => {

      const tr =
        document.createElement("tr");


      linha.forEach(
        (celula) => {

          const elemento =
            indice === 0

              ? document.createElement("th")

              : document.createElement("td");


          elemento.textContent =
            celula;


          tr.appendChild(
            elemento
          );

        }
      );


      tabela.appendChild(tr);

    }
  );


  return tabela;

}



// ==========================================================
// REMOVER TABELA
// ==========================================================

function removerTabelaDialogo() {

  const antiga =
    document.querySelector(
      ".tabela-dialogo"
    );


  if (antiga) {

    antiga.remove();

  }

}



// ==========================================================
// AVANÇAR AULA
// ==========================================================

function avancarAula() {

  if (modoQuiz) {

    return;

  }


  const conteudo =
    aulas[temaAtual];


  if (
    etapa <
    conteudo.length - 1
  ) {

    etapa++;


    mostrarFala(
      conteudo[etapa]
    );


    animarRobo();

  }

  else {

    iniciarQuiz();

  }

}



// ==========================================================
// CLIQUE NO PERSONAGEM
// ==========================================================

logima.addEventListener(
  "click",
  avancarAula
);



// ==========================================================
// BOTÃO CONTINUAR
// ==========================================================

btnContinuar.addEventListener(
  "click",
  avancarAula
);



// ==========================================================
// ANIMAÇÃO DO ROBÔ
// ==========================================================

function animarRobo() {

  logima.animate(

    [

      {
        transform:
          "translateY(0) scale(1)"
      },

      {
        transform:
          "translateY(-10px) scale(1.03)"
      },

      {
        transform:
          "translateY(0) scale(1)"
      }

    ],

    {

      duration:
        450,

      easing:
        "ease-out"

    }

  );

}



// ==========================================================
// INICIAR QUESTIONÁRIO
// ==========================================================

function iniciarQuiz() {

  modoQuiz =
    true;


  perguntaAtual =
    0;


  mostrarPergunta();

}



// ==========================================================
// MOSTRAR PERGUNTA
// ==========================================================

function mostrarPergunta() {

  removerTabelaDialogo();


  const pergunta =
    perguntas[perguntaAtual];


  document.getElementById(
    "nomeFalante"
  ).textContent =
    "Lógima — Desafio";


  contador.textContent =
    `Pergunta ${perguntaAtual + 1} / ${perguntas.length}`;


  fala.textContent =
    pergunta.pergunta;


  dica.textContent =
    "Escolha uma resposta:";


  btnContinuar.classList.add(
    "escondido"
  );


  const antigo =
    document.querySelector(
      ".opcoes-dialogo"
    );


  if (antigo) {

    antigo.remove();

  }


  const opcoes =
    document.createElement("div");


  opcoes.className =
    "opcoes-dialogo";


  pergunta.opcoes.forEach(
    (opcao) => {

      const botao =
        document.createElement(
          "button"
        );


      botao.textContent =
        opcao;


      botao.addEventListener(
        "click",
        () => {

          verificarResposta(
            opcao
          );

        }
      );


      opcoes.appendChild(
        botao
      );

    }
  );


  document
    .getElementById("dialogo")
    .appendChild(opcoes);

}



// ==========================================================
// VERIFICAR RESPOSTA
// ==========================================================

function verificarResposta(
  resposta
) {

  const pergunta =
    perguntas[perguntaAtual];


  const acertou =
    resposta ===
    pergunta.resposta;


  const opcoes =
    document.querySelectorAll(
      ".opcoes-dialogo button"
    );


  opcoes.forEach(
    (botao) => {

      botao.disabled =
        true;

    }
  );


  document.getElementById(
    "nomeFalante"
  ).textContent =

    acertou

      ? "Lógima — Muito bem!"

      : "Lógima — Vamos entender";


  fala.textContent =

    acertou

      ? "Muito bem! Você acertou! " +
        pergunta.explicacao

      : "Quase! A resposta correta é " +
        pergunta.resposta +
        ". " +
        pergunta.explicacao;


  dica.textContent =

    acertou

      ? "Você está indo muito bem!"

      : "Errar também faz parte de aprender.";


  btnContinuar.classList.remove(
    "escondido"
  );


  btnContinuar.textContent =

    perguntaAtual ===
    perguntas.length - 1

      ? "Ver resultado →"

      : "Próxima pergunta →";


  btnContinuar.onclick =
    () => {

      perguntaAtual++;


      if (
        perguntaAtual <
        perguntas.length
      ) {

        mostrarPergunta();

      }

      else {

        finalizarAula();

      }

    };


  animarRobo();

}



// ==========================================================
// FINALIZAR AULA
// ==========================================================

function finalizarAula() {

  modoQuiz =
    false;


  btnContinuar.classList.remove(
    "escondido"
  );


  btnContinuar.textContent =
    "Recomeçar aula →";


  document
    .querySelector(
      ".opcoes-dialogo"
    )
    ?.remove();


  document.getElementById(
    "nomeFalante"
  ).textContent =
    "Lógima — Aula concluída";


  contador.textContent =
    "Fim";


  fala.textContent =
    "Parabéns! Você terminou a primeira aula de Tabela-Verdade. Já aprendeu negação, conjunção e disjunção.";


  dica.textContent =
    "Clique em mim para estudar novamente.";


  document.getElementById(
    "resumoTexto"
  ).innerHTML = `

    <ul>

      <li>
        Tabela-verdade mostra
        combinações de V e F.
      </li>

      <li>
        NÃO A inverte o valor
        lógico de A.
      </li>

      <li>
        A E B só é verdadeiro
        quando A e B são verdadeiros.
      </li>

      <li>
        A OU B só é falso
        quando A e B são falsos.
      </li>

    </ul>

  `;


  resumo.classList.remove(
    "escondido"
  );


  btnContinuar.onclick =
    () => {

      resumo.classList.add(
        "escondido"
      );


      etapa =
        0;


      mostrarFala(
        aulas[temaAtual][0]
      );

    };

}



// ==========================================================
// MENU DE MATÉRIAS
// ==========================================================

function carregarMaterias() {

  const lista =
    document.getElementById(
      "listaMaterias"
    );


  lista.innerHTML =
    "";


  temas.forEach(
    (tema) => {

      const botao =
        document.createElement(
          "button"
        );


      botao.className =
        `materia ${
          tema.disponivel
            ? ""
            : "breve"
        }`;


      botao.innerHTML = `

        <strong>
          ${tema.titulo}
        </strong>

        <small>
          ${
            tema.disponivel
              ? "Conversar com o Lógima"
              : "Em breve"
          }
        </small>

      `;


      if (tema.disponivel) {

        botao.addEventListener(
          "click",
          () => {

            temaAtual =
              tema.conteudo;


            etapa =
              0;


            modoQuiz =
              false;


            resumo.classList.add(
              "escondido"
            );


            materias.classList.add(
              "escondido"
            );


            document
              .querySelector(
                ".opcoes-dialogo"
              )
              ?.remove();


            btnContinuar.classList.remove(
              "escondido"
            );


            btnContinuar.onclick =
              avancarAula;


            mostrarFala(
              aulas[temaAtual][0]
            );

          }
        );

      }


      lista.appendChild(
        botao
      );

    }
  );

}



// ==========================================================
// BOTÃO DE MATÉRIAS
// ==========================================================

document
  .getElementById("btnMaterias")
  .addEventListener(
    "click",
    () => {

      materias.classList.toggle(
        "escondido"
      );


      carregarMaterias();

    }
  );



// ==========================================================
// RECOMEÇAR
// ==========================================================

document
  .getElementById("btnRecomecar")
  .addEventListener(
    "click",
    () => {

      resumo.classList.add(
        "escondido"
      );


      etapa =
        0;


      modoQuiz =
        false;


      btnContinuar.classList.remove(
        "escondido"
      );


      btnContinuar.onclick =
        avancarAula;


      mostrarFala(
        aulas[temaAtual][0]
      );

    }
  );



// ==========================================================
// PRIMEIRA FALA
// ==========================================================

mostrarFala(
  aulas[temaAtual][0]
);