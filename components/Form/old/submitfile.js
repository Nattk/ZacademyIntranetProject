import React from 'react'

const submitFile = (props) => (
  <section class={props.sectionfileclass}>
    <label for={props.labelforsubmitfile}>{props.submitfiletext}</label>
    <input type="file" class="form-control-file" id={props.idforsubmitfile}></input>
  </section>
)

export default submitFile
