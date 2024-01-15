export function foodConfig(snakeCage, allSnake, snakeHead, { direction, lastElement }, moveBody, allSnakeInfo){
    return {
        findFood: () => { return document.querySelector('.food') },

        setFood(){
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
                    }

                    else
                        break;
                }
            }

            foodDiv.setAttribute('class', 'food')
            foodDiv.setAttribute('style', `grid-area: ${theRandom.rowStart} / ${theRandom.columnStart} / ${theRandom.rowEnd} / ${theRandom.columnEnd}`) 
            
            snakeCage.append(foodDiv) 
        },

        pickUpTheFood(){
            if(this.findFood().style.gridArea === snakeHead.style.gridArea){
                this.findFood().remove()
                this.setFood()

                let bodyDiv = document.createElement('div')
                bodyDiv.setAttribute('class', 'snake body')

                snakeCage.prepend(bodyDiv)
            }
        }
    }
}
