import React, { Component } from 'react'
import Page from '../../layouts/classic'
import Card from '../../components/Card/card'
import Button from '../../components/Boutons/Boutons'
import Link from 'next/link'
import Select from 'react-select'
import axios from 'axios'
import Spinner from '../../components/Spinner/spinner'
import { getAllRessources, getAllModules, getAllSequences, getAllPromotions } from '../../services/ressources'

class Ressources extends Component {
  state = {
    ressources: [],
    Promotions: [],
    Modules: [],
    Sequences: [],
    ressourcesFiltered: [],
    ressourcesModules: [],
    ressourcesPromotions: [],
    ressourcesSequences: [],
    promoId: [],
    moduleId: [],
    sequenceId: [],
    ressourcesDispo: 0,
    formateurs: false
  }

  // Get des ressources, modules et séquences dans la base de donnée
  componentDidMount () {
    axios.all([getAllRessources(), getAllModules(), getAllSequences(), getAllPromotions()])
      .then(axios.spread((ressources, modules, sequences, promotions) => {
        this.setState({ Modules: modules.data })
        this.setState({ Sequences: sequences.data })
        this.setState({ Promotions: promotions.data })
        this.setState({ ressources: ressources.data })
      }))
  }

  // Renvoi false si il y'a un doublon entre la ressource selectionné et les ressources déjà sélectionné et filtrés
  doublonsRessources (ressId) {
    const doublon = this.state.ressourcesFiltered.filter(ressfilter => ressfilter.ressId === ressId)
    if (doublon.length) {
      return false
    } else {
      return true
    }
  }

  checkTables (idTable, ressTable, key) {
    for (let i = 0; i < idTable.length; i++) {
      ressTable = ressTable.filter(ress => idTable[i] === ress[key])
    }
    return ressTable
  }

  filtre = (selecteur, event) => {
    // Ces listes sont liés a la state pour qu'elles persistent à chaque appel de fonction
    // Liste des ressources selectionnés et filtrés
    let filtered = [...this.state.ressourcesFiltered]
    // Liste des ressources selectionné en fonction du filtre (promotions, modules ou sequences)
    let modules = [...this.state.ressourcesModules]
    let promotions = [...this.state.ressourcesPromotions]
    let sequences = [...this.state.ressourcesSequences]
    // id des resssources selectonné en fonction du filtre(promotions, modules ou sequences)
    let promoId = [...this.state.promoId]
    let moduleId = [...this.state.moduleId]
    const sequenceId = [...this.state.sequenceId]

    // promo filtrage en fonction de l'évenement
    if (event.action === 'select-option' && event.name === 'Promotions' && selecteur) {
      for (let i = 0, length = selecteur.length; i < length; i++) {
        promoId.push(selecteur[i].id)
        promotions.push(...this.state.ressources.filter(ress => (
          ress.promoId === selecteur[i].id && this.doublonsRessources(ress.ressId)
        )).filter(ress => ress.promoId))
      }
      this.setState({ ressourcesPromotions: promotions })
      this.setState({ promoId: promoId })
    } else if (event.action === 'remove-value' && event.name === 'Promotions') {
      promoId = promoId.filter(id => id !== event.removedValue.id)
      promotions = promotions.filter(promo => (
        promo.promoId !== event.removedValue.id
      ))
      this.setState({ ressourcesPromotions: promotions })
      this.setState({ promoId: promoId })
    } else if (event.action === 'clear' && event.name === 'Promotions') {
      promotions = []
      promoId = []
      this.setState({ ressourcesPromotions: promotions })
      this.setState({ promoId: promoId })
    }
    // module filtre
    if (event.action === 'select-option' && event.name === 'Modules' && selecteur) {
      for (let i = 0, length = selecteur.length; i < length; i++) {
        moduleId.push(selecteur[i].id)
        modules.push(...this.state.ressources.filter(ress => {
          return ress.modId === selecteur[i].id && this.doublonsRessources(ress.ressId)
        }))
      }
      this.setState({ ressourcesModules: modules })
      this.setState({ moduleId: moduleId })
    } else if (event.action === 'remove-value' && event.name === 'Modules') {
      moduleId = moduleId.filter(id => id !== event.removedValue.id)
      modules = modules.filter(modules => (
        modules.modId !== event.removedValue.id && this.doublonsRessources(modules.ressId)
      ))
      this.setState({ ressourcesModules: modules })
      this.setState({ moduleId: moduleId })
    } else if (event.action === 'clear' && event.name === 'Modules') {
      modules = []
      this.setState({ ressourcesModules: modules })
      this.setState({ moduleId: moduleId })
    }
    // sequences filtre
    if (event.action === 'select-option' && event.name === 'Sequences' && selecteur) {
      for (let i = 0, length = selecteur.length; i < length; i++) {
        sequenceId.push(selecteur[i].id)
        sequences.push(...this.state.ressources.filter(ress => {
          return ress.seqId === selecteur[i].id && this.doublonsRessources(ress.ressId)
        }))
      }
      this.setState({ ressourcesSequences: sequences })
    } else if (event.action === 'remove-value' && event.name === 'Sequences') {
      sequences = sequences.filter(sequences => (
        sequences.seqId !== event.removedValue.id && this.doublonsRessources(modules.ressId)
      ))
      this.setState({ ressourcesSequences: sequences })
    } else if (event.action === 'clear' && event.name === 'Sequences') {
      sequences = []
      this.setState({ ressourcesSequences: sequences })
    }

    // Filtrer les tableaux de ressources par rapport aux ID des filtres potentiellement déjà selctionnés
    promotions = this.checkTables(moduleId, promotions, 'modId')
    promotions = this.checkTables(sequenceId, promotions, 'seqId')
    modules = this.checkTables(promoId, modules, 'promoId')
    modules = this.checkTables(sequenceId, modules, 'seqId')
    sequences = this.checkTables(promoId, sequences, 'promoId')
    sequences = this.checkTables(moduleId, sequences, 'modId')

    this.setState({ ressourcesSequences: sequences })
    this.setState({ ressourcesPromotions: promotions })
    this.setState({ ressourcesModules: modules })

    filtered = [...promotions, ...modules, ...sequences]
    this.setState({ ressourcesFiltered: filtered })
  }

