export default function createKeyboardListener(document){
    document.addEventListener("keydown", handlerKeydown);

    const state = {
        observers: []
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
            playerId: 'player1',
            keyPressed
        }
        notifyAll(command);
    }

    return {subscribe}
}