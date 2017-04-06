import React from 'react'
import './line-width.css'
import clickOutside from '../hoc/clickOutside'

class LineWidth extends React.Component {
  state = {
    width: 2,
    show: false
  }

  render() {
    return (<div className="line-width">
      <div className="line-width-selected" onClick={this._toggleMenu}>
        <span className="line-width-current" style={{
          width: this.state.width,
          height: this.state.width
        }}></span>
      </div>
      {
        this.state.show ?
        <div className="line-width-options">
          <div className="line-width-option" onClick={this._change.bind(this, 2)}>
            <span style={{ width: 2, height: 2}}></span>
          </div>
          <div className="line-width-option" onClick={this._change.bind(this, 5)}>
            <span style={{ width: 5, height: 5}}></span>
          </div>
          <div className="line-width-option" onClick={this._change.bind(this, 10)}>
            <span style={{ width: 10, height: 10}}></span>
          </div>
          <div className="line-width-option" onClick={this._change.bind(this, 15)}>
            <span style={{ width: 15, height: 15}}></span>
          </div>
          <div className="line-width-option" onClick={this._change.bind(this, 20)}>
            <span style={{ width: 20, height: 20}}></span>
          </div>
        </div> : null
      }
    </div>)
  }

  _toggleMenu = (e) => {
    e.stopPropagation()
    this.setState({
      show: !this.state.show
    })
  }

  _change = (value, e) => {
    e.stopPropagation()
    this.setState({
      show: false,
      width: value
    })
    this.props.onChange && this.props.onChange(value)
  }
}

export default LineWidth