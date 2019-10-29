import React from 'react'
import Page from '../layouts/accueil'
import Carousel from '../components/Index/Carousel/carousel'
import Login from '../components/Login/login'
import NavbarB from '../components/Nav/Navbar'
import {Button, ButtonToolbar} from 'react-bootstrap'

const Home = () => (
  <React.Fragment>
    <NavbarB></NavbarB>
    <Page title="Accueil">
      <Carousel />
      <Login />
    </Page>
  </React.Fragment>
)

export default Home
