import { snakeInfo } from './modules/snakeInfo.js'
import { setInitialConfig } from './modules/initialConfig.js'


const allSnake = document.querySelectorAll('.snake')
const snakeHead = document.querySelector('#head')
const snakeBody = document.querySelectorAll('.body')


// Initial config
setInitialConfig(snakeHead, snakeBody)


// Move and Change the move
function changeMove(){

}

function move(){
    // Move the head
    snakeHead.style.gridColumnStart = Number(snakeInfo(snakeHead).head.column.start) + 1
    snakeHead.style.gridColumnEnd = Number(snakeInfo(snakeHead).head.column.end) + 1   

    let count = 0;
    // Move the body
    for ( let i of snakeBody ){
        console.log(snakeBody)
        snakeBody[count].style.gridColumnStart = Number(snakeInfo(null, snakeBody).body.column.start[count])+1
        snakeBody[count].style.gridColumnEnd = Number(snakeInfo(null, snakeBody).body.column.end[count])+1
        
        count++;
    }
}


const gameInit = ()=>{
    setInterval(()=>{
        move()

        console.log('moving...')


    } ,350/*300*/)

}

// Move

// gameInit();

