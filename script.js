const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [
    {
        enunciado: "1. Qual banda britânica é conhecida como “Os Quatro de Liverpool”?",
        alternativas: [
            {
                texto: "Pink Floyd",
                afirmacao: ""
            },
            {
                texto: "The Beatles",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "2. Qual desses álbuns do Nirvana contém o hit “Smells Like Teen Spirit”?",
        alternativas: [
            {
                texto: "In Utero",
                afirmacao: ""
            },
            {
                texto: " Nevermind",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "3. Quem é considerado o “Rei do Rock”?",
        alternativas: [
            {
                texto: "Freddie Mercury",
                afirmacao: ""
            },
            {
                texto: " Elvis Presley",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "A música “Bohemian Rhapsody” foi lançada originalmente em qual ano?",
        alternativas: [
            {
                texto: "1969",
                afirmacao: ""
            },
            {
                texto: "1975",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "5. Qual dessas bandas é considerada um dos pilares do heavy metal?",
        alternativas: [
            {
                texto:  " Black Sabbath",
                afirmacao: ""
            },
            {
                texto: " Red Hot Chili Peppers",
                afirmacao: ""
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta (){
    if (atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas (){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
        atual++;
        mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
