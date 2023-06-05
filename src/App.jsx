import { Component } from 'react'
import Productos from './components/Productos'
import Layout from './components/Layout'
import NavBar from './components/NavBar'
import './App.css'


class App extends Component {

  state = {
    productos:[],
    carro: []
  }

  componentDidMount() {
    fetch('https://fakestoreapi.com/products')
    .then((res) => res.json())
    .then((productos) => this.setState({ productos }))
  }

  agregarAlCarro = (producto) => {
    const { carro } = this.state

    if(carro.find(x => x.id === producto.id)) {
      const nuevoCarro = carro.map(nuevoProducto => nuevoProducto.id === producto.id ? 
        ({
          ...nuevoProducto, 
          cantidad: nuevoProducto.cantidad + 1
        }) : nuevoProducto)
      return this.setState({ carro: nuevoCarro })
    }

    return this.setState({
      carro: this.state.carro.concat({
        ...producto,
        cantidad: 1
      })
    })
  }
  
  render(){
    return (
      <div>
        <NavBar carro={this.state.carro}/>
        <Layout>
          <Productos 
            agregarAlCarro={this.agregarAlCarro}
            productos={this.state.productos}
          />
        </Layout>
      </div>
    )
  }
}

export default App
