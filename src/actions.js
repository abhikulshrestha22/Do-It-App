 export const addGoalAction =(text)=>{
    return {
        type:'ADD_GOAL',
        text
    }
}

export const tickAction = (interval)=>{
    console.log("tick");

    return{
        type:'TICK',
        interval
    }
}

export const setIntervalValueAction = (seconds)=>{
    return{
        type:'SET_INTERVAL',
        seconds
    }
}

export const stopTickAction = ()=>{

    return{
        type:'STOP_TICK',
        
    }
}

