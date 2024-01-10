// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {isFirstNameVisible: false, isLastNameVisible: false}

  showFirstName = () => {
    const {isFirstNameVisible} = this.state
    this.setState({isFirstNameVisible: !isFirstNameVisible})
  }

  showLastName = () => {
    const {isLastNameVisible} = this.state
    this.setState({isLastNameVisible: !isLastNameVisible})
  }

  render() {
    const {isFirstNameVisible, isLastNameVisible} = this.state
    return (
      <div className="background-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="names-container">
          <div className="first-name-con">
            <button type="button" onClick={this.showFirstName}>
              Show/Hide Firstname
            </button>
            {isFirstNameVisible && (
              <div className="show-hided-cards">
                <p class="names">Joe</p>
              </div>
            )}
          </div>
          <div className="last-name-con">
            <button type="button" onClick={this.showLastName}>
              Show/Hide Lastname
            </button>
            {isLastNameVisible && (
              <div className="show-hided-cards">
                <p class="names">Jonas</p>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
