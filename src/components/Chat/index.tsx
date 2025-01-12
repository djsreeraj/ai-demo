import "./ChatBox.css";
import MessageBox from "./MessageBox";
// import MessageCard from "./MessageCard";

const ChatBox = () => {
  const initialMsgs = [
    { id: 1, text: "Hi, May I help you?", sender: "left" },
    { id: 2, text: "What is the pricing?", sender: "right" },
    { id: 3, text: "Is there a free trial?", sender: "right" },
    { id: 4, text: "Is my data protected?", sender: "right" },
  ];

  const messages = [
    { id: 1, text: "Will this work for Teams?", sender: "user" },
    {
      id: 2,
      text: "Yes, it's designed for Teams as well as individuals and integrates well with Slack.",
      sender: "bot",
    },
    // { id: 3, text: "Does it support notifications?", sender: "user" },
    // {
    //   id: 4,
    //   text: "Absolutely! You can set up custom notifications for your workflows.",
    //   sender: "bot",
    // },
    // { id: 5, text: "Can I use it on mobile?", sender: "user" },
    // {
    //   id: 6,
    //   text: "Yes, there are mobile apps for iOS and Android to keep you connected.",
    //   sender: "bot",
    // },
    // { id: 7, text: "Is there a free trial available?", sender: "user" },
    // {
    //   id: 8,
    //   text: "Yes, we offer a 14-day free trial with full access to all features.",
    //   sender: "bot",
    // },
  ];

  return (
    <div className="chatbox">
      <div className="chat-container">
        <div className="chat-box">
          {initialMsgs.map((message) => (
            <div
              key={message.id}
              className={`initial-message ${message.sender}`}
            >
              <p>{message.text}</p>
            </div>
          ))}

          {/* <p style={{ paddingTop: "2px", margin: 0 }}></p> */}

          {messages.map((message) => (
            <div className={`chat-parent ${message.sender}`}>
              <div className={`cm-${message.sender}-container`}>
                <div className={`cs ${message.sender}`}>{message.text} </div>
              </div>
              <span className={`${message.sender}-polygon`}></span>
            </div>
          ))}
        </div>

        <MessageBox />
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
