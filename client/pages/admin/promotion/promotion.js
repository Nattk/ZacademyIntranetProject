import React, { Component, } from 'react'
import Page from '../../../layouts/classic'


import { getPromotionByID, } from '../../../services/creation-promotion'



class GetPromotionByID extends Component {
  constructor(props) {
    super(props)

    this.state = {
      promotion: [],
      programmes: '',
      promotionbyId: '',
      start: '',
      end: '',
      formateurs: '',
      formateur: '',
      formateurByID: '',
      eleves: '',
      users: ''



    }


  }
  static getInitialProps({ query }) {
    return { query }
  }

  componentDidMount() {
    getPromotionByID(this.props.query.promotions)
      .then(promotion => {
        this.setState({
          promotion: promotion.data, programmes: promotion.data.programmes[0].title, formateurs: promotion.data.formateurs

        })
        console.log('formateurs', this.state.formateurs)
        console.log('promotion', this.state.promotion)
        console.log(promotion)





      })


      .catch(err => {
        console.log(err)
      })



  }




  render() {




    const start = this.state.promotion.start ? JSON.stringify(this.state.promotion.start) : null
    const end = this.state.promotion.end ? JSON.stringify(this.state.promotion.end) : null
    const dayStart = start ? start.toString().slice(9, 11) : start
    const monthStart = start ? start.toString().slice(6, 8) : start
    const yearStart = start ? start.toString().slice(1, 5) : start
    const dayEnd = end ? end.toString().slice(9, 11) : end
    const monthEnd = end ? end.toString().slice(6, 8) : end
    const yearEnd = end ? end.toString().slice(1, 5) : end
    const dateStart = `${dayStart}-${monthStart}-${yearStart}`
    const dateEnd = `${dayEnd}-${monthEnd}-${yearEnd}`
    const formateurs = this.state.promotion.formateurs ? this.state.promotion.formateurs.map(el => <p> {el.lastName.concat(' ', el.firstName)}</p>) : null
    const eleves = this.state.promotion.eleves ? this.state.promotion.eleves.map(el => <p> {el.lastName.concat(' ', el.firstName)}</p>) : null
    return (
      <Page title="Création promotion" >
        <article className="col-md-12 col-sm-12 col-xs-12 " id="promotionByID">
          <header className="card-header  text-center ">

            {this.state.promotion.title}
          </header>
          <article >
            <div className="col-md-12 col-sm-12 col-xs-12 d-flex section-style-promotion">
              <section>
                <p> Début formation: {dateStart}</p>
                <p> Fin formation: {dateEnd}</p>
              </section>
              <section> <p className="promotion-p-style">Ville: </p>{this.state.promotion.city}</section>
              <section> <p className="promotion-p-style">Formateurs: </p> {formateurs} </section>
              <section>
                <p className="promotion-p-style">Programme :      </p>
                {this.state.programmes}
              </section>

            </div>
            <section className="col-md-12 col-sm-12 col-xs-12 d-flex section-eleve-style" >
              <p className="promotion-p-style">Futur consultants:  </p>
              {eleves}
            </section>
          </article>
        </article>
      </Page>
    )
  }
}

export default GetPromotionByID
