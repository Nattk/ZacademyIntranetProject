import Meta from '../components/Meta/meta'
import SuperNav from '../components/SuperNav/supernav'
import Footer from '../components/Footer/footer'
import '../styles/sass/styles.scss'

export default ({ children, title, contextePage }) => (
  <React.Fragment>
    <Meta title={title} />
    <SuperNav />
    <h1 id="context-page">{contextePage}</h1>
    <main className="main">{children}</main>
    <Footer />
  </React.Fragment>
)
