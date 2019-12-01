import React, { Component } from 'react'
import Button from '../Boutons/Boutons'
import AddToCalendar from '@culturehq/add-to-calendar'
import '@culturehq/add-to-calendar/dist/styles.css'
import '../../styles/sass/styles.scss'
class CalendarSectionCard extends Component {
  render () {
    return (
      <article>
        <section className="section-style-calendar-modal">
          {this.props.headerTitle ? (
            <p className="h2-title-modal" >
              <i className="far fa-clock" />
              &nbsp; {this.props.headerTitle}
            </p>) : null}
          {this.props.modalLocation ? (
            <p>
              <i className="fas fa-map-marker-alt" />
              &nbsp; {this.props.modalLocation}{' '}
            </p>
          ) : null}
          {this.props.modalDescription ? (
            <p>
              <i className="fas fa-bars" />
              &nbsp; {this.props.modalDescription}
            </p>
          ) : null}
          <p className="description-modal-delete">
            {this.props.title}
          </p>
        </section>

        <footer className="text-right" >

          <Button clicked={this.props.onClose} btnType="event-button-cancel">
            Annuler
          </Button>
          {this.props.AddEvents ? (
            <AddToCalendar
              children={this.props.nameChildren}
              event={{
                name: this.props.modalTitle,
                details: this.props.modalDescription,
                location: this.props.modalLocation,
                startsAt: this.props.startsAt ? this.props.startsAt : new Date().toISOString().substr(0, 10),
                endsAt: this.props.endsAt ? this.props.endsAt : new Date().toISOString().substr(0, 10)
              }}
            />
          ) : null}
          {this.props.manageEvents ? (

            <Button clicked={this.props.handleManageEvent} btnType="url-evenement">
              Gérer l'évènement
            </Button>
          ) : null}
          {this.props.refreshEvents ? (
            <Button clicked={this.props.handleRefreshCalendar} btnType="valider">
              Actualiser
            </Button>
          ) : null}
        </footer>
      </article>
    )
  }
}

export default CalendarSectionCard
