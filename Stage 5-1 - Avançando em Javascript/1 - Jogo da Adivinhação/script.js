const randomNum = Math.round(Math.random() * 10);
let tentativas = 0;

const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
// call handleClick() para o btn1 quando o usuário pressionar enter

document.querySelector("input").addEventListener("keyup", function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        btn1.click();
    }
  });

btn1.addEventListener("click", handleClick);
btn2.addEventListener("click", playAgain);

function handleClick() {
    const num = document.querySelector("input").value;
    document.querySelector("input").value = "";
    tentativas++;
    
    if (num == randomNum) {
        document.querySelector(".display1").classList.add("hide");
        // muda o texto h1 para 'Acertou em x tentativas' no display 2 e mostra o display 2
        document.querySelector(".display2 h1").innerHTML = `Acertou em ${tentativas} tentativas`;
        document.querySelector(".display2").classList.remove("hide");
        
    }
}

// uma função para esconder o display 2 e mostrar o display 1 ao clicar no botão

function playAgain() {
    document.querySelector(".display2").classList.add("hide");
    document.querySelector(".display1").classList.remove("hide");
    //recarregar a página, zerando as tentativas e atribuindo novo randomNum
    location.reload(); 

}

