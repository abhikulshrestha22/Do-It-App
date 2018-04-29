import React, { Component } from 'react';
import {Grid,Row,Col} from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
import AddGoalsContainer from './containers/addGoals.container';
import GoalsListContainer from './containers/GoalsList.Container';
import PomodoroContainer from './containers/PomodoroContainer';
class App extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12} md={4}>
            Goals
          </Col>
          <Col xs={12} md={8}>
            <h1>ari sala</h1>
            <AddGoalsContainer/>
            <GoalsListContainer/>
            <PomodoroContainer/>
          </Col>

        </Row>
      
      </Grid>
      
      
    );
  }
}

export default App;
