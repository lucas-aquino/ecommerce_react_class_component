import { Component } from 'react'
import Productos from './components/Productos'
import './App.css'

class App extends Component {

  state = {
    productos:[ 
      { nombre: 'Tomate', precio: 1200, img: '/img/productos/tomate.jpg' },
      { nombre: 'Arbejas', precio: 2500, img: '/img/productos/arbejas.jpg' },
      { nombre: 'Lechuga', precio: 500, img: '/img/productos/lechuga.jpg' }
    ]
  }
  
  render(){
    return (
      <div>
        <Productos 
          agregarAlCarro={() => console.log()}
          productos={this.state.productos}
        />
      </div>
    )
  }
}

export default App
