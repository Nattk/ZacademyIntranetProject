import React from 'react'

import './Boutons.scss'

// btnType = ajout des classes necessaires/classes a mettre dans bouton.scss
// cliked = envera enventuellement les props du bouton au component parent

const Button = (props) => (
  <React.Fragment>
    <button type="button" className={`btn ${props.btnType}`} onClick={props.clicked}>
      {props.children}
    </button>
  </React.Fragment>
)
export default Button
