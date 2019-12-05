import Meta from '../components/Meta/meta'
import Footer from '../components/Footer/footer'
import { useLocalStorage } from '../components/Login/LoginForm'
import { Wrongpath } from '../components/Admin/Wrongpath'
import AdminNav from '../components/Nav/adminNav'
import '../styles/sass/styles.scss'

export default ({ children, title, contextePage }) => {
  const [user] = useLocalStorage('user', '')
  if (user.role === 'admin' || user.role === 'superadmin') {
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
