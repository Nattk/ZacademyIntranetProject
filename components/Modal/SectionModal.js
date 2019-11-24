import CardContact from '../CardContact/cardContact'
import DeleteCard from './sectionDeleteModal'
import Formulaire from '../Formulaire/formulaire'
import { state } from '../Methods/state'
import '../../styles/sass/styles.scss'

export const ShowCard = (props) => (
  <CardContact
    key={props.key ? props.key : ''}
    picture={props.picture ? props.picture : ''}
    titleRss={props.titleRss ? props.titleRss.charAt(0).toUpperCase() + props.titleRss.slice(1).toLowerCase() : ''}
    firstName={props.firstName ? props.firstName.charAt(0).toUpperCase() + props.firstName.slice(1).toLowerCase() : ''}
    lastName={props.lastName ? props.lastName.toUpperCase() : ''}
    fonction={props.fonction ? props.fonction.length > 80 ? props.fonction.charAt(0).toUpperCase() + props.fonction.slice(2).toLowerCase().substring(0, 80) + '...' : props.fonction.charAt(0).toUpperCase() + props.fonction.slice(1).toLowerCase() : ''}
    description={props.description ? props.description.length > 80 ? props.description.charAt(1).toUpperCase() + props.description.slice(2).toLowerCase().substring(0, 80) + '...' : props.description.charAt(0).toUpperCase() + props.description.slice(1).toLowerCase() : ''}
    mail={props.mail ? props.mail : ''}
    phone={props.phone ? props.phone : ''}
    remove={props.remove}
    update={props.update}
    linkTwitter={props.linkTwitter ? props.linkTwitter : ''}
    linkLinkedin={props.linkLinkedin ? props.linkLinkedin : ''}
    linkGithub={props.linkGithub ? props.linkGithub : ''}
    linkFluxRss={props.linkFluxRss ? props.linkFluxRss : ''}
    rss={props.rss}

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
    rss={props.rss}
    description={props.description}
    linkGithub={props.linkGithub}
    linkTwitter={props.linkTwitter}
    linkLinkedin={props.linkLinkedin}
    titleRss={props.titleRss}
    linkFluxRss={props.linkFluxRss}
    firstNameValidation={props.firstNameValidation}
    lastNameValidation={props.lastNameValidation}
    fonctionValidation={props.fonctionValidation}
    titleValidation={props.titleValidation}
    descriptionValidation={props.descriptionValidation}
    linkFluxRssValidation={props.linkFluxRssValidation}
    phoneValidation={props.phoneValidation}
    mailValidation={props.mailValidation}
    contact={props.contact}
    picture={props.picture}
    influenceur={props.influenceur}
    contactDetail={props.contactDetail}
  />

)
export const DeleteDescription = (props) => (
  <DeleteCard
    handleDelete={props.handleDelete}
    handleClose={props.handleClose}
    title={props.title} />
)
