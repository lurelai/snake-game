import { snakeInfo } from './modules/snakeInfo.js'

const allSanke = document.querySelectorAll('.snake')
const snakeHead = document.querySelector('#head')
const snakeBody = document.querySelectorAll('.body')


// Initial config
snakeHead.style.gridColumn = "2 / 3" 


// Change the move
function changeMove(){

}

// Move
function move(){


    setInterval(()=>{
        snakeHead.style.gridColumnStart = Number(snakeInfo(snakeHead).head.column.start) + 1
        snakeHead.style.gridColumnEnd = Number(snakeInfo(snakeHead).head.column.end) + 1   

        console.log('moving...')
    } ,300)
}
//move();
