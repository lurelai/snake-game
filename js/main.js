import { snakeInfo } from './modules/snakeInfo.js'
import { config } from './modules/config.js'
import { move } from './modules/move.js'
import { foodConfig } from './modules/food.js' 
import { seeCrashes } from './modules/crash.js' 

const findSnakeHead = ()=>{return document.querySelector('#head')}
const findSnakeBody = ()=>{return document.querySelectorAll('.body')}
const findAllSnake = ()=>{ return document.querySelectorAll('.snake') }
const snakeCage = document.querySelector('.snake-cage')


// Initial config


const gameInit = ()=>{
    let itMove = false
    let commanded = 'right'  
    config.setInitialConfig(findSnakeHead(), findSnakeBody(), foodConfig(snakeCage, findAllSnake(), findSnakeHead(), {}).setFood)

    document.addEventListener('keydown', (e)=>{
        // Verify if its the first time that the user are trying to move the snake
        if ( !config.possibleKeys[e.key] ){}

        else if( !itMove && e.key !== 'ArrowRight'){
            commanded = config.possibleKeys[e.key] 
            itMove = true;
        }

        // Verify if its not the first time that the user move the snake and if its not the same key as the last
        else if ( itMove && commanded !== config.possibleKeys[e.key] && config.possibleKeys[e.key] !== config.oppositeKeys[commanded]){
            commanded = config.possibleKeys[e.key] 
        }      
    }) 

    setInterval(()=>{
        move({snakeHead: findSnakeHead(), snakeBody: findSnakeBody()}, commanded, snakeInfo(null, null, findAllSnake()).all)
        foodConfig(snakeCage, findAllSnake(), findSnakeHead(), { direction: commanded, lastElement: findSnakeBody()[0] }).pickUpTheFood()
        seeCrashes(findSnakeHead(), findSnakeBody(), ()=>{ 
            snakeCage.innerHTML = ` 
            <div class="snake body" style="grid-area: 7 / 2 / 8 / 3;"></div> 
            <div class="snake body" style="grid-area: 7 / 2 / 8 / 3;"></div>
            <div class="snake body" style="grid-area: 7 / 3 / 8 / 4;"></div>
            <div class="snake" id="head" style="grid-area: 7 / 4 / 8 / 5;"></div>
            ` 

            config.setInitialConfig(findSnakeHead(), findSnakeBody(), foodConfig(snakeCage, findAllSnake(), findSnakeHead(), {}).setFood)
        })
    } , 100)

    console.log('ok')
}

gameInit();

