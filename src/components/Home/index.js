import {Component} from 'react'
import Popup from 'reactjs-popup'

import {RiCloseLine} from 'react-icons/ri'

import ScoreCard from '../ScoreCard'
import ResultsCard from '../ResultsCard'

import {
  AppContainer,
  MainContainer,
  RulesContainer,
  Rules,
  RulesImage,
} from './styledComponents'

import './index.css'

const contentStyle = {width: '80%', maxWidth: '700px'}

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class Home extends Component {
  state = {
    isClicked: false,
    resultImages: [],
    resultText: '',
    score: 0,
  }

  getResults = (player, auto) => {
    if (player.id === 'ROCK') {
      switch (auto.id) {
        case 'PAPER':
          return 'YOU LOSE'
        case 'SCISSORS':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    } else if (player.id === 'PAPER') {
      switch (auto.id) {
        case 'ROCK':
          return 'YOU WON'
        case 'SCISSORS':
          return 'YOU LOSE'
        default:
          return 'IT IS DRAW'
      }
    } else {
      switch (auto.id) {
        case 'ROCK':
          return 'YOU LOSE'
        case 'PAPER':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    }
  }

  OnClickImage = id => {
    const {score} = this.state
    const AutoImage =
      choicesList[Math.floor(Math.random() * choicesList.length)]
    const playerImage = choicesList.filter(eachItem => eachItem.id === id)
    // console.log(AutoImage)
    // console.log(playerImage)
    const result = this.getResults(playerImage[0], AutoImage)
    let updateScore = 0

    if (result === 'YOU WON') {
      updateScore = score + 1
    } else if (result === 'YOU LOSE') {
      updateScore = score - 1
    }
    this.setState({
      isClicked: true,
      resultImages: [playerImage[0], AutoImage],
      resultText: result,
      score: updateScore,
    })
  }

  restart = () => {
    this.setState({isClicked: false})
  }

  render() {
    const {isClicked, resultImages, resultText, score} = this.state
    return (
      <AppContainer>
        <MainContainer>
          <ScoreCard score={score} />
          <ResultsCard
            choicesList={choicesList}
            isClicked={isClicked}
            OnClickImage={this.OnClickImage}
            resultImages={resultImages}
            resultText={resultText}
            restart={this.restart}
          />
        </MainContainer>
        <RulesContainer>
          <Popup
            modal
            {...{contentStyle}}
            trigger={
              <button type="button" className="rules-button">
                RULES
              </button>
            }
          >
            {close => (
              <Rules>
                <button
                  type="button"
                  className="close-button"
                  onClick={() => close()}
                >
                  <RiCloseLine />
                </button>
                <RulesImage
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </Rules>
            )}
          </Popup>
        </RulesContainer>
      </AppContainer>
    )
  }
}
export default Home
