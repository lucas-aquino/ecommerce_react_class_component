import { Component } from "react";
import Producto from "./Producto";


class Productos extends Component {

  

  render(){
    const { 
      productos, 
      agregarAlCarro 
    } = this.props
    return(
      <div className='grid grid-cols-3 gap-8 p-8 w-full'>
        {productos.map(producto => <Producto 
          key={producto.id}
          agregarAlCarro={agregarAlCarro}
          producto={producto}
        />)}
      </div>
    )
  }
}


export default Productos

