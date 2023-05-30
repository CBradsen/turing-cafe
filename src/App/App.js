import React, { Component } from 'react';
import './App.css';
import getRes from '../api-calls';
import ResCards from '../Reseys/ResCards';

class App extends Component {

  constructor() {
    super();
    this.state = {
      reservations: []
    }
  }

componentDidMount() {
  getRes()
  .then(data => {
    this.setState({reservations: data});
})
}

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          <ResCards reservations={this.state.reservations} />
        </div>
      </div>
    )
  }
}


export default App;
