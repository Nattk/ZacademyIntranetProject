import React, { useEffect, useState } from 'react'
import Page from '../layouts/classic'
import { useLocalStorage } from '../components/Login/LoginForm'
import Carousel from '../components/Carousel/carousel'

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


export default function IndexConnected() {
  const [promotion, Setpromotion] = useState()
  const [user] = useLocalStorage('user')
  useEffect(() => {
    fetch(`http://localhost:3333/api/promotions/${user.promotion}`)
      .then(response => response.json())
      .then(data => Setpromotion(data))
  }, [])

  console.log('promotion', promotion)
  return (
    <Page title="Accueil" contextePage="Accueil">
      <article className="col-md-10 col-sm-12 col-xs-12  ml-auto mr-auto  " id="promotionByID">
        <div className="col-md-12 col-sm-12 col-xs-12 d-flex section-style-promotion">
          <section>
            <p> <span className="promotion-p-style">Début formation:</span> &nbsp;{promotion ? promotion.start : null}</p>
            <p> <span className="promotion-p-style">Fin formation:</span> &nbsp;{promotion ? promotion.end : null}</p>
            <p ><span className="promotion-p-style">Ville:</span> &nbsp;{promotion ? promotion.city : null}</p>
            <p> <span className="promotion-p-style">Programme:</span>&nbsp;{promotion ? promotion.programmes.map(x => x.title) : null}</p>
            <p> <span className="promotion-p-style">Formateurs:</span> &nbsp;{promotion ? promotion.formateurs.map(x => `${x.firstName} ${x.lastName}`) : null}</p>
          </section>
          <section className="ml-auto mr-auto">
            <p > <span className="promotion-p-style">Futur consultants:</span> &nbsp; {promotion ? promotion.eleves.map(x => <div>{`${x.firstName} ${x.lastName}`}</div>) : null}</p>
          </section>
        </div>
      </article>
    </Page>
  )
}
