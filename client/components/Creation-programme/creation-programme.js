import React, { Component } from 'react'
import Select from 'react-select'
import { addToProgram, getModules, create } from '../../services/creation-programme'
import Button from '../Boutons/Boutons'

class CreationProgramme extends Component {
    state = {
      title: '',
      items: '',
      selected: ''
    }

    componentDidMount () {
      getModules(this.props.name).then(reponse => {
        this.setState({ items: reponse.data })
      }).catch(err => {
        alert(err, 'getModules')
      })
    }

    handleChange = (event) => {
      console.log(event)
      this.setState({ title: event.value })
    }

    handleSelect = (newValue, action) => {
      console.log(action)
      switch (action) {
        case 'select-option':
          this.setState({ selected: newValue })
          break
        case 'remove-value':
          this.setState({ selected: newValue })
          break
        case 'clear':
          this.setState({ selected: '' })
          break
        default:
          break
      }
    }

    handleCreate = () => {
      event.preventDefault()
      create(this.props.name, this.state.title).then(response => {
        console.table(response.data)
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
      console.table(this.state.selected)
      addToProgram(this.state.selected.id, this.props.name, this.props.parentId).then(response => {
        console.table(response.data)
      }).catch(err => {
        alert(err, 'handleAdd')
      })
    }

    render () {
      return (
        <form className="container" >
          <h2>Ajouter un {this.props.name}</h2>
          <section className="d-flex flex-row">
            <input type="text" placeholder="modules" onChange={() => this.handleChange(event.target)}/>
            <button onClick={this.handleCreate} className="btn btn-primary text-center"
            >Créer votre {this.props.name}
            </button>
          </section>
          <h2>Selectionner votre {this.props.name}</h2>
          <Select className="select-component" options={this.state.items}
            formatCreateLabel={(inputValue) => inputValue}
            getOptionLabel={(option) => option.title}
            getOptionValue={(option) => option.title}
            onChange={(newValue, actionMeta) => this.handleSelect(newValue, actionMeta.action)}
          />
          <Button clicked={this.handleAdd}>Ajouter au programme</Button>
        </form>

      )
    }
}

export default CreationProgramme
