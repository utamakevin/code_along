import './App.css';
import React from 'react';
import Menu from './Menu';
import Burger from './Burger';
import { useState } from 'react';
import { setState } from 'react'

function App() {
  const [burger, setBurger] = useState(['bun', 'cheese', 'bun'])
  // const [cheeseAmount, setCheeseAmount] = useState('')
  const [hideMenu, setHideMenu] = useState(false)
  
  const add = ing => {
    // react wants you to do immutable updates
    setBurger([ing, ...burger])
    let newBurger = [ing, ...burger]
    // checkAmount(newBurger)
  }
  
  
  const remove = idxTarget => {
    setBurger(burger.filter((ing, idx) => idx !== idxTarget))
    let newBurger = burger.filter((ing, idx) => idx !== idxTarget)
    // checkAmount(newBurger)
  } 
  
  const checkAmount = () => {
    const cheeseAmount = burger.filter((ing, idx) => ing === 'cheese').length
    console.log(cheeseAmount)

    if(cheeseAmount > 5) {
      return 'maximum cheese'
    } else if(cheeseAmount === 5) {
      return 'quintuple cheese'
    } else if(cheeseAmount === 4) {
      return 'quadruple cheese'
    } else if(cheeseAmount === 3) {
      return 'triple cheese'
    } else if(cheeseAmount === 2) {
      return 'double cheese'
    } else {
      return ''
    }

  }

  const carbonator = () => {
    setBurger(['bun', 'bun', 'bun', 'bun', 'bun', 'bun', 'bun', ...burger])
  }

  const handleReset = () => {
    setBurger([])
  }

  const toggleMenu = () => {
    console.log('menu toggled')
    setHideMenu(!hideMenu)
  }


  return (
    <div className="App">
      {hideMenu ? null : <Menu name="burgulator" onAdd={add} onCarbonator={carbonator}/> }
      {hideMenu ? <button onClick={() => toggleMenu()}>show menu</button> : <button onClick={() => toggleMenu()}>hide menu</button> }
    <section className="plate">
      <Burger handleReset={handleReset} burger={burger} onRemove={remove}/>
    </section>
    <span>{checkAmount()}</span>
  </div>
  )
}

export default App;
