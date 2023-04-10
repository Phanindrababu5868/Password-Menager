import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import Password from './Components/PasswaordItem'
import './App.css'

class App extends Component {
  state = {
    websiteText: '',
    userText: '',
    password: '',
    list: [],
    isActive: false,
    results: '',
  }

  onWebsiteTextInput = event => {
    this.setState({websiteText: event.target.value})
  }

  onUserText = event => {
    this.setState({userText: event.target.value})
  }

  onPassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeResults = event => {
    this.setState({results: event.target.value})
  }

  showPassword = () => {
    this.setState(prevState => ({isActive: !prevState.isActive}))
  }

  onFormFill = event => {
    event.preventDefault()
    const {websiteText, userText, password} = this.state
    const newList = {
      id: uuidv4(),
      websiteT: websiteText,
      userT: userText,
      passwordT: password,
    }
    this.setState(prevState => ({
      list: [...prevState.list, newList],
      websiteText: '',
      userText: '',
      password: '',
    }))
  }

  onDelete = id => {
    this.setState(prevState => ({
      list: prevState.list.filter(eachItem => eachItem.id !== id),
    }))
  }

  render() {
    const {
      websiteText,
      userText,
      password,
      list,
      isActive,
      results,
    } = this.state

    const filteredResults = list.filter(eachItem =>
      eachItem.websiteT.toLowerCase().includes(results.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <img
          className="password-manager-logo"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
        />
        <div className="first-part">
          <form className="form-container" onSubmit={this.onFormFill}>
            <h1>Add New Password</h1>
            <div className="website-logo">
              <img
                className="logo"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
              />

              <input
                type="text"
                placeholder="Enter Website"
                className="input"
                value={websiteText}
                onChange={this.onWebsiteTextInput}
              />
            </div>
            <div className="website-logo">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
                className="logo"
              />
              <input
                type="text"
                placeholder="Enter Username"
                className="input"
                value={userText}
                onChange={this.onUserText}
              />
            </div>
            <div className="website-logo">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
                className="logo"
              />
              <input
                type="password"
                placeholder="Enter Password"
                className="input"
                value={password}
                onChange={this.onPassword}
              />
            </div>
            <button type="submit" className="btn">
              Add
            </button>
          </form>
          <img
            className="website-img"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            alt="password manager"
          />
        </div>
        <div className="second-part">
          <div className="header">
            <div className="password-count">
              <h1 className="password">Your Passwords</h1>
              <p>{filteredResults.length}</p>
            </div>
            <div className="website-logo">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="logo"
              />
              <input
                type="search"
                className="search-box"
                onChange={this.onChangeResults}
                value={results}
              />
            </div>
          </div>
          <hr />
          <div className="check-box">
            <input type="checkbox" id="box" onClick={this.showPassword} />
            <label htmlFor="box">Show passwords</label>
          </div>
          <div>
            {filteredResults.length < 1 ? (
              <div className="no-password-image">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                  alt="no passwords"
                  className="no-password"
                />
                <p>No Passwords</p>
              </div>
            ) : (
              <ul className="list-items">
                {filteredResults.map(eachItem => (
                  <Password
                    details={eachItem}
                    key={eachItem.id}
                    onDelete={this.onDelete}
                    isActive={isActive}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default App
