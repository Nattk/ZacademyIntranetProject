import React, { Fragment } from 'react'
import Input from './input'
import Upload from './uploadInput'
import Textarea from './textAreaInput'
const FormulaireComponent = (props) => {
  return (
    <Fragment>
      <form className="form-group-who-to-follow" role="form" data-toggle="validator" >
        <section className="col-md-12 col-sm-12 col-xs-12 d-flex  section-style" >
          <div className="col-md-6 col-sm-12 col-xs-12" >
            <Input label="Prenom" name="firstName" placeholder='Inserer un prénom' validation={props.firstNameValidation} value={props.firstName} onChange={props.onChange} />
          </div>
          <div className="col-md-6 col-sm-12 col-xs-12">
            <Input label="Nom de famille" name="lastName" placeholder='Inserer un nom de famille' validation={props.lastNameValidation} value={props.lastName}
              onChange={props.onChange} />
          </div>
        </section>
        <section className="col-md-12 col-sm-12 col-xs-12 d-flex section-style" >
          <div className="col-md-6 col-sm-12 col-xs-12">
            <Input label="Fonction" name="fonction" placeholder="Poste ou fonction de l'utilisateur" validation={props.fonctionValidation} value={props.fonction}
              onChange={props.onChange} />
          </div>
          <div className="col-md-6 col-sm-12 col-xs-12 custom-file section-style upload-style">
            <Upload label="Upload image" id="inputGroupFile02" description="Choisir une photo" validation={props.pictureValidation} value={props.uploadPicture} />
          </div>
        </section>
        <section className="col-md-12 col-sm-12 col-xs-12 section-style">
          <div className="col-md-12 col-sm-12 col-xs-12  section-style ">
            <Textarea label="Description" name="description" placeholder="description de l'utilisateur, (limiter à 8O caractères)" rows="2" validation={props.descriptionValidation} description={props.description}
              onChange={props.onChange} />
          </div>
        </section>
        <section className="col-md-12 col-sm-12 col-xs-12 d-flex section-style">
          <div className="col-md-6 col-sm-12 col-xs-12 ">
            <Input label="Lien GitHub" name="linkGithub" placeholder="Inserer l'adresse Github" value={props.linkGithub} onChange={props.onChange} />
          </div>
          <div className="col-md-6 col-sm-12 col-xs-12 ">
            <Input label="Lien Linkedin" name="linkLinkedin" placeholder="Inserer l'adresse Linkedin" value={props.linkLinkedin} onChange={props.onChange} />
          </div>
        </section>
        <section className="col-md-12 col-sm-12 col-xs-12 section-style">
          <div className="col-md-12 col-sm-12 col-xs-12 ">
            <Input label="Lien Twitter" name="linkTwitter" placeholder="Inserer l'adresse Twitter" value={props.linkTwitter} onChange={props.onChange} />
          </div>
        </section>
      </form>
    </Fragment>
  )
}
export default FormulaireComponent
