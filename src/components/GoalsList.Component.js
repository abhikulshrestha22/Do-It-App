import React from 'react';

const GoalsListComponent = ({goals})=>{
    // console.log("in component goals")
    // goals.map((goal)=>{
    //     console.log(goal.text);
    // })
    return(
        <ul>
        {goals.map((goal,index) => 
                     <li key={index}>{goal.text}</li>
        )}
    </ul>
    )
}

export default GoalsListComponent;