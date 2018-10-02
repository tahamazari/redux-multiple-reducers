import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="col">
            <div>
              <span>A:</span><span>{this.props.a}</span>
            </div>
            <button className="btn btn-primary" onClick={() => this.props.updateA(this.props.b)}>Button A</button>
          </div>
          <div className="col">
            <div>
              <span>B:</span><span>{this.props.b}</span>
            </div>
            <button className="btn btn-primary" onClick={() => this.props.updateB(this.props.a)}>Button B</button>
          </div>
        </div>
      </div>
    );
  }
}


const mapStoreToProps = (store) => {
  return {
    a: store.rA.a,
    b: store.rB.b
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateA: (b) => dispatch({type: 'UPDATE_A', b:b}),
    updateB: (a) => dispatch({type: 'UPDATE_B', a:a})
  }
}

export default connect(mapStoreToProps, mapDispatchToProps)(App);
