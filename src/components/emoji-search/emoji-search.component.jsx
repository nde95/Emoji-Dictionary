import emojisList from "../emojis.json";
import "./emoji-search.styles.css";

const EmojiSearch = ({ searchTerm }) => {
  const emojis = emojisList;

  let filteredEmojis = emojis;

  if (searchTerm) {
    filteredEmojis = emojis.filter((emoji) => {
      const title = emoji.title.toLowerCase();
      const term = searchTerm.toLowerCase();
      return title.includes(term);
    });
  }

  return (
    <div className="emoji-grid">
      {filteredEmojis.map((emoji, index) => (
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

export default EmojiSearch;