import React, { Component } from 'react'
import Page from '../../../layouts/classic'
import Button from '../../../components/Boutons/Boutons'
import Modal from '../../../components/Modal/modal'
import FollowCard from '../../../components/whoToFollow/followCard'

import '../../../styles/sass/styles.scss'
import { element } from 'prop-types'

class Follow extends Component {
  constructor (props) {
    super(props)
    this.state = {

      users2follow: [
        { firstName: 'MAX', lastName: 'eriddfddoe', phone: '0750994758', mail: 'mr.souid@live.fr', fonction: 'Tech & Big Data Recruiter chez Matching Emplois We\'re Hiring\'', description: ' A short reflection on how an animated bar chart on student immigration in Australia sparked off an enriching discussion', linkGithub: 'https://towardsdatascience.com/how-data-sparks-a-global-discussion-on-a-global-issue-f66f43e330d5', linkLinkedin: '', linkReddit: '', linkTwitter: '', id: 1 },
        { firstName: 'dfds', lastName: 'erioe', phone: '0750994758', mail: 'mr.souid@live.fr', fonction: 'Tech & Big Data Recruiter chez Matching Emplois We\'re Hiring\'', description: ' A short reflection on how an animated bar chart on student immigration in Australia sparked off an enriching discussion', linkGithub: 'https://towardsdatascience.com/how-data-sparks-a-global-discussion-on-a-global-issue-f66f43e330d5', linkLinkedin: '', linkReddit: '', linkTwitter: '', id: 2 },
        { firstName: 'Nattan', lastName: 'erioe', phone: '0750994758', mail: 'mr.souid@live.fr', fonction: 'Tech & Big Data Recruiter chez Matching Emplois We\'re Hiring\'', description: ' A short reflection on how an animated bar chart on student immigration in Australia sparked off an enriching discussion', linkGithub: 'https://towardsdatascience.com/how-data-sparks-a-global-discussion-on-a-global-issue-f66f43e330d5', linkLinkedin: '', linkReddit: '', linkTwitter: '', id: 3 }

      ],

      id: '',
      firstName: '',
      lastName: '',
      phone: '',
      mail: '',
      fonction: '',
      description: '',
      linkGithub: '',
      imgRss: '',
      showModal: false,
      showModalDelete: false,
      showModalUpdate: false,
      showAlertSuccess: false,
      showAlertUpdate: false,
      showAlertDelete: false,
      handleSocialInput: !!this.props.handleSocialInput

    }
    this.handleConfirm = this.handleConfirm.bind(this)
    this.handleModalAdd = this.handleModalAdd.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
  }

  handleModalAdd () {
    this.setState({ showModal: true })
  }

  handleDelete (id) {
    const users = this.state.users2follow.filter((user) => user.id !== id)
    this.setState({ users2follow: users, showModalDelete: false, id: '', showAlertDelete: true })
    setTimeout(() => {
      this.setState({ showAlertDelete: false })
    }, 5000)
  }

  handleClose () {
    this.setState({ showModal: false, showModalDelete: false, showModalUpdate: false })
  }

  handleConfirm () {
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

    this.setState({ showModal: false, fonction: '', description: '', linkGithub: '', linkReddit: '', linkLinkedin: '', linkTwitter: '', showAlertSuccess: true })
    this.state.users2follow.push(elements)

    setTimeout(() => {
      this.setState({ showAlertSuccess: false })
    }, 5000)

    console.log(this.state.users2follow)
  }

  handleUpdate (id) {
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
      id: this.state.id

    }

    const index = this.state.users2follow.findIndex((e) => e.id === id)

    if (index === -1) {
      this.state.users2follow.push(elements)
    } else {
      this.state.users2follow[index] = elements
    }

    // make new object of updated object.
    const updatedObj = { ...this.state.users2follow[index] }

