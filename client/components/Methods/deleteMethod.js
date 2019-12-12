
import UpdateMethod from './updateMethod'
import DeleteCard from '../Modal/sectionDeleteModal'
import { Fragment } from 'react'
export default class DeleteMethod extends UpdateMethod {
  constructor (props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete (id) {
    const contact = this.state.contacts.filter((user) => user.id !== id)
    const index = this.state.contact.findIndex((user) => user.id === id)
    if (index === -1) { this.state.contact.push('something') } else {
      this.setState({
        contact: contact,
        title: this.state.contact[index].title,
        content: this.state.contact[index].content,
        titleRss: this.state.contact[index].titleRss,
        showModal: false,
        showAlertDelete: true
      })
    }
    setTimeout(() => {
      this.setState({ showAlertDelete: false })
    }, 5000)
  }

  render () {
    return (
      <Fragment>
        <DeleteCard
          handleDelete={this.handleDelete(this.state.id)}
          handleClose={this.props.handleClose}
          title={this.props.title} />
      </Fragment>
    )
  }
}
