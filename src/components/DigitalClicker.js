import React, { Component } from 'react'

export default class DigitalClicker extends Component {

  constructor() {
    super();
    this.state = {
      timesClicked: 0
    }
  }

  increment = () => {
    let num = this.state.timesClicked + 1
    this.setState({
      timesClicked: num
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.increment}>{this.state.timesClicked}</button>
      </div>
    );
  }
}
