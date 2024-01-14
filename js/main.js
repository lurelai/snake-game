import { snakeInfo } from './modules/snakeInfo.js'
import { config } from './modules/config.js'
import { move } from './modules/move.js'
import { lastPosition } from './modules/lastPositionSystem.js'

const snakeHead = document.querySelector('#head')
const snakeBody = document.querySelectorAll('.body')
const allSnake = document.querySelectorAll('.snake')

lastPosition(allSnake)

// Initial config
config.setInitialConfig(snakeHead, snakeBody)

const gameInit = ()=>{
    let itMove = false
    let lastKeyDirection = 'right'  

    document.addEventListener('keydown', (e)=>{
        // Verify if its the first time that the user are trying to move the snake
        if ( !config.possibleKeys[e.key] ){}

        else if( !itMove ){
            console.log('ok') 
            lastKeyDirection = config.possibleKeys[e.key] 
            itMove = true;
        }
        

        // Verify if its not the first time that the user move the snake and if its not the same key as the last
        else if ( itMove && lastKeyDirection !== config.possibleKeys[e.key] ){
            lastKeyDirection = config.possibleKeys[e.key] 
        }      
    }) 


    setInterval(()=>{
        move()

    } ,1000)
}

gameInit();

