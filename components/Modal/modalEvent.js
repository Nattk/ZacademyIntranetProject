import React from 'react'
import Button from '../Boutons/Boutons'
import Modal from 'react-responsive-modal'
import AddToCalendar from '@culturehq/add-to-calendar'
import '@culturehq/add-to-calendar/dist/styles.css'
import '../../styles/sass/styles.scss'

const ModalEvent = (props) => {
  return (
    <Modal open={props.show} center>

      <header>
        <h1 className="customModalTitle-H1">{props.modalTitle}</h1>
        <span aria-hidden="true" onClick={props.onClose} className=" containerModalHeaderRight close-modal-icon">&times;</span>
      </header>
      <hr></hr>
      <main>
        <article>
          {props.headerTitle ? (
            <section>
              <h2 className="customModalTitle-H2">
                <i class="far fa-clock" />
                &nbsp; {props.headerTitle}
              </h2>
            </section>) : null}
          {props.modalLocation ? (
            <section>
              <p>
                <i class="fas fa-map-marker-alt" />
                &nbsp; {props.modalLocation}{' '}
              </p>
            </section>) : null}
          {props.modalDescription ? (
            <section >
              <p>
                <i class="fas fa-bars" />
                &nbsp; {props.modalDescription}
              </p>
            </section>
          ) : null}
        </article>

      </main>

      {
        props.modalFooter ? (
          <footer className='footerStyle'>

            <Button clicked={props.onClose} btnType="event-button-cancel">
              Annuler
            </Button>
            {props.AddEvents ? (
              <AddToCalendar
                children={props.nameChildren}
                event={{
                  name: props.modalTitle,
                  details: props.modalDescription,
                  location: props.modalLocation,
                  startsAt: props.startsAt ? props.startsAt : new Date().toISOString().substr(0, 10),
                  endsAt: props.endsAt ? props.endsAt : new Date().toISOString().substr(0, 10)
                }}
              />
            ) : null}
            {props.manageEvents ? (

              <Button clicked={props.handleManageEvent} btnType="url-evenement">
                Gérer l'évènement
              </Button>
            ) : null}
            {props.refreshEvents ? (
              <Button clicked={props.handleRefreshCalendar} btnType="valider">
                Actualiser
              </Button>
            ) : null}

          </footer>
        ) : null
      }

    </Modal>
  )
}
export default ModalEvent
