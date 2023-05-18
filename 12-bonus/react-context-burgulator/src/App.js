import "./App.css"
import React, { useState } from "react"
import Menu from "./Menu"
import Burger from "./Burger"
import CheesyLabel from "./CheesyLabel"

function App() {
  let [showMenu, setShowMenu] = useState(true)

  return (
    <div className="App">
      {showMenu ? (
        <button onClick={() => setShowMenu(!showMenu)}>Hide menu</button>
      ) : (
        <button onClick={() => setShowMenu(!showMenu)}>Show menu</button>
      )}
      {showMenu && <Menu name="burgulator" />}
      <section className="plate">
        <Burger />
      </section>
      <CheesyLabel />
    </div>
  )
}

export default App
