import React from 'react'
import Page from '../layouts/classic'
import CarouselZenika from '../components/Index/Carousel/carousel'
import Newsfeed from '../components/Index/Newsfeed/newsfeed'
import { Button, ButtonToolbar } from 'react-bootstrap'

export default function IndexConnected () {
  return (
    <Page title="Accueil">
      <CarouselZenika /> <Newsfeed />
    </Page>
  )
}
