// Write your code here

import './index.css'
import {Component} from 'react'

class Welcome extends Component {
  state = {text: 'Subscribe'}

  subscribe = () => {
    const {text} = this.state
    if (text === 'Subscribe') {
      this.setState(() => ({text: 'Subscribed'}))
    } else {
      this.setState(() => ({text: 'Subscribe'}))
    }
  }

  render() {
    const {text} = this.state
    return (
      <div className="bg-container">
        <div className="content-container">
          <h1 className="main-heading">Welcome</h1>
          <p className="description">Thank you! Happy Learning</p>
          <button type="button" className="btn" onClick={this.subscribe}>
            {text}
          </button>
        </div>
      </div>
    )
  }
}

export default Welcome
