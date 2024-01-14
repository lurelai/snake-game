import { snakeInfo } from './modules/snakeInfo.js'
import { config } from './modules/config.js'
import { move } from './modules/move.js'
import { lastPosition } from './modules/lastPositionSystem.js'

const snakeHead = document.querySelector('#head')
const snakeBody = document.querySelectorAll('.body')
const allSnake = document.querySelectorAll('.snake')


// Initial config
config.setInitialConfig(snakeHead, snakeBody)

lastPosition(allSnake, snakeInfo(null, null, allSnake).all)
console.log(allSnake, snakeInfo(null, snakeBody, null).body)


const gameInit = ()=>{
    let itMove = false
    let commanded = 'right'  

    document.addEventListener('keydown', (e)=>{
        // Verify if its the first time that the user are trying to move the snake
        if ( !config.possibleKeys[e.key] ){}

        else if( !itMove ){
            console.log('ok') 
            commanded = config.possibleKeys[e.key] 
            itMove = true;
        }
        

        // Verify if its not the first time that the user move the snake and if its not the same key as the last
        else if ( itMove && commanded !== config.possibleKeys[e.key] ){
            commanded = config.possibleKeys[e.key] 
        }      
    }) 


    console.log(snakeHead)
    setInterval(()=>{
        move({snakeHead, snakeBody}, commanded, snakeInfo(null, null, allSnake).all)

    } ,150)
}

gameInit();

