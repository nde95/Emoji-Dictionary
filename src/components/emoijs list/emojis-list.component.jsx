import emojisList from "../emojis.json";
import EmojiCard from "../emoji-card/emoji-card.component";
import "./emojis-list.styles.css";

const EmojisList = () => {
  const emojis = getRandomEmojis(16);

  function getRandomEmojis(count) {
    const shuffledEmojis = emojisList.sort(() => 0.5 - Math.random());
    return shuffledEmojis.slice(0, count);
  }

  return (
    <div className="emoji-grid-container">
        <div className="emoji-grid">
        {emojis.map((emoji, index) => (
            <EmojiCard key={index} emoji={emoji} />
        ))}
        </div>
    </div>
  );
};

export default EmojisList;

