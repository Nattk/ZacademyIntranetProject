import React from 'react'

const Carousel = () => (
  <article className="container fluid">
    <section id="carouselExampleCaptions" className="carousel slide" data-ride="carousel"  alt="carousel formation">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="/slide_1.png"
            className="d-block w-100 carousel-connected " alt="carousel slide 1" />
          <div className="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Nulla vitae elit laibero, a pharetra augue mollis interdum.</p>
          </div>
        </div>
        <div className="carousel-item ">
          <img src="/slide_2.png"
            className="d-block w-100 carousel-connected "  alt="carousel slide 2" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </div>
        </div>
        <div className="carousel-item ">
          <img src="/slide_3.png"
            className="d-block w-100 carousel-connected "  alt="carousel slide 3" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </section>
  </article>
)

export default Carousel
