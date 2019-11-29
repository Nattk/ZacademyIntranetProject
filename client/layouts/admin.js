import Meta from '../components/Meta/meta'
import SuperNav, { useLocalStorage } from '../components/SuperNav/supernav'
import Footer from '../components/Footer/footer'
import '../styles/sass/styles.scss'
import { Wrongpath } from '../components/Admin/Wrongpath'

export default ({ children, title, contextePage }) => {
  const [user] = useLocalStorage('user', '')
  if (user.role === 'admin' || user.role === 'superadmin') {
    return (
      <React.Fragment>
        <Meta title={title} />
        <SuperNav />
        <h1 id="context-page">{contextePage}</h1>
        <main className="main">{children}</main>
        <Footer />
      </React.Fragment>
    )
  } else {
    return <Wrongpath />
  }
}
