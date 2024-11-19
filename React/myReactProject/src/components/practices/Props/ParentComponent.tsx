import React, { useState } from 'react'
import ChildComponent from './ChildComponent';

const ParentComponent = () => {

  const [count, setCount] = useState<number>(0);

  const increment = (_event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setCount( count + 1 )
  }

  const decrement = (_event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setCount( count - 1 )
  }

  const reset = (_event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setCount(0)
  }

  return (
    <div>
      <ChildComponent count={ count } />
      <button onClick={(event) => {increment(event)} }>Increment</button>
      <button onClick={(event) => {decrement(event)}}>Decrement</button>
      <button onClick={(event) => {reset(event)}}>Reset</button>
    </div>
  )
}

export default ParentComponent