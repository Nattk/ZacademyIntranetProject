import Meta from '../components/Meta/meta'
import Footer from '../components/Footer/footer'
import '../styles/sass/styles.scss'
import LoginNav from '../components/Nav/loginNav'

export default ({ children, title, moclick }) => (
  <React.Fragment>
    <Meta title={title} />
    <LoginNav moclick={moclick} />
    <main className="main">{children}</main>
    <Footer />
  </React.Fragment>
)
