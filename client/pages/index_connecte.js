import React, { useEffect, useState } from 'react'
import Page from '../layouts/classic'
import { useLocalStorage } from '../components/Login/LoginForm'
// import Carousel from '../components/Carousel/carousel'
import moment from 'moment'

// export default function IndexConnected () {
//   return (
//     <Page title="Accueil" contextePage="Accueil">
//       <Carousel />
//       <article className="card" id="newsfeed_accueil">
//         <section className="card-header">
//             Dernières actualités
//         </section>
//         <section className="card-body" alt="dernière actualité formation">
//           <p className="card-title">Ajout flux RSS par Jérémie Patonnier</p>
//           <Link href="/communaute/Rss/rss"><a className="btn btn-danger">Lien ressource</a></Link>
//         </section>
//         <section className="card-body" alt="dernière actualité formation">
//           <p className="card-title">BBL par Norbert</p>
//           <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" className="btn btn-danger">Lien ressource</a>
//         </section>
//         <section className="card-body" alt="dernière actualité formation">
//           <p className="card-title">Support cours par Cédric Rup</p>
//           <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" className="btn btn-danger">Lien ressource</a>
//         </section>
//       </article>
//     </Page>
//   )
// }

export const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

export default function IndexConnected () {
  const [promo, Setpromotion] = useState()
  const [user] = useLocalStorage('user')
  useEffect(() => {
    if (user.promotion) {
      fetch(`http://localhost:3333/api/promotions/${user.promotion}`)
        .then(response => response.json())
        .then(data => Setpromotion(data))
    }
  }, [])

  moment.locale('fr')
  return (
    <Page title="Accueil" contextePage="Accueil">
      <article className="col-md-10 col-sm-12 col-xs-12  ml-auto mr-auto  " id="promotionByID">
        <div className="col-md-12 col-sm-12 col-xs-12 d-flex section-style-promotion">
          <section>
            <p> <span className="promotion-p-style">Début formation:</span> &nbsp;{promo ? capitalize(moment(promo.start).format('MMMM YYYY')) : null}</p>
            <p> <span className="promotion-p-style">Fin formation:</span> &nbsp;{promo ? capitalize(moment(promo.end).format('MMMM YYYY')) : null}</p>
            <p ><span className="promotion-p-style">Ville:</span> &nbsp;{promo ? promo.city : null}</p>
            <p> <span className="promotion-p-style">Programme:</span>&nbsp;{promo ? promo.programmes.map(x => x.title) : null}</p>
            <p> <span className="promotion-p-style">Formateurs:</span> &nbsp;{promo ? promo.formateurs.map(x => <div>{`${x.firstName} ${x.lastName}`}</div>) : null}</p>
          </section>
          <section className="ml-auto mr-auto">
            <p > <span className="promotion-p-style">Futur consultants:</span> &nbsp; {promo ? promo.eleves.map(x => <div>{`${x.firstName} ${x.lastName}`}</div>) : null}</p>
          </section>
        </div>
      </article>
    </Page>
  )
}
