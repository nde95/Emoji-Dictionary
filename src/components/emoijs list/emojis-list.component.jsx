import emojisList from "../emojis.json"
import "./emojis-list.styles.css"

const EmojisList = () => {
    const emojis = emojisList

    return (
        <div className="emoji-grid">
          {emojis.map((emoji, index) => (
            <div key={index} className="emoji-card">
              <div className="emoji-item">
                <div className="emoji-symbol">{emoji.symbol}</div>
                <div className="emoji-title">{emoji.title}</div>
              </div>
            </div>
          ))}
        </div>
      );
    };



export default EmojisList;

