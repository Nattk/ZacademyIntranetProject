import React from 'react'
import Page from '../../../layouts/classic'
import Link from 'next/link'

const CreaUtilisateur = () => (
  <Page title="Création Utilisateur" contextePage="Créer un utilisateur">
    <article className="gestionProgramme card" id="form_creation_utilisateur">
      <header className="card-header text-center">
        Creation un utilisateur
      </header>
      <form className="container" >
        <section className="section">
          <div className="form-group">
            <label for="username">Nom</label>
            <input type="text" name="username" className="form-control" id="exampleFormControlInput1" placeholder="Nom"></input>
          </div>
          <div className="form-group">
            <label for="userfirstname">Prenom</label>
            <input type="text" name="userfirstname" className="form-control" id="exampleFormControlInput1" placeholder="Prénom"></input>
          </div>
          <div className="form-group">
            <label for="useremail">Email</label>
            <input type="email" name="useremail" className="form-control" id="exampleFormControlInput1" placeholder="Email"></input>
          </div>
          <div className="form-group">
            <label for="userphone">Téléphone</label>
            <input type="Telephone" name="userphone" className="form-control" id="exampleFormControlInput1"
              placeholder="Telephone"></input>
          </div>
          <div className="form-group">
            <label for="choices-groups">Selectionner une promotion</label>
            <select className="form-control" name="choices-groups" id="choices-groups">
              <optgroup label="Casablanca">
                <option value="Casablanca">Casablanca_01</option>
              </optgroup>
              <optgroup label="Montreal">
                <option value="Montreal">Montreal_01</option>
              </optgroup>
              <optgroup label="Paris">
                <option value="Paris">Paris_01</option>
                <option value="Paris">Paris_02</option>
                <option value="Paris">Paris_03</option>
              </optgroup>
              <optgroup label="Rennes">
                <option value="Paris">Rennes_01</option>
                <option value="Paris">Rennes_02</option>
                <option value="Paris">Rennes_03</option>
              </optgroup>
              <optgroup label="Singapor">
                <option value="Singapor">Singapor_01</option>
              </optgroup>
            </select>
          </div>
          <div classNameName="form-group">
            <label for="role-utilisateur">Selectionner un rôle</label>
            <select className="form-control" name="role-utilisateur" id="role">
              <option value="Eleve">Eleve</option>
              <option value="Formateur">Formateur</option>
              <option value="Admin">Admin</option>
            </select>
          </div>
        </section>
        <section className="d-flex flex-row footer-programme-formulaire">
          <button type="button" className="btn btn-primary text-center button-cancel-programme"><Link href="../gestion-utilisateur/gestion-utilisateur">Annuler</Link></button>

          <button type="submit" className="btn btn-primary text-center button-create-programme">Ajouter utilisateur</button>

        </section>
      </form>
    </article>
  </Page>
)

export default CreaUtilisateur
