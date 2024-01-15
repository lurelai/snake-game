export const foodConfig = {
    setFood(snakeCage){
        let foodDiv = document.createElement('div')

        let columnStart = Math.floor( Math.random()*32 )+1
        let columnEnd = columnStart+1

        let rowStart = Math.floor( Math.random()*16 )+1
        let rowEnd = rowStart+1 

        foodDiv.setAttribute('class', 'food')
        foodDiv.setAttribute('style', `grid-area: ${rowStart} / ${columnStart} / ${rowEnd} / ${columnEnd}`) 
        
        snakeCage.append(foodDiv) 
    }
}
