import { useState } from 'react'
import Router from 'next/router'
import Nav from '../Nav/nav'
import AdminNav from '../AdminNav/adminNav'
import loginService from '../../services/login'

const useLocalStorage = (key, initialValue) => {
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

const SuperNav = () => {
  const [user, setUser] = useLocalStorage('user', '')
  const [errorMessage, setErrorMessage] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({ email, password })
      console.log('user', user)
      setUser(user)
      setEmail('')
      setPassword('')
      if (user.role === 'superadmin' || user.role === 'admin') {
        Router.push('/admin/Accueil/accueil')
      }
    } catch (exception) {
      setErrorMessage('Les identifiants ne sont pas corrects.')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  const offlineClick = () => {
    setUser('')
  }

  if (!user.role) {
    return (

      <form className="wrapper" onSubmit={handleLogin}>
        <Notification message={errorMessage} />
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
    )
  } else if (user.role === 'eleve') {
    return <Nav offline={offlineClick} />
  } else {
    return <AdminNav offline={offlineClick} />
  }
}

export default SuperNav
