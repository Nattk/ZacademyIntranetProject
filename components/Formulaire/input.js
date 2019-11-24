
import React, { Fragment } from 'react'
const Input = (props) => {
  const input = props
  return (
    <Fragment>
      <label htmlFor="firstName" className="label-style">{input.label}</label>
      <input
        type={props.type}
        name={input.name}
        required
        placeholder={input.placeholder}
        className={input.validation ? 'form-control who-to-follow-input' : 'form-control '}
        value={input.value}
        onChange={input.onChange}
      />
      <p className="validation-style"> <small>&nbsp;{input.validation}</small></p>
    </Fragment>
  )
}
export default Input
