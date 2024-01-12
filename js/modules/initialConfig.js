export function setInitialConfig(snakeHead, snakeBody){
    snakeHead.style.gridColumn = "4 / 5"
    let count = 1;

    for (let i of snakeBody){
        i.style.gridColumn = `${count} / ${++count}` 
    }
}
