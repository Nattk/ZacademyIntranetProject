import React from 'react'

const Card = (props) => (
  <section className={`card ${props.styleName}`}>
    {props.children}
  </section>
)

export default Card
