import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  increment = () => {
    this.setState({count: this.state.count + 1});
  }
  dicrement = () => {
    this.setState({count: this.state.count - 1});
  }

  render(){
    return(
      <div className="App">
        <h2>A simple Increment and Decrement app of React</h2>
        <button onClick={this.increment} className="counter">+</button>
        <button onClick={this.dicrement} className="counter">-</button>
        <h2>{ this.state.count }</h2>
      </div>
    )
  }
}
export default App;
