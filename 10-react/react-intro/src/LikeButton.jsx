import React from "react";

class LikeButton extends React.Component {
  constructor(props) {
  super() // you are not allowed to ask questions about this

    // the state of each like button component
    this.state = {
        counter: 5,
    }

    // you are not allowed to ask questions about this
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    console.log('clicking')
    // simply update the state

    // set the state to a new value and react will detect that and cal the render function again

    this.setState({
      counter: this.state.counter + 1
    })
  }

  render() {
    return (
      <div className="like-btn">
        <span>{this.state.counter}</span>
        <button onClick={this.handleClick}>like</button>
      </div>
    )
  }
}

export default LikeButton