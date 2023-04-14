
export default function Menu(props) {
    return (
        <div className="menu">
            <h1>{props.name}</h1>
            <section className="menu">
                <button onClick={() => props.onAdd('cheese')}>cheese</button>
                <button onClick={() => props.onAdd('tomato')}>tomato</button>
                <button onClick={() => props.onAdd('bun')}>bun</button> 
                <button onClick={() => props.onCarbonator()}>carbonator</button>
            </section>
        </div>
    )
}