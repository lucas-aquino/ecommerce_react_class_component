import { Component } from "react";

class CarroItem extends Component {
  render() {
    const { carroItem } = this.props
    return(
      <div>
        <p>{carroItem.title}</p>
        <span>{carroItem.cantidad}</span>
        <button>x</button>
      </div>
    )
  }
}

export default CarroItem
