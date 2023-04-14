

export default function Ingredient(props) {
    return (
        <div onClick={() => props.onRemove()} className={props.ing}>
            {props.ing}
        </div>
    )
}