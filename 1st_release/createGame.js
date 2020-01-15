export default function createGame(){
    const state = {
        players: {
        },
        fruits: {
        },
        screen: {
            width: 10,
            height: 10
        }
    }

    function addPlayer(command){
        const playerId    = command.playerId;
        const playerX     = command.playerX;
        const playerY     = command.playerY;
        const playerColor = command.playerColor;
        state.players[playerId] = {
            x: playerX,
            y: playerY,
            color: playerColor
        }
    }

    function removePlayer(command){
        const playerId = command.playerId;
        delete state.players[playerId];
    }

    function addFruit(command){
        const fruitId   = command.fruitId;
        const fruitX    = command.fruitX;
        const fruitY    = command.fruitY;
        const fuitColor = command.fruitColor;
        state.fruits[fruitId] = {
            x: fruitX,
            y: fruitY,
            color: fuitColor
        }
    }

    function removeFruit(command){
        const fruitId = command.fruitId;
        delete state.fruits[fruitId];
    }

    function movePlayer(command){

        const acceptedMoves = {
            ArrowUp(player){if(player.y - 1 >= 0) return player.y--;},
            ArrowDown(player){if(player.y + 1 < state.screen.height) return player.y++;},
            ArrowLeft(player){if(player.x - 1 >= 0) return player.x--;},
            ArrowRight(player){if(player.x + 1 < state.screen.width) return player.x++;}
        }

        const keyPressed = command.keyPressed;
        const player     = state.players[command.playerId];
        const moveFun    = acceptedMoves[keyPressed];
        if(moveFun && player){
                moveFun(player);
                checkForFruitCollision(command.playerId)
        }
        return ;
    }

    function checkForFruitCollision(playerId){
        //for(const playerId in state.players){
            const player = state.players[playerId];

            for(const fruitId in state.fruits){
                const fruit = state.fruits[fruitId];

                if(player.x == fruit.x && player.y == fruit.y ){
                    removeFruit({ fruitId: fruitId });
                }
            }
        //}
    }

    return {addPlayer, removePlayer, addFruit, removeFruit, movePlayer, state}
}