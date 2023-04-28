// Write your code here.
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {isActive: false}

  onBtnClick = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }))
  }

  renderAnswer = () => {
    const {isActive} = this.state
    const {eachFaq} = this.props
    const {answerText} = eachFaq
    if (isActive) {
      return (
        <div>
          <hr />
          <p className="ans-txt">{answerText}</p>
        </div>
      )
    }
    return null
  }

  render() {
    const {eachFaq} = this.props
    const {questionText} = eachFaq
    const {isActive} = this.state

    const imgUrl = isActive
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

    const altTxt = isActive ? 'minus' : 'plus'

    return (
      <li className="list-item">
        <div className="question">
          <h1 className="que-txt">{questionText}</h1>
          <button className="btn" type="button" onClick={this.onBtnClick}>
            <img className="toggle-img" src={imgUrl} alt={altTxt} />
          </button>
        </div>
        <div className="answer">{this.renderAnswer()}</div>
      </li>
    )
  }
}

export default FaqItem
