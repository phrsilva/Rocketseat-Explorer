// constante com um array de frases aleatórias
const phrases = [
    'A vida trará coisas boas se tiver paciência.',
    'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.',
    'Não compense na ira o que lhe falta na razão.',
    'A maior de todas as torres e seus arcos, sempre foi a mais alta.',
    'Acredite em milagres, mas não dependa deles.',
    'Deixe de lado as preocupações e seja feliz.',
    'A melhor maneira de prever o futuro é inventa-lo.',
    'A maior barreira para o sucesso é o medo do fracasso.',
    'O que mais importa é o que se passa no coração.',
    'Não há que ser forte. Há que ser flexível.',
    'Defeitos e virtudes são apenas dois lados da mesma moeda.',
    'A maior de todas as torres começa no solo.',
    'Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?',
    'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.',
    'A juventude não é uma época da vida, é um estado de espírito.',
    'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.'

];
const cookie = document.querySelector("#cookie");
const btn = document.querySelector("#btn");


//Eventos
cookie.addEventListener("click", tellFortune)
btn.addEventListener("click", newFortune)

// Evento para detectar a tecla Enter
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        tellFortune();
    }
});

//Funções
function tellFortune() {
    document.querySelector(".screen1").classList.toggle("hide");
    document.querySelector(".screen2").classList.toggle("hide");
    // Seleciona uma frase aleatória do array
    let randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    document.querySelector(".luck p").innerHTML = randomPhrase;
}


function newFortune() {
    document.querySelector(".screen1").classList.toggle("hide");
    document.querySelector(".screen2").classList.toggle("hide");    
}


