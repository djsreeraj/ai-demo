import "./ChatBox.css";
import MessageCard from "./MessageCard";

const ChatBox = () => {
  return (
    <div className="chatbox">
      <MessageCard message="Hello, how can I help you?" />

      <MessageCard message="What is the pricing?" />

      <MessageCard message="Is there a free trial?" />

      <MessageCard message="Is my data protected?" />

      <MessageCard message="Will this work for Teams" />

      <MessageCard message="Yes, Its designed for Teams as well as individuals and integrates well with slack" />
    </div>
  );
};

export default ChatBox;
