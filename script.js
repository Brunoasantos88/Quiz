
const perguntas = [
    {
        pergunta: "Qual é o mosquito que transmissão da dengue?",
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
        pergunta: "Além da dengue, o mosquito Aedes aegypti é responsável pela transmissão de quais outras doenças?",
        respostas: [
            "Gripe",
            "Malária",
            "Zika e Chikungunya",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é o período de maior atividade do mosquito Aedes aegypti?",
        respostas: [
            "Manhã",
            "Tarde",
            "Noite",
        ],
        correta: 2
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
        pergunta: "Qual é o tempo entre a picada do mosquito e o aparecimento dos sintomas?",
        respostas: [
            "24 horas",
            "3 dias a 2 semanas",
            "1 mês",
        ],
        correta: 1
    },
    {
        pergunta: "Quem é mais suscetível a complicações graves causadas pela dengue?",
        respostas: [
            "Adultos",
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

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostarTotal = document.querySelector('#acertos span')
mostarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta


    for(let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        dt.querySelector('input').onchange = (event) => {
           const estaCorreta = event.target.value == item.correta

           corretas.delete(item)
           if(estaCorreta) {
            corretas.add(item)
           }
           
           mostarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }



        quizItem.querySelector('dl').appendChild(dt)

        
    }

quizItem.querySelector('dl dt').remove()

    quiz.appendChild(quizItem)
}
