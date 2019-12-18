import React, { useState, Fragment } from 'react'
import loginService from '../../services/login'
import Router from 'next/router'

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
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

const LoginForm = () => {
  const [, setUser] = useLocalStorage('user', '')
  const [errorMessage, setErrorMessage] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({ email, password })
      setUser({
        token: user.token,
        promotion: user.promotion
      })
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

      <form className="login-wrapper" onSubmit={handleLogin}>
        <div className="first">
          <img src="/zenika_icon.png" className="icon" alt="User Icon" />
          <div></div>
          <label htmlFor="login">Adresse e-mail * </label>
          <input type="email" id="login" className="login-form" name="usename" placeholder="Veuillez entrer votre email" value={email} onChange={({ target }) => setEmail(target.value)} required />
          <label htmlFor="password">Mot de passe * </label>
          <input type="password" id="password" className="login-form" name="login" placeholder="Veuillez entrer votre mdp" value={password} onChange={({ target }) => setPassword(target.value)} required />
          *Champs obligatoires
          <input type="submit" id="submit-login" className="login-form" value="Log In" />
          <Notification message={errorMessage} />
        </div>
      </form>
    </Fragment>
  )
}

export default LoginForm