    // make final new array of objects by combining updated object.
    const updatedProjects = [
      ...this.state.users2follow.slice(0, index),
      updatedObj,
      ...this.state.users2follow.slice(index + 1)
    ]
    this.setState({ showModalUpdate: false, users2follow: updatedProjects, showAlertUpdate: true })
    setTimeout(() => {
      this.setState({ showAlertUpdate: false })
    }, 5000)
    console.log(this.state.users2follow)
  }

  render () {
    const modalAddRss = (
      <Modal
        show={this.state.showModal}
        titleModal="Ajout d'un influenceur"
        formulaire
        handleChangeFirstName={(e) => this.setState({ firstName: e.target.value })}
        handleChangeLastName={(e) => this.setState({ lastName: e.target.value })}
        handleChangePhone={(e) => this.setState({ phone: e.target.value })}
        handleChangeMail={(e) => this.setState({ mail: e.target.value })}
        handleChangeFonction={(e) => this.setState({ fonction: e.target.value })}
        handleChangeDescription={(e) => this.setState({ description: e.target.value })}
        // handleChangeLink={(e) => this.setState({ link: e.target.value })}
        handleClose={this.handleClose}
        handleSubmit={this.handleConfirm}
        onSubmit
      />
    )
    const modalDeleteRss = (
      <Modal
        show={this.state.showModalDelete}
        deleteDescription
        onDelete
        handleDelete={() => this.handleDelete(this.state.id)}
        handleClose={this.handleClose}
      />
    )
    const modalUpdateRss = (
      <Modal
        show={this.state.showModalUpdate}
        titleModal={`Modification de l'influenceur  ${this.state.id}`}
        formulaire
        firstName={this.state.firstName}
        lastName={this.state.lastName}
        phone={this.state.phone}
        mail={this.state.mail}
        fonction={this.state.fonction}
        description={this.state.description}
        linkGithub={this.state.linkGithub}
        handleChangeFirstName={(e) => this.setState({ firstName: e.target.value })}
        handleChangeLastName={(e) => this.setState({ lastName: e.target.value })}
        handleChangePhone={(e) => this.setState({ phone: e.target.value })}
        handleChangeMail={(e) => this.setState({ mail: e.target.value })}
        handleChangeFonction={(e) => this.setState({ fonction: e.target.value })}
        handleChangeDescription={(e) => this.setState({ description: e.target.value })}
        handleSocialInput={() => this.setState({ handleSocialInput: true })}
        handleChangeLinkGithub={(e) => this.setState({ linkGithub: e.target.value })}
        // handleChangeLink={(e) => this.setState({ link: e.target.value })}
        handleClose={this.handleClose}
        onUpdate
        handleUpdate={() => this.handleUpdate(this.state.id)}

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
    const notificationUpdate = (
      <section className="col-md-3 col-sm-12 col-xs-12 ml-auto" >
        <div className="alert alert-primary" role="alert" >
          <i className="fas fa-trash" title="icon-suppression"></i> &nbsp;   L'influenceur a été mis à jour!
        </div>
      </section>
    )
    return (
      <Page title=" Influenceurs " contextePage=" Influenceurs " >

        <article id="who2follow" className="col-md-12 col-sm-12 col-xs-12 section-card" >
          <header className="col-md-12 col-sm-12 col-xs-12 header-article-rss" >

            {this.state.showAlertSuccess ? (notificationSuccess) : null}
            {this.state.showAlertDelete ? (notificationAlert) : null}
            {this.state.showAlertUpdate ? (notificationUpdate) : null}

            <Button btnType="annuler button-position" clicked={this.handleModalAdd} title="ajout-flux" >
              Ajouter un flux
            </Button>
          </header>
          <section className="col-md-12 col-sm-12 col-xs-12 section-article-rss" >
            {this.state.users2follow.map((user, id) => (

              <FollowCard
                key={id}
                firstName={user.firstName.charAt(0).toUpperCase() + user.firstName.slice(1).toLowerCase()}
                lastName={user.lastName.toUpperCase()}
                fonction={user.fonction.length > 80 ? user.fonction.charAt(0).toUpperCase() + user.fonction.slice(2).toLowerCase().substring(0, 80) + '...' : user.fonction.charAt(0).toUpperCase() + user.fonction.slice(1).toLowerCase()}
                phone={user.phone}
                mail={user.mail.charAt(0).toUpperCase() + user.mail.slice(1).toLowerCase()}
                description={user.description.length > 80 ? user.description.charAt(1).toUpperCase() + user.description.slice(2).toLowerCase().substring(0, 80) + '...' : user.description.charAt(0).toUpperCase() + user.description.slice(1).toLowerCase()}
                linkGithub={user.linkGithub}
                remove={(e) => this.setState({ showModalDelete: true, id: user.id })}
                update={(e) => this.setState({
                  showModalUpdate: true,
                  id: user.id,
                  firstName: user.firstName,
                  lastName: user.lastName,
                  phone: user.phone,
                  mail: user.mail,
                  fonction: user.fonction,
                  description: user.description,
                  linkGithub: user.linkGithub
                })}

              />

            ))}

            {modalAddRss}
            {modalDeleteRss}
            {modalUpdateRss}
          </section>

        </article>
      </Page>
    )
  }
}
export default Follow
