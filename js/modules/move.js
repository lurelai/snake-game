function moveJustOneElement(elementToMove, whereToMove){
    switch (whereToMove){
        case 'right': 
            elementToMove.style.gridColumnStart = Number(elementToMove.style.gridColumnStart)+1
            elementToMove.style.gridColumnEnd = Number(elementToMove.style.gridColumnEnd)+1
            break;

        case 'left':
            elementToMove.style.gridColumnStart = Number(elementToMove.style.gridColumnStart)-1
            elementToMove.style.gridColumnEnd = Number(elementToMove.style.gridColumnEnd)-1
            break;

        case 'up':
            elementToMove.style.gridRowStart = Number(elementToMove.style.gridRowStart)-1
            elementToMove.style.gridRowEnd = Number(elementToMove.style.gridRowEnd)-1
            break;

        case 'down':
            elementToMove.style.gridRowStart = Number(elementToMove.style.gridRowStart)+1
            elementToMove.style.gridRowEnd = Number(elementToMove.style.gridRowEnd)+1
            break;
    }
} 

function moveAllTheBodyToRight(head, body){
    head.style.gridColumnStart = Number(head.style.gridColumnStart)+1
    head.style.gridColumnEnd = Number(head.style.gridColumnEnd)+1

    for(let i of body){
        i.style.gridColumnStart = Number(i.style.gridColumnStart)+1
        i.style.gridColumnEnd = Number(i.style.gridColumnEnd)+1
    }
}

export function move(moveTo, snakes, {headInfo, bodyInfo}, {nextMove, order}, itGameInit){
    if(!itGameInit){
        moveAllTheBodyToRight(snakes.head, snakes.body)
    }
}

