import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {
    count: 0,
  }

  increaseCount = () => {
    const {count} = this.state
    const {reviewsList} = this.props

    if (count < reviewsList.length - 1) {
      this.setState(prevState => ({count: prevState.count + 1}))
    }
  }

  decreaseCount = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 1}))
    }
  }

  render() {
    const {count} = this.state
    const {reviewsList} = this.props
    console.log(count)
    const {imgUrl, description, username, companyName} = reviewsList[count]

    return (
      <div className="app-container">
        <div className="reviews-container">
          <h1 className="heading">Reviews</h1>
          <div className="content-container">
            <button
              type="button"
              className="button"
              onClick={this.decreaseCount}
              data-testid="leftArrow"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
              />
            </button>
            <div className="review-container">
              <img src={imgUrl} alt={username} className="image" />
              <p className="username">{username}</p>
              <p className="company-name">{companyName}</p>
              <p className="description">{description}</p>
            </div>
            <button
              type="button"
              className="button"
              onClick={this.increaseCount}
              data-testid="rightArrow"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
              />
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
