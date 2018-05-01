


const tick = (state=0,action)=>{
    switch(action.type){
        case 'TICK':
            //let tickCounter=state
            //console.log("here comes state");
            //console.log(tickCounter)
            return state + 1;
        default:
            return state;
    }
}


export default tick;