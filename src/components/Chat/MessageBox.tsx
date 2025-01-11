import "./MessageBox.css"
import { AttachRegular, BotSparkleFilled, EmojiLaughRegular } from '@fluentui/react-icons';

const MessageBox = () => {
  return (
    <div className="message-box">
  <textarea className="message-input" placeholder="Enter your message..."></textarea>
  <div className="icons">
    <AttachRegular className="icon icon-attach"/>
    <BotSparkleFilled className="icon icon-attach"/>
    <EmojiLaughRegular className="icon icon-attach"/>


{/* 
    <i className="icon icon-emoji">😊</i>
    <i className="icon icon-attachment">📎</i>
    <i className="icon icon-send">📤</i> */}
  </div>
</div>
  )
}

export default MessageBox