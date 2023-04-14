import './Bar.css'

export default function Bar(props) {
    const barStyle = { 
        width: `${props.percent}%`,
        backgroundColor: props.percent < 10 ? 'red' : '',
    }

    return (
        <div className="bar-wrapper">
            <div className="bar" style={barStyle}></div>
        </div>
    )
}