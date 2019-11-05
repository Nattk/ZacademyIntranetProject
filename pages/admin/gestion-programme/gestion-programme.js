import React, { Component } from "react"
import Page from '../../../layouts/classic'
import Button from '../../../components/Boutons/Boutons'
import Link from 'next/link'

class ProgrammeGestion extends Component {
  state = {
    programmes : [
      {name:"Développeur Javascript", progId:1},
      {name:"Développeur Java", progId:2},
      {name:"Chef de Projet web", progId:3}
    ]
  }

  handleDelete = (progId) =>{
    alert('Promotion supprimé !');
    const prog = this.state.programmes.filter(item => item.progId !== progId);
    this.setState({programmes : prog});
  }
  
  handleDuplication = (progId) =>{
    alert('Programme  duppliqué !');
    const programmes = this.state.programmes;
    const prog = this.state.programmes.filter(item => item.progId === progId);
    programmes.push(prog[0]);
    this.setState({programmes : programmes});
  }

  render () {
    return (
      <Page title="Gestion des programmes">
      <article className="gestionProgramme card">
        <header className="card-header">
        Liste des programmes
        </header>
        <section className="card-body">
          <ul>
            {this.state.programmes.map((programme, index) =>(
                <li key={index} className="d-flex flex- justify-content-around align-items-baseline">
                <a href="#">{programme.name}</a>
                <Button btnType="dupliquer" clicked={(progId) => this.handleDuplication(programme.progId)}><a>Dupliquer</a></Button>
                <Button btnType="annuler" clicked={(progId) => this.handleDelete(programme.progId)}>Supprimer</Button>
                <Button btnType="modifier"><Link href="./modification-programme"><a>Modifier</a></Link></Button>
              </li>
            ))}
          </ul>
        </section> 
        <footer className="d-flex flex-row align-items-end justify-content-center">
          <Link href="/admin/creation-programme/creation-programme">
            <button type="button" className="btn btn-primary">
            Ajouter un programme
            </button></Link>
        </footer>
      </article>
      </Page>
    )
  }
}
export default ProgrammeGestion
