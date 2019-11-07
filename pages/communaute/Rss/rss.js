
import React, { Component } from 'react'
import Page from '../../../layouts/classic'
import Card from '../../../components/Card/card'
import Button from '../../../components/Boutons/Boutons'
import Alert from '../../../components/Modal/alert'
import '../../../styles/sass/styles.scss'

class Rss extends Component {
  state = {
    fluxs: [
      { descriptionFlux: ' Apprenez en plus sur Javascript !', linkFlux: "https://fr.khanacademy.org/computing/computer-programming", fluxId: 1 },
      { descriptionFlux: ' Apprenez en plus sur Javascript !', linkFlux: "https://facebook.github.io/react-native/", fluxId: 2 },
      { descriptionFlux: ' Apprenez en plus sur Javascript !', linkFlux: "https://medium.com/", fluxId: 3 },
      { descriptionFlux: ' Apprenez en plus sur Javascript !', linkFlux: "https://fr.khanacademy.org/computing/computer-programming", fluxId: 4 },
      { descriptionFlux: ' Apprenez en plus sur Javascript !', linkFlux: "https://facebook.github.io/react-native/", fluxId: 5 },
      { descriptionFlux: ' Apprenez en plus sur Javascript !', linkFlux: "https://medium.com/", fluxId: 6 }
    ],
    showAdd: false,
    show: false
  }

  handleModal = () => {
    this.setState({ show: true })
  }

  handleModalAddFlux = () => {
    this.setState({ showAdd: true })
  }
  addRss = (event) => {
    this.state.fluxs.push({ descriptionFlux: ' Apprenez en plus React et node !', linkFlux: "https://fr.khanacademy.org/computing/computer-programming", fluxId: 7 })
    this.setState({ showAdd: false })
    event.preventDefault()
  }

  handleDelete = (fluxId) => {
    const flus = this.state.fluxs.filter((item) => item.fluxId !== fluxId)
    this.setState({ fluxs: flus, show: false })
    event.preventDefault()
  }

  handleClose = () => {
    this.setState({ show: false, showAdd: false })
  }



  render() {

    return (
      <Page title="Flux RSS" contextePage="Flux RSS">

        <article className="container-article">
          <Button btnType="annuler" clicked={this.handleModalAddFlux} title="ajout-flux" className="link-button-creation" style={{ margin: '2rem' }} >
            Ajouter un flux
							</Button>
          {this.state.showAdd ? (
            <Alert
              show={this.state.showAdd}
              handleClose={this.handleClose}
              handleConfirmForm={this.addRss}
              headerTitle="Ajout flux"
              input
              modalHeader={true}
              modalBody={true}
              modalFooterRedirection={true}
            />
          ) : null}
          <section className=" col-md-10 col-sm-12 col-xs-12 text-center container-card">

            {this.state.fluxs.map((flux, index) => (
              <Card styleName="card-rss col-md-5 col-sm-12 col-xs-12 " >

                <div className="edit" onClick={this.handleModal}><i className="fa fa-close edit" title="supprimer ce flux"></i>
                </div>
                <article key={index} className="card-article">
                  <a
                    title="lien vers le flux"
                    href={`${flux.linkFlux}`}
                    target="_blank"
                    style={{ color: '#fff' }}
                  >
                    <p title="lien vers le flux" className="card-rss-title">
                      <i className="fas fa-rss card-rss-button" />    {flux.descriptionFlux}
                    </p>
                  </a>
                  <aside>
                    <span aria-hidden="true" onClick={this.handleModal} className="deleteRssButton" title="supprimer">&times;</span>
                    {this.state.show ? (
                      <Alert
                        show={this.state.show}
                        handleClose={this.handleClose}
                        handleDelete={() => this.handleDelete(flux.fluxId)}
                        headerTitle="Suppression flux"
                        modalDescription="Etes vous sûr de vouloir supprimer ce flux ?"
                        modalHeader={true}
                        modalBody={true}
                        modalFooter={true}
                      />
                    ) : null}
                  </aside>
                </article>
              </Card>
            ))}
          </section>
        </article>
      </Page>
    )
  }
}
export default Rss
