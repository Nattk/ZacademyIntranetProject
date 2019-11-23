
import React, { Fragment } from 'react'
const Upload = (props) => {
  return (

    <Fragment>
      <label htmlFor="description" className="label-style" >{props.label}</label>
      <div className="custom-file">
        <input type="file" className="custom-file-input" id={props.id} />
        <label className="custom-file-label" htmlFor={props.id} aria-describedby="inputGroupFileAddon02">{props.description}</label>
      </div>
      <p className="validation-style"><small>&nbsp;{props.validation}</small></p>
    </Fragment>
  )
}

export default Upload
