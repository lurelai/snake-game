export function move(moveTo, snakes, {headInfo, bodyInfo}, toMove){
   
    console.log(headInfo, bodyInfo)
   
    let whichGridTypeUse = {
        right: ["gridColumnStart", "gridColumnEnd", "column"],
        left: ["gridColumnStart", "gridColumnEnd", "column"],
        up: ["gridRowStart", "gridRowEnd", "row"],
        down: ["gridRowStart", "gridRowEnd", "row"]
    }

    const moveBody = (isSimple, direction)=>{
        if(isSimple){
            let count = 0;

            for(let i of snakes.body){
                if(direction === "right" || direction === "down"){
                    i.style[whichGridTypeUse[direction][0]] = Number(bodyInfo[whichGridTypeUse[direction][2]].start[count])+1
                    i.style[whichGridTypeUse[direction][1]] = Number(bodyInfo[whichGridTypeUse[direction][2]].end[count])+1
                } else {
                    i.style[whichGridTypeUse[direction][0]] = Number(bodyInfo[whichGridTypeUse[direction][2]].start[count])-1
                    i.style[whichGridTypeUse[direction][1]] = Number(bodyInfo[whichGridTypeUse[direction][2]].end[count])-1
                }
                count++;
            }
        } 
    }

    let actions = {
        right: ()=>{ 
            // Move the head
            snakes.head.style.gridColumnStart = Number(headInfo.column.start)+1
            snakes.head.style.gridColumnEnd = Number(headInfo.column.end)+1

            moveBody(true, 'right')
        },
        
        left: ()=>{ 
            // Move the head
            snakes.head.style.gridColumnStart = Number(headInfo.column.start)-1
            snakes.head.style.gridColumnEnd = Number(headInfo.column.end)-1

            moveBody(true, 'left')
        },

        up: ()=>{ 
            // Move the head
            snakes.head.style.gridRowStart = Number(headInfo.row.start)-1
            snakes.head.style.gridRowEnd = Number(headInfo.row.end)-1

            moveBody(true, 'up')
        },

        down: ()=>{ 
            // Move the head
            snakes.head.style.gridRowStart = Number(headInfo.row.start)+1
            snakes.head.style.gridRowEnd = Number(headInfo.row.end)+1

            moveBody(true, 'down')
        },
    }

    if(moveTo)
        //actions[moveTo]()
}
