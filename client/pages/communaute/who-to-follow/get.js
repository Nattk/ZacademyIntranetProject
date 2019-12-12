import CardContact from '../../../components/CardContact/cardContact'
export const contacts = (props) => (
  props.contacts ? props.contacts.map((user, id) => <CardContact key={id} title={user.title} content={user.content} />) : null
)
