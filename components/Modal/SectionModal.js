import Card from '../Card/card'
import DeleteCard from './sectionDeleteModal'
import Formulaire from '../Formulaire/formulaire'
import { state } from '../Methods/state'
import '../../styles/sass/styles.scss'

export const ShowCard = (props) => (
  <Card
    key={props.key}
    picture={props.picture}
    firstName={props.firstName.charAt(0).toUpperCase() + props.firstName.slice(1).toLowerCase()}
    lastName={props.lastName.toUpperCase()}
    fonction={props.fonction.length > 80 ? props.fonction.charAt(0).toUpperCase() + props.fonction.slice(2).toLowerCase().substring(0, 80) + '...' : props.fonction.charAt(0).toUpperCase() + props.fonction.slice(1).toLowerCase()}
    description={props.description.length > 80 ? props.description.charAt(1).toUpperCase() + props.description.slice(2).toLowerCase().substring(0, 80) + '...' : props.description.charAt(0).toUpperCase() + props.description.slice(1).toLowerCase()}
    mail={props.mail}
    phone={props.phone}
    remove={props.remove}
    update={props.update}
    linkTwitter={props.linkTwitter}
    linkLinkedin={props.linkLinkedin}
    linkGithub={props.linkGithub}
    linkFluxRss={props.linkFluxRss}
  />
)

export const Form = (props) => (
  <Formulaire
    handleClose={props.handleClose}
    clicked={props.clicked}
    buttonName={props.buttonName}
    onChange={props.onChange}
    uploadPicture={state.img}
    firstName={props.firstName}
    lastName={props.lastName}
    fonction={props.fonction}
    phone={props.phone}
    mail={props.mail}
    description={props.description}
    linkGithub={props.linkGithub}
    linkTwitter={props.linkTwitter}
    linkLinkedin={props.linkLinkedin}
    firstNameValidation={props.firstNameValidation}
    lastNameValidation={props.lastNameValidation}
    fonctionValidation={props.fonctionValidation}
    descriptionValidation={props.descriptionValidation}
    phoneValidation={props.phoneValidation}
    mailValidation={props.mailValidation}
    contact={props.contact}
    picture={props.picture}
    influenceur={props.influenceur}
  />

)
export const DeleteDescription = (props) => (
  <DeleteCard
    handleDelete={props.handleDelete}
    handleClose={props.handleClose}
    title={props.title} />
)
