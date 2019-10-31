import { CardDeck, Card } from 'react-bootstrap'

const ContactsUtiles = () => (
  <article id="contactutilesblock"><section>
    <br></br>
    <h1>Equipe pedagogique</h1>
    <CardDeck id="lignecontactutiles">
      <Card>
        <Card.Img variant="top" src="/firmin.jpg" alt="photo profil jeremy patonier" />
        <Card.Body>
          <Card.Title>J'ai Rémi Pas Tonier</Card.Title>
          <Card.Text>
              Role : Grand Formateur <br></br>
              Email :
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="/firmin.jpg" alt="photo profil joe nathan" />
        <Card.Body>
          <Card.Title>Joe Nathan</Card.Title>
          <Card.Text>
              Role : React overlord <br></br>
              Email :
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="/firmin.jpg" alt="photo profil nathan joe" />
        <Card.Body>
          <Card.Title>Nathan Joe</Card.Title>
          <Card.Text>
              Role : Sauveur de l'humanité <br></br>
              Email :
          </Card.Text>
        </Card.Body>
      </Card>
    </CardDeck></section><section>
    <br></br>
    <h1>Administration</h1>
    <CardDeck id="lignecontactutiles">
      <Card>
        <Card.Img variant="top" src="/firmin.jpg" alt="photo profil norbert" />
        <Card.Body>
          <Card.Title>Nord Bher</Card.Title>
          <Card.Text>
              Role : Directeur <br></br>
              Email :
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="/firmin.jpg" alt="photo profil bras droit" />
        <Card.Body>
          <Card.Title>Bras droit</Card.Title>
          <Card.Text>
              Role : Plus fort que le gauche <br></br>
              Email :
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="/firmin.jpg" alt="photo profil ratp" />
        <Card.Body>
          <Card.Title>RATP</Card.Title>
          <Card.Text>
              Role : Excuses pour retard <br></br>
              Email :
          </Card.Text>
        </Card.Body>
      </Card>
    </CardDeck></section><br></br>
  </article>
)

export default ContactsUtiles
