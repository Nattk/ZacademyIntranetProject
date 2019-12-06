import React, { Component } from 'react'
import Page from '../../../layouts/admin'
import { getItem } from '../../../services/creation-programme'

class Programme extends Component {
	state = {
	  programme: []
	}

	static getInitialProps ({ query }) {
	  return { query }
	}

	componentDidMount () {
	  getItem('programmes', this.props.query.id)
	    .then(programme => {
	      const prog = []
	      prog.push(programme.data)
	      this.setState({ programme: prog })
	    })
	    .catch(err => {
	      console.log(err)
	    })
	}

	render () {
	  let programme = null
	  if (this.state.programme.length > 0) {
	    programme = (
	      <div class="card">
	       <header className="card-header text-center">{this.state.programme[0].title}</header>
	        {this.state.programme[0].modules.map(mod => (
	          <li key={mod.id}>{mod.title}
	            <ul>
	              {mod.sousmodules.map(sousMod => (
	                <li key={sousMod.id}>{sousMod.title}
	                  <ul>
	                    {sousMod.sequences.map(seq => (
	                      <li key={seq.id}>{seq.title}</li>
	                    ))}
	                  </ul>
	                </li>
	              ))}
	            </ul>
	          </li>
	        ))}
	      </div>
	    )
	  }
	  return (
	    <Page title="Modification programme">
	      <article id="Programme" className="d-flex flex-column align-items-center">
	        {programme}
	      </article>
	    </Page>
	  )
	}
}
export default Programme
