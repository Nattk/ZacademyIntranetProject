import Meta from '../components/Meta/meta'
import Footer from '../components/Footer/footer'
import '../styles/sass/styles.scss'

export default ({ children, title }) => (
  <React.Fragment>
    <Meta title={title} />
    <main className="main">{children}</main>
    <Footer />
  </React.Fragment>
)
