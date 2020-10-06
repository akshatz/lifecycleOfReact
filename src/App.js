import React from 'react';
import logo from './logo.svg';
import './App.css';
import Lifecycle from './lifecycle.component'

class App extends React.Component {
  constructor(){
    super();
  
    this.state={
      showChild: true,
      text: ''
    };
  }
 
 
 
 
 
 
 
 
 
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button
            onClick={() =>
              this.setState(state => ({
                showChild: !state.showChild
              }))
            }
          >
            Toggle Lifecycles
          </button>
          <button
            onClick={() =>
              this.setState(state => ({
                text: '_hello ' + state.text
              }))
            }
          >
            Update Text
          </button>
          {this.state.showChild ? <Lifecycle text={this.state.text} /> : null}
        </header>
      </div>
    );
  }
}

export default App;
