import './clear.css'
import React from 'react'

class Clear extends React.Component {
  render() {
    return (
      <div className="clear">
        <button type="button" className="clear-btn" onClick={this._clear}>
          清空
        </button>
      </div>
      )
  }

  _clear = () => {
    this.props.onClear && this.props.onClear()
  }
}

export default Clear