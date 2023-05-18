import { useContext } from "react"
import Ingredient from "./Ingredient"
import { BurgerContext } from "./burgerContext"

export default function Burger() {
  console.log("rendering burger...")
  const { burger, remove } = useContext(BurgerContext)

  return (
    <div className="burger">
      {burger.map((ing, idx) => (
        <Ingredient key={idx} ing={{ id: idx, name: ing }} remove={remove} />
      ))}
    </div>
  )
}