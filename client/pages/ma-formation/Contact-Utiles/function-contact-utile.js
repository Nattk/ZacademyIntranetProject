import Button from '../../../components/Boutons/Boutons'

export const ContentDetails = (state) => (
  <article>
    <section className="title-style-modal " >
      <p><span className="promotion-p-style"></span>Nom:  {state.lastName}</p>
      <p><span className="promotion-p-style"></span>Prénom: {state.firstName}</p>
      <p><span className="promotion-p-style">Description</span>&nbsp; {state.help}</p>
      {state.phone ? <p><span className="promotion-p-style">Numero de téléphone</span>&nbsp; {state.phone}</p> : null}
      {state.email ? <p><span className="promotion-p-style">Email</span>&nbsp; {state.email}</p> : null}

    </section>

    <footer className="text-right">
      <Button clicked={state.onClose}
        id="confirm-creation-promotion" btnType="valider">
        Revenir
      </Button>
    </footer>
  </article>)
