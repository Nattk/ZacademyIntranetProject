import React, { Component } from 'react'
import Page from '../../../layouts/admin'
import axios from 'axios'
import Link from 'next/link'
import moment from 'moment'
import { capitalize } from '../../index_connecte'

class Admin extends Component {
  constructor (props) {
    super(props)

    this.state = {
      promotions: ''

    }
  }

  filtre = (type) => {
    const arrayFiltered = [...this.state.promotions]
    arrayFiltered.sort((a, b) => a[type] > b[type] ? 1 : -1)
    this.setState({ promotions: arrayFiltered })
  }

  componentDidMount () {
    axios.get('http://localhost:3333/api/promotions')
      .then((promotions) => {
        this.setState({ promotions: promotions.data })
      })
  }

  render () {
    moment.locale('fr')
    return (
      <Page title="Admin Accueil" >
        <article id="admin-page">
          {/* <section className="search-bar-promo d-flex flex-row">
            <input className="form-control" type="text" placeholder="Rechercher" />
          </section> */}
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
                      <td>{promo.programmes.map(el => el.title)}</td>
                      <td className="date-style d-column">
                        <span className="date-style">Début: {promo.start ? capitalize(moment(promo.start).format('DD MMMM YYYY')) : promo.start}</span>
                        <span className="date-style"> Fin: {promo.end ? capitalize(moment(promo.end).format('DD MMMM YYYY')) : promo.end} </span>
                      </td>
                      <td>

                        <Link href={{ pathname: '../promotion/promotion', query: { promotions: promo.id } }}>details    </Link>

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
                </article>
              ))

              : null}

          </section>

        </article>
      </Page>
    )
  }
}

export default Admin
