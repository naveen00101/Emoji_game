/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import './index.css'
import {Component} from 'react'
import NavBar from '../NavBar/index'
import EmojiCard from '../EmojiCard/index'
import WinOrLoseCard from '../WinOrLoseCard/index'

class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    stillPlaying: true,
    selectedEmojiList: [],
  }

  playAgain = () => {
    const {score, topScore} = this.state
    let a = topScore
    if (score > topScore) {
      a = score
    }

    this.setState({
      score: 0,
      stillPlaying: true,
      selectedEmojiList: [],
      topScore: a,
    })
  }

  selectEmoji = id => {
    const {selectedEmojiList, score, stillPlaying, topScore} = this.state
    const result = selectedEmojiList.includes(id)
    console.log(`id : ${id}`)
    console.log(selectedEmojiList)
    console.log(result)
    console.log(selectedEmojiList.length < 12)
    let sp = stillPlaying
    if (result) {
      console.log('set 1')
      sp = false
      this.setState({stillPlaying: false})
    } else if (selectedEmojiList.length < 12) {
      console.log('set 2')
      this.setState({
        selectedEmojiList: [...selectedEmojiList, id],
        score: score + 1,
      })

      if (selectedEmojiList.length === 11) {
        console.log('set 3')
        this.setState({
          stillPlaying: false,
        })
        sp = false
      }
    }

    if (!sp) {
      let a = topScore
      if (score > topScore) {
        a = score
      }

      this.setState({
        topScore: a,
      })
    }
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    const shuffledList = emojisList.sort(() => Math.random() - 0.5)

    return (
      <ul className="list-container">
        {shuffledList.map(eachItem => (
          <EmojiCard
            item={eachItem}
            key={eachItem.id}
            selectEmoji={this.selectEmoji}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {score, topScore, stillPlaying} = this.state

    return (
      <div className="main-container">
        <NavBar score={score} topScore={topScore} stillPlaying={stillPlaying} />
        <div className="bg-container">
          <div>
            {stillPlaying ? (
              this.shuffledEmojisList()
            ) : (
              <WinOrLoseCard
                score={score}
                topScore={score}
                playAgain={this.playAgain}
              />
            )}
          </div>
        </div>
        <div className="instructions-container">
          <p className="how">
            How to Play :{'   '}
            <span className="instructions">
              Select a emoji which was not selected by you untill all the emojis
              are selected
            </span>
          </p>
        </div>
      </div>
    )
  }
}

export default EmojiGame
