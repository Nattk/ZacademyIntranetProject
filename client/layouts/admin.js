import Meta from '../components/Meta/meta'
import AdminNav from '../components/AdminNav/adminNav'
import Footer from '../components/Footer/footer'
import '../styles/sass/styles.scss'
// imports meta and admin navigation bar components to create admin layout for admin pages
export default ({ children, title }) => (
  <React.Fragment>
    <Meta title={title} />
    <AdminNav />
    <main className="main">{children}</main>
    <Footer />
  </React.Fragment>
)
