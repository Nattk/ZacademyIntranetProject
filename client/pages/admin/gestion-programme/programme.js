import React, { Component } from 'react'
import Page from '../../../layouts/admin'
import Spinner from '../../../components/Spinner/spinner'
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
	      alert('une erreur est survenue', err)
	    })
	}

	render () {
	  let programme = null
	  if (this.state.programme.length > 0) {
	    programme = (
		<Page title="Modification programme" contextePage={this.state.programme[0].title}>
		<article id="Programme" className="d-flex flex-column align-items-center">
	      <div className="card">
	       <header className="card-header text-center">Détails</header>
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
	      </article>
	    </Page>
	    )
	  }
	  else {
		  programme = <Spinner className="spinner"/>
	  }
	  return (
		<React.Fragment>
			{programme}
		</React.Fragment>
	  )
	}
}
export default Programme
