import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddGoalsContainer from './containers/addGoals.container';
import GoalsListContainer from './containers/GoalsList.Container';
import PomodoroContainer from './containers/PomodoroContainer';
class App extends Component {
  render() {
    return (
      <div>
      <h1>ari sala</h1>
      <AddGoalsContainer/>
      <GoalsListContainer/>
      <PomodoroContainer/>
      </div>
      
    );
  }
}

export default App;
