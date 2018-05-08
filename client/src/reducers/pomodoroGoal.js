 const pomodoroGoal = (state='',action)=>{
    switch(action.type){
        case "ADD_POMODORO_GOAL":
            return action.text
        default:
            return state;
    }
}


export default pomodoroGoal;