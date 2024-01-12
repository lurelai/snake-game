import { snakeInfo } from './modules/snakeInfo.js'
import { setInitialConfig } from './modules/initialConfig.js'


const allSnake = document.querySelectorAll('.snake')
const snakeHead = document.querySelector('#head')
const snakeBody = document.querySelectorAll('.body')

console.log(snakeBody)

// Initial config
setInitialConfig(snakeHead, snakeBody)


// Move and Change the move
function changeMove(){

}

function move(){
    // Move the head
    snakeHead.style.gridColumnStart = Number(snakeInfo(snakeHead).head.column.start) + 1
    snakeHead.style.gridColumnEnd = Number(snakeInfo(snakeHead).head.column.end) + 1   

    // Move the body
    for ( let i in snakeBody ){
        snakeBody[i].style.gridColumn = `${ snakeInfo() }`
    }

}


const gameInit = ()=>{
    setInterval(()=>{
        move()

        console.log(snakeInfo(snakeHead, snakeBody, allSnake))
        console.log('moving...')


    } ,10000/*300*/)

}

console.log(snakeInfo(snakeHead, snakeBody, allSnake))
// Move

//gameInit();

