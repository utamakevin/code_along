import Ingredient from './Ingredient'

export default function Burger({ burger, onRemove: remove, handleReset }) {

    return (
        <div className="burger">
            <button onClick={() => handleReset()}>reset</button>
            {burger.map((ing, idx) => (
                 <Ingredient key={idx} ing={ing} onRemove={() => remove(idx)}/>
            ))}
        </div>
    )
}