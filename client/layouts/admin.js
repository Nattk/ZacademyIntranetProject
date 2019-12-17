import Meta from '../components/Meta/meta'
import Footer from '../components/Footer/footer'
import { useLocalStorage } from '../components/Login/LoginForm'
import { Wrongpath } from '../components/Admin/Wrongpath'
import AdminNav from '../components/Nav/adminNav'
import '../styles/sass/styles.scss'
import userService from '../services/users'
import React, { useState, useEffect } from 'react'

export default ({ children, title, contextePage }) => {
  const [backUser, setbackUser] = useState('')
  const [user] = useLocalStorage('user', '')

  useEffect(() => {
    userService.setToken(user.token)
    userService.getAll().then(res => setbackUser(res))
  }, [])
  if (!backUser) return <Wrongpath message={'Chargement en cours...'} />
  if (backUser.role === 'admin' || backUser.role === 'superadmin') {
    return (
      <React.Fragment>
        <Meta title={`${title} Zenika Academy`} />
        <AdminNav />
        <h1 id="context-page">{contextePage}</h1>
        <main className="main">{children}</main>
        <Footer />
      </React.Fragment>
    )
  } else {
    return <Wrongpath />
  }
}
