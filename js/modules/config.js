export const config = { 
    setInitialConfig: (snakeHead, snakeBody)=>{
        let count = 1;
        
        // Set the inital config about the snakeHead
        snakeHead.style.gridColumn = "4 / 5"
        snakeHead.style.gridRow = "7 / 8"

        // Set the initial config about the snakeBody
        for (let i of snakeBody){
            i.style.gridColumn = `${count} / ${++count}` 
            i.style.gridRow = `7 / 8 `
        }
    },

    possibleKeys: {
        ArrowUp: 'up',
        ArrowDown: 'down',
        ArrowLeft: 'left',
        ArrowRight: 'right',
    }
}
