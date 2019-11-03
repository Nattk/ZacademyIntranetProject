import React from 'react'
import { Modal } from 'react-bootstrap'
import { OverlayTrigger, Tooltip, Button, ButtonToolbar } from 'react-bootstrap'
import AddToCalendar from '@culturehq/add-to-calendar'
import '@culturehq/add-to-calendar/dist/styles.css'
import '../../styles/sass/styles.scss'

const ModalEvent = (props) => {
	return (
		<Modal {...props} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
			{props.modalHeader ? (
				<Modal.Header className="modalHeader">
					<section className="sectionmodalHeader">
						<Modal.Title className="customModalTitle">
							<h1 className="customModalTitle-H1">{props.modalTitle}</h1>
						</Modal.Title>
						{props.deleteEvent ? (
							<div className="sectionModalDeleteEvent">
								<ButtonToolbar>
									<OverlayTrigger
										key="bottom"
										placement="bottom"
										overlay={<Tooltip id={`tooltip-bottom`}>Supprimer</Tooltip>}
									>
										<Button className="modal-button-icon">
											{' '}
											<i class="fas fa-trash " />
										</Button>
									</OverlayTrigger>
								</ButtonToolbar>
							</div>
						) : null}

						<ButtonToolbar>
							<OverlayTrigger
								key="bottom"
								placement="bottom"
								overlay={<Tooltip id={`tooltip-bottom`}>Fermer</Tooltip>}
							>
								<Button
									onClick={props.clicked}
									className="close-button-icon"
									data-dismiss="modal"
									aria-label="Close"
								>
									<span aria-hidden="true">&times;</span>
								</Button>
							</OverlayTrigger>
						</ButtonToolbar>
					</section>
				</Modal.Header>
			) : null}
			<Modal.Body>
				<article>
					<h2 className="customModalTitle-H2">
						<i
							class="far fa-clock"
							style={{ color: '#5f6368', fill: '#5f6368', fontSize: '1.25rem' }}
						/>{' '}
						&nbsp;
						{props.headerTitle}
					</h2>

					{props.modalLocation ? (
						<ButtonToolbar>
							<OverlayTrigger
								key="bottom"
								placement="left"
								overlay={<Tooltip id={`tooltip-bottom`}>Location</Tooltip>}
							>
								<p>
									<i class="fas fa-map-marker-alt" />
									&nbsp; &nbsp; {props.modalLocation}{' '}
								</p>
							</OverlayTrigger>
						</ButtonToolbar>
					) : null}
					{props.modalDescription ? (
						<ButtonToolbar>
							<OverlayTrigger
								key="bottom"
								placement="left"
								overlay={<Tooltip id={`tooltip-bottom`}>Description</Tooltip>}
							>
								<i class="fas fa-bars" />
							</OverlayTrigger>
							<p> &nbsp; &nbsp;{props.modalDescription} </p>
						</ButtonToolbar>
					) : null}
				</article>
			</Modal.Body>
			{props.modalFooter ? (
				<Modal.Footer>
					<Button onClick={props.clicked} className="modal-button-footer">
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
				</Modal.Footer>
			) : null}
		</Modal>
	)
}
export default ModalEvent
