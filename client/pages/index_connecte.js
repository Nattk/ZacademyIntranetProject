import React, { useEffect, useState, useReducer } from 'react'
import { getAllRSS, getAllFollows, getAllRessources } from '../services/ressources'
import carouselService from '../services/carousel'
import Page from '../layouts/classic'
import { useLocalStorage } from '../components/Login/LoginForm'
import Carousel from '../components/Carousel/carousel'
import CarouselForm from '../components/Carousel/CarouselForm'
import userService from '../services/users'
import axios from 'axios'
// import moment from 'moment'

export default function IndexConnected () {
  const [backUser, setbackUser] = useState('')
  const [user] = useLocalStorage('user', '')
  const [showCarouselForm, setshowCarouselForm] = useState(false)
  const [rss, setRss] = useState([])
  const [follows, setFollows] = useState([])
  const [ressources, setRessources] = useState([])
  const [carousel, setCarousel] = useState([])
  const [notifShow, setnotifShow] = useState(false)
  const [errorStyle, seterrorStyle] = useState(false)
  const [notifMessage, setnotifMessage] = useState('')
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      photo1: '',
      photo2: '',
      photo3: '',
      photo4: ''
    }
  )

  useEffect(() => {
    axios.all([getAllRSS(), getAllFollows(), getAllRessources()])
      .then(axios.spread((rss, follows, ressources) => {
        setRss(rss.data)
        setFollows(follows.data.filter(x => x.promotion === user.promotion))
        setRessources(ressources.data.filter(x => x.promotion.id === user.promotion))
      }))

    carouselService.getAll().then(carousels => setCarousel(carousels.find(x => x.promotion === user.promotion)))
    userService.setToken(user.token)
    userService.getAll().then(res => setbackUser(res))
  }, [])

  const handleCarouselChange = e => {
    const { name, value } = e.target
    setUserInput({ [name]: value })
  }

  const carouselAdminClick = () => {
    setshowCarouselForm(!showCarouselForm)
  }

  const handleNotif = (error, message) => {
    if (error) {
      seterrorStyle(true)
      setnotifMessage(`${error.response.data.error}`)
    } else {
      seterrorStyle(false)
      setnotifMessage(`${message}`)
    }
    setnotifShow(true)
    setTimeout(() => setnotifShow(false), 10000)
  }

  const handleConfirmCarousel = async (e) => {
    e.preventDefault()
    try {
      const carouselUpdate = {
        photo1: userInput.photo1,
        photo2: userInput.photo2,
        photo3: userInput.photo3,
        photo4: userInput.photo4,
        promotionId: user.promotion
      }
      if (carousel) {
        carouselService.update(carousel.id, carouselUpdate)
      } else {
        carouselService.create(carouselUpdate)
      }
      setshowCarouselForm(false)
      handleNotif(null, 'Le carousel a bien été mis à jour')
      setCarousel(carouselUpdate)
    } catch (e) {
      setshowCarouselForm(false)
      handleNotif(e, "Une erreur s'est produite")
    }
  }

  const allData = [...ressources, ...rss, ...follows].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 5)

  useEffect(() => {
    axios.all([getAllRSS(), getAllFollows(), getAllRessources()])
      .then(axios.spread((rss, follows, ressources) => {
        setRss(rss.data)
        console.log('rss', rss)
        setFollows(follows.data)
        console.log('follows', follows)
        setRessources(ressources.data)
        console.log('ressources', ressources)
      }))

    carouselService.getAll().then(carousels => setCarousel(carousels.find(x => x.promotion === user.promotion)))
    userService.setToken(user.token)
    userService.getAll().then(res => setbackUser(res))
  }, [])

  return (
    <Page title={`Accueil ${backUser ? backUser.promotion.title : null}`} contextePage={`Accueil ${backUser ? backUser.promotion.title : null}`}>
      <div>{(backUser.role === 'admin' || backUser.role === 'superadmin') && backUser.promotion
        ? <button className="btn valider" onClick={carouselAdminClick} >Changer le carousel</button>
        : null }
      {showCarouselForm
        ? <CarouselForm {...userInput} handleCarouselChange={handleCarouselChange} confirm={e => handleConfirmCarousel(e)}></CarouselForm>
        : <Carousel {...carousel} alertType={errorStyle ? 'danger' : 'success'} show={notifShow} notifMessage={notifMessage}></Carousel> }</div>
      <div>
        <article className="card" id="newsfeed_accueil">
          <section className="card-header">
          Dernières actualités
          </section>
          {allData
            ? allData.map(x => {
              return (
                <section key={x.id} className="card-body" alt="dernière actualité formation">
                  <p className="card-title">{x.title}</p>
                  <p>{x.content}</p>
                </section>
              )
            })
            : null}
        </article></div>
    </Page>
  )
}

export const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

// export default function IndexConnected () {
//   const [promo, Setpromotion] = useState()
//   const [user] = useLocalStorage('user')
//   useEffect(() => {
//     if (user.promotion) {
//       fetch(`http://localhost:3333/api/promotions/${user.promotion}`)
//         .then(response => response.json())
//         .then(data => Setpromotion(data))
//     }
//   }, [])

//   moment.locale('fr')
//   return (
//     <Page title="Accueil" contextePage="Accueil">
//       <article className="col-md-10 col-sm-12 col-xs-12  ml-auto mr-auto  " id="promotionByID">
//         <div className="col-md-12 col-sm-12 col-xs-12 d-flex section-style-promotion">
//           <section>
//             <p> <span className="promotion-p-style">Début formation:</span> &nbsp;{promo ? capitalize(moment(promo.start).format('MMMM YYYY')) : null}</p>
//             <p> <span className="promotion-p-style">Fin formation:</span> &nbsp;{promo ? capitalize(moment(promo.end).format('MMMM YYYY')) : null}</p>
//             <p ><span className="promotion-p-style">Ville:</span> &nbsp;{promo ? promo.city : null}</p>
//             <p> <span className="promotion-p-style">Programme:</span>&nbsp;{promo ? promo.programmes.map(x => x.title) : null}</p>
//             <p> <span className="promotion-p-style">Formateurs:</span> &nbsp;{promo ? promo.formateurs.map(x => <div>{`${x.firstName} ${x.lastName}`}</div>) : null}</p>
//           </section>
//           <section className="ml-auto mr-auto">
//             <p > <span className="promotion-p-style">Futur consultants:</span> &nbsp; {promo ? promo.eleves.map(x => <div>{`${x.firstName} ${x.lastName}`}</div>) : null}</p>
//           </section>
//         </div>
//       </article>
//     </Page>
//   )
// }
