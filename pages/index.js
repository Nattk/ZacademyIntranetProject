import React from 'react'
import Page from '../layouts/accueil'
import Carousel from '../components/Index/Carousel/carousel'
import Login from '../components/Login/login'
import { Button, ButtonToolbar } from 'react-bootstrap'

const Home = () => (
  <Page title="Accueil">
    <Carousel />
    <Login />
  </Page>
)

export default Home
