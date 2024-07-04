import * as actions from './actions.js';


export function controlsClicks() {
    controls.addEventListener('click', (event) => {
        const action = event.target.dataset.action;

        if (typeof actions[action] != "function") {
            return;
        }

        actions[action]();
    });
    
}

export function audioClicks () {
    sounds.addEventListener('click', (event) => {


        const soundAction = event.target.dataset.bgm;
        if (typeof actions[soundAction] != "function") {
            return;
        }
        actions[soundAction]();
        
    });


}
    
