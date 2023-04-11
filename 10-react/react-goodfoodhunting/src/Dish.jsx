import { useState } from 'react'
import './Dish.css'

function PoopButton() {
    const [havePooped, setHavePooped] = useState(false)

    const handleClick = () => {
        setHavePooped(!havePooped)
    }

    return (
        <span onClick={handleClick} className={`poop ${havePooped ? "selected" : ""}`}>
            💩
        </span>
    )
}

export default function Dish() {
    return (
        <article className="card">
            <header>
                <span>dt</span>
                <span>12h</span>
            </header>
            <section className="image-wrapper">
                <img src="https://dummyimage.com/300x200/000/fff" alt="" />
                <PoopButton />
            </section>
            <section className="content">
                <h2>cakepudding</h2>
                <h4>by mistyrose</h4>
            </section>
            <footer>
                <span>left</span>
                <span>right</span>
            </footer>
        </article>
    )
}