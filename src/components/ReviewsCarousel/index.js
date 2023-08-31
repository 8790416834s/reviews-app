import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {count: 0}

  onClickLeft = () => {
    this.setState(prevState => ({
      count: prevState.count - 1,
    }))
  }

  onClickRight = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }))
  }

  render() {
    const {count} = this.state
    const {reviewsList} = this.props
    const {username, imgUrl, companyName, description} = reviewsList
    console.log(count)
    return (
      <li className="list-item">
        <div className="arrow-container">
          <button
            type="button"
            className="arrow"
            onClick={this.onClickLeft}
            data-testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
        </div>
        <div className="content-container">
          <img src={imgUrl} alt={username} className="image" />
          <p className="user-name">{username}</p>
          <p>{companyName}</p>
          <p>{description}</p>
        </div>
        <div className="arrow-container">
          <button
            type="button"
            className="arrow"
            onClick={this.onClickRight}
            data-testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="arrow"
            />
          </button>
        </div>
      </li>
    )
  }
}

export default ReviewsCarousel
