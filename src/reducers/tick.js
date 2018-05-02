


const tick = (state=0,action)=>{
    switch(action.type){
        //To decrease the timer
        case 'TICK':
            
            return state - 1;
        //To set the interval of timer initially
        case 'SET_INTERVAL':
            return state+action.seconds;
        case 'STOP_TICK':
            return 0;
        default:
            return state;
    }
}


export default tick;