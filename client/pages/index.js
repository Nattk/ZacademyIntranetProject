import Page from '../layouts/accueil'
import LoginForm from '../components/Login/LoginForm'
import { useState } from 'react'
import Carousel from '../components/Carousel/carousel'

const Home = () => {
  const [click, setclick] = useState(false)
  const modalClick = () => {
    setclick(true)
  }

  return (
    <Page title="Accueil" moclick={modalClick} >
      <Carousel /> {click
        ? <LoginForm />
        : null}
    </Page>
  )
}

export default Home
