import ChatBox from "../Chat";
import Controls from "../VideoControls/Controls";
import "./Content.css";

const Content = () => {
  return (
    <div className="contentMain">
      <div className="content">
        {" "}
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

      <div>
        <Controls />
      </div>
    </div>
  );
};

export default Content;
