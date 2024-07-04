import state from './state.js';
import * as el from './elements.js';
import * as actions from './actions.js';
import { timerEndAudio } from './sounds.js';
export function updateDisplay (minutes, seconds) {
    minutes = minutes ?? state.minutes;
    seconds = seconds ?? state.seconds;
    

    el.minutes.textContent = String(minutes).padStart(2, '0');
    el.seconds.textContent = String(seconds).padStart(2, '0'); 

}


export function countDown() {
    
    clearTimeout(state.countdownID);
    
    if (!state.started) {
        return;
    }



    let minutes = Number(el.minutes.textContent);
    let seconds = Number(el.seconds.textContent);

    seconds--

    if (seconds < 0) {
        minutes--;
        seconds = 59;
    }

    if (minutes < 0) {
        actions.stop();
        timerEndAudio.play();

        return;
    }



    updateDisplay(minutes, seconds);

    state.countdownID = setTimeout(() => countDown(), 1000); 

}



