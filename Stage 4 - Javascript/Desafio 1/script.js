// Primeiro, vamos receber as variáveis do usuário 

let numeroUm = prompt("Digite o primeiro número")
let numeroDois = prompt("Digite o segundo número")

// Agora, uma conversão de tipo para number, evitando erros nas operações matemáticas 

numeroUm = Number(numeroUm)
numeroDois = Number(numeroDois)

// Operações matemáticas

Soma = numeroUm + numeroDois
Subtracao = numeroUm - numeroDois
Multiplicacao = numeroUm * numeroDois
Divisao = numeroUm / numeroDois
Resto = numeroUm % numeroDois

// Verificações 

let ePar = false

if (Soma%2 == 0) {
    ePar = true
}

let saoIguais = false 

if (numeroUm == numeroDois){
    saoIguais = true
}

// retornos para o usuário

alert("A soma de " + numeroUm + " com " + numeroDois + " é igual a " + Soma)
alert("A subtração de " + numeroUm + " com " + numeroDois + " é igual a " + Subtracao)
alert("O produto de " + numeroUm + " por " + numeroDois + " é igual a " + Multiplicacao)
alert("A divisão de " + numeroUm + " por " + numeroDois + " é igual a " + Divisao)
alert("O resto da divisão de " + numeroUm + " por " + numeroDois + " é igual a " + Resto)


// Verificações e retornos situacionais
if (ePar == true) {
    alert("A soma dos dois números é par.")
}

if (saoIguais == true){
    alert("Os números informados são iguais")
}



