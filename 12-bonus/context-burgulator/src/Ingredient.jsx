export default function Ingredient({ ing, remove }) {
    return (
      <div onClick={() => remove(ing.id)} className={`ingredient ${ing.name}`}>
        {ing.name}
      </div>
    )
  }