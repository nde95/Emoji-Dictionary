import emojisList from "../emojis.json";
import EmojiCard from "../emoji-card/emoji-card.component";

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
            <EmojiCard key={index} emoji={emoji} />
      ))}
    </div>
  );
};


export default EmojiSearch;