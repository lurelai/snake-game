import snakeActually from './modules/monitor.js'

const allSankes = document.querySelectorAll('.snake')
const headSnake = document.querySelector('#head')
const bodySnakes = document.querySelectorAll('.body')

const initialConfig = {
    headSnakeC: "2 / 3" 
}


function movement(){
    headSnake.style.gridColumn = initialConfig.headSnakeC
    setInterval(()=>{
        
        headSnake.style.gridColumnStart = String(Number(snakeActually.head.start)+1)
        headSnake.style.gridColumnEnd = String(Number(snakeActually.head.end)+1)

        console.log('ok', snakeActually.head.geral)
    } ,700)
}

//movement()

