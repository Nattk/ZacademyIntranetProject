import React, { Component, Fragment } from 'react'
import Page from '../../../layouts/admin'
import { getPromotionByID } from '../../../services/creation-promotion'
import { capitalize } from '../../index_connecte'
import moment from 'moment'

class GetPromotionByID extends Component {
  constructor (props) {
    super(props)

    this.state = {
      promotion: [],
      programmes: ''
    }
  }

  static getInitialProps ({ query }) {
    return { query }
  }

  componentDidMount () {
    getPromotionByID(this.props.query.promotions)
      .then(promotion => {
        this.setState({ promotion: promotion.data, programmes: promotion.data.programmes[0].title })
      })
  }

  render () {
    moment.locale('fr')
    console.log(this.state)
    const start = this.state.promotion.start ? capitalize(moment(this.state.promotion.start).format('DD MMMM YYYY')) : null
    const end = this.state.promotion.end ? capitalize(moment(this.state.promotion.end).format('DD MMMM YYYY')) : null
    const formateurs = this.state.promotion.formateurs ? this.state.promotion.formateurs.map(el => <Fragment> {el.lastName.concat(' ', el.firstName, ', ')}</Fragment>) : null
    const eleves = this.state.promotion.eleves ? this.state.promotion.eleves.map(el => <Fragment> {el.lastName.concat(' ', el.firstName, ', ')}</Fragment>) : null
    return (
      <Page title={this.state.promotion.title}>

        <article className="col-md-10 col-sm-12 col-xs-12  ml-auto mr-auto  " id="promotionByID">
          <h1 className="h1-promotion-style " >{this.state.promotion.title}</h1>
          <div className="col-md-12 col-sm-12 col-xs-12 d-flex section-style-promotion">
            <section>
              <p> <span className="promotion-p-style"> Début formation:</span> &nbsp;{start}</p>
              <p> <span className="promotion-p-style"> Fin formation:</span> &nbsp;{end}</p>
              <p ><span className="promotion-p-style">Ville:</span> &nbsp;{this.state.promotion.city}</p>
              <p> <span className="promotion-p-style">Programme:</span>&nbsp;{this.state.programmes}</p>
              <p> <span className="promotion-p-style">Slack:</span> &nbsp;{this.state.promotion.slack}</p>
              <p> <span className="promotion-p-style">Formateurs:</span> &nbsp;{formateurs}</p>

              <p className="show-eleve-style"> <span className="promotion-p-style show-eleve-style">Futur consultants:</span> {eleves}</p>
            </section>
            <section className="ml-auto mr-auto section-eleve-style">
              <p > <span className="promotion-p-style">Futur consultants:</span> &nbsp;   </p> {eleves}
            </section>
          </div>
        </article>
      </Page>
    )
  }
}

export default GetPromotionByID
