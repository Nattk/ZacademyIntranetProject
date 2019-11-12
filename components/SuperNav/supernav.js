import { useState, useEffect } from 'react'
import Nav from '../Nav/nav'
import AdminNav from '../AdminNav/adminNav'
import Login from '../../components/Login/login'

const SuperNav = () => {
  const [isAdmin, SetAdmin] = useLocalStorage('isAdmin', false)
  const [isConnected, SetConnected] = useLocalStorage('isConnected', false)

  const handleAdminON = () => {
    SetAdmin(true)
  }

  const handleAdminOFF = () => {
    SetAdmin(false)
  }

  const handleOffline = () => {
    SetConnected(false)
    SetAdmin(false)
  }

  const handleOnline = () => {
    SetConnected(true)
    SetAdmin(false)
  }

  const handleboth = () => {
    SetConnected(true)
    SetAdmin(true)
  }

  if (!isConnected) {
    return <Login online={handleOnline} both={handleboth}/>
  }
  if (isAdmin) {
    return <AdminNav adminClick={handleAdminOFF} offline={handleOffline} />
  } else {
    return <Nav adminClick={handleAdminON} offline={handleOffline}/>
  }
}

function useLocalStorage (key, initialValue) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key)
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      // If error also return initialValue
      console.log(error)
      return initialValue
    }
  })

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = value => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
          value instanceof Function ? value(storedValue) : value
      // Save state
      setStoredValue(valueToStore)
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error)
    }
  }

  return [storedValue, setValue]
}

export default SuperNav
