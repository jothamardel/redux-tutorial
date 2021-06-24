import React from 'react';
import {connect} from 'react-redux'
import { increment, decrement } from './redux/actions';
import './App.css';

function App({ counter: { value }, increment, decrement }) {

  return (
    <div className="App">
      <h1>{value}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}


const mapStateToProps = (state) => ({
  counter: state.counter
});

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
