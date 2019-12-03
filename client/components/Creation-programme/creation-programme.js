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
      console.log('did mount')
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
      console.log(event)
      this.setState({ title: event.value })
    }

    // handleSelect = (newValue, action) => {
    //   console.log(action)
    //   switch (action) {
    //     case 'select-option':
    //       this.setState({ selected: newValue })
    //       break
    //     case 'remove-value':
    //       this.setState({ selected: newValue })
    //       break
    //     case 'clear':
    //       this.setState({ selected: '' })
    //       break
    //     default:
    //       break
    //   }
    // }

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
      console.table(this.props.selected)
      addToProgram(this.props.selected.id, this.props.name, this.props.parentId, this.props.selected.title).then(response => {
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
            <input type="text" placeholder={this.state.name} onChange={() => this.handleChange(event.target)}/>
            <button onClick={this.handleCreate} className="btn btn-primary text-center"
            >Créer votre {this.props.name}
            </button>
          </section>
          <h2>Selectionner votre {this.props.name}</h2>
          <Select className="select-component" options={this.state.items}
            formatCreateLabel={(inputValue) => this.props.name}
            placeholder={this.props.name}
            getOptionLabel={(option) => option.title}
            getOptionValue={(option) => option.title}
            onChange={this.props.select}
            name={this.props.name}
          />
          <Button clicked={this.handleAdd}>Ajouter au programme</Button>
        </form>

      )
    }
}

export default CreationProgramme
