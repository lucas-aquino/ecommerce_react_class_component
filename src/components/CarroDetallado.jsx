import { Component } from "react";
import CarroItem from "./CarroItem";

class CarroDetallado extends Component {

  render() {
    const { carro } = this.props
    return(
      <div className="absolute rounded p-4 backdrop-filter backdrop-blur-lg bg-opacity-70 bg-white">
        {carro.map((item) => (<CarroItem key={item.id} carroItem={item}></CarroItem>))}
      </div>
    )
  }
}


export default CarroDetallado