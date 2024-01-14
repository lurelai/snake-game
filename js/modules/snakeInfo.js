export function snakeInfo(snakeHead, snakeBody, allSnake){  
    let returnIt = {
        head: { column: { start: null, end: null }, row: { start: null, end: null } },
        
        body: [],

        all: [],

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
        for(let element of snakeBody){
            returnIt.body.push({ 
                element,

                column: {
                    start: element.style.gridColumnStart,
                    end: element.style.gridColumnEnd
                },

                row: {
                    start: element.style.gridRowStart,
                    end: element.style.gridRowEnd
                }
            })
        }
    }

    if ( allSnake ){
        for(let element of allSnake){
            returnIt.all.push({ 
                element,

                column: {
                    start: element.style.gridColumnStart,
                    end: element.style.gridColumnEnd
                },

                row: {
                    start: element.style.gridRowStart,
                    end: element.style.gridRowEnd
                }
            })
        }
    }

    return returnIt 
}
