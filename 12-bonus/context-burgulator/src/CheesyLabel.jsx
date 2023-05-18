import { useContext } from "react"
import getCheesyLabel from "./getCheesyLabel"
import { BurgerContext } from "./burgerContext"

export default function CheesyLabel(props) {
  const { burger } = useContext(BurgerContext)

  return (
    <div>
      <p>{getCheesyLabel(burger)}</p>
    </div>
  )
}