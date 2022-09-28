import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0
    }
  }
  increment = () => {
    this.setState({count: this.state.count + 1});
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button onClick={ this.increment } style={{ marginTop: '20px'}}>Click</button>
        <p className="App-intro">
          This button is clicked {this.state.count} times
        </p>
      </div>
    );
  }
}

export default App;
