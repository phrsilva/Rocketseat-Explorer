import state from "./state.js";
import * as timer from "./Timer.js";
import * as el from "./elements.js";
import * as audio from "./sounds.js";

export function toggleRunning () {
    state.isRunning = document.documentElement.classList.toggle('running')
    timer.countdown()
    audio.buttonPressAudio.play()
}

export function set () {
    el.minutes.setAttribute('contenteditable', true)
    el.minutes.focus()
    audio.buttonPressAudio.play()


    
}

export function stopTimer () {
    state.isRunning = false
    document.documentElement.classList.remove('running')
    timer.updateDisplay()
    audio.buttonPressAudio.play()

}

export function toggleMusic () {
    state.isMuted = document.documentElement.classList.toggle('music-on')

    if (state.isMuted) {
        audio.bgAudio.play()
        return
    }

    audio.bgAudio.pause()
}

