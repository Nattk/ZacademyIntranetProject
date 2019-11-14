import { useState } from 'react'
import Nav from '../Nav/nav'
import AdminNav from '../AdminNav/adminNav'
import usersService from '../../services/users'

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
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useLocalStorage('role', '')
  const [errorMessage, setErrorMessage] = useState(null)

  const handleLogin = async (event) => {
    event.preventDefault()
    const users = await usersService.getAll()
    const user = users.find(n => n.mail === email && n.password === password)
    try {
      setRole(user.role)
      setEmail('')
      setPassword('')
    } catch (e) {
      setErrorMessage('MAUVAIS LOGIN HAHAHAHAHA')
    }
  }

  const offlineClick = () => {
    setRole('')
  }

  if (!role) {
    return (

      <form className="wrapper" onSubmit={handleLogin}>
        <Notification message={errorMessage} />
        <div id="form-content">
          <div className="first">
            <img src="/zenika_icon.png" id="icon" alt="User Icon" />
          </div>
          <form>
            <label for="login">Email</label><br></br>
            <input type="email" id="login" className="login-form" name="usename" placeholder="email" value={email} onChange={({ target }) => setEmail(target.value)} required />
            <label for="password">Mot de passe</label>
            <input type="password" id="password" className="login-form" name="login" placeholder="mot de passe" value={password} onChange={({ target }) => setPassword(target.value)} required />
            <input type="submit" id="submit-login" className="login-form" value="Log In" />
          </form>

        </div>
      </form>
    )
  } else if (role === 'eleve') {
    return <Nav offline={offlineClick} />
  } else {
    return <AdminNav offline={offlineClick} />
  }
}

export default SuperNav
