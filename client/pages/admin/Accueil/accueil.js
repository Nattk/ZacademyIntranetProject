import React, { Component } from 'react'
import Page from '../../../layouts/classic'
import axios from 'axios'
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

  handleDelete = () => {
    alert('profil supprimé')
  }

  componentDidMount () {
    axios.get('http://localhost:3333/api/promotions')
      .then((promotions) => {
        this.setState({ promotions: promotions.data })
        console.log('formateurs axios ', this.state.promotions)
      })
  }

  render () {
    return (
      <Page title="Admin Accueil" contextePage="Promotions en cours">
        <article id="admin-page">
          {/* //<button>Ajouter une promotion</button> */}

          <section className="search-bar-promo d-flex flex-row">
            <input className="form-control" type="text" placeholder="Rechercher" />
          </section>
          <section>
            <table className="table table-hover">
              <thead>
                <tr>

                  <th onClick={(type) => this.filtre('nom')}><div className="d-flex flex-row justify-content-between align-items-baseline">Nom <i class="fas fa-sort"></i></div></th>
                  <th onClick={(type) => this.filtre('ville')}><div className="d-flex flex-row justify-content-between align-items-baseline">Ville <i class="fas fa-sort"></i></div></th>
                  <th onClick={(type) => this.filtre('programme')}><div className="d-flex flex-row justify-content-between align-items-baseline">Programme <i class="fas fa-sort"></i></div></th>
                  <th onClick={(type) => this.filtre('date')}><div className="d-flex flex-row justify-content-between align-items-baseline">Date <i class="fas fa-sort"></i></div></th>
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
                      <td>{promo.start}

                        {promo.end}</td>
                      <td>
                        <button><i className="fas fa-eye" title="Voir détails"></i></button>
                        <button>Ghost</button>
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
