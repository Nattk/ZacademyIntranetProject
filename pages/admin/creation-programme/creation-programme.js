import React from 'react'
import Page from '../../../layouts/classic'
import Link from 'next/link'

const CreaProgramme = () => (
  <Page title="Création programme" contextePage="Créer un programme">
    <article className="gestionProgramme card" id="form_creation_programme">
      <header className="card-header text-center">
        Creation programme
      </header>
      <form className="container" >
        <section className="section">
          <div className="form-group">
            <label for="programtitle">Titre</label><br></br>
            <input type="text" name="programtitle" className="form-control" id="exampleFormControlInput1"
              placeholder="Intitulé du programme"></input>
          </div>
          <div data-test-hook="groups">
            <label for="modules">Choisir module(s)</label>
            <select className="form-control" name="modules" id="choices-groups" multiple>
              <optgroup label="DEVOPS">
                <option value="Paris">Linux</option>
                <option value="Lyon">Mac</option>
              </optgroup>
              <optgroup label="JavaScript">
                <option value="JavaScript">JavaScript</option>
                <option value="React">React</option>
                <option value="Node">Node</option>
              </optgroup>
              <optgroup label="Basic">
                <option value="HTML">HTML</option>
                <option value="CSS">CSS</option>
                <option value="TypeScript">TypeScript</option>
              </optgroup>
              <optgroup label="Autres">
                <option value="Java">Java</option>
                <option value="Python">Pyhton</option>
                <option value="PHP">PHP</option>
              </optgroup>
            </select>
          </div>
          <br></br>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text description-programme-span">Description</span>
            </div>
            <textarea className="form-control" name="description" aria-label="With textarea"></textarea>
          </div>
        </section>
        <section className="d-flex flex-row footer-programme-formulaire">
          <button type="button" className="btn btn-primary text-center button-cancel-programme"><Link href="../gestion-programme/gestion-programme">Annuler</Link></button>
          <a href="#">
            <button type="submit" className="btn btn-primary text-center button-create-programme">Valider programme</button>
          </a>
        </section>
      </form>
    </article>
  </Page>
)

export default CreaProgramme
