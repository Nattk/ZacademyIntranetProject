import React, { Component } from 'react'
import Page from '../../../layouts/classic'
import Button from '../../../components/Boutons/Boutons'
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
            <h1>{this.state.ressource.titre}</h1>
            <aside>
            <p>{this.state.ressource.auteur} / {this.state.ressource.promotion}</p>
            <p>{this.state.ressource.date}</p>
            </aside>
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
            <p>Incididunt exercitation cillum consequat laboris aliqua minim.<br/>
            Incididunt sit ut consectetur adipisicing culpa laborum Lorem nostrud pariatur laborum elit commodo commodo ex.<br/> 
            Culpa amet deserunt exercitation cupidatat exercitation Lorem.</p>
            <p>Incididunt exercitation cillum consequat laboris aliqua minim.<br/>
            Incididunt sit ut consectetur adipisicing culpa laborum Lorem nostrud pariatur laborum elit commodo commodo ex.<br/> 
            Culpa amet deserunt exercitation cupidatat exercitation Lorem.</p>

        <Button btnType="annuler"><Link href="./ressources">Retour à la liste des ressources</Link></Button>
        </article>
      </Page>
    )
  }
}
export default RessourceIndividuelle;
