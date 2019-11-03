import React from 'react'

import './Boutons.scss'

// btnType = ajout des classes necessaires/classes a mettre dans bouton.scss
// cliked = envera enventuellement les props du bouton au component parent

const Button = (props) => {
  return (
    <button type={props.submit ? 'submit' : 'button'} title={props.title} className={`btn ${props.btnType}`} onClick={props.clicked}>
      {props.children}
    </button>
  )
}
export default Button
