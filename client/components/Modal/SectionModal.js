import CardContact from '../CardContact/cardContact'
import DeleteCard from './sectionDeleteModal'
import Formulaire from '../Formulaire/formulaire'
import '../../styles/sass/styles.scss'

export const ShowCard = (props) => (
  <CardContact
    key={props.key ? props.key : ''}
    picture={props.picture ? props.picture : ''}
    titleRss={props.titleRss ? props.titleRss.charAt(0).toUpperCase() + props.titleRss.slice(1).toLowerCase() : ''}
    title={props.title}
    content={props.content ? props.content.length > 80 ? props.content.charAt(0).toUpperCase() + props.content.slice(2).toLowerCase().substring(0, 80) + '...' : props.content.charAt(0).toUpperCase() + props.content.slice(1).toLowerCase() : ''}
    mail={props.mail ? props.mail : ''}
    phone={props.phone ? props.phone : ''}
    showButton={props.showButton}
    picture={props.picture}
    remove={props.remove}
    update={props.update}
    linkTwitter={props.linkTwitter ? props.linkTwitter : ''}
    linkMedium={props.linkMedium ? props.linkMedium : ''}
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
    image={props.image}
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
