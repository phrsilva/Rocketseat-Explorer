import state from './state.js';
import * as timer from './timer.js';
import { updateDisplay } from './timer.js';
import { minutes } from './elements.js';
import * as sounds from './sounds.js';

export function start() {
    state.started = !state.started;
    state.stopped = !state.stopped;
    sounds.btnPressAudio.play();
    timer.countDown();

}

export function stop() {
    state.started = false;
    state.stopped = true;
    sounds.btnPressAudio.play();

    updateDisplay(25,0)
}

export function increase() {

    sounds.btnPressAudio.play();


    if (Number(minutes.textContent) > 55) {
        return;
    }

    minutes.textContent = String(Number(minutes.textContent) + 5).padStart(2, '0');

}

export function decrease() {

    sounds.btnPressAudio.play();


    if (Number(minutes.textContent) <= 5 && Number(minutes.textContent) >= 1) {

        minutes.textContent = String(Number(minutes.textContent) - 1).padStart(2, '0');
    
    }

    if (Number(minutes.textContent) > 5) {

        minutes.textContent = String(Number(minutes.textContent) - 5).padStart(2, '0');
    }

}

export function nature() {
    
    if (!state.bgNature) {
        state.bgNature = true
        sounds.birdAudio.play();
        document.getElementById('plant').classList.add('secondary')
        muteThunder();
        muteCampfire();
        muteWaves();

    } else {
        state.bgNature = false
        sounds.birdAudio.pause();
        document.getElementById('plant').classList.remove('secondary')

    }

    
}

export function thunder() {
    if (!state.bgThunder) {
        state.bgThunder = true
        sounds.thunderAudio.play();
        document.getElementById('thunder').classList.add('secondary')

        muteNature();
        muteCampfire();
        muteWaves();
        

    } else {
        state.bgThunder = false

        sounds.thunderAudio.pause();
        document.getElementById('thunder').classList.remove('secondary')

    }
    
}

export function campfire() {
    if (!state.bgCampfire) {
        state.bgCampfire = true
        sounds.campfireAudio.play();
        document.getElementById('campfire').classList.add('secondary')

        muteNature();
        muteThunder();
        muteWaves();

    } else {
        state.bgCampfire = false
        sounds.campfireAudio.pause();
        document.getElementById('campfire').classList.remove('secondary')

    }
}

export function waves() {
    if (!state.bgWaves) {
        state.bgWaves = true
        sounds.wavesAudio.play();
        document.getElementById('waves').classList.add('secondary')

        muteNature();
        muteThunder();
        muteCampfire();


    } else {
        state.bgWaves = false
        sounds.wavesAudio.pause();
        document.getElementById('waves').classList.remove('secondary')

    }
}

function muteNature () {
    state.bgNature = false
    sounds.birdAudio.pause();
    document.getElementById('plant').classList.remove('secondary')
}

function muteThunder () {
    state.bgThunder = false
    sounds.thunderAudio.pause();
    document.getElementById('thunder').classList.remove('secondary')
}

function muteCampfire () {
    state.bgCampfire = false
    sounds.campfireAudio.pause();
    document.getElementById('campfire').classList.remove('secondary')
}

function muteWaves () {
    state.bgWaves = false
    sounds.wavesAudio.pause();
    document.getElementById('waves').classList.remove('secondary')
}