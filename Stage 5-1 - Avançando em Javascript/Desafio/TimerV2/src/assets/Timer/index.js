import * as events from './events.js';
import * as timer from './timer.js';
import * as state from './state.js';

export function start() {
    events.controlsClicks();

    events.audioClicks();

    timer.updateDisplay();
    
}
