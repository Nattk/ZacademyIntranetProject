import React from 'react'

export const Wrongpath = (props) => {
  if (props) {
    return (
      <h1 className="wrong-path">{props.message}</h1>
    )
  }
  return (
    <h1 className="wrong-path">Vous n'avez pas les droits nécessaires pour visualiser cette page.</h1>
  )
}
