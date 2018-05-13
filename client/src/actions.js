 import fetch from 'cross-fetch';
 
 
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


export const requestGoals = ()=>{
    return {
        type:'REQUEST_GOALS'
    }
}

export const recieveGoals = (json)=>{
    
    return {
        type:'RECIEVE_GOALS',
        goals:json.result
    }
}

export const fetchGoals = ()=>{
    
    return (dispatch)=>{
        
        dispatch(requestGoals())
        return fetch('/goals/getgoals',
                    {
                        method:'GET',
                        headers:{
                            'Content-Type':'application/json'
                        }
                    })
                .then(response=>
                    response.json()
                )
                .then(json =>{
                    
                    if(json.status="succeeded")
                            dispatch(recieveGoals(json))}
                     )
                .catch(err=>{
                    console.log("error")
                    console.log(err);
                })
    }
}


