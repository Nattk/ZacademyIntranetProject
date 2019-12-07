import React, { Component } from 'react'
import Select from 'react-select'
import { addToProgram, getModules, create } from '../../services/creation-programme'
import Button from '../Boutons/Boutons'

class CreationProgramme extends Component {
    state = {
      title: '',
      items: ''
    }

    componentDidMount () {
      getModules(this.props.name).then(reponse => {
        this.setState({ items: reponse.data })
      }).catch(err => {
        alert(err, 'getModules')
      })
    }

    componentDidUpdate (prevProps) {
      if (this.props.name !== prevProps.name) {
        getModules(this.props.name).then(reponse => {
          this.setState({ items: reponse.data })
        }).catch(err => {
          alert(err, 'getModules')
        })
      }
    }

    handleChange = (event) => {
      this.setState({ title: event.value })
    }

    handleCreate = () => {
      event.preventDefault()
      create(this.props.name, this.state.title).then(response => {
        return getModules(this.props.name)
      }).then(reponse => {
        this.setState({ items: reponse.data })
      })
        .catch(err => {
          alert(err, 'handleCreate')
        })
    }

    handleAdd = () => {
      event.preventDefault()
      addToProgram(this.props.selected.id, this.props.name, this.props.parentId, this.props.selected.title).then(response => {
      }).catch(err => {
        alert(err, 'handleAdd')
      })
    }

    render () {
      return (
        <form className="container">
          <h2>Ajouter un {this.props.name}</h2>
          <section className="d-flex flex-row">
            <input type="text" placeholder={this.state.name} onChange={() => this.handleChange(event.target)}/>
            <button onClick={this.handleCreate} className="btn valider text-center"
            >Créer votre {this.props.name}
            </button>
          </section>
          <section>
          <h2>Selectionner votre {this.props.name}</h2>
          <div className="d-flex flex-row"> 
          <Select className="select-component" options={this.state.items}
            formatCreateLabel={(inputValue) => this.props.name}
            placeholder={this.props.name}
            getOptionLabel={(option) => option.title}
            getOptionValue={(option) => option.title}
            onChange={this.props.select}
            name={this.props.name}
          />
          <Button  btnType="valider" className="add-item" clicked={this.handleAdd}>Ajouter au {this.props.parent}</Button>
          </div>
          </section>
        </form>

      )
    }
}

export default CreationProgramme
