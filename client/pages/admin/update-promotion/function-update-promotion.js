
import Router from 'next/router'
import axios from 'axios'
import { capitalize } from '../../index_connecte'
import Button from '../../../components/Boutons/Boutons'
import moment from 'moment'
moment.locale('fr')
export const configuration = (state) => {
  const eleveSelected = { eleveId: state.studentsOption.map(el => el.id) }
  const formateurSelected = { formateurId: state.formateursOption.map(el => el.id) }
  const elements = {
    title: state.title,
    city: state.selectedCity.value,
    programmes: state.selectedProgramme.id,
    start: state.startDate,
    end: state.endDate,
    formateurs: formateurSelected.formateurId,
    eleves: eleveSelected.eleveId,
    slack: state.slack
  }
  return elements
}
export const handleUpdate = (state, updateState) => {
  axios.put(`http://localhost:3333/api/promotions/${state.id}`, configuration(state))
    .then((data) => {
      updateState({ showModal: false, promotion: data, showAlertUpdate: true })
      return Router.push('/admin/Accueil/accueil')
    })
    .catch((err) => console.log('err', err))
}

export const start = (state) => state.startDate ? capitalize(moment(state.startDate).format('DD MMMM YYYY')) : null
export const end = (state) => state.endDate ? capitalize(moment(state.endDate).format('DD MMMM YYYY')) : null
export const formateurs = (state) => state.formateursOption ? state.formateursOption.map(el => <p>{el.firstName.concat(' ', el.lastName, ', ')}</p>) : state.formateursOption
export const students = (state) => state.studentsOption ? state.studentsOption.map(el => el.firstName.concat(' ', el.lastName, ', ')) : state.studentsOption
export const RecapPromotion = (state) =>

  <article>
    <section className="title-style-modal">
      <p><span className="promotion-p-style">Nom de promotion:</span> {state.title}</p>
      <p><span className="promotion-p-style">Ville:</span>&nbsp; {state.selectedCity}</p>
      <p><span className="promotion-p-style">Début formation:</span>&nbsp; {state.start}</p>
      <p><span className="promotion-p-style">Fin formation:</span>&nbsp; {state.end}</p>
      <p><span className="promotion-p-style">Formateurs:</span>&nbsp; {state.formateurs}</p>
      <p><span className="promotion-p-style">Programme :</span>&nbsp; {state.selectedProgramme} </p>
      <p><span className="promotion-p-style">Futur consultants:</span>&nbsp; {state.students} </p>
      {state.slack ? <p><span className="promotion-p-style">Lien Slack:</span>&nbsp; {state.slack} </p> : null}
    </section>
    <section>
      <p>Vous êtes sur le point de quitter votre espace modification promotion.</p>
      <p> Vous seriez redirigé vers votre espace accueil promotion.
            Êtes vous sur de vouloir modifier cette promotion  ?</p>  </section>
    <footer className="text-right">
      <Button clicked={state.clicked} id="confirm-creation-promotion" btnType="valider">
        Confirmer
      </Button>
    </footer>
  </article>
