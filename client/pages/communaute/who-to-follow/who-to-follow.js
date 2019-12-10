import React from 'react'
import Page from '../../../layouts/classic'
import Header from '../../../components/Header/header-button-add'
import '../../../styles/sass/styles.scss'
class Follow extends React.Component {
  state = {
    showButtons: false
  }

  componentDidMount () {
    const user = window.localStorage.getItem('user')
    const role = JSON.parse(user).role
    console.log(role === 'supradmin')
    if (role === 'superadmin') {
      this.setState({ showButtons: true })
      console.log(this.state.showButton)
    } else {
      return this.state.showButton
    }
    // console.log(this.state.showButton)
  }

  render () {
    return (
      <Page title=" Influenceurs" contextePage="Influenceurs" >
        <article id="who-to-follow" className="col-md-12 col-sm-12 col-xs-12 section-card" >
          {this.state.showButtons ? <Header title="Ajouter un contact" /> : null}
          <section className="col-md-12 col-sm-12 col-xs-12 section-article" >

          </section>
        </article>
      </Page>
    )
  }
}
export default Follow
