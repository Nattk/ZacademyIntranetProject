import React from 'react'
import './Boutons.scss'

const Button = (props) => {
  return (
    <button type={props.submit ? 'submit' : 'button'} title={props.title} className={`btn ${props.btnType}`} onClick={props.clicked} id={props.id}>
      {props.children}
    </button>
  )
}
export default Button
