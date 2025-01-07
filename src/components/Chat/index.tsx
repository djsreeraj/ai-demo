import "./ChatBox.css";
// import MessageCard from "./MessageCard";

const ChatBox = () => {
  const messages = [
    { id: 1, text: "Hi, May I help you?", sender: "left" },
    { id: 2, text: "What is the pricing?", sender: "right" },
    { id: 3, text: "Is there a free trial?", sender: "right" },
    { id: 4, text: "Is my data protected?", sender: "right" },
    { id: 5, text: "Will this work for Teams", sender: "left" },
    {
      id: 6,
      text: "Yes, It's designed for Teams as well as individuals and integrates well with Slack.",
      sender: "right",
    },
  ];

  return (
    <div className="chatbox">
      <div className="chat-container">
        <div className="chat-box">
          {messages.map((message) => (
            <div key={message.id} className={`chat-message ${message.sender}`}>
              <p>{message.text}</p>
            </div>
          ))}
        </div>
        <div className="input-box">
          {/* <input type="text" placeholder="Enter Your message..." /> */}
          <textarea placeholder="Enter Your message..." />
          <button>Send</button>
        </div>
      </div>

      {/* <MessageCard message="Hello, how can I help you?" />

      <MessageCard message="What is the pricing?" />

      <MessageCard message="Is there a free trial?" />

      <MessageCard message="Is my data protected?" />

      <MessageCard message="Will this work for Teams" />

      <MessageCard message="Yes, Its designed for Teams as well as individuals and integrates well with slack" /> */}
    </div>
  );
};

export default ChatBox;
