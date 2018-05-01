import React from 'react';
import {Col} from 'react-bootstrap';
import AddGoalsContainer from './addGoals.container';
import GoalsListContainer from './GoalsList.Container';


const GoalsComponent = ()=>(
    <Col  xs={12} md={10} className="board">
        <AddGoalsContainer/>
        <GoalsListContainer/>     
    </Col>
    
)

export default GoalsComponent;