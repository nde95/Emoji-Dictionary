import "./emoji-card.styles.css"
import { useState } from "react";

const EmojiCard = ({ emoji }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {
    setCopied(true);
    navigator.clipboard.writeText(emoji.symbol);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <div className="emoji-card" onClick={handleCopyClick}>
      {copied && <div className="copy-alert">Copied!</div>}
      <div className="emoji-item">
        <div className="emoji-symbol">{emoji.symbol}</div>
        <div className="emoji-title">{emoji.title}</div>
      </div>
    </div>
  );
};

export default EmojiCard;