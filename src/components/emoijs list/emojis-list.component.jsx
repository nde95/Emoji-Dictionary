import emojisList from "../emojis.json";
import { useState } from "react";
import "./emojis-list.styles.css";

const EmojisList = () => {
  const emojis = getRandomEmojis(12);

  function getRandomEmojis(count) {
    const shuffledEmojis = emojisList.sort(() => 0.5 - Math.random());
    return shuffledEmojis.slice(0, count);
  }

  const handleCopyToClipboard = (emojiSymbol) => {
    navigator.clipboard.writeText(emojiSymbol);
    // You can also show a notification or perform any other actions after copying
    console.log("Copied to clipboard:", emojiSymbol);
  };

  return (
    <div className="emoji-grid">
      {emojis.map((emoji, index) => (
        <div key={index} className="emoji-card">
          <div className="emoji-item" onClick={() => handleCopyToClipboard(emoji.symbol)}>
            <div className="emoji-symbol">{emoji.symbol}</div>
            <div className="emoji-title">{emoji.title}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EmojisList;

