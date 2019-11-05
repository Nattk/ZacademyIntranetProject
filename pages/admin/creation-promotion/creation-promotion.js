import React from 'react'
import Page from '../../../layouts/classic'
import Link from 'next/link'

const CreaPromotion = () => (
  <Page title="Création promotion">
    <article className="gestionProgramme card" id="form_creation_promotion">
      <header className="card-header text-center">
        Creation une promotion
      </header>
      <form className="container" >
        <section className="section">

          <div className="form-group">
            <label for="titre_promotion">Titre</label>
            <input type="text" name="titre_promotion" className="form-control" id="exampleFormControlInput1"
              placeholder="Intitulé de la promotion"></input>
          </div>
          <div className="form-group">
            <label for="ville">Selectionner Ville</label>
            <select className="form-control" name="ville" id="exampleFormControlSelect1">
              <optgroup label=" France">
                <option value="Paris">Paris</option>
                <option value="Lyon">Lyon</option>
                <option value="Nantes">Nantes</option>
                <option value="Rennes">Rennes</option>
                <option value="Lille">Lille</option>
                <option value="Toulouse">Toulouse</option>
              </optgroup>
              <optgroup label="Canada">
                <option value="Montreal">Montreal</option>
              </optgroup>
              <optgroup label="Singapor">
                <option value="Singapor">Singapor</option>
              </optgroup>
              <optgroup label="Maroc">
                <option value="Casablanca">Casablanca</option>
              </optgroup>

            </select>
          </div>
          <div data-test-hook="groups">
            <label for="programme">Choisir Programme</label>
            <select className="form-control" name="programme" id="programme" multiple>
              <optgroup label="Front-End">
                <option value="JavaScript">JavaScript</option>
                <option value="CSS Overlord">CSS Overlord</option>
              </optgroup>
              <optgroup label="Back-end">
                <option value="Java">Java</option>
                <option value="Python">Python</option>
              </optgroup>
              <optgroup label="DEVOPS">
                <option value="Java">Docker Jenkins K8S</option>
              </optgroup>
              <optgroup label="Marketing">
                <option value="Bullshit">Bullshit</option>
                <option value="Other Bullshit">Other Bullshit</option>
              </optgroup>
            </select>
          </div><br></br>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text description-programme-span">Description</span>
            </div>
            <textarea className="form-control" aria-label="With textarea"></textarea>
          </div>
          <div className="form-group">
            <label>Debut formation</label>
            <input type="date" name="bday" max="3000-12-31" min="1000-01-01" className="form-control"></input>
          </div>
          <div className="form-group">
            <label>Fin formation</label>
            <input type="date" name="bday" min="1000-01-01" max="3000-12-31" className="form-control"></input>
          </div>
        </section>
        <section className="d-flex flex-row footer-programme-formulaire">
          <button type="button" className="btn btn-primary text-center button-cancel-programme"><Link href="../gestion-promotion/gestion-promotion">Annuler</Link></button>
          <a href="#">
            <button type="submit" className="btn btn-primary text-center button-create-programme">Valider promotion</button>
          </a>
        </section>
      </form>
    </article>
  </Page>
)

export default CreaPromotion
