import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "redux/store";
import { incrementCounter } from "../redux/actions/counterActions";
const Home: React.FC = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: AppState) => state.counter.count);
  const [counter, setCounter] = useState(0);
  //Updates the counter in state by +1
  const incrementCounter1 = async () => {
    dispatch(incrementCounter());
  };

  //Updates the counter in state by  -1
  const decrementCounter = () => {
    setCounter(counter - 1);
  };
  return (
    <div>
      <button onClick={incrementCounter1}>Increment</button>
      <button onClick={decrementCounter}>Decrement</button>
      <h1>
        {counter}, {count}
      </h1>
    </div>
  );
};

export default Home;