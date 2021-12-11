// Code CoordinatesButton Component Here
import React, {Component} from "react";

export default class CoordinatesButton extends Component {
  handleClick(event) {
    let coords = [event.clientX, event.clientY];
    this.props.onReceiveCoordinates(coords);
  }

  render() {
    return(
      <div>
        <button onClick={this.handleClick.bind(this)}/>
      </div>
    )
  }
}