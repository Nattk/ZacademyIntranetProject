import React from 'react'

const CarouselForm = (props) => (
  <form className="login-wrapper" onSubmit={props.confirm}>
    <label htmlFor="photo1" />
    <input type="text" name="photo1" placeholder="Url première photo carousel" value={props.photo1} onChange={props.handleCarouselChange} class="login-form"/>
    <label htmlFor="photo2" />
    <input type="text" name="photo2" placeholder="Url photo n°2 carousel (optionnelle)" value={props.photo2} onChange={props.handleCarouselChange} class="login-form"/>
    <label htmlFor="photo3" />
    <input type="text" name="photo3" placeholder="Url photo n°3 carousel (optionnelle)" value={props.photo3} onChange={props.handleCarouselChange} class="login-form"/>
    <label htmlFor="photo4" />
    <input type="text" name="photo4" placeholder="Url photo n°4 carousel (optionnelle)" value={props.photo4} onChange={props.handleCarouselChange} class="login-form" />
    <input type="submit" id="submit-login" class="login-form" />
  </form>

)

export default CarouselForm
