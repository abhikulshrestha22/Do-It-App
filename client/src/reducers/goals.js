import { stat } from "fs";

const goals = (state=[],action)=>{
    switch(action.type){
        case "ADD_GOAL":
            return [...state,{
                text:action.text,
                completed:false
            }]
        case "RECIEVE_GOALS":
            
            return [...state,...action.goals]
            
        case "REQUEST_GOALS":
            return state;
            
        default:
            return state;
    }
}

export default goals;