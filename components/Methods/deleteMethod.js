
import UpdateMethod from './updateMethod'
export default class DeleteMethod extends UpdateMethod {
  constructor (props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete (id) {
    const users = this.state.fakeData.filter((user) => user.id !== id)
    const index = this.state.fakeData.findIndex((user) => user.id === id)
    if (index === -1) { this.state.fakeData.push('something') } else {
      this.setState({ fakeData: users, lastName: this.state.fakeData[index].lastName, firstName: this.state.fakeData[index].firstName, showModal: false, showAlertDelete: true })
    }
    setTimeout(() => {
      this.setState({ showAlertDelete: false })
    }, 5000)
  }
}
