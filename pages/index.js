import React from 'react'
import Page from '../layouts/accueil'
import Carousel from '../components/Index/Carousel/carousel'
import Login from '../components/Login/login'

const Home = () => (
  <React.Fragment>
    <Page title="Accueil">
      <Carousel />
      <Login />
    </Page>
  </React.Fragment>
)

export default Home
