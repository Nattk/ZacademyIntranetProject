import React from 'react'
import Page from '../layouts/classic'
import Carousel from '../components/Index/Carousel/carousel'
import Newsfeed from '../components/Index/Newsfeed/newsfeed'

export default function IndexConnected () {
  return (
    <Page title="Accueil">
      <Carousel /> <Newsfeed />
    </Page>
  )
}
