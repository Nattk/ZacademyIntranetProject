import React, { Component } from 'react'
import Page from '../../layouts/classic'
import Card from '../../components/Card/card'
import { getRessource } from '../../services/ressources'
import Router from 'next/router'

class RessourceIndividuelle extends Component {
    state = {
      ressource: '',
      firstName: '',
      promotion: '',
      date: ''
    }

    static getInitialProps ({ query }) {
      return { query }
    }

    componentDidMount () {
      getRessource(this.props.query.id).then(ress => {
        this.setState({ firstName: ress.data.user.firstName })
        this.setState({ date: ress.data.date.substring(0, 10) })
        this.setState({ promotion: ress.data.promotion.title })
        this.setState({ ressource: ress.data })
      })
    }

    render () {
      return (
        <Page title={this.state.ressource.title} contextePage={this.state.ressource.title} >
          <article className="ressource-individuelle d-flex flex-column">
            <Card styleName="ressource-content">
              <h1>{this.state.ressource.title}</h1>
              <div className="d-flex flex-row">
                <img
                  src="https://ca.slack-edge.com/TDKLZEH1B-UN6RVVAP3-g00f562b54f1-72"
                  alt="profile-user"
                  className="img-socialMedia"
                />
                <section className="d-flex flex-column ressource-details">
                  <i>{this.state.firstName} . {this.state.date}. {this.state.promotion}</i>
                </section>
              </div>
              <p>{this.state.ressource.content}</p>
            </Card>
            <a class="btn btn-danger" onClick={() => Router.back()} title="Retour à la liste des ressources">Retour à la liste des ressources</a>
          </article>
        </Page>
      )
    }
}
export default RessourceIndividuelle
