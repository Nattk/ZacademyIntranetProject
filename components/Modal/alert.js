import React from 'react'
import { Modal } from 'react-bootstrap'
import Button from '../Boutons/Boutons'
const Alert = (props) => {
	return (
		<Modal {...props} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
			{props.modalHeader ? (
				<Modal.Header closeButton>
					<Modal.Title>{props.headerTitle}</Modal.Title>
				</Modal.Header>
			) : null}
			<Modal.Body>
				<h4 style={{ textAlign: 'center' }}>{props.modalTitle}</h4>
				<p>{props.modalDescription}</p>
			</Modal.Body>
			{props.modalFooter ? (
				<Modal.Footer>
					<Button clicked={props.handleClose} btnType="annuler">
						Annuler
					</Button>
					<Button btnType="valider" clicked={props.handleDelete}>
						Supprimer
					</Button>
				</Modal.Footer>
			) : null}
		</Modal>
	)
}
export default Alert
