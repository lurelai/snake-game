export function snakeInfo(snakeHead, snakeBody, snakeAll){  
    let returnIt = {
        head: {
            column: {
                start: snakeHead.style.gridColumnStart,
                end: snakeHead.style.gridColumnEnd
            },

            row: {
    
            }
        },
        
        body: {
            column: {
                start: [

                ],

                end: [

                ]
            },

            row: {

            }
        }

    }
    
    if ( snakeBody ){
        // set the "start" and the "end" in the returIt var
        for(let i of snakeBody){
            returnIt.body.column.start.push(i.style.gridColumnStart)
            returnIt.body.column.end.push(i.style.gridColumnEnd)
        }
    }

    return returnIt 
}
