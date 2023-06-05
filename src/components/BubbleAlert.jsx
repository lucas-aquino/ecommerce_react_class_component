import { Component } from "react";



class BubbleAlert extends Component {

  getNumber(n) {
    if (!n) return ' '
    return n > 9 ? '+9' : n
  }

  render () {
    const { children } = this.props

    const styles = [
      'absolute',
      '-top-0',
      '-right-0', 
      'bg-red-500', 
      'text-white', 
      'text-xs', 
      'font-bold', 
      'px-1', 
      'py-0', 
      'rounded-full', 
      'outline', 
      'outline-slate-900', 
      'outline-4',
    ]

    return (
      <div className={styles.join(' ')}>
        {this.getNumber(children)}
      </div>
    )
  }
}

export default BubbleAlert
