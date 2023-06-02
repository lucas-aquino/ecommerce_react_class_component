import { Component } from 'react'
import Productos from './components/Productos'
import Layout from './components/Layout'
import NavBar from './components/NavBar'
import './App.css'


class App extends Component {

  state = {
    productos:[]
  }

  componentDidMount() {
    fetch('https://fakestoreapi.com/products')
    .then((res) => res.json())
    .then((productos) => this.setState({ productos }))
  }
  
  render(){
    return (
      <div>
        <NavBar />
        <Layout>
          <Productos 
            agregarAlCarro={() => console.log()}
            productos={this.state.productos}
          />
        </Layout>
      </div>
    )
  }
}

export default App
