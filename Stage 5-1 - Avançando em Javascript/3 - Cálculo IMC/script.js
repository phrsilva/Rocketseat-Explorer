import { Modal } from "./modal.js";
import {AlertError} from "./alert-error.js";

const form = document.querySelector("form");
const inputWeight = (document.querySelector("#weight"));
const inputHeight = (document.querySelector("#height"));

const modalWrapper = document.querySelector(".modal-wrapper");
const modalText = document.querySelector(".modal .title span");
const modalBtn = document.querySelector(".modal button.close");



form.onsubmit = handleClick;


function handleClick(Event) {
    Event.preventDefault();

    const weight = inputWeight.value;
    const height = inputHeight.value;

    const showAlertError = notANumber(weight) || notANumber(height);

    if (showAlertError) {
        AlertError.open();
        return;
        
    }

    const imc = calculateIMC(weight, height);

    const message = `Seu IMC é de ${imc}`;
    modalText.innerHTML = message;

    modalWrapper.classList.toggle("open");

}

modalBtn.onclick = () => {
    modalWrapper.classList.toggle("open");
}

    

function calculateIMC(weight, height) {
    return (weight / (height/100) ** 2).toFixed(2);
}

function notANumber(value) {
    return isNaN(value) || value == ""
}


