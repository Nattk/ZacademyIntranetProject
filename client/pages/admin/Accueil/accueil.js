import React, { Component } from 'react'
import Page from '../../../layouts/admin'
import axios from 'axios'
import Link from 'next/link'
import moment from 'moment'
import { capitalize } from '../../index_connecte'

class Admin extends Component {
  constructor(props) {
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

  handleDelete = () => {
    alert('profil supprimé')
  }

  componentDidMount() {
    axios.get('http://localhost:3333/api/promotions')
      .then((promotions) => {
        this.setState({ promotions: promotions.data })
        console.log('formateurs axios ', this.state.promotions)
      })
  }

  render() {
    moment.locale('fr')
    return (
      <Page title="Admin Accueil" contextePage="Promotions en cours">
        <article id="admin-page">
          {/* //<button>Ajouter une promotion</button> */}
          {/* <section className="search-bar-promo d-flex flex-row">
            <input className="form-control" type="text" placeholder="Rechercher" />
          </section> */}
          <section>
            <table className="table table-hover">
              <thead>
                <tr>
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

                    <tr className="promotion-row" key={promo.id}>
                      <td>{promo.title}</td>
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
          </section>

        </article>
      </Page>
    )
  }
}

export default Admin
