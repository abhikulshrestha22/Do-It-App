import React from 'react';
import {Link} from 'react-router-dom';
import {Col} from 'react-bootstrap';

const NavigationPanel = () =>(
    <Col  xs={12} md={2} className="navigation-panel">
        <li>
            <Link to="/">Goals</Link>
        </li>
        <li>
            <Link to="/pomodoro">Pomodoro</Link>
        </li>
    </Col>
    
)

export default NavigationPanel;