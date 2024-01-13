import { snakeInfo } from './modules/snakeInfo.js'
import { config } from './modules/config.js'
import { move } from './modules/move.js'
import { futureHistory } from './modules/futureHistory.js'

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
        console.log(e.key, config.possibleKeys[e.key], lastKeyDirection) 
        // Verify if its the first time that the user are trying to move the snake
        if( !itMove && e.key !== "ArrowRight" ){
            lastKeyDirection = config.possibleKeys[e.key] 
            itMove = true;

            futureHistory.push(config.possibleKeys[e.key])

            console.log('first time', config.possibleKeys[e.key] )
        }
    
        else if ( itMove && lastKeyDirection !== config.possibleKeys[e.key] ){
            lastKeyDirection = config.possibleKeys[e.key] 

            futureHistory.push(config.possibleKeys[e.key])
            console.log('ok')
        }

        console.log(futureHistory)
    })


    setInterval(()=>{
        if (!itMove)
           move('right', snakeHead, snakeBody, snakeInfo)

        else 
            move(lastKeyDirection, snakeHead, snakeBody, snakeInfo)
        
       
    } ,350/*300*/)
}

gameInit();

