import React from 'react'
import Page from '../layouts/accueil'
import CarouselZenika from '../components/Index/Carousel/carousel'
import Login from '../components/Login/login'
<<<<<<< HEAD

const Home = () => (
  <Page title="Accueil">
    <CarouselZenika />
    <Login />
  </Page>
=======
import {Button, ButtonToolbar} from 'react-bootstrap'

const Home = () => (
  <React.Fragment>
    <Page title="Accueil">
      <Carousel />
      <Login />
    </Page>
  </React.Fragment>
>>>>>>> parent of 340de33... navbar
)

export default Home
