import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import interactionPlugin from '@fullcalendar/interaction'
import googleCalendarPlugin from '@fullcalendar/google-calendar'
import Modal from '../Modal/modal'
import CalendarSectionCard from '../Modal/sectionCalendarModal'
import momentPlugin from '@fullcalendar/moment'
import frLocale from '@fullcalendar/core/locales/fr'
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
		showAdd: true,
		urlEvent: '',
		refreshPage: ''
	}

	showEvent = () => {
		this.setState({ modalDataEvent: true })
	}

	toggle = (info) => {
		const dataHeaderTitle = JSON.stringify(info.event.start).substr(1, 10)
		const dataModalDescription = JSON.stringify(info.event.extendedProps.description)
		const dataModalTitle = JSON.stringify(info.event.title).slice(1, -1)
		const datEventId = JSON.stringify(info.event.id).slice(1, -1)
		const dataYear = dataHeaderTitle.slice(0, 4)
		const dataMonth = dataHeaderTitle.slice(5, 7)
		const dataDays = dataHeaderTitle.slice(8, 10)
		const DateHeaderTitle = dataDays + '-' + dataMonth + '-' + dataYear
		this.setState((prevState) => ({
			modalShow: !prevState.modal,
			modalTitle: dataModalTitle,
			headerTitle: DateHeaderTitle,
			modalLocation: 'Paris',
			modalDescription: dataModalDescription ? dataModalDescription.slice(1, -1) : dataModalDescription,
			idEvent: datEventId,
			startsAt: dataHeaderTitle,
			endsAt: dataHeaderTitle,
			urlEvent: info.event._def.url
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
		this.setState({ modalShow: false, refreshPage: '' })
	}

	handleUpdate = () => {
		this.setState({ refreshPage: 'autoriser' })
		window.open(this.state.urlEvent)
	}


	render() {
		const details = (
			<CalendarSectionCard modalTitle={this.state.modalTitle}
				modalDescription={this.state.modalDescription}
				modalLocation={this.state.modalLocation}
				headerTitle={this.state.headerTitle}
				AddEvents={this.state.idEvent === null}
				nameChildren={this.state.idEvent === null ? 'Ajouter un évènement' : null}
				manageEvents={this.state.idEvent !== null}
				handleManageEvent={this.handleUpdate}
				refreshEvents={this.state.refreshPage === 'autoriser'}
				handleRefreshCalendar={() => { window.location.reload() }}
				refetchEvents
				startsAt={this.state.startsAt}
				deleteEvent={this.state.idEvent !== null}
				endsAt={this.state.endsAt}
				onClose={this.handleClose} />
		)

		return (
			<React.Fragment>
				<FullCalendar
					timeZone="UTC, Paris"
					locales={[frLocale]}
					locale='fr'
					googleCalendarApiKey="AIzaSyDzjuf_lV9IO6MD14emQWwra-RlE7iAC4c"
					dateClick={this.handleEventClick}
					eventSourcesClick={this.showEvent}
					plugins={[googleCalendarPlugin, dayGridPlugin, interactionPlugin, timeGridPlugin, listPlugin, momentPlugin]}
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
				<Modal
					show={this.state.modalShow}
					onClose={this.handleClose}
					calendar={details}
					titleModal={this.state.modalTitle}
				/>
			</React.Fragment>
		)
	}
}
