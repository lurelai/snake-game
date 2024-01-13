export function snakeInfo(snakeHead, snakeBody, snakeAll){  
    let returnIt = {
        head: { column: { start: null, end: null }, row: { } },
        
        body: {
            column: { start: [ ], end: [ ] },

            row: {

            }
        }

    }

    if ( snakeHead ){
        returnIt.head.column.start = snakeHead.style.gridColumnStart
        returnIt.head.column.end = snakeHead.style.gridColumnEnd
    }

    // modifie all about the snakeBody
    if ( snakeBody ){
        // set the "start" and the "end" in the returIt var
        for(let i of snakeBody){
            returnIt.body.column.start.push(i.style.gridColumnStart)
            returnIt.body.column.end.push(i.style.gridColumnEnd)
        }
    }
    return returnIt 
}
