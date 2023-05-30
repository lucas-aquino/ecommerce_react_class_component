import { Component } from "react";
import Producto from "./Producto";



class Productos extends Component {

  

  render(){
    const { 
      productos, 
      agregarAlCarro 
    } = this.props
    return(
      <section className='grid grid-cols-4 gap-8 container p-8'>
        {productos.map(producto => <Producto 
          key={producto.nombre}
          agregarAlCarro={agregarAlCarro}
          producto={producto}
        />)}
      </section>
    )
  }
}


export default Productos

