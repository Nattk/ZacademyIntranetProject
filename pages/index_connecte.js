import React from 'react'
import Page from '../layouts/classic'
import Carousel from '../components/Index/Carousel/carousel'
import Newsfeed from '../components/Index/Newsfeed/newsfeed'

export default function IndexConnected () {
  return (
    <React.Fragment>
      <Page title="Accueil">
        <Carousel /> <Newsfeed />
      </Page>
    </React.Fragment>
  )
}
