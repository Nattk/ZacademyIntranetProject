import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import interactionPlugin from '@fullcalendar/interaction' // needed for dayClick
import googleCalendarPlugin from '@fullcalendar/google-calendar'
import ModalEvent from '../Modal/modalEvent'
import '../../styles/sass/styles.scss'

export default class CalendrierReact extends React.Component {
	state = {
		modalDataEvent: false,
		modalShow: false,
		idEvent: '',
		headerTitle: '',
		modalDescription: '',
		modalTitle: '',
		titleDescription: '',
		addEventToGoogleCalendar: '',
		startsAt: new Date().toISOString().substr(0, 10),
		endsAt: new Date().toISOString().substr(0, 10),
		modalLocation: 'Paris',
		showAdd: true
	}

	showEvent = () => {
		this.setState({ modalDataEvent: true })
	}

	toggle = (info) => {
		let dataHeaderTitle = JSON.stringify(info.event.start).substr(1, 10)
		let dataModalDescription = JSON.stringify(info.event.extendedProps.description)
		let dataModalTitle = JSON.stringify(info.event.title).slice(1, -1)
		let datEventId = JSON.stringify(info.event.id).slice(1, -1)
		this.setState((prevState) => ({
			modalShow: !prevState.modal,
			modalTitle: dataModalTitle,
			headerTitle: dataHeaderTitle,
			modalLocation: 'Paris',
			modalDescription: dataModalDescription ? dataModalDescription.slice(1, -1) : dataModalDescription,
			idEvent: datEventId,
			startsAt: dataHeaderTitle,
			endsAt: dataHeaderTitle
		}))

		info.jsEvent.preventDefault()
	}

	handleEventClick = (info) => {
		this.setState({
			modalShow: true,
			idEvent: null,
			modalTitle: null,
			modalLocation: null,
			modalDescription: null,
			headerTitle: info.dateStr,
			startsAt: info.dateStr,
			endsAt: info.dateStr
		})
	}

	handleClose = () => {
		this.setState({ modalShow: false })
	}

	render() {
		return (
			<React.Fragment>
				<FullCalendar
					timeZone="UTC, Paris"
					googleCalendarApiKey="AIzaSyDzjuf_lV9IO6MD14emQWwra-RlE7iAC4c"
					dateClick={this.handleEventClick}
					eventSourcesClick={this.showEvent}
					plugins={[ googleCalendarPlugin, dayGridPlugin, interactionPlugin, timeGridPlugin, listPlugin ]}
					header={{
						left: 'title ',
						center: 'dayGridMonth,timeGridWeek',
						right: 'prev,next,'
					}}
					footer={{
						left: 'prevYear,nextYear'
					}}
					eventClick={this.toggle}
					events={{ googleCalendarId: 'v2370j39rbre3q4ea6vjjctp7c@group.calendar.google.com' }}
				/>
				<ModalEvent
					show={this.state.modalShow}
					modalHeader
					headerTitle={this.state.headerTitle}
					modalTitle={this.state.modalTitle}
					modalDescription={this.state.modalDescription}
					modalLocation={this.state.modalLocation}
					AddEvents
					nameChildren={this.state.idEvent !== null ? "Modifier l'évènement" : 'Ajouter un évènement'}
					startsAt={this.state.startsAt}
					deleteEvent={this.state.idEvent !== null ? true : false}
					endsAt={this.state.endsAt}
					modalFooter
					clicked={this.handleClose}
				/>
			</React.Fragment>
		)
	}
}
