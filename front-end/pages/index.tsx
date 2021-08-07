import React, { useState } from 'react'
import { useRouter } from 'next/router'

const Home: React.FC = () => {
  const [counter, setCounter] = useState(0);
  //Updates the counter in state by +1
  const incrementCounter = () => {
    setCounter(counter + 1)
};

//Updates the counter in state by  -1
const decrementCounter = () => {
    setCounter(counter - 1)
};
  return (
    <div>
    <button onClick={incrementCounter}>Increment</button>
    <button onClick={decrementCounter}>Decrement</button>
    <h1>{counter}</h1>
</div>
  )
}

export default Home
