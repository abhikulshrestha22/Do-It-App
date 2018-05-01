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

//export default addGoalAction;