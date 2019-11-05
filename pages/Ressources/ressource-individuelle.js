import React, { Component } from 'react'
import Page from '../../layouts/classic'
import Button from '../../components/Boutons/Boutons'
import Card from '../../components/Card/card'
import Link from 'next/link'

class RessourceIndividuelle extends Component {
    state = {
        ressource:{
        titre:"Apprendre le HTML en 5min" , 
        contenu:"ressourceIndividuelle" , 
        promotion:"Promo Rennes 2", 
        auteur:"Nattan Kifoyi", 
        promoId:1 , 
        date:"12/12/19",
        contributeur:1}
        
    }

  render () {
    return (
      <Page title={this.state.ressource.titre} >
        <article className="ressourceIndividuelle">
          <Card styleName="ressourceContent">
            <h1>{this.state.ressource.titre}</h1>
            <div className="d-flex flex-row">
              <img
                src="https://ca.slack-edge.com/TDKLZEH1B-UN6RVVAP3-g00f562b54f1-72"
                alt="profile-user"
                className="img-socialMedia"
              />
            <section className="d-flex flex-column ressourceDetails">
              <i>{this.state.ressource.auteur} . 12/12/2019 . {this.state.ressource.promotion}</i>
              <i>#HTML #CSS</i>
            </section>
          </div>
            <h2>Partie 1</h2>
            <p>Incididunt exercitation cillum consequat laboris aliqua minim.<br/>
            Incididunt sit ut consectetur adipisicing culpa laborum Lorem nostrud pariatur laborum elit commodo commodo ex.<br/> 
            Culpa amet deserunt exercitation cupidatat exercitation Lorem.</p>
            <p>Incididunt exercitation cillum consequat laboris aliqua minim.<br/>
            Incididunt sit ut consectetur adipisicing culpa laborum Lorem nostrud pariatur laborum elit commodo commodo ex.<br/> 
            Culpa amet deserunt exercitation cupidatat exercitation Lorem.</p>
            <p>Incididunt exercitation cillum consequat laboris aliqua minim.<br/>
            Incididunt sit ut consectetur adipisicing culpa laborum Lorem nostrud pariatur laborum elit commodo commodo ex.<br/> 
            Culpa amet deserunt exercitation cupidatat exercitation Lorem.</p>
            <p>Incididunt exercitation cillum consequat laboris aliqua minim.<br/>
            Incididunt sit ut consectetur adipisicing culpa laborum Lorem nostrud pariatur laborum elit commodo commodo ex.<br/> 
            Culpa amet deserunt exercitation cupidatat exercitation Lorem.</p>
            <p>Incididunt exercitation cillum consequat laboris aliqua minim.<br/>
            Incididunt sit ut consectetur adipisicing culpa laborum Lorem nostrud pariatur laborum elit commodo commodo ex.<br/> 
            Culpa amet deserunt exercitation cupidatat exercitation Lorem.</p>
            <h2>Partie 2</h2>
            <p>Incididunt exercitation cillum consequat laboris aliqua minim.<br/>
            Incididunt sit ut consectetur adipisicing culpa laborum Lorem nostrud pariatur laborum elit commodo commodo ex.<br/> 
            Culpa amet deserunt exercitation cupidatat exercitation Lorem.</p>
            <p>Incididunt exercitation cillum consequat laboris aliqua minim.<br/>
            Incididunt sit ut consectetur adipisicing culpa laborum Lorem nostrud pariatur laborum elit commodo commodo ex.<br/> 
            Culpa amet deserunt exercitation cupidatat exercitation Lorem.</p>
        </Card>
        <Button btnType="annuler" title="Retour à la liste des ressources"><Link href="./ressources"><a>Retour à la liste des ressources</a></Link></Button>
        </article>
      </Page>
    )
  }
}
export default RessourceIndividuelle;
