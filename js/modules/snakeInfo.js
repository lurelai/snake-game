export function snakeInfo(snakeHead, snakeBody, snakeAll){  
    let returnIt = {
        head: { column: { start: null, end: null }, row: { start: null, end: null } },
        
        body: {
            column: { start: [ ], end: [ ] },

            row: { start: [ ], end: [ ] }
        }

    }
    
    // modifie all about the snakeHead
    if ( snakeHead ){
        returnIt.head.column.start = snakeHead.style.gridColumnStart
        returnIt.head.column.end = snakeHead.style.gridColumnEnd

        returnIt.head.row.start = snakeHead.style.gridRowStart
        returnIt.head.row.end = snakeHead.style.gridRowEnd
    }

    // modifie all about the snakeBody
    if ( snakeBody ){
        // set the "start" and the "end" in the returIt var
        for(let i of snakeBody){
            returnIt.body.column.start.push(i.style.gridColumnStart)
            returnIt.body.column.end.push(i.style.gridColumnEnd)

            returnIt.body.row.start.push(i.style.gridRowStart)
            returnIt.body.row.end.push(i.style.gridRowEnd)
        }
    }
    return returnIt 
}
