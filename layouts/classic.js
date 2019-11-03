import Meta from '../components/Meta/meta'
import NavbarUnconnected from '../components/Nav/nav'
import Footer from '../components/Footer/footer'
import '../styles/sass/styles.scss'
// imports meta and navigation bar components to create layout for classic pages
export default ({ children, title }) => (
  <React.Fragment>
    <Meta title={title} />
    <NavbarUnconnected />
    <main className="main">{children}</main>
    <Footer />
  </React.Fragment>
)
