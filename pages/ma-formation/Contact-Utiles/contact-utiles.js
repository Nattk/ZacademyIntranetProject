import ContactCard from '../../../components/Contacts/contactCard'
import Page from '../../../layouts/classic'

const ContactsUtiles = (props) => {
  const contacts =
    [
      {
        name: "J'ai rémi Pas Tonier",
        fonction: 'Formateur principal',
        telephone: '0606060606',
        email: 'pastonier@gmail.com'
      },
      {
        name: 'Joe Nathan',
        fonction: 'React Overlord',
        telephone: '0707070707',
        email: 'jonathan@gmail.com'
      },
      {
        name: 'Nattan Drake',
        fonction: "Sauveur de l'humanité",
        telephone: '090909090909',
        email: 'pasdinspi@gmail.com'
      },
      {
        name: 'Nord Bher',
        fonction: 'Directeur ZA-KA',
        telephone: '01010101010101',
        email: 'troplong@gmail.com'
      }
    ]
  const Rows = () => contacts.map(x =>
    <ContactCard
      key={x.name}
      name={x.name}
      email={x.email}
      fonction={x.fonction}
      telephone={x.telephone}
    />
  )

  return (
    <Page title="Contact Utiles" contextePage="Contact Utiles">
      <article className="profiles flex-column" role="liste des profiles" alt="profil contact utile" id="article_contact_utiles" >
        <div id="div_contact_utiles">
          {Rows()}
        </div>
      </article>
    </Page>
  )
}

export default ContactsUtiles
