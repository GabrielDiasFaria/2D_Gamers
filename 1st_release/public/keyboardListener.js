export default function createKeyboardListener(document){
    document.addEventListener("keydown", handlerKeydown);

    const state = {
        observers: [],
        playerId: null
    }

    function registerPlayerId(playerId){
        state.playerId = playerId;
    }

    function subscribe(obseverFunction){
        state.observers.push(obseverFunction);
    }

    function notifyAll(command){
        for(const obseverFunction of state.observers){
            obseverFunction(command);
        }
    }

    function handlerKeydown(event){
        const keyPressed = event.key;
        const command = {
            type: 'move-player',
            playerId: state.playerId,
            keyPressed
        }
        notifyAll(command);
    }

    return {subscribe, registerPlayerId}
}