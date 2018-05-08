const goals = (state=[],action)=>{
    switch(action.type){
        case "ADD_GOAL":
            return [...state,{
                text:action.text,
                completed:false
            }]
        default:
            return state;
    }
}

export default goals;