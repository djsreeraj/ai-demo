import ChatBox from "../Chat";
import "./Content.css";

const Content = () => {
  return (
    <div className="content">
      <div className="videoBlock">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/tgbNymZ7vqY"
          className="iframe"
        ></iframe>
      </div>
      <ChatBox />
    </div>
  );
};

export default Content;
