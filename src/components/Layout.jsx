import { Component } from "react";




class Layout extends Component {

  render() {
    const { children } = this.props
    return(
      <div className='flex justify-center'>
        <section className='w-7/12 container'>
          {children}
        </section>
      </div>
    )
  }
}

export default Layout





