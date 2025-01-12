import ChatBox from "../Chat";
import Controls from "../VideoControls/Controls";
import "./Content.css";

const Content = () => {
  return (
    <div className="contentMain">
      <div className="content">
        {" "}
        <div className="column videoBlock">
          {/* <iframe
            width="100%"
            height="100%"
            src="https://youtu.be/_fuimO6ErKI?si=Li1vNHFYhUzlSJWNhttps://www.youtube.com/embed/_fuimO6ErKI?si=9yySA1hbh4B04A5-"
            className="iframe"
          ></iframe> */}

          <div className="video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/_fuimO6ErKI?si=9yySA1hbh4B04A5-"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>

          <Controls />
        </div>
        <div className="column chatBox">
          <ChatBox />
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Content;
