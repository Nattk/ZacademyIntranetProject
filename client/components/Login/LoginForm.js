import React, { useState, Fragment } from 'react'
import loginService from '../../services/login'
import Router from 'next/router'

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.log(error)
      return initialValue
    }
  })
  const setValue = value => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      console.log(error)
    }
  }
  return [storedValue, setValue]
}

const Notification = ({ message }) => {
  if (message === null) {
    return null
  }

  return (
    <div className="error">
      {message}
    </div>
  )
}

export const LoginForm = () => {
  const [, setUser] = useLocalStorage('user', '')
  const [errorMessage, setErrorMessage] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({ email, password })
      setUser(user)
      setEmail('')
      setPassword('')
      if (user.role === 'superadmin' || user.role === 'admin') {
        Router.push('/admin/Accueil/accueil')
      } else {
        Router.push('/index_connecte')
      }
    } catch (exception) {
      setErrorMessage('Les identifiants ne sont pas corrects.')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }
  return (
    <Fragment>
      <Notification message={errorMessage} />
      <form className="wrapper" onSubmit={handleLogin}>
        <section id="form-content">
          <div className="first">
            <img src="/zenika_icon.png" id="icon" alt="User Icon" />
          </div>
          <div>
            <label htmlFor="login">Email</label><br></br>
            <input type="email" id="login" className="login-form" name="usename" placeholder="email" value={email} onChange={({ target }) => setEmail(target.value)} required />
            <label htmlFor="password">Mot de passe</label>
            <input type="password" id="password" className="login-form" name="login" placeholder="mot de passe" value={password} onChange={({ target }) => setPassword(target.value)} required />
            <input type="submit" id="submit-login" className="login-form" value="Log In" />
          </div>
        </section>
      </form>
    </Fragment>
  )
}
