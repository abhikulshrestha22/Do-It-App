import React from 'react';
import {Row,Col} from 'react-bootstrap';

const GoalsListComponent = ({goals})=>{
    // console.log("in component goals")
    // goals.map((goal)=>{
    //     console.log(goal.text);
    // })

    //console.log("this is " + goals.length);
    let goalsView
    if(goals.length===0){
        goalsView = <h3>You have 0 goals.</h3>
    }
    else{
        goalsView= <ul>
        {goals.map((goal,index) => 
                     <li className="goalsList" key={index}>{goal.text}</li>
        )}
    </ul>
    }

    return(
        <Row>
        <Col  xs={12} md={10} mdOffset={1} >
            {goalsView}
        </Col>
        </Row>    
    )
}

export default GoalsListComponent;