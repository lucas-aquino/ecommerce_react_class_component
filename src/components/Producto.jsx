import { Component } from "react";
import Boton from "./Boton";

class Producto extends Component {

  render(){

    const { producto } = this.props
    return(
      <div className='bg-slate-800 rounded-lg flex flex-col overflow-hidden select-none shadow-md shadow-2xl'>
        <img className='w-full object-contain' src={producto.img} alt={producto.nombre} />
        <div className='px-5 pt-2 pb-5 flex flex-col justify-between'>
          <h3 className='capitalize text-slate-200 font-medium text-xl tracking-wide mb-2'>{producto.nombre}</h3>
          <Boton>comprar</Boton>
        </div>
      </div>
    )
  }
}


export default Producto