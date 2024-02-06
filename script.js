
const perguntas = [
    {
        pergunta: "Qual é o vetor responsável pela transmissão da dengue?",
        respostas: [
            "Aedes albopictus",
            "Aedes aegypti",
            "Culex quinquefasciatus",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a melhor maneira de prevenir a reprodução do mosquito Aedes aegypti?",
        respostas: [
            "Deixar recipientes abertos no quintal",
            "Manter recipientes limpos e sem acúmulo de água",
            "Acumular água parada para atrair mosquitos",
        ],
        correta: 1
    },
    {
        pergunta: "Quais são os sintomas comuns da dengue?",
        respostas: [
            "Febre, tosse e dor de cabeça",
            "Dor nas articulações, náuseas e vômitos",
            "Visão turva e tontura",
        ],
        correta: 1
    },
    {
        pergunta: "Como se chama o método de combate à dengue que envolve a liberação de mosquitos estéreis para diminuir a população?",
        respostas: [
            "Controle químico",
            "Controle biológico",
            "Controle genético",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é o período de maior atividade do mosquito Aedes aegypti?",
        respostas: [
            "Manhã e tarde",
            "Noite e madrugada",
            "Tarde e noite",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a importância de eliminar pneus velhos e outros objetos que acumulam água?",
        respostas: [
            "Aumentar a decoração do ambiente",
            "Evitar focos de reprodução do mosquito",
            "Promover a reciclagem",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o principal objetivo do uso de repelentes na prevenção da dengue?",
        respostas: [
            "Eliminar os mosquitos",
            "Proteger contra picadas de mosquitos",
            "Combater larvas de mosquitos",
        ],
        correta: 1
    },
    {
        pergunta: "O que é o método de nebulização utilizado no combate à dengue?",
        respostas: [
            "Aplicação de larvicidas em água parada",
            "Aplicação de inseticidas em áreas específicas",
            "Uso de armadilhas para capturar mosquitos",
        ],
        correta: 1
    },
    {
        pergunta: "Quem é mais suscetível a complicações graves causadas pela dengue?",
        respostas: [
            "Adultos saudáveis",
            "Crianças",
            "Idosos",
        ],
        correta: 2
    },
    {
        pergunta: "O que caracteriza a dengue hemorrágica?",
        respostas: [
            "Febre alta e dores musculares intensas",
            "Sangramentos, queda de pressão e choque",
            "Erupções cutâneas e coceira intensa",
        ],
        correta: 1
    },
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')
const quizItem = template.content.cloneNode(true)

for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta


    for(let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        quizItem.querySelector('dl').appendChild(dt)
    }

quizItem.querySelector('dl dt').remove()

    quiz.appendChild(quizItem)
}
