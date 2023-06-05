import { Component } from "react";
import Boton from "./Boton";

class Producto extends Component {


  render(){

    const { producto, agregarAlCarro } = this.props
    return(
      <div className='bg-slate-800 rounded-lg flex flex-col overflow-hidden select-none shadow-md shadow-2xl border-l-indigo-500 snap-start'>
        <div className='h-80 w-full overflow-hidden'>
          <img className='object-cover h-full w-full' src={producto.image} alt={producto.title} />
        </div>
        <div className='px-5 pt-2 pb-5 flex flex-col justify-between h-full'>
          <div className=''>
            <div className='mb-6 mt-4 flex flex-col'>
              <h3 className='capitalize text-slate-200 font-medium text-xl tracking-wide'>{producto.title}</h3>
              <span className='text-lg font-semibold text-green-400 text-2xl'>${producto.price}</span>
            </div>
          </div>
          <Boton className='' onClick={() => agregarAlCarro(producto)}>Al carro</Boton>
        </div>
      </div>
    )
  }
}


export default Producto