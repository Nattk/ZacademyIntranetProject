import React from 'react'

// Stylename = ajout de class dynamique

const Card = (props) => (
  <React.Fragment>
    <section className={`card ${props.styleName}`}>
      {props.children}
    </section>
  </React.Fragment>
)

export default Card
