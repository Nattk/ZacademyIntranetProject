import React from 'react'
import AllNotification from '../Notifications/notifications'

const Carousel = ({ photo1, photo2, photo3, photo4, alertType, show, notifMessage }) => {
  return (
    <article className="container fluid carousel-promo">
      <AllNotification alertType={alertType} show={show} notifMessage={notifMessage}/>
      <section id="carouselExampleCaptions" className="carousel slide" data-interval="false" alt="carousel formation">
        <ol className="carousel-indicators">
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={photo1 || '/slide_1.jpg'}
              className="d-block w-100 carousel-connected " alt="carousel slide 1" />
            <div className="carousel-caption d-none d-md-block">
            </div>
          </div>
          <div className="carousel-item ">
            <img src={photo2 || '/slide_2.jpg'}
              className="d-block w-100 carousel-connected " alt="carousel slide 2" />
            <div className="carousel-caption d-none d-md-block">
            </div>
          </div>
          <div className="carousel-item ">
            <img src={photo3 || '/slide_3.jpg'}
              className="d-block w-100 carousel-connected " alt="carousel slide 3" />
            <div className="carousel-caption d-none d-md-block">
            </div>
          </div>
          <div className="carousel-item ">
            <img src={photo4 || '/slide_3.jpg'}
              className="d-block w-100 carousel-connected " alt="carousel slide 4" />
            <div className="carousel-caption d-none d-md-block">
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" title="photo précédente" href="#carouselExampleCaptions" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" title="photo suivante" href="#carouselExampleCaptions" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </section>
    </article>
  )
}

export default Carousel
