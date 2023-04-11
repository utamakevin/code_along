import { useState } from "react"

function Counter() {  

  let [count, setCount] = useState(3) // backpack for functions to have state
  // let count = arr[0] // reader getter
  // let setCount = arr[1] // writer setter

  const handleIncrement = () => {
    setCount(count + 1)
  }

  const handleReset = () => {
    setCount(0)
  }

  return (
    <div>
      <h2>counter</h2>
      <span>{count}</span>
      <button onClick={handleIncrement}>add one</button>
      <button onClick={handleReset}>reset back to zero</button>
    </div>
  )
}

export default Counter