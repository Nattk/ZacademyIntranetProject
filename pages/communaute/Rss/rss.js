
import React, { Component } from 'react'
import Page from '../../../layouts/classic'
import Button from '../../../components/Boutons/Boutons'
import ModalAddRss from '../../../components/rss/addRssModal'
import RssCard from '../../../components/rss/rssCard'
import ModalDeleteRss from '../../../components/rss/deleteRssModal'
import '../../../styles/sass/styles.scss'

class Rss extends Component {
  constructor (props) {
    super(props)
    this.state = {

      fluxs: [
        { imgRss: 'https://miro.medium.com/max/2968/1*u3DHI-FgD_VZhL073T_bVg.jpeg', titre: 'How Data Creates a Collective Storytelling Voice', description: ' A short reflection on how an animated bar chart on student immigration in Australia sparked off an enriching discussion', link: 'https://towardsdatascience.com/how-data-sparks-a-global-discussion-on-a-global-issue-f66f43e330d5', id: 1 },
        {
          titre: 'How To Fake Being a Good Programmer',
          description: ` Programmers are wizards— poor, ragged characters turning coffee into code. I don’t know magic, I‘m merely an illusionist. My job is to be more authentic in being a fake programmer than real programmers are in being themselves.
        I’m great what I do, an absolute beast of a charlatan. I’ve tricked businessmen into asking me to be their…
        `,
          link: 'https://facebook.github.io/react-native/',
          id: 2
        },
        {
          titre: 'Stop Using i++ in Your Loops',
          description: ` If you’ve written a for-loop before, then you have almost definitely used i++ before to increment your loop variable.However, have you ever thought about why you choose to do it like that?
        Clearly, the end result of i++ is that i is one higher than it was before — which is what we want.But, there are many ways to accomplish this, such as ++i, i++, and even i = i + 1.`,
          link: 'https://medium.com/',
          id: 3
        },
        { imgRss: 'https://miro.medium.com/max/980/1*AfhfnLpsi9TdYF-kax8vcw.png', titre: 'Secure a Spring Boot REST API with JSON Web Token', description: ' In this piece, I am going to walk you through how to secure a Spring Boot REST API with JSON Web Token (JWT) to exchange claims between a server and a client. This is Part two of a collaborative effort between my colleague Julia Passynkova and myself demonstrating how to secure an Angular 2+ application using Spring', link: 'https://medium.com/better-programming/secure-a-spring-boot-rest-api-with-json-web-token-reference-to-angular-integration-e57a25806c50', id: 4 },
        { imgRss: 'https://www.icsi-eu.org/photos/masteres/264/13/linkedin.jpg', titre: 'sciosjpnsso', description: ' Apprenez en plus sur Javascript !', link: 'https://facebook.github.io/react-native/', id: 5 },
        { imgRss: 'https://www.icsi-eu.org/photos/masteres/264/13/linkedin.jpg', titre: 'sciosjpnsso', description: ' Apprenez en plus sur Javascript !', link: 'https://medium.com/', id: 6 }

      ],
      id: '',
      titre: '',
      description: '',
      imgRss: '',
      link: '',
      date: '',
      showModalAddRss: false,
      showModalDelete: false,
      showAlertSuccess: false,
      showAlertDelete: false

    }
    this.handleConfirmForm = this.handleConfirmForm.bind(this)
    this.handleModalAdd = this.handleModalAdd.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleModalAdd () {
    this.setState({ showModalAddRss: true })
  }

  handleDelete (id) {
    const fluxs = this.state.fluxs.filter((flux) => flux.id !== id)
    this.setState({ fluxs: fluxs, showModalDelete: false, id: '', showAlertDelete: true })
    setTimeout(() => {
      this.setState({ showAlertDelete: false })
    }, 5000)
  }

  handleClose () {
    this.setState({ showModalAddRss: false, showModalDelete: false })
  }

  handleConfirmForm () {
    const elements = {
      titre: this.state.titre,
      description: this.state.description.length > 70 ? this.state.description.substring(0, 70) + '...' : this.state.description,
      link: this.state.link,
      id: this.state.fluxs[this.state.fluxs.length - 1].id + 1

    }

    this.setState({ showModalAddRss: false, titre: '', description: '', link: '', showAlertSuccess: true })
    this.state.fluxs.push(elements)

    setTimeout(() => {
      this.setState({ showAlertSuccess: false })
    }, 5000)
  }

  render () {
    const modalAddRss = (
      <ModalAddRss
        show={this.state.showModalAddRss}
        handleClose={this.handleClose}
        handleConfirmForm={this.handleConfirmForm}
        rssTitle={this.state.titre}
        rssDescription={this.state.description}
        rssLink={this.state.link}
        handleChangeTitle={(e) => this.setState({ titre: e.target.value })}
        handleChangeDescription={(e) => this.setState({ description: e.target.value })}
        handleChangeLink={(e) => this.setState({ link: e.target.value })}
      />
    )
    const modalDeleteRss = (<ModalDeleteRss
      show={this.state.showModalDelete}
      handleConfirmDelete={() => this.handleDelete(this.state.id)}
      handleClose={this.handleClose}
    />)
    const notificationSuccess = (

      <section className="col-md-3 col-sm-12 col-xs-12 ml-auto" >
        <div className="alert alert-success" role="alert">
          <i className="fas fa-plus" title="icon-ajout"></i> &nbsp;  Le flux a été rajouté avec succès
        </div>
      </section>
    )
    const notificationAlert = (
      <section className="col-md-3 col-sm-12 col-xs-12 ml-auto" >
        <div className="alert alert-danger" role="alert" >
          <i className="fas fa-trash" title="icon-suppression"></i> &nbsp;   Le flux a été supprimer!
        </div></section>
    )
    return (
      <Page title=" RSS" contextePage=" RSS" >

        <article id="rss" className="col-md-12 col-sm-12 col-xs-12 section-card" >
          <header className="col-md-12 col-sm-12 col-xs-12 header-article-rss" >

            {this.state.showAlertSuccess ? (notificationSuccess) : null}
            {this.state.showAlertDelete ? (notificationAlert) : null}

            <Button btnType="annuler button-position" clicked={this.handleModalAdd} title="ajout-flux" >
              Ajouter un flux
            </Button>
          </header>
          <section className="col-md-12 col-sm-12 col-xs-12 section-article-rss" >
            {this.state.fluxs.map((flux, id) => (
              <div className="col-md-4 col-sm-12 col-xs-12 section-card">
                <RssCard
                  key={id}
                  titre={flux.titre.length > 50 ? flux.titre.substring(0, 50) + '...' : flux.titre}
                  description={flux.description.length > 70 ? flux.description.substring(0, 70) + '...' : flux.description}
                  link={flux.link}
                  remove={<div onClick={(e) => this.setState({ showModalDelete: true, id: flux.id })} className="edit" >
                    <i className="fa fa-remove remove-icon" title="supprimer ce flux " /></div>}
                />
              </div>
            ))}

            {modalAddRss}
            {modalDeleteRss}

          </section>

        </article>
      </Page>
    )
  }
}
export default Rss
