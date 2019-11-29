import Meta from '../components/Meta/meta'
import Nav from '../components/Nav/nav'
import Footer from '../components/Footer/footer'
import { useLocalStorage } from '../components/Login/LoginForm'
import '../styles/sass/styles.scss'
import { Wrongpath } from '../components/Admin/Wrongpath'

export default ({ children, title, contextePage }) => {
  const [user] = useLocalStorage('user', '')
  if (user.role) {
    return (
      <React.Fragment>
        <Meta title={title} />
        <Nav />
        <h1 id="context-page">{contextePage}</h1>
        <main className="main">{children}</main>
        <Footer />
      </React.Fragment>
    )
  } else {
    return <Wrongpath />
  }
}
