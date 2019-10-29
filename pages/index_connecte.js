import React from 'react'
import Page from '../layouts/classic'
import Carousel from '../components/Index/Carousel/carousel'
import Newsfeed from '../components/Index/Newsfeed/newsfeed'
import {Button, ButtonToolbar} from 'react-bootstrap'

export default function IndexConnected() {
  return (
    <React.Fragment>
      <Page title="Accueil">
        <Carousel /> <Newsfeed />
      </Page>
    </React.Fragment>
  )
}
