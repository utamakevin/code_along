import { useContext, useState, useEffect } from "react"
import { BurgerContext } from "./burgerContext"

export default function Menu(props) {
  const { add } = useContext(BurgerContext)

  let [count, setCount] = useState(0)

  useEffect(() => {
    let id = setInterval(() => {
      console.log("tick")
      setCount(c => c + 1)
    }, 1000)

    // only gets called when the component is unmount
    // remove timer when unmount
    return () => clearInterval(id)
  }, [])

  return (
    <section className="menu">
      <h1>{count}</h1>
      <h1>{props.name}</h1>
      <button onClick={() => add("cheese")}>cheese</button>
      <button onClick={() => add("tomato")}>tomato</button>
      <button onClick={() => add("bun")}>bun</button>
    </section>
  )
}