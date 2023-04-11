import "./Spotlight.css"

export default function Spotlight(props) {
    return <div className="spotlight">
        <h1>Spotlight</h1>
        <p>{props.name}</p>
        <a href="#">refresh</a>
    </div>
}