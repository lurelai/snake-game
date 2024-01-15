function moveJustOneElement(element, whereToGo){
    if(element.style.gridColumnStart === '32' && whereToGo === 'right' ){
        element.style.gridColumn = "1 / 2"
    }

    else if(element.style.gridColumnStart === '1' && whereToGo === 'left'){
        element.style.gridColumn = "32 / 33"
    }

    else if(element.style.gridRowStart === '1' && whereToGo === 'up'){
        element.style.gridRow = "16 / 17"
    }

    else if(element.style.gridRowStart === '16' && whereToGo === 'down'){
        element.style.gridRow = "1 / 2"
    }

    else{
        switch(whereToGo){
            case 'right':
                element.style.gridColumnStart = Number(element.style.gridColumnStart)+1
                element.style.gridColumnEnd = Number(element.style.gridColumnEnd)+1
                break;

            case 'left':
                element.style.gridColumnStart = Number(element.style.gridColumnStart)-1
                element.style.gridColumnEnd = Number(element.style.gridColumnEnd)-1
                break;

            case 'up':
                element.style.gridRowStart = Number(element.style.gridRowStart)-1
                element.style.gridRowEnd = Number(element.style.gridRowEnd)-1
                break;

            case 'down':
                element.style.gridRowStart = Number(element.style.gridRowStart)+1
                element.style.gridRowEnd = Number(element.style.gridRowEnd)+1
                break;
        }
    }
}

function moveTheBody(allSnakeInfo){
    let count = 0;
    const whenToStop = allSnakeInfo.length - 1

    for(let i in allSnakeInfo){
        if(count === whenToStop)
            break;

        allSnakeInfo[i].element.style.gridColumn = allSnakeInfo[Number(i)+1].element.style.gridColumn
        allSnakeInfo[i].element.style.gridRow = allSnakeInfo[Number(i)+1].element.style.gridRow

        count++;
    }
}


export function move({snakeHead, snakeBody}, commanded, allSnakeInfo){
        moveTheBody(allSnakeInfo)
        moveJustOneElement(snakeHead, commanded)
}

