// 1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
 
alert("Olá, Mundo!")

// 2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.

let numeroUm = Number(prompt("Informe um número para soma:"))
let numeroDois = Number(prompt("Informe um segundo número para soma:"))

const Soma = numeroUm + numeroDois

alert("O resultado da soma é: " + Soma)

// // 3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".

const variavel1 = prompt("Declare o valor de uma variável: ")

if (!isNaN(parseFloat(variavel1)) && isFinite(variavel1)) {
    alert("É um número")
} else {
    alert("Não é um número")

}

// 4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".

const variavel2 = prompt("Declare o valor de uma varíavel: ")

if (typeof variavel2 === 'string') {
    alert("É uma string")
} else {
    alert("Não é uma string")
}

// 5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".

const variavel3 = prompt("Declare o valor de uma variável: ") 

if (variavel3.toLowerCase() === 'true' || variavel3.toLowerCase() === 'false') {
    alert('É um booleano')
} else {
    alert('Não é booleano')
}

// 6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.

const num3 = Number(prompt("Informe um número: "))
const num4 = Number(prompt("Informe um número: "))

let subtracao = num3-num4

alert("O resultado da subtração é " + subtracao)


// 7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.

const num5 = Number(prompt("Informe um número: "))
const num6 = Number(prompt("Informe um número: "))

let multiplicacao = num5*num6

alert("O resultado da multiplicação é " + multiplicacao)


// 8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.

const num7 = Number(prompt("Informe um número: "))
const num8 = Number(prompt("Informe um número: "))

let divisao = num7/num8

alert("O resultado da divisão é " + divisao)

// 9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".

const variavelPar = Number(prompt("Informe um número: "))

if (variavelPar%2 == 0){
    alert("É um número par")
} else {
    alert("Não é um número par")
}


// 10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".

const variavelImpar = Number(prompt("Informe um número: "))

if (variavelImpar%2 != 0) {
    alert("É um número ímpar")
} else {
    alert("Não é um número ímpar")
}
