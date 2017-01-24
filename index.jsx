import React, {Component} from 'react'
import ReactDOM from 'react-dom'

const RESIZE_EVENTS = ['resize', 'scroll', 'touchmove']

export class Transport extends Component {

  componentDidMount () {
    this.childElement = document.createElement('div')
    this.childElement.style.position = 'fixed'
    this.childElement.style.top = 0
    this.childElement.style.left = 0
    this.updateListener = this.update.bind(this)
    document.body.appendChild(this.childElement)

    if(typeof window !== 'undefined' && typeof window.addEventListener !== 'undefined') {
      RESIZE_EVENTS.forEach(event => {
        window.addEventListener(event, this.updateListener)
      });
    }
  }

  componentDidUpdate () {
    this.update()
  }

  componentWillUnmount () {
    if(typeof window !== 'undefined' && typeof window.addEventListener !== 'undefined') {
      RESIZE_EVENTS.forEach(event => {
        window.removeEventListener(event, this.updateListener)
      })
    }
    document.body.removeChild(this.childElement)
  }

  update () {
    const {container} = this.refs
    const rect = container.getBoundingClientRect()
    this.childElement.style.width = `${rect.width}px`
    console.log(rect)
    this.childElement.style.transform = `translateY(${rect.top}px) translateX(${rect.left})`
    ReactDOM.render(<div {...this.props}></div>, this.childElement)
  }

  render () {
    const {children} = this.props
    const style = {position: 'relative', width: '100%', height: '100%', visibility: 'hidden'}
    return <div ref='container' style={style}>{children}</div>
  }
}
