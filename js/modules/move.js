export function move(moveTo, snakeHead, snakeBody, snakeInfo){
    if(moveTo === "right"){
        // Move the head to right
        snakeHead.style.gridColumnStart = Number(snakeInfo(snakeHead, null).head.column.start) + 1
        snakeHead.style.gridColumnEnd = Number(snakeInfo(snakeHead, null).head.column.end) + 1   
        let count = 0;

        // Move the body to right
        for ( let i of snakeBody ){
            snakeBody[count].style.gridColumnStart = Number(snakeInfo(null, snakeBody).body.column.start[count])+1
            snakeBody[count].style.gridColumnEnd = Number(snakeInfo(null, snakeBody).body.column.end[count])+1
            
            count++;
        }
    }
    

    if(moveTo === "up"){
        snakeHead.style.gridRowStart = Number(snakeInfo(snakeHead, null).head.row.start) - 1
        snakeHead.style.gridRowEnd = Number(snakeInfo(snakeHead, null).head.row.end) - 1
    }


    if(moveTo === "down"){
        snakeHead.style.gridRowStart = Number(snakeInfo(snakeHead, null).head.row.start) + 1
        snakeHead.style.gridRowEnd = Number(snakeInfo(snakeHead, null).head.row.end) + 1
    }


    if(moveTo === "left"){
        snakeHead.style.gridColumnStart = Number(snakeInfo(snakeHead, null).head.column.start) - 1
        snakeHead.style.gridColumnEnd = Number(snakeInfo(snakeHead, null).head.column.end) - 1
    }
}
