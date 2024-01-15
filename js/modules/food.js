export const foodConfig = {
    setFood(snakeCage, allSnake){
        let foodDiv = document.createElement('div')
        let theRandom = null 
        let dontContinue = false

        function generateRandomFood(){
            let columnStart = Math.floor( Math.random()*32 )+1
            let columnEnd = columnStart+1

            let rowStart = Math.floor( Math.random()*16 )+1
            let rowEnd = rowStart+1 

            return {
                columnStart,
                columnEnd,
                rowStart,
                rowEnd
            }
        }

        theRandom = generateRandomFood()
        
        for(let i = 0; i <= 600; i++){
            for(let j of allSnake){
                if(theRandom.columnStart == j.style.gridColumnStart || theRandom.rowStart == j.style.gridRowStart){
                    theRandom = generateRandomFood()
                    continue;
                    console.log('here')
                }

                else
                    break;
            }
        }

        foodDiv.setAttribute('class', 'food')
        foodDiv.setAttribute('style', `grid-area: ${theRandom.rowStart} / ${theRandom.columnStart} / ${theRandom.rowEnd} / ${theRandom.columnEnd}`) 
        
        snakeCage.append(foodDiv) 
    }
}
