import { Component } from "react";



class Boton extends Component {

  render(){
    const { children, className } = this.props
    const styles = [
      'bg-cyan-500', 
      'w-full',
      'shadow-lg',
      'uppercase', 
      'font-bold', 
      'py-2', 
      'hover:shadow-cyan-500/50', 
      'rounded-lg', 
      'transition', 
      'duration-150', 
      'ease-in-out', 
      'text-slate-300',
      'active:scale-x-105',
      'tracking-wide',
      ...className?.split(' ')
    ]
    
    return(
      <button className={styles.join(' ')}>{children}</button>
    )
  }
}


export default Boton