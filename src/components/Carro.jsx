/* eslint-disable react/prop-types */
import { Component } from "react";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import BubbleAlert from "./BubbleAlert";
import CarroDetallado from "./CarroDetallado";

class Carro extends Component {

  state = {
    showCarro: false
  }

  render () {
    const { carro, eliminarDelCarro } = this.props
    const cantidadProductos = carro.reduce((acc, el) => acc + el.cantidad, 0)
    return (
      <div className="relative text-gray-300">
        <div onClick={() => this.setState({ showCarro: !this.state.showCarro })} className="relative py-2 px-2 rounded-full cursor-pointer overflow-visible">
          <ShoppingBagIcon className="h-6 w-6 text-slate-200 bg-transparent hover:text-cyan-500 rounded-md text-sm font-medium transition duration-150 ease-in-out"/>
          {(cantidadProductos > 0 ) && <BubbleAlert>{ cantidadProductos }</BubbleAlert>}
        </div>
        {this.state.showCarro && <CarroDetallado carro={carro} eliminarDelCarro={eliminarDelCarro}></CarroDetallado>}
      </div>
    )
  }
}

export default Carro
