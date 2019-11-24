
import DeleteMethod from './deleteMethod'
export default class OnChangeMethod extends DeleteMethod {
  constructor (props) {
    super(props)
    this.onChange = this.onChange.bind(this)
  }

  onChange (e) {
    this.setState({ [e.target.name]: e.target.value })
  }
}
