import React, { Fragment } from 'react'
import Input from './input'
import Button from '../Boutons/Boutons'
import Textarea from './textAreaInput'
const FormulaireComponent = (props) => {
  return (

    <form className="form-group-who-to-follow" role="form" data-toggle="validator" >
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
            <Input label="Adresse email" type="email" name="mail" placeholder="Inserer une adresse email" value={props.mail} validation={props.mailValidation} onChange={props.onChange} />
          </div>
          <div className="col-md-6 col-sm-12 col-xs-12 ">
            <Input label="Telephone" type="number" name="phone" placeholder="Inserer un numéro de téléphone" value={props.phone} validation={props.phoneValidation} onChange={props.onChange} />
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

      <section className="col-md-12 col-sm-12 col-xs-12 section-style">
        <div className="col-md-12 col-sm-12 col-xs-12  section-style ">
          <Textarea label="Description *" type="text" name="content" placeholder="description" rows="2" validation={props.contentValidation} content={props.content}
            onChange={props.onChange} />
        </div>
        <hr></hr>
      </section>

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
