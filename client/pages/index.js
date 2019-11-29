import Page from '../layouts/accueil'
import { LoginForm } from '../components/Login/LoginForm'

const Home = () => {
  const offlineClick = () => {
    setUser('')
  }
  return (
    <Page title="Accueil">
      <LoginForm />
    </Page>
  )
}

export default Home
