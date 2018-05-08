import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Grid,Row} from 'react-bootstrap';

import logo from './logo.svg';
import './App.css';

import NavigationPanel from './NavigationPanel/NavigationPanel.Component';
import BoardComponent from './Board/Board.Component';
class App extends Component {

  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">{this.state.response}</p>
      </div>
    );
  }

  // render() {
  //   return (
  //     <Router>
  //       <Grid fluid className="mainGrid">
  //         <Row className="mainRow">
            
  //           <NavigationPanel/>
            
  //           <BoardComponent/>

  //         </Row>
        
  //       </Grid>
  //     </Router>
      
      
  //   );
  // }
}

export default App;
