export let priority = {
    order: [],

    nextMove(){
        // The body's part who want to be the next to move and his setups
        let returnIt = []
        for(let i in this.order){
            // verify if there's any element with just 1 in priority, it there is, send it to the be returned
            if(this.order[i][0] === 1)
                returnIt.push(this.order[i])
        }
        
        
        return returnIt
    },

    decreasePriority(){
        for(let i in this.order){
            // decrease in 1 the priority
            this.order[i][0] = --this.order[i][0]

            // Remove the priority if its 0
            if(this.order[i][0] === 0)
                this.order.splice(i, 1)
        }
    },
    
    setPriority(snakeBody, direction, pastDirection){
        let count = snakeBody.length;

        for (let i of snakeBody){
            this.order.push( [count, i, direction, pastDirection] )
             
            count--;
        }
        console.log(this.order[0])
    }
}


