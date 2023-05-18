import { useState, createContext } from "react"

export const BurgerContext = createContext()

// this is just a react component
export function BurgerProvider(props) {
  const [burger, setBurger] = useState([])

  const add = ing => {
    setBurger([ing, ...burger])
  }

  const remove = idxTarget => {
    setBurger(burger.filter((ing, idx) => idx !== idxTarget))
  }

  const value = {
    burger,
    add,
    remove,
  }

  return (
    <BurgerContext.Provider value={value}>
      {props.children}
    </BurgerContext.Provider>
  )
}