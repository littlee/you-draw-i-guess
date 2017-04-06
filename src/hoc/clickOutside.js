import React from 'react'
import ReactDOM from 'react-dom'


export default function (Component) {
  return class extends React.Component {
    componentDidMount() {
      document.body.addEventListener('click', this._clickOutSide)
    }

    render() {
      return (
        <Component ref="comp" {...this.props}/>
        )
    }

    _clickOutSide = (e) => {
      if (!ReactDOM.findDOMNode(Component).contains(e.target)) {
        console.log('gg')
      }
    }
  }
}