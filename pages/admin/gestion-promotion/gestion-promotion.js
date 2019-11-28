import React, { Component } from 'react'
import Page from '../../../layouts/classic'
import Button from '../../../components/Boutons/Boutons'
import Alert from '../../../components/Modal/alert'
class PromotionGestion extends Component {
  state = {
    promotions: [
      { ville: 'Rio de Janeiro', promotion: 'Promo Rio 1', promoId: 1 },
      { ville: 'Rennes', promotion: 'Promo Rennes 2', promId: 2 },
      { ville: 'Paris', promotion: 'Promo Paris 2', promoId: 3 }
    ],
    show: false
  }

  handleModal = (event) => {
    this.setState({ show: true })
    event.preventDefault()
  }

  handleDelete = (promoId) => {
    const promos = this.state.promotions.filter(item => item.promoId !== promoId)
    this.setState({ promotions: promos })
    this.setState({ show: false })

    event.preventDefault()
  }

  handleClose = (event) => {
    this.setState({ show: false })

    event.preventDefault()
  }

  // handleDelete = (promoId) => {
  //   alert('Promotion supprimé !');
  //   const promos = this.state.promotions.filter(item => item.promoId !== promoId);
  //   this.setState({ promotions: promos });
  // }

  render () {
    return (
      <Page title="Gestion des promotions">
        <article className="gestionProgramme card">
          <header className="card-header">
            Liste des Promotions
          </header>
          <section className="card-body">
            <ul>
              {this.state.promotions.map((promotion, index) => (
                <li key={index} className="d-flex flex- justify-content-around align-items-baseline">
                  <p>{promotion.name}</p>
                  <p>Ville : {promotion.ville}</p>
                  <Button btnType="annuler" clicked={this.handleModal}>Supprimer</Button>
                  <a href="/admin/gestion-promotion/modification-promotion" title="modification-promotion" className="link-button-valider" >
                    Modifier
                  </a>

                  {this.state.show ? (
                    <Alert
                      show={this.state.show}
                      handleClose={this.handleClose}
                      handleDelete={() => this.handleDelete(promotion.promoId)}
                      headerTitle="Suppression promotion"
                      modalDescription="Etes vous sûr de vouloir supprimer cette promotion ?"
                      modalHeader={true}
                      modalBody={true}
                      modalFooter={true}
                    />
                  ) : null
                  }
                </li>

              ))}

            </ul>
          </section>
          <footer className="d-flex flex-row align-items-end justify-content-center">

            <a href="/admin/creation-promotion/creation-promotion" title="creation-programme" className="link-button-creation" >
              Ajouter une promotion
            </a>
          </footer>
        </article>
      </Page>
    )
  }
}
export default PromotionGestion