  handleDelete = (ressId) => {
    alert('ressource supprimé')
    const ress = this.state.ressources.filter(item => item.ressId !== ressId)
    this.setState({ ressources: ress })
  }

  render () {
    const ressources = this.state.ressourcesFiltered.length ? this.state.ressourcesFiltered : this.state.ressources
    let ressourcesCartes = null
    if (ressources.length) {
      ressourcesCartes = (
        ressources.map((ressource, index) => (
          <Card styleName="ressource-carte d-flex flex-column" key={index}>
            <div className="d-flex flex-row">
              <div>
                <img
                  src="https://ca.slack-edge.com/TDKLZEH1B-UN6RVVAP3-g00f562b54f1-72"
                  alt="profile-user"
                  className="img-socialMedia"
                  aria-describedby="p1"
                />
              </div>
              <section className="d-flex flex-column ressource-details">
                <Link href={ressource.lien}>
                  <h2><a tabindex="0" title="Accéder à la ressource">{ressource.titre}</a></h2>
                </Link>
                <i>{ressource.auteur} . 12 Nov 2019 . {ressource.promotion}</i>
                <i>#{this.state.Modules[ressource.modId].name}</i>
              </section>
            </div>
            <aside className="d-flex flex-row justify-content-end">
              <Link href="./modifier-ressource"><a title="Modifier la ressource" className="btn btn-warning">Modifier</a></Link>
              <Button btnType="annuler" title="Supprimer la ressource" clicked={(ressId) => this.handleDelete(ressource.ressId)}>Supprimer</Button>
            </aside>
          </Card>)))
    } else {
      ressourcesCartes = <Spinner/>
    }

    return (
      <Page title="Ressources" contextePage="Ressources">
        <article className="ressources d-flex flex-column">
          <header className="d-flex flex-row justify-content-between align-items-center">
            {/* select filtre */}
            <Select className="select-component" options={this.state.Promotions} isMulti={true}
              formatCreateLabel={(inputValue) => 'Promotion'}
              noOptionsMessage={(inputValues) => `${inputValues.inputValue} n'est pas disponible`}
              defaultValue="Promotion"
              placeholder="Promotions"
              getOptionLabel={(option) => option.promotion}
              getOptionValue={(option) => option.id}
              onChange={(selecteur, event) => { this.filtre(selecteur, event) }}
              name='Promotions'
            ></Select>
            <Select className="select-component" options={this.state.Modules} isMulti={true}
              formatCreateLabel={(inputValue) => 'Modules'}
              noOptionsMessage={(inputValues) => `${inputValues.inputValue} cette optio...`}
              defaultValue="Modules"
              placeholder="Modules"
              getOptionLabel={(option) => option.name}
              getOptionValue={(option) => option.id}
              onChange={(selecteur, event) => this.filtre(selecteur, event)}
              name='Modules'
            ></Select>
            <Select className="select-component" options={this.state.Sequences} isMulti={true}
              formatCreateLabel={(inputValue) => 'Sequences'}
              noOptionsMessage={(inputValues) => `${inputValues.inputValue} cette optio...`}
              defaultValue="Sequences"
              placeholder="Séquences"
              getOptionLabel={(option) => option.name}
              getOptionValue={(option) => option.id}
              onChange={(selecteur, event) => this.filtre(selecteur, event)}
              name='Sequences'
            ></Select>
            <Link href="./ajouter-ressource">
              <a title="Ajouter une ressource" className="btn btn-success">
                Ajouter une ressource
              </a>
            </Link>
          </header>
          <aside className="align-self-stretch">
            <i>{ressources.length} ressources trouvées</i>
          </aside>
          <section className="ressources-list">
            {ressourcesCartes}
          </section>
          <footer className="d-flex align-items-end">
            <Link href="./ajouter-ressource">
              <a title="Ajouter une ressource" className="btn btn-success">
                  Ajouter une ressource
              </a>
            </Link>
          </footer>
        </article>
      </Page>
    )
  }
}

export default Ressources
