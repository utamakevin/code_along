import { useEffect, useState } from 'react'

export default function Intro() {
  const [colors, setColors] = useState([])
    const [counter, setCounter] = useState(0)
  
    
    useEffect(() => {
      fetch('/api/colors')
        .then(res => res.json())
        .then(data => {
          console.log(data)
          setColors(data)
        })  
    }, [counter])

    return (
      <section>

        <button onClick={() => setCounter(counter + 1)}> 
          increment
        </button>
        
        {colors.map(color => (
          <p key={color}>
            {color}
          </p>
        ))}

      </section>
    )
}









