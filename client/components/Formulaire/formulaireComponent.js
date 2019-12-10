import React, { Fragment } from 'react'
import Input from './input'
import Textarea from './textAreaInput'
const FormulaireComponent = (props) => {
  return (

    <form className="form-group-who-to-follow" role="form" data-toggle="validator" >
      {props.contact ? (
        <section className="col-md-12 col-sm-12 col-xs-12 d-flex  section-style" >
          <div className="col-md-6 col-sm-12 col-xs-12" >
            <Input label="Prenom" type="text" name="firstName" placeholder='Inserer un prénom' validation={props.firstNameValidation} value={props.firstName} onChange={props.onChange} />
          </div>
          <div className="col-md-6 col-sm-12 col-xs-12">
            <Input label="Nom de famille" type="text" name="lastName" placeholder='Inserer un nom de famille' validation={props.lastNameValidation} value={props.lastName}
              onChange={props.onChange} />
          </div>
        </section>) : null}
      {props.contactDetail ? (
        <section className="col-md-12 col-sm-12 col-xs-12 d-flex section-style">
          <div className="col-md-6 col-sm-12 col-xs-12 ">
            <Input label="Adresse email" type="email" name="mail" placeholder="Inserer une adresse email" value={props.mail} validation={props.mailValidation} onChange={props.onChange} />
          </div>
          <div className="col-md-6 col-sm-12 col-xs-12 ">
            <Input label="Telephone" type="number" name="phone" placeholder="Inserer un numéro de téléphone" value={props.phone} validation={props.phoneValidation} onChange={props.onChange} />
          </div>
        </section>) : null}
      {props.rss ? (
        <section className="col-md-12 col-sm-12 col-xs-12 d-flex section-style">
          <div className="col-md-6 col-sm-12 col-xs-12 ">
            <Input label="Titre flux rss" type="text" name="titleRss" placeholder="Inserer un titre " value={props.titleRss} validation={props.titleValidation} onChange={props.onChange} />
          </div>
          <div className="col-md-6 col-sm-12 col-xs-12 ">
            <Input label="Lien flux rss" type="text" name="linkFluxRss" placeholder="Inserer un lien flux rss" value={props.linkFluxRss} validation={props.linkFluxRssValidation} onChange={props.onChange} />
          </div>
        </section>) : null}
      {props.contact ? (
        <section className="col-md-12 col-sm-12 col-xs-12 d-flex section-style" >

          <div className="col-md-6 col-sm-12 col-xs-12">
            <Input label="Fonction" name="fonction" placeholder="Poste ou fonction de l'utilisateur" validation={props.fonctionValidation} value={props.fonction}
              onChange={props.onChange} />
          </div>

          <div className="col-md-6 col-sm-12 col-xs-12 custom-file section-style upload-style">
            <Input label="Lien avatar" type="text" name="image" placeholder="Inserer un lien d'image " value={props.image} onChange={props.onChange} />
          </div>

        </section>) : null}
      <section className="col-md-12 col-sm-12 col-xs-12 section-style">
        <div className="col-md-12 col-sm-12 col-xs-12  section-style ">
          <Textarea label="Description" type="text" name="description" placeholder="description de l'utilisateur, (limiter à 8O caractères)" rows="2" validation={props.descriptionValidation} description={props.description}
            onChange={props.onChange} />
        </div>
      </section>
      {props.influenceur ? (
        <Fragment>
          <section className="col-md-12 col-sm-12 col-xs-12 d-flex section-style">
            <div className="col-md-6 col-sm-12 col-xs-12 ">
              <Input label="Lien GitHub" type="text" name="linkGithub" placeholder="Inserer l'adresse Github" value={props.linkGithub} onChange={props.onChange} />
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12 ">
              <Input label="Lien Linkedin" type="text" name="linkLinkedin" placeholder="Inserer l'adresse Linkedin" value={props.linkLinkedin} onChange={props.onChange} />
            </div>
          </section>
          <section className="col-md-12 col-sm-12 col-xs-12 section-style">
            <div className="col-md-12 col-sm-12 col-xs-12 ">
              <Input label="Lien Twitter" type="text" name="linkTwitter" placeholder="Inserer l'adresse Twitter" value={props.linkTwitter} onChange={props.onChange} />
            </div>
          </section>
        </Fragment>) : null}

    </form>

  )
}
export default FormulaireComponent
