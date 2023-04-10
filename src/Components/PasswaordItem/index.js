import {Component} from 'react'
import './index.css'

class Password extends Component {
  deleteItem = () => {
    const {details, onDelete} = this.props
    const {id} = details
    onDelete(id)
  }

  showPassword = () => {
    const {details, isActive} = this.props
    const {passwordT} = details

    if (isActive) {
      return <p>{passwordT}</p>
    }
    return (
      <img
        src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
        alt="stars"
        className="stars"
      />
    )
  }

  render() {
    const {details} = this.props
    const {websiteT, userT} = details
    return (
      <li className="list-item">
        <p className="initial">{userT[0]}</p>
        <div>
          <p>{websiteT}</p>
          <p>{userT}</p>
          {this.showPassword()}
        </div>
        <button
          type="button"
          className="button"
          onClick={this.deleteItem}
          testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
            className="delete"
          />
        </button>
      </li>
    )
  }
}

export default Password
