import React from 'react'

export const Wrongpath = (props) => {
  if (props) {
    return (
      <h1 className="wrong-path">{props.message ? props.message : "Vous n'avez pas les droits nécessaires pour visualiser cette page."}</h1>
    )
  }
}
