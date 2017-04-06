import './stroke-style.css'
import React from 'react'

class StrokeStyle extends React.Component {
  state = {
    color: '#000',
    show: false
  }

  render() {
    return (<div className="stroke-style">
      <div className="stroke-style-selected" onClick={this._toggleMenu}>
        <span className="stroke-style-current" style={{
          background: this.state.color
        }}></span>
      </div>
      {
        this.state.show ?
        <div className="stroke-style-options">
          <div className="stroke-style-option" onClick={this._change.bind(this, '#fff')}>
            <span style={{background: '#fff'}}></span>
          </div>
          <div className="stroke-style-option" onClick={this._change.bind(this, '#000')}>
            <span style={{background: '#000'}}></span>
          </div>
          <div className="stroke-style-option" onClick={this._change.bind(this, '#ff0000')}>
            <span style={{background: '#ff0000'}}></span>
          </div>
          <div className="stroke-style-option" onClick={this._change.bind(this, '#00ff00')}>
            <span style={{background: '#00ff00'}}></span>
          </div>
          <div className="stroke-style-option" onClick={this._change.bind(this, '#0000ff')}>
            <span style={{background: '#0000ff'}}></span>
          </div>
          <div className="stroke-style-option" onClick={this._change.bind(this, '#ffff00')}>
            <span style={{background: '#ffff00'}}></span>
          </div>
          <div className="stroke-style-option" onClick={this._change.bind(this, '#00ffff')}>
            <span style={{background: '#00ffff'}}></span>
          </div>
          <div className="stroke-style-option" onClick={this._change.bind(this, '#ff00ff')}>
            <span style={{background: '#ff00ff'}}></span>
          </div>
        </div> : null
      }
    </div>)
  }

  _toggleMenu = () => {
    this.setState({
      show: !this.state.show
    })
  }

  _change = (value) => {
    this.setState({
      show: false,
      color: value
    })
    this.props.onChange && this.props.onChange(value)
  }
}

export default StrokeStyle