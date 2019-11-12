
import React, { Component } from 'react'
import Page from '../../../layouts/classic'
import Button from '../../../components/Boutons/Boutons'
import Alert from '../../../components/Modal/alert'
import RssCard from '../../../components/rss/rssCard'
import '../../../styles/sass/styles.scss'
import AddRss from './adRss'

class Rss extends Component {
  state = {
    fluxs: [
      { imgRss: 'https://miro.medium.com/max/2968/1*u3DHI-FgD_VZhL073T_bVg.jpeg', titre: 'How Data Creates a Collective Storytelling Voice on a Global Issue', description: ' A short reflection on how an animated bar chart on student immigration in Australia sparked off an enriching discussion', link: "https://towardsdatascience.com/how-data-sparks-a-global-discussion-on-a-global-issue-f66f43e330d5", id: 1 },
      {
        imgRss: 'https://miro.medium.com/max/12000/1*OTjOW6xkXCNJ1WmZMWcSlQ.jpeg', titre: 'How To Fake Being a Good Programmer', description: ` Programmers are wizards— poor, ragged characters turning coffee into code. I don’t know magic, I‘m merely an illusionist. My job is to be more authentic in being a fake programmer than real programmers are in being themselves.
      I’m great what I do, an absolute beast of a charlatan. I’ve tricked businessmen into asking me to be their…
      `, link: "https://facebook.github.io/react-native/", id: 2
      },
      {
        imgRss: 'https://miro.medium.com/max/10368/0*spWyBwNlrLhUc3Ie', titre: 'Stop Using i++ in Your Loops', description: ` If you’ve written a for-loop before, then you have almost definitely used i++ before to increment your loop variable.However, have you ever thought about why you choose to do it like that?
      Clearly, the end result of i++ is that i is one higher than it was before — which is what we want.But, there are many ways to accomplish this, such as ++i, i++, and even i = i + 1.`, link: "https://medium.com/", id: 3
      },
      { imgRss: 'https://miro.medium.com/max/980/1*AfhfnLpsi9TdYF-kax8vcw.png', titre: 'Secure a Spring Boot REST API with JSON Web Token', description: ' In this piece, I am going to walk you through how to secure a Spring Boot REST API with JSON Web Token (JWT) to exchange claims between a server and a client. This is Part two of a collaborative effort between my colleague Julia Passynkova and myself demonstrating how to secure an Angular 2+ application using Spring', link: "https://medium.com/better-programming/secure-a-spring-boot-rest-api-with-json-web-token-reference-to-angular-integration-e57a25806c50", id: 4 },
      { imgRss: 'https://www.icsi-eu.org/photos/masteres/264/13/linkedin.jpg', titre: 'sciosjpnsso', description: ' Apprenez en plus sur Javascript !', link: "https://facebook.github.io/react-native/", id: 5 },
      { imgRss: 'https://www.icsi-eu.org/photos/masteres/264/13/linkedin.jpg', titre: 'sciosjpnsso', description: ' Apprenez en plus sur Javascript !', link: "https://medium.com/", id: 6 }

    ],
    titre: '',
    link: '',
    showAdd: false,
    show: false
  }

  handleModal = (id) => {
    this.setState({ show: true })
    for (var i = 0; i < this.state.fluxs.length; i++) {
      if (this.state.fluxs[i].id == id) {
        this.state.fluxs.splice(i, 1);
        break;
      }
    }
  }

  handleModalAdd = () => {
    this.setState({ showAdd: true })
  }
  addRss = (event) => {
    this.setState({
      titre: console.log(event.target.titre),
      imgRss: 'https://www.icsi-eu.org/photos/masteres/264/13/linkedin.jpg',
      description: ' Apprenez en plus React et node !',
      link: this.state.link,
      Id: 7
    }),

      console.log(this.state.titre)
    this.setState({ showAdd: false, titre: event.target.titre })
    event.preventDefault()
  }

  handleDelete = (id) => {

    for (var i = 0; i < this.state.fluxs.length; i++) {
      if (this.state.fluxs[i].id == id) {
        this.state.fluxs.splice(i, 1);
        break;
      }
    }



    this.setState({})


    event.preventDefault()
  }

  handleClose = () => {
    this.setState({ show: false, showAdd: false })
  }



  render() {

    return (
      <Page title=" RSS" contextePage=" RSS" >

        <article className="container-article">

          <Button btnType="annuler" clicked={this.handleModalAdd} title="ajout-" className="link-button-creation" style={{ margin: '2rem' }} >
            Ajouter un flux
							</Button>
          {this.state.showAdd ? (
            <Alert
              show={this.state.showAdd}
              handleClose={this.handleClose}
              handleConfirmForm={this.addRss}
              headerTitle="Ajout "
              input

              modalHeader={true}
              modalBody={true}
              modalFooterRedirection={true}
            />
          ) : null}
          <section className=" col-md-10 col-sm-12 col-xs-12 text-center container-rssCard" >

            {this.state.fluxs.map((flux, id) => (

              <RssCard
                className="  card-rss  col-md-3 col-sm-12 col-xs-12 "
                key={id}

                titre={flux.titre}
                imgRss={flux.imgRss}
                description={flux.description.substring(0, 70) + '...'}
                link={flux.link}
                remove={<div onClick={() => this.handleDelete(flux.id)} className="edit" style={{ textAlign: 'right', cursor: 'pointer' }}><i class="far fa-trash-alt" title="supprimer ce flux "></i>

                </div>
                }

              />
            ))}
            <AddRss />

          </section>

        </article>


      </Page>
    )
  }
}
export default Rss
