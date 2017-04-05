import React from 'react'
import './line-width.css'

class LineWidth extends React.Component {
  render() {
    return (<div className="line-width">
      <label className="line-width-item">
        <input type="radio" name="lineWidth" onChange={this._onChange} value="1" defaultChecked/>1
      </label>
      <label className="line-width-item">
        <input type="radio" name="lineWidth" onChange={this._onChange} value="5" />5
      </label>
      <label className="line-width-item">
        <input type="radio" name="lineWidth" onChange={this._onChange} value="10"/>10
      </label>
      <label className="line-width-item">
        <input type="radio" name="lineWidth" onChange={this._onChange} value="15"/>15
      </label>
      <label className="line-width-item">
        <input type="radio" name="lineWidth" onChange={this._onChange} value="20"/>20
      </label>
    </div>)
  }

  _onChange = (e) => {
    this.props.onChange && this.props.onChange(e.target.value)
  }
}

export default LineWidth