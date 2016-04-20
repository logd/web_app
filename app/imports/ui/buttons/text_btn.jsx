import React from 'react'

export const TextBtn = (props) =>
  <button 
    className="btn"
    label={props.label}
    alt={props.label}
    onClick={props.handleClick}
  >
    {props.label} 
  </button>

TextBtn.propTypes = {
  handleClick:   React.PropTypes.func,
  label:         React.PropTypes.string.isRequired
}
