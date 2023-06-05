import { Component } from "react";
import Carro from "./Carro";



class NavBar extends Component {



  render() {

    const { carro } = this.props

    const navbarLinks = [
      {text: 'Inicio', href: '#'}
    ]

    return(
      <nav className="bg-slate-900 sticky top-0 backdrop-filter backdrop-blur-lg bg-opacity-70 z-50 shadow-xl select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 cursor-default">
                <span className="text-white">Lucas - shop</span>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {navbarLinks.map((link, i) => (<a key={i} href={link.href} className="text-gray-300 hover:text-cyan-500 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out">
                      {link.text}
                  </a>))}
                </div>
              </div>
            </div>
            {/* Aquí puedes agregar elementos adicionales en el lado derecho del Navbar */}
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                {/* Aquí puedes agregar botones, elementos de usuario, etc. */}
                <Carro carro={carro} />
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default NavBar
