export function seeCrashes(snakeHead, snakeBody, restartGame){
    console.log('ok')
    for(let i of snakeBody){
        if(i.style.gridArea === snakeHead.style.gridArea) 
            restartGame()
    }
}
