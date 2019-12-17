import React, { Fragment } from 'react'
import Input from './input'
import Button from '../Boutons/Boutons'
import Textarea from './textAreaInput'
const FormulaireComponent = (props) => {
  return (

    <form className="form-group-who-to-follow" role="form" data-toggle="validator" >
      {props.contactUtil ? (
        <section className="col-md-12 col-sm-12 col-xs-12 d-flex  section-style" >
          <div className="col-md-6 col-sm-12 col-xs-12" >
            <Input label="Nom *" type="text" name="lastName" placeholder='Inserer un nom ' value={props.lastName} validation={props.lastNameValidation} onChange={props.onChange} />
          </div>
          <div className="col-md-6 col-sm-12 col-xs-12">
            <Input label="Prenom *" type="text" name="firstName" placeholder="Inserer un prénom  " value={props.firstName} validation={props.firstNameValidation} onChange={props.onChange} />
          </div>
        </section>) : null}

      {props.contact ? (
        <section className="col-md-12 col-sm-12 col-xs-12 d-flex  section-style" >
          <div className="col-md-6 col-sm-12 col-xs-12" >
            <Input label="Titre *" type="text" name="title" placeholder='Inserer un titre ' validation={props.titleValidation} value={props.title} onChange={props.onChange} />
          </div>
          <div className="col-md-6 col-sm-12 col-xs-12">
            <Input label="Lien avatar" type="text" name="avatar" placeholder="Inserer un lien d'image  " value={props.avatar} onChange={props.onChange} />
          </div>
        </section>) : null}
      {props.contactDetail ? (
        <section className="col-md-12 col-sm-12 col-xs-12 d-flex section-style">
          <div className="col-md-6 col-sm-12 col-xs-12 ">
            <Input label="Adresse email *" type="email" name="email" placeholder="Inserer une adresse email" value={props.mail} validation={props.emailValidation} onChange={props.onChange} />
          </div>
          <div className="col-md-6 col-sm-12 col-xs-12 ">
            <Input label="Telephone *" type="number" name="phone" placeholder="Inserer un numéro de téléphone" value={props.phone} validation={props.phoneValidation} onChange={props.onChange} />
          </div>
        </section>) : null}
      {props.rss ? (
        <section className="col-md-12 col-sm-12 col-xs-12 d-flex section-style">
          <div className="col-md-6 col-sm-12 col-xs-12" >
            <Input label="Titre *" type="text" name="title" placeholder='Inserer un titre ' validation={props.titleValidation} value={props.title} onChange={props.onChange} />
          </div>
          <div className="col-md-6 col-sm-12 col-xs-12 ">
            <Input label="Lien flux rss *" type="text" name="url" id="urlRss" placeholder="Inserer un lien flux rss " value={props.url} validation={props.urlValidation} onChange={props.onChange} />
          </div>
        </section>) : null}
      {props.contentDescription
        ? <section className="col-md-12 col-sm-12 col-xs-12 section-style">
          <div className="col-md-12 col-sm-12 col-xs-12  section-style ">
            <Textarea label="Description *" type="text" name='content' placeholder="description" rows="2" validation={props.contentValidation} value={props.content}
              onChange={props.onChange} />
          </div>
          <hr></hr>
        </section> : null}
      {props.helpDescription
        ? <section className="col-md-12 col-sm-12 col-xs-12 section-style">
          <div className="col-md-12 col-sm-12 col-xs-12  section-style ">
            <Textarea label="Description *" type="text" name="help" placeholder="description" rows="2" validation={props.contentValidation} value={props.help}
              onChange={props.onChange} />
          </div>
          <hr></hr>
        </section>

        : null}

      {props.picture
        ? <section className="col-md-12 col-sm-12 col-xs-12 d-flex  section-style" >
          <div className="col-md-6 col-sm-12 col-xs-12">
            <Input label="Lien avatar" type="text" name="avatar" placeholder="Inserer un lien d'image  " value={props.avatar} onChange={props.onChange} />
          </div>
        </section> : null}
      {props.influenceur ? (
        <Fragment>
          <section className="col-md-12 col-sm-12 col-xs-12 d-flex section-style">
            <p className="col-md-12 col-sm-12 col-xs-12 " id="influenceur">Veuillez insérer un ou plusieurs liens *</p>
          </section>
          <section className="col-md-12 col-sm-12 col-xs-12 d-flex section-style">

            <div className="col-md-6 col-sm-12 col-xs-12 ">
              <Input label="Lien GitHub" type="text" name="github" placeholder="Inserer l'adresse Github" value={props.github} onChange={props.onChange} />
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12 ">
              <Input label="Lien Medium" type="text" name="medium" placeholder="Inserer l'adresse Medium" value={props.medium} onChange={props.onChange} />
            </div>
          </section>
          <section className="col-md-12 col-sm-12 col-xs-12 section-style">
            <div className="col-md-12 col-sm-12 col-xs-12 ">
              <Input label="Lien Twitter" type="text" name="twitter" placeholder="Inserer l'adresse Twitter" value={props.twitter} onChange={props.onChange} />
            </div>
          </section>
        </Fragment>) : null}
      <section className="text-right" >
        <Button clicked={props.handleClose} btnType="annuler">
          Annuler
        </Button>
        <Button clicked={props.clicked} btnType="valider">
          {props.buttonName}
        </Button>
      </section>
    </form>

  )
}
export default FormulaireComponent
