import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Grid,Row} from 'react-bootstrap';

import logo from './logo.svg';
import './App.css';

import NavigationPanel from './NavigationPanel/NavigationPanel.Component';
import BoardComponent from './Board/Board.Component';
class App extends Component {
  render() {
    return (
      <Router>
        <Grid fluid className="mainGrid">
          <Row className="mainRow">
            
            <NavigationPanel/>
            
            <BoardComponent/>

          </Row>
        
        </Grid>
      </Router>
      
      
    );
  }
}

export default App;
