export let priority = {
    order: [],
    nextMove: [], // The body's party who want to be the next to move and his setups
   
    decreasePriority(){
        this.nextMove = []
        for(let i in this.order){
            // decrease in 1 the priority
            this.order[i][0] = --this.order[i][0]
            
            // verify if there's any element with just 1 in priority, it there is, send it to the nextMove
            if(this.order[i][0] === 1)
                this.nextMove.push(this.order[i])

            // Remove the priority if its 0
            if(this.order[i][0] === 0)
                this.order.splice(i, 1)
        }
        
        console.log(this.nextMove)

    },
    
    setPriority(snakeBody, direction){
        let count = snakeBody.length;

        for (let i of snakeBody){
            this.order.push( [count, i, direction] )
            count--;
        }
    }
}


