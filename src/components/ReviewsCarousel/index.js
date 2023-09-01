// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {id: 0}

  left = () => {
    const {id} = this.state
    if (id > 0) {
      this.setState(e => ({id: e.id - 1}))
    }
  }

  right = () => {
    const {id} = this.state
    const {reviewsList} = this.props
    if (id < reviewsList.length - 1) {
      this.setState(e => ({id: e.id + 1}))
    }
  }

  review = a => {
    const {imgUrl, username, companyName, description} = a

    return (
      <div className="cont">
        <img src={imgUrl} className="img" alt={username} />
        <p className="st">{username}</p>
        <p className="nd">{companyName}</p>
        <p className="nd">{description}</p>
      </div>
    )
  }

  render() {
    const {reviewsList} = this.props
    const {id} = this.state
    const p = reviewsList[id]

    return (
      <div className="cont1">
        <h1 className="heading">Reviews</h1>
        <div className="cont2">
          <button
            className="button"
            type="button"
            onClick={this.left}
            testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="image"
            />
          </button>
          {this.review(p)}
          <button
            className="button"
            type="button"
            onClick={this.right}
            testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="image"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
