import { Component } from "react";
import { XMarkIcon } from '@heroicons/react/24/solid'

class CarroItem extends Component {
  render() {
    const { carroItem, eliminarDelCarro } = this.props
    return(
      <div className="text-sm py-3 grid grid-flow-row-dense grid-cols-6 place-items-stretch hover:bg-slate-800 transition duration-150 ease-in-out">
        <div className="col-span-4 pl-3 pr-1 pt-1 truncate flex justify-center content-center">
          <span className="truncate w-full">{carroItem.title}</span>
        </div>
        <div className="flex justify-center content-center pt-1">
          <span className="">{carroItem.cantidad}</span>
        </div>
        <div className="flex justify-center content-center ">
          <button className="rounded-full transition duration-150 ease-in-out hover:bg-slate-200 text-slate-200 hover:text-slate-900 p-1" onClick={() => eliminarDelCarro(carroItem)}><XMarkIcon className="h-5 w-5"/></button>
        </div>
      </div>
    )
  }
}

export default CarroItem
