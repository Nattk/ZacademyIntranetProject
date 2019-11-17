import React, { Component } from 'react'
import Page from '../../../layouts/classic'
import Button from '../../../components/Boutons/Boutons'
import ModalAddFollow from '../../../components/whoToFollow/addFollowModal'
import FollowCard from '../../../components/whoToFollow/followCard'
import ModalDeleteFollow from '../../../components/whoToFollow/deleteFollowModal'
import '../../../styles/sass/styles.scss'

class Follow extends Component {
  constructor (props) {
    super(props)
    this.state = {

      users2follow: [
        { firstName: 'souhail', lastName: 'souid', phone: '0750994758', mail: 'mr.souid@live.fr', fonction: 'Tech & Big Data Recruiter chez Matching Emplois We\'re Hiring\'', description: ' A short reflection on how an animated bar chart on student immigration in Australia sparked off an enriching discussion', linkGithub: 'https://towardsdatascience.com/how-data-sparks-a-global-discussion-on-a-global-issue-f66f43e330d5', linkLinkedin: '', linkReddit: '', linkTwitter: '', id: 1 },
        { firstName: 'souhail', lastName: 'souid', phone: '0750994758', mail: 'mr.souid@live.fr', fonction: 'Tech & Big Data Recruiter chez Matching Emplois We\'re Hiring\'', description: ' A short reflection on how an animated bar chart on student immigration in Australia sparked off an enriching discussion', linkGithub: 'https://towardsdatascience.com/how-data-sparks-a-global-discussion-on-a-global-issue-f66f43e330d5', linkLinkedin: '', linkReddit: '', linkTwitter: '', id: 2 },
        { firstName: 'souhail', lastName: 'souid', phone: '0750994758', mail: 'mr.souid@live.fr', fonction: 'Tech & Big Data Recruiter chez Matching Emplois We\'re Hiring\'', description: ' A short reflection on how an animated bar chart on student immigration in Australia sparked off an enriching discussion', linkGithub: 'https://towardsdatascience.com/how-data-sparks-a-global-discussion-on-a-global-issue-f66f43e330d5', linkLinkedin: '', linkReddit: '', linkTwitter: '', id: 3 }

      ],

      id: '',
      firstName: '',
      lastName: '',
      phone: '',
      mail: '',
      fonction: '',
      description: '',
      imgRss: '',
      showModalAddUser2follow: false,
      showModalDelete: false,
      showAlertSuccess: false,
      showAlertDelete: false

    }
    this.handleConfirmForm = this.handleConfirmForm.bind(this)
    this.handleModalAdd = this.handleModalAdd.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleModalAdd () {
    this.setState({ showModalAddUser2follow: true })
  }

  handleDelete (id) {
    const users = this.state.users2follow.filter((user) => user.id !== id)
    this.setState({ users2follow: users, showModalDelete: false, id: '', showAlertDelete: true })
    setTimeout(() => {
      this.setState({ showAlertDelete: false })
    }, 5000)
  }

  handleClose () {
    this.setState({ showModalAddUser2follow: false, showModalDelete: false })
  }

  handleConfirmForm () {
    const elements = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phone: this.state.phone,
      mail: this.state.mail,
      fonction: this.state.fonction,
      description: this.state.description.length > 70 ? this.state.description.substring(0, 70) + '...' : this.state.description,
      linkGithub: this.state.linkGithub,
      linkReddit: this.state.linkReddit,
      linkLinkedin: this.state.linkLinkedin,
      linkTwitter: this.state.linkTwitter,
      id: this.state.users2follow.length >= 1 ? (this.state.users2follow[this.state.users2follow.length - 1].id + 1) : 1

    }

    this.setState({ showModalAddUser2follow: false, fonction: '', description: '', linkGithub: '', linkReddit: '', linkLinkedin: '', linkTwitter: '', showAlertSuccess: true })
    this.state.users2follow.push(elements)

    setTimeout(() => {
      this.setState({ showAlertSuccess: false })
    }, 5000)

    console.log(this.state.users2follow)
  }

  render () {
    const modalAddRss = (
      <ModalAddFollow
        show={this.state.showModalAddUser2follow}
        handleChangeFirstName={(e) => this.setState({ firstName: e.target.value })}
        handleChangeLastName={(e) => this.setState({ lastName: e.target.value })}
        handleChangePhone={(e) => this.setState({ phone: e.target.value })}
        handleChangeMail={(e) => this.setState({ mail: e.target.value })}
        handleChangeFonction={(e) => this.setState({ fonction: e.target.value })}
        handleChangeDescription={(e) => this.setState({ description: e.target.value })}
        // handleChangeLink={(e) => this.setState({ link: e.target.value })}
        handleClose={this.handleClose}
        handleConfirmForm={this.handleConfirmForm}
      />
    )
    const modalDeleteRss = (
      <ModalDeleteFollow
        show={this.state.showModalDelete}
        handleConfirmDelete={() => this.handleDelete(this.state.id)}
        handleClose={this.handleClose}
      />
    )

    const notificationSuccess = (

      <section className="col-md-4 col-sm-12 col-xs-12 ml-auto" >
        <div className="alert alert-success" role="alert">
          <i className="fas fa-plus" title="icon-ajout"></i> &nbsp;  L'influenceur a été rajouté avec succès
        </div>
      </section>
    )
    const notificationAlert = (
      <section className="col-md-3 col-sm-12 col-xs-12 ml-auto" >
        <div className="alert alert-danger" role="alert" >
          <i className="fas fa-trash" title="icon-suppression"></i> &nbsp;   L'influenceur a été supprimer!
        </div>
      </section>
    )
    return (
      <Page title=" Influenceurs " contextePage=" Influenceurs " >

        <article id="who2follow" className="col-md-12 col-sm-12 col-xs-12 section-card" >
          <header className="col-md-12 col-sm-12 col-xs-12 header-article-rss" >

            {this.state.showAlertSuccess ? (notificationSuccess) : null}
            {this.state.showAlertDelete ? (notificationAlert) : null}

            <Button btnType="annuler button-position" clicked={this.handleModalAdd} title="ajout-flux" >
              Ajouter un flux
            </Button>
          </header>
          <section className="col-md-12 col-sm-12 col-xs-12 section-article-rss" >
            {this.state.users2follow.map((user, id) => (
              <div className="col-md-4 col-sm-12 col-xs-12 section-card">
                <FollowCard
                  key={id}
                  firstName={user.firstName.charAt(0).toUpperCase() + user.firstName.slice(1)}
                  lastName={user.lastName.toUpperCase()}
                  fonction={user.fonction.length > 80 ? user.fonction.substring(0, 80) + '...' : user.fonction}
                  phone={user.phone}
                  mail={user.mail}
                  description={user.description.length > 80 ? user.description.substring(0, 80) + '...' : user.description}
                  linkGithub={user.linkGithub}
                  remove={<div onClick={(e) => this.setState({ showModalDelete: true, id: user.id })} >
                    <i className="fa fa-remove remove-icon " title="supprimer ce profil " /></div>}
                />
              </div>
            ))}

            {modalAddRss}
            {modalDeleteRss}

          </section>

        </article>
      </Page>
    )
  }
}
export default Follow
