import { Component } from "react";
import CarroItem from "./CarroItem";
import Boton from "./Boton";

class CarroDetallado extends Component {

  render() {
    const { carro, eliminarDelCarro } = this.props
    return(
      <div className="absolute z-50 right-0 mt-3 rounded-lg p-5 bg-slate-900 shadow-xl  backdrop-filter backdrop-blur-lg select-none">
        <h5 className="w-80 mb-3">Carro</h5>
        <div className="mb-5 max-h-80 overflow-y-scroll scrollbar scrollbar-thumb-rounded-full scrollbar-w-1 scrollbar-thumb-slate-600 scrollbar-track-slate-900">
          {carro.map((item) => (<CarroItem key={item.id} carroItem={item} eliminarDelCarro={eliminarDelCarro}></CarroItem>))}
        </div>
        <Boton className=''>Comprar</Boton> 
      </div>
    )
  }
}


export default CarroDetallado

