import React, { Component } from "react"
import Page from '../../../layouts/admin'
import Button from '../../../components/Boutons/Boutons'
import Link from 'next/link'

class ModificationProgramme extends Component {
  state = {
    programme : [
      {name:"Developpeur Javascript"}
    ]
  }

  handleUpdate = () =>{
    alert('Utilisateur Modifié !');
  }

  render () {
    return (
      <Page title="Modification programme">
        <article class="gestionProgramme card" id="form_creation_programme">
          <header class="card-header text-center">
              Modification programme
          </header>
          <form class="container" >
            <section class="section">
              <div class="form-group">
                <label for="programtitle">Titre</label><br></br>
                <input type="text" name="programtitle" class="form-control" id="exampleFormControlInput1"
                  value={this.state.programme[0].name}></input>
              </div>
              <div data-test-hook="groups">
                <label for="modules">Choisir module(s)</label>
                <select class="form-control" name="modules" id="choices-groups" multiple>
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
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text description-programme-span">Description</span>
                </div>
                <textarea class="form-control" name="description" aria-label="With textarea"></textarea>
              </div>
            </section>
            <section class="d-flex flex-row footer-programme-formulaire">
            <button type="button" class="btn btn-primary text-center button-cancel-programme"><Link href="./gestion_programme">Annuler</Link></button>
              <a href="#">
                <button type="submit" class="btn btn-primary text-center button-create-programme">Valider programme</button>
              </a>
            </section>
          </form>
        </article>
      </Page>
    )
  }
}
export default ModificationProgramme
