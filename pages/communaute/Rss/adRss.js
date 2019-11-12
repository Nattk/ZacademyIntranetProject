import React from 'react'
import ReactDOM from 'react-dom'
import useForm from 'react-hook-form'

import './styles.css'

export default function AddRss () {
  const { register, errors, handleSubmit } = useForm({
    // by setting validateCriteriaMode to 'all',
    // all validation errors for single field will display at once
    validateCriteriaMode: 'all',
    mode: 'onChange'
  })
  const onSubmit = data => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="password"
        name="password"
        ref={register({ required: true, minLength: 10, pattern: /\d+/gi })}
      />
      {/* without enter data for the password input will result both messages to appear */}
      {errors.password && errors.password.types.required && (
        <p>password required</p>
      )}
      {errors.password && errors.password.types.minLength && (
        <p>password minLength 10</p>
      )}
      {errors.password && errors.password.types.pattern && (
        <p>password number only</p>
      )}

      <input type="submit" />
    </form>
  )
}
