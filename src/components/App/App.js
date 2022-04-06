import { Component } from 'react';
import './App.css';
import getTricksData from '../../apiCalls';

class App extends Component {
  constructor(){
    super();
    this.state = {
      tricks: []
    }
  }

  getTricks = () => {
    getTricksData()
    .then(data => this.setState({tricks: data}));
  }

  componentDidMount = () => this.getTricks()

  render() {
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
      </div>
    );
  }
}

export default App;