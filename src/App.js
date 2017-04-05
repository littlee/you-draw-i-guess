import React, { Component } from 'react'
import LineWidth from './components/LineWidth'

class App extends Component {
  state = {
    width: 200,
    height: 200,
    lineWidth: 2
  }

  componentDidMount() {
    this.context = this.refs.c.getContext('2d')
    this._resetCanvas()
  }

  render() {
    return (
      <div className="app">
        <canvas
          id="c"
          ref="c"
          width={this.state.width}
          height={this.state.height}
          onTouchStart={this._touchStart}
          onTouchMove={this._touchMove}
          onTouchEnd={this._touchEnd}
          ></canvas>
        <button onClick={this._clearCanvas}>clear</button>

        <LineWidth onChange={this._changeLineWidth}/>
      </div>
    );
  }

  _resetCanvas = () => {
    this.setState({
      width: window.innerWidth * 2,
      height: window.innerWidth * 2,
    })
  }

  _clearCanvas = () => {
    if (confirm('清空画布？')) {
      this.context.clearRect(0, 0, this.refs.c.width, this.refs.c.height)
    }
  }

  _changeLineWidth = (value) => {
    this.setState({
      lineWidth: parseInt(value, 10)
    })
  }

  _getDrawPosition = (touch) => {
    return {
      x: (touch.pageX - touch.target.offsetLeft )* 2,
      y: (touch.pageY - touch.target.offsetTop )* 2
    }
  }


  _touchStart = (e) => {
    e.preventDefault()
    var p = this._getDrawPosition(e.touches[0])
    this.context.lineCap = 'round'
    this.context.lineWidth = this.state.lineWidth
    this.context.beginPath()
    this.context.moveTo(p.x - 1, p.y)
    this.context.lineTo(p.x, p.y)
    this.context.stroke()
  }

  _touchMove = (e) => {
    e.preventDefault()
    var p = this._getDrawPosition(e.touches[0])
    this.context.lineTo(p.x, p.y)
    this.context.stroke()
  }

  _touchEnd = (e) => {
    e.preventDefault()
    this.context.closePath()
  }
}

export default App;
