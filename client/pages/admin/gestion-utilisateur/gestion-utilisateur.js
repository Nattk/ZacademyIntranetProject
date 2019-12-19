import React, { useEffect, useState } from 'react'
import Page from '../../../layouts/admin'
import Button from '../../../components/Boutons/Boutons'
import Alert from '../../../components/Modal/alert'
import userService from '../../../services/users'
import AllNotification from '../../../components/Notifications/notifications'

const UtilisateursGestion = () => {
  const [utilisateurs, setutilisateurs] = useState([])
  const [modalShow, setmodalShow] = useState(false)
  const [userToDelete, setuserToDelete] = useState('')
  const [notifShow, setnotifShow] = useState(false)
  const [errorStyle, seterrorStyle] = useState(false)
  const [notifMessage, setnotifMessage] = useState('')

  useEffect(() => {
    userService.getUsers().then(data => {
      setutilisateurs(data)
    })
  }, [])

	  const handleModal = (id) => {
    setuserToDelete(id)
    setmodalShow(true)
    event.preventDefault()
	  }

	  const handleNotif = (error, message) => {
		  if (error) {
      seterrorStyle(true)
      setnotifMessage(`${error.response.data.error}`)
		  }
		  seterrorStyle(false)
		  setnotifMessage(`${message}`)

		  setnotifShow(true)
    setTimeout(() => setnotifShow(false), 10000)
	  }

	  const handleDelete = async (e) => {
    e.preventDefault()
    await userService.remove(userToDelete)
    await userService.getUsers().then(data => setutilisateurs(data))
    setmodalShow(false)
    handleNotif(null, 'L\'utilisateur a bien été supprimé')

    event.preventDefault()
	  }

	  const handleClose = (event) => {
    setmodalShow(false)

    event.preventDefault()
	  }

  return (
    <Page title="gestion Utilisateur">
	      <article className="gestionProgramme card">
	        <header className="card-header">Liste des Utilisateurs</header>
        <AllNotification alertType={errorStyle ? 'danger' : 'success'} show={notifShow} notifMessage={notifMessage} />
	        <section className="card-body">
	            {utilisateurs ? Array.from(utilisateurs).map((utilisateur, index) => (
	              <div key={index} className="d-flex flex- justify-content-around align-items-baseline">
	                <a href="#">
	                  {utilisateur.firstName} {utilisateur.lastName}
	                </a>
	                <Button btnType="annuler" clicked={() => handleModal(utilisateur.id)}>
										Supprimer
	                </Button>
	                {modalShow ? (
	                  <Alert
	                    show={modalShow}
	                    handleClose={handleClose}
	                    handleDelete={e => handleDelete(e)}
	                    headerTitle="Suppression utilisateur"
	                    modalDescription="Etes vous sûr de vouloir supprimer cet utilisateur ?"
	                    modalHeader={true}
	                    modalBody={true}
	                    modalFooter={true}
	                  />
	                ) : null}

	              </div>
	            )
	           ) : null}
	        </section>
	        <footer className="d-flex flex-row align-items-end justify-content-center">

	          <a href="/admin/creation-utilisateur/creation-utilisateur" title="modification-utlisateur" className="link-button-creation" >
							Ajouter un utilisateur
	          </a>

	        </footer>
	      </article>
	    </Page>
  )
}

// class UtilisateursGestion extends Component {
// 	state = {
// 	  utilisateurs: false,
// 	  modalShow: false,
// 	  userToDelete: '',
// 	  show: false
// 	}

// 	componentDidMount () {
// 	  userService.getAll().then(data => this.setState({ utilisateurs: data }))
// 	  }

// 	handleModal = (id) => {
// 	  this.setState({ userToDelete: id })
// 	  this.setState({ modalShow: true })
// 	  event.preventDefault()
// 	}

// 	handleDelete = (e, id) => {
// 	  e.preventDefault()
// 	  userService.remove(this.state.userToDelete)
// 	  userService.getAll().then(data => this.setState({ utilisateurs: data }))
// 	  this.setState({ modalShow: false })

// 	  event.preventDefault()
// 	}

// 	handleClose = (event) => {
// 	  this.setState({ modalShow: false })

// 	  event.preventDefault()
// 	}

// 	render () {
// 	  return (
// 	    <Page title="gestion Utilisateur">
// 	      <article className="gestionProgramme card">
// 	        <header className="card-header">Liste des Utilisateurs</header>
// 	        <section className="card-body">
// 	            {this.state.utilisateurs ? Array.from(this.state.utilisateurs).map((utilisateur, index) => (
// 	              <div key={index} className="d-flex flex- justify-content-around align-items-baseline">
// 	                <a href="#">
// 	                  {utilisateur.firstName} {utilisateur.lastName}
// 	                </a>
// 	                <Button btnType="annuler" clicked={() => this.handleModal(utilisateur.id)}>
// 										Supprimer
// 	                </Button>
// 	                {this.state.modalShow ? (
// 	                  <Alert
// 	                    show={this.state.modalShow}
// 	                    handleClose={this.handleClose}
// 	                    handleDelete={e => this.handleDelete(e, utilisateur.id)}
// 	                    headerTitle="Suppression utilisateur"
// 	                    modalDescription="Etes vous sûr de vouloir supprimer cet utilisateur ?"
// 	                    modalHeader={true}
// 	                    modalBody={true}
// 	                    modalFooter={true}
// 	                  />
// 	                ) : null}

// 	              </div>
// 	            )
// 	           ) : null}
// 	        </section>
// 	        <footer className="d-flex flex-row align-items-end justify-content-center">

// 	          <a href="/admin/creation-utilisateur/creation-utilisateur" title="modification-utlisateur" className="link-button-creation" >
// 							Ajouter un utilisateur
// 	          </a>

// 	        </footer>
// 	      </article>
// 	    </Page>
// 	  )
// 	}
// }

export default UtilisateursGestion
