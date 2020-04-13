import React from 'react';
import { connect } from 'react-redux'
import './App.css';

const App = (props) => {
  return (
    <div className="App">
      <p>Count is {props.count}</p>
      <button onClick={props.increment}>+</button>
      <button onClick={props.incrementAsync}>+ async</button>
    </div>
  );
}

const mapStateToProps = state => ({
  count: state.count
})

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch.count.increment(1),
  incrementAsync: () => dispatch.count.incrementAsync(1)
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
