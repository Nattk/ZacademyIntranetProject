import Meta from '../components/Meta/meta'
import Footer from '../components/Footer/footer'
import { useLocalStorage } from '../components/Login/LoginForm'
import '../styles/sass/styles.scss'
import LoginNav from '../components/Nav/loginNav'
import Nav from '../components/Nav/nav'

export default ({ children, title, moclick }) => {
  const [user] = useLocalStorage('user', '')

  return (
    <React.Fragment>
      <Meta title={`${title} Zenika Academy`} />
      {user.role
        ? <Nav />
        : <LoginNav moclick={moclick} />}
      <main className="main">{children}</main>
      <Footer />
    </React.Fragment>
  )
}
