
import React, { Fragment } from 'react'
const TextArea = (props) => {
  return (

    <Fragment>
      <label htmlFor="description" className="label-style" >{props.label}</label>
      <textarea
        type="text"
        name="content"
        required
        cols="40"
        rows={props.rows}
        placeholder={props.placeholder}
        className={props.validation ? 'form-control who-to-follow-input' : 'form-control'}
        value={props.content}
        onChange={props.onChange}
      />
      <p className="validation-style"><small >&nbsp;{props.validation}</small></p>
    </Fragment>
  )
}

export default TextArea
