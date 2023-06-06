import { Component } from "react";




class Layout extends Component {

  render() {
    const { children } = this.props
    return(
      <div className='self-center w-7/12 h-full overflow-y-scroll scrollbar scrollbar-thumb-rounded-full scrollbar-w-1 scrollbar-thumb-slate-600 scrollbar-track-slate-900'>
        {children}
      </div>
    )
  }
}

export default Layout





