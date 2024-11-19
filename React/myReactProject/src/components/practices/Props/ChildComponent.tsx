import React from "react"


const ChildComponent: React.FC<{ count: number }> = ({ count }) => {
  return (
    <div>
      <p>Count: { count }</p>
    </div>
  )
}

export default ChildComponent