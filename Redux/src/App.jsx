import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decNumber, incNumber } from './Action/Index';
const App = () => {

  const myState = useSelector((state)=>state.changeTheNumber);
const dispatch = useDispatch();
  return (
    <>
      <h1>WelCome to REdux</h1>
      <h3>Incre and Decre</h3>
      <h5>Using React and Redux</h5>

      <div className="quantity">
      <div className="main">
        <button onClick={() =>dispatch(decNumber(5))}>-</button>
        <input type="text" value={myState}  />
        <button onClick={() =>dispatch(incNumber(5))} >+</button>
        </div>

      </div>

    </>
  )
}

export default App