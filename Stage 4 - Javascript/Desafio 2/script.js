// Lista de estudantes
let estudantes = [
    { nome: "Alice", nota1: 8, nota2: 7 },
    { nome: "Bruno", nota1: 6, nota2: 5 },
    { nome: "Carla", nota1: 9, nota2: 10 },
    { nome: "Daniel", nota1: 7, nota2: 6 }
];

// Função para calcular a média das notas
function calcularMedia(nota1, nota2) {
    return (nota1 + nota2) / 2;
}

// Verificar se cada aluno obteve sucesso no concurso
function verificarSucesso(estudantes) {
    let mensagem = '';

    for (let estudante of estudantes) {
        let media = calcularMedia(estudante.nota1, estudante.nota2);
        if (media >= 7) {
            mensagem += `${estudante.nome} obteve sucesso com média ${media.toFixed(2)}.\n`;
        } else {
            mensagem += `${estudante.nome} não obteve sucesso com média ${media.toFixed(2)}.\n`;
        }
    }

    alert(mensagem);
}

// Chama a função para verificar o sucesso dos estudantes
verificarSucesso(estudantes);
