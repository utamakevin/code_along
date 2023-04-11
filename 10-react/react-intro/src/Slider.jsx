import { Component } from "react"
 
class Slider extends Component {

  constructor(props) {
    super(props)

    this.state = {
      number: 5
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    // console.log('changing')
    console.log(e.target.value)
    this.setState({
      number: e.target.value
    })
  }

  render() {
    return <div className="slider">
      <input type="range" onChange={this.handleChange} min="0" max="10" value={this.state.number}/>
      <input type="number" onChange={this.handleChange} min="0" max="10" value={this.state.number}/>
    </div>
  }
}

export default Slider