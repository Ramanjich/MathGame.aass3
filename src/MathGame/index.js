import {Component} from 'react'

import Navbar from '../Navbar'

import TabItems from '../TabItems'

import ImageItems from '../imageItems'

import './index.css'

class MathGame extends Component {
  state = {
    activetabId: 'FRUIT',
    random: 0,
    isGameOver: false,
    score: 0,
    timer: 60,
  }

  componentDidMount() {
    this.setTimerInterval()
  }

  setTimerInterval = () => {
    this.timerId = setInterval(this.setTimer, 1000)
  }

  setTimer = () => {
    const {timer} = this.state
    if (timer > 0) {
      this.setState({timer: timer - 1})
    } else {
      clearInterval(this.timerId)
      this.setState({isGameOver: true})
    }
  }

  onTabClick = tabId => {
    this.setState({activetabId: tabId})
  }

  onThumbClick = id => {
    const {random} = this.state
    const {imagesList} = this.props
    const l = imagesList.length
    const randomImg = Math.ceil(Math.random() * l) - 1
    const correctId = imagesList[random].id
    if (correctId === id) {
      this.setState(prevState => ({
        random: randomImg,
        score: prevState.score + 1,
      }))
    } else {
      clearInterval(this.timerId)
      this.setState(prevState => ({isGameOver: !prevState.isGameOver}))
    }
  }

  renderMathgame = () => {
    const {activetabId, random} = this.state
    const {imagesList, tabsList} = this.props

    const filterList = imagesList.filter(
      eachOne => eachOne.category === activetabId,
    )

    return (
      <div className="math-game-container">
        <ul className="math-images-container">
          <li className="match-item">
            <img
              src={imagesList[random].imageUrl}
              alt="match"
              className="style-images"
            />
          </li>
        </ul>
        <ul className="tabs-container">
          {tabsList.map(eachTab => (
            <TabItems
              eachTab={eachTab}
              key={eachTab.tabId}
              isActive={activetabId === eachTab.tabId}
              onTabClick={this.onTabClick}
            />
          ))}
        </ul>
        <ul className="thumbnails-container">
          {filterList.map(eachThumb => (
            <ImageItems
              eachThumb={eachThumb}
              key={eachThumb.id}
              onThumbClick={this.onThumbClick}
            />
          ))}
        </ul>
      </div>
    )
  }

  onPlayagainbtnClick = () => {
    this.setState(
      prevState => ({
        score: 0,
        isGameOver: !prevState.isGameOver,
        random: 0,
        activetabId: 'FRUIT',
        timer: 60,
      }),
      this.setTimerInterval,
    )
  }

  renderScoreCard = () => {
    const {score} = this.state
    return (
      <div className="score-card-container">
        <div className="trophy-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
            alt="trophy"
            className="trophy-image"
          />
        </div>
        <div className="score-view-container">
          <p className="score-heading">YOUR SCORE</p>
          <p className="score-view-para">{score}</p>
        </div>
        <div className="reset-container">
          <button
            type="button"
            className="play-btn"
            onClick={this.onPlayagainbtnClick}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
              alt="reset"
              className="reset-image"
            />
            PLAY AGAIN
          </button>
        </div>
      </div>
    )
  }

  render() {
    const {isGameOver, score, timer} = this.state
    return (
      <div className="app-container">
        <Navbar score={score} timer={timer} />
        {isGameOver ? this.renderScoreCard() : this.renderMathgame()}
      </div>
    )
  }
}

export default MathGame
