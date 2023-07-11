// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {item, selectEmoji} = props
  const {emojiUrl, emojiName, id} = item

  const selected = () => {
    selectEmoji(id)
  }

  return (
    <li className="box" onClick={selected}>
      <button type="button" className="btn-emoji">
        <img className="emoji-img" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
