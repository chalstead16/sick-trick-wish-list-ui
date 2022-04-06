import React, { Component } from 'react';
import './App.css';
import Tricks from '../Tricks/Tricks';


class App extends Component {
  constructor() {
    super();
    this.state = {
      tricks: []
    }
  }

  getTricks = () => {
    fetch('http://localhost:3001/api/v1/tricks')
    .then(response => response.json())
    .then(data => this.setState({tricks: data}))
  }

  componentDidMount = () => this.getTricks()

  render() {
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
        <Tricks tricks={this.state.tricks} />
      </div>
    );
  }
}

export default App;