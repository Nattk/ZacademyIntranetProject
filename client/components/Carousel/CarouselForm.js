import React from 'react'

const CarouselForm = () => {
  const handleCarousel = () => {}
  return (
    <form className="login-wrapper" onSubmit={handleCarousel}>
      <input type="submit" id="submit-login" className="login-form" value="Valider" />
    </form>
  )
}

export default CarouselForm
