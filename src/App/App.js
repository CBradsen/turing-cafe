import React, { Component } from 'react';
import './App.css';
import getRes from '../api-calls/api-calls';
import ResCards from '../Reseys/ResCards';
import Form from '../Reseys/ResForm/ResForm';

class App extends Component {

  constructor() {
    super();
    this.state = {
      reservations: []
    }
  }

componentDidMount() {
  console.log("What are we getting from getRes?", getRes)
  getRes()
  .then(data => {
    this.setState({reservations: data});
    console.log("Got set in state:", this.state.reservations)
})
}

addRes = (newRes) => {
  this.setState({ reservations: [...this.state.reservations, newRes] });
}

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addRes={this.addRes}/>
        </div>
        <div className='resy-container'>
          <ResCards reservations={this.state.reservations} />
        </div>
      </div>
    )
  }
}

export default App;
