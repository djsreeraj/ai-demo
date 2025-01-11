import "./MessageBox.css";
import {
  Attach20Regular,
  BotSparkle20Filled,
  EmojiLaugh20Regular,
} from "@fluentui/react-icons";

const MessageBox = () => {
  return (
    <div className="message-box">
      <textarea
        className="message-input"
        placeholder="Enter your message..."
      ></textarea>
      <div className="icons">
        <BotSparkle20Filled className="icon icon-attach" />
        <Attach20Regular className="icon icon-attach" />
        <EmojiLaugh20Regular className="icon icon-attach" />

        {/* 
    <i className="icon icon-emoji">😊</i>
    <i className="icon icon-attachment">📎</i>
    <i className="icon icon-send">📤</i> */}
      </div>
    </div>
  );
};

export default MessageBox;
