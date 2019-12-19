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
    } else {
      seterrorStyle(false)
      setnotifMessage(`${message}`)
    }
    setnotifShow(true)
    setTimeout(() => setnotifShow(false), 10000)
  }

  const handleDelete = async (e) => {
    e.preventDefault()
    try {
      await userService.remove(userToDelete)
      await userService.getUsers().then(data => setutilisateurs(data))
      setmodalShow(false)
      handleNotif(null, 'L\'utilisateur a bien été supprimé')
    } catch (e) {
      setmodalShow(false)
      handleNotif(e, e.response.data.error)
    }
  }

  const handleClose = (event) => {
    setmodalShow(false)

    event.preventDefault()
  }

  return (
    <Page title="gestion Utilisateur" contextePage="Gestion utilisateur">
      <article id="liste-utilisateur" className="d-flex flex-column align-items-center">
        <div className="card">
          <header className="card-header text-center">Liste des Utilisateurs</header>
          <AllNotification alertType={errorStyle ? 'danger' : 'success'} show={notifShow} notifMessage={notifMessage} />
          <section className="card-body">
            {utilisateurs ? Array.from(utilisateurs).map((utilisateur, index) => (
              <div key={index} className="d-flex flex- justify-content-between align-items-baseline">
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
        </div>
      </article>
    </Page>
  )
}

export default UtilisateursGestion
