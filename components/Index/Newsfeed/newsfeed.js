import React from 'react'
import Link from 'next/link'
import { Card, Button } from 'react-bootstrap'

const Newsfeed = () => (

  <Card id="newsfeed_accueil">
    <Card.Header>Dernières actualités</Card.Header>
    <Card.Body id="cartenewsaccueil">
      <Card.Title>Ajout flux RSS par Jérémie Patonnier</Card.Title>
      <Card.Text>
        With supporting text below as a natural lead-in to additional content.
      </Card.Text>
      <Button variant="primary" aria-label="lien vers ressource">Lien ressource</Button>
    </Card.Body>
    <Card.Body id="cartenewsaccueil">
      <Card.Title>BBL par Norbert</Card.Title>
      <Card.Text>
        With supporting text below as a natural lead-in to additional content.
      </Card.Text>
      <Button variant="primary" aria-label="lien vers ressource">Lien ressource</Button>
    </Card.Body>
    <Card.Body id="cartenewsaccueil">
      <Card.Title>Support cours par Cédric Rup</Card.Title>
      <Card.Text>
        With supporting text below as a natural lead-in to additional content.
      </Card.Text>
      <Button variant="primary" aria-label="lien vers ressource">Lien ressource</Button>
    </Card.Body>
  </Card>
)

export default Newsfeed