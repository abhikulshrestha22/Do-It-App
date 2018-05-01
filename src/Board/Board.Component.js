import React from 'react';

import {Route} from 'react-router-dom';
import {Col} from 'react-bootstrap';

import GoalsComponent from '../Goals/Goals.component';
import PomodoroContainer from '../Pomodoro/PomodoroContainer';
const BoardComponent = () =>(
    <Col  xs={12} md={10} className="board">
        <Route exact path="/" component={GoalsComponent} />
        <Route path="/pomodoro" component={PomodoroContainer} />
    </Col>
)

export default BoardComponent;