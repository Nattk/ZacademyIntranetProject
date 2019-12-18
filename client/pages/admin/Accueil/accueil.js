import React, { Component } from 'react'
import Page from '../../../layouts/admin'
import axios from 'axios'
import Link from 'next/link'
import moment from 'moment'
import { NotificationDelete } from '../../../components/Notifications/notifications'
import { capitalize } from '../../index_connecte'
import Modal from '../../../components/Modal/modal'
import { handleClose } from '../../../components/Modal/function-modal'
import { handleRemove } from '../../../components/Methods/function-promotion'
import { DeleteDescription } from '../../../components/Modal/SectionModal'
import { Router } from 'next/router'
class Admin extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: '',
      promotions: ''
    }
  }

  filtre = (type) => {
    const arrayFiltered = [...this.state.promotions]
    arrayFiltered.sort((a, b) => a[type] > b[type] ? 1 : -1)
    this.setState({ promotions: arrayFiltered })
  }

  componentDidMount () {
    if (window) {
      this.setState({ user: JSON.parse(localStorage.getItem('user')) })
    }
    axios.get('http://localhost:3333/api/promotions')
      .then((promotions) => {
        this.setState({ promotions: promotions.data })
      })
  }

  handleSeePromo = (id) => {
    const userUpdate = { ...this.state.user, promotion: id }
    if (window) {
      window.localStorage.setItem('user', JSON.stringify(userUpdate))
      Router.push('http://localhost:3000/index_connecte')
    }
  }

  render () {
    moment.locale('fr')

    // const formateurSelected = { formateurId: this.state.formateursOption ? this.state.formateursOption.map(el => el.id) : null }

    return (

      <Page title="Admin Accueil" >

        <article id="admin-page">
          {this.state.showAlertDelete ? <NotificationDelete showAlertDelete={this.state.showAlertDelete} title="La promotion a été supprimé!" /> : null}

          <h1 className="h1-promotion-style" >Promotions en cours</h1>
          <section className="col-md-12 col-sm-12 col-xs-12">
            <table className="col-md-12 col-sm-12 col-xs-12 table table-hover show-table-media">
              <thead className="col-md-12 col-sm-12 col-xs-12 t-head-style">
                <tr className="col-md-12 col-sm-12 col-xs-12 t-head-style">
                  <th onClick={(type) => this.filtre('nom')}><div className="d-flex flex-row justify-content-between align-items-baseline">Nom <i className="fas fa-sort"></i></div></th>
                  <th onClick={(type) => this.filtre('ville')}><div className="d-flex flex-row justify-content-between align-items-baseline">Ville <i className="fas fa-sort"></i></div></th>
                  <th onClick={(type) => this.filtre('programme')}><div className="d-flex flex-row justify-content-between align-items-baseline">Programme <i className="fas fa-sort"></i></div></th>
                  <th onClick={(type) => this.filtre('date')}><div className="d-flex flex-row justify-content-between align-items-baseline">Date <i className="fas fa-sort"></i></div></th>
                  <th onClick={(type) => this.filtre('actions')}>Actions</th>

                </tr>
              </thead>
              <tbody>

                {this.state.promotions

                  ? this.state.promotions.map(promo => (

                    <tr className="promotion-row t-head-style tr-style" key={promo.id}>
                      <td id="titlePromo">{promo.title}</td>
                      <td>{promo.city}</td>
                      {promo.programmes.map(el => <td key={el.id}>{el.title}</td>)}
                      <td className="date-style d-column">
                        <span className="date-style">Début: {promo.start ? capitalize(moment(promo.start).format('DD MMMM YYYY')) : promo.start}</span>
                        <span className="date-style"> Fin: {promo.end ? capitalize(moment(promo.end).format('DD MMMM YYYY')) : promo.end} </span>
                      </td>
                      <td >
                        <Link href={{ pathname: '../promotion/promotion', query: { promotions: promo.id } }}><a className="btn btn-danger bouton-navbar">details</a></Link>
                        <Link href="/index_connecte">
                          <a className="btn btn-danger bouton-navbar" onClick={() => this.handleSeePromo(promo.id)}>Voir Zone d'activité</a>
                        </Link>
                      </td>
                      <td>
                        <Link href={{ pathname: '../update-promotion/update-promotion', query: { promotions: promo.id } }}>
                          <i className="fa fa-pen update-icon " title="Mettre à jour cette promotion " />
                        </Link>
                      </td>
                      <td>
                        <i className="fas fa-trash" title="supprimer cette promotion" onClick={() => this.setState({ showModal: true, descriptionDelete: true, formulaire: false, recap: false, formulaireTitleAdd: '', formulaireUpdate: '', id: promo.id, showDetails: false })}></i>
                      </td>
                    </tr>
                  )) : null}

              </tbody>
            </table>
            <table className="col-md-12 col-sm-12 col-xs-12 table table-hover show-responsive-table-media">
              <thead className="col-md-12 col-sm-12 col-xs-12 t-head-style">
                <tr className="col-md-12 col-sm-12 col-xs-12 t-head-style">
                  <th onClick={(type) => this.filtre('nom')}><div className="d-flex flex-row justify-content-between align-items-baseline">Nom <i className="fas fa-sort"></i></div></th>
                  <th onClick={(type) => this.filtre('ville')}><div className="d-flex flex-row justify-content-between align-items-baseline">Ville <i className="fas fa-sort"></i></div></th>
                  <th onClick={(type) => this.filtre('programme')}><div className="d-flex flex-row justify-content-between align-items-baseline">Programme <i className="fas fa-sort"></i></div></th>
                  <th onClick={(type) => this.filtre('date')}><div className="d-flex flex-row justify-content-between align-items-baseline">Date <i className="fas fa-sort"></i></div></th>
                  <th onClick={(type) => this.filtre('actions')}>Actions</th>
                </tr>

              </thead>
            </table>
            {this.state.promotions

              ? this.state.promotions.map(promo => (

                <article className=" col-md-12 col-sm-12 col-xs-12  title-style-modal show-responsive-table-media  article-responsive-table-style ">
                  <span className="p-responsive-table-style" onClick={() => this.filtre('nom')}>Nom:</span> {promo.title}
                  <span className="p-responsive-table-style" onClick={() => this.filtre('ville')}>Ville:</span> {promo.city}
                  <span className="p-responsive-table-style" onClick={() => this.filtre('date')}>Début:</span>  {promo.start ? capitalize(moment(promo.start).format('DD MMMM YYYY')) : promo.start}
                  <span className="p-responsive-table-style" onClick={() => this.filtre('date')}>Fin:</span> {promo.end ? capitalize(moment(promo.end).format('DD MMMM YYYY')) : promo.end}
                  <span className="p-responsive-table-style" onClick={() => this.filtre('programme')}>Programme :</span> {promo.programmes.map(el => el.title)}
                  <Link href={{ pathname: '../promotion/promotion', query: { promotions: promo.id } }}>Détails    </Link>
                  <Link href={{ pathname: '../update-promotion/update-promotion', query: { promotions: promo.id } }}>
                    <i className="fa fa-pen update-icon " title="Mettre à jour cette promotion " />
                  </Link>
                  <i className="fas fa-trash " title="supprimer cette promotion" onClick={() => this.setState({ showModal: true, descriptionDelete: true, formulaire: false, recap: false, formulaireTitleAdd: '', formulaireUpdate: '', id: promo.id, showDetails: false })}></i>

                </article>
              ))

              : null}
            <Modal show={this.state.showModal} onClose={() => handleClose(this.setState.bind(this))} titleModal="">

              {this.state.descriptionDelete ? <DeleteDescription handleDelete={() => handleRemove(this.state, this.state.id, this.setState.bind(this))} handleClose={() => handleClose(this.setState.bind(this))} title="Êtes-vous sûr de vouloir supprimer cette promotion" /> : false}
            </Modal>
          </section>

        </article>
      </Page>
    )
  }
}

export default Admin
