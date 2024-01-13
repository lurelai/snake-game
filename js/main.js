import { snakeInfo } from './modules/snakeInfo.js'
import { config } from './modules/config.js'
import { move } from './modules/move.js'
import { priority } from './modules/priority.js'

const allSnake = document.querySelectorAll('.snake')
const snakeHead = document.querySelector('#head')
const snakeBody = document.querySelectorAll('.body')

console.log(snakeBody)
// Initial config
config.setInitialConfig(snakeHead, snakeBody)

const gameInit = ()=>{
    let itMove = false
    let lastKeyDirection = null

    document.addEventListener('keydown', (e)=>{
        // Verify if its the first time that the user are trying to move the snake
        if( !itMove && e.key !== "ArrowRight" ){
            lastKeyDirection = config.possibleKeys[e.key] 
            itMove = true;

            priority.setPriority(snakeBody, config.possibleKeys[e.key])
            console.log(priority.order)
        }
        

        // Verify if its not the first time that the user move the snake and if its not the same key as the last
        else if ( itMove && lastKeyDirection !== config.possibleKeys[e.key] ){
            lastKeyDirection = config.possibleKeys[e.key] 

            priority.setPriority(snakeBody, config.possibleKeys[e.key])
        }
    })


    setInterval(()=>{
        if (!itMove)
           move('right', snakeHead, snakeBody, snakeInfo)

        else{
            move(lastKeyDirection, snakeHead, snakeBody, snakeInfo)

            priority.decreasePriority()
        }
    } ,1000)
}

gameInit();

