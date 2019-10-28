import React from 'react'

const Input = (props) => (
  <div class="form-group">
    <label for={props.labelforinputfile}>{props.inputtitle}</label>
    <input type={props.inputtype} class={props.inputclass} id={props.idforinput} placeholder={props.inputplaceholder}></input>
  </div>
)

export default Input
