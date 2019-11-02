import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction' // needed for dayClick
import '../../styles/sass/styles.scss'

export default class CalendrierReact extends React.Component {
	render() {
		return <FullCalendar dateClick={this.handleDateClick} plugins={[ dayGridPlugin, interactionPlugin ]} />
	}

	handleDateClick = (arg) => {
		// bind with an arrow function
		let newContainer = document.createElement('div')
		let newSpinner = document.createElement('div')
		newSpinner.setAttribute('id', 'eventSpinner')
		newContainer.setAttribute('id', 'eventNumber')
		const replace = () => {
			var divs = document.querySelectorAll('[id]')
			for (var i = 0, len = divs.length; i < len; i++) {
				var div = divs[i]
				if (div.id.indexOf('eventNumber') > -1) {
					div.parentNode.removeChild(div)
				}
			}
		}
		const detroySpinner = () => {
			var divs = document.querySelectorAll('[id]')
			for (var i = 0, len = divs.length; i < len; i++) {
				var div = divs[i]
				if (div.id.indexOf('eventSpinner') > -1) {
					div.parentNode.removeChild(div)
				}
			}
		}
		replace()

		const years = arg.dateStr.slice(0, 4)
		const month = arg.dateStr.slice(5, 7)
		const day = arg.dateStr.slice(8, 10)
		console.log(day)

		newContainer.innerHTML = `
		<Card>
			<section>
				<div class="main-card">
    		<h1 class="h1_event"> ${day}-${month}-${years}</h1>
				<h2  class="h2_event" > Meetup React - React Native</h2>
    		<p  class="p_event">Le Lorem Ipsum est simplement du faux texte employé dans la composition &nbsp; et la
				mise en page avant impression</p>
				</div>
			</section>
	</Card>

			
`
		newSpinner.innerHTML = `
		<div class="loader "></div>


`
		const displayEvent = () => document.querySelector('.card-event').appendChild(newContainer)

		const displaySpinner = () => document.querySelector('.card-event').appendChild(newSpinner)
		const displayElement = {
			display1() {
				setTimeout(() => {
					displaySpinner()
				})
			},
			display2() {
				setTimeout(() => {
					detroySpinner()
					displayEvent()
				}, 500)
			}
		}
		displayElement.display1()
		displayElement.display2()

		// Backgroud-color
		var styles = document.querySelectorAll('[style]')
		for (var i = 0, len = styles.length; i < len; i++) {
			var style = styles[i]
			if (style.id.indexOf('rgb(178, 30, 62)') > -1) {
				styles.parentNode.removeChild(style)
			}
		}
		if (arg.dayEl.style.backgroundColor === 'rgb(178, 30, 62)') {
			arg.dayEl.style.backgroundColor = '#fff'
			replace()
		} else arg.dayEl.style.backgroundColor = '#b21e3e'

		if (arg.dateStr) {
		}
	}
}
