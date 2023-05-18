import { useState, createContext } from "react"

export const BurgerContext = createContext()

// this is just a react component
export function BurgerProvider(props) {
    
  return (
    <BurgerContext.Provider values={"hello"}>
      {props.children}
    </BurgerContext.Provider>
  )
}
