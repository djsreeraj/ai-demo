import {
  MicOff24Filled,
  Video24Filled,
  Mic24Filled,
  CommentNote24Filled,
  TabletSpeaker24Filled,
  Navigation24Filled,
  Pause24Filled,
  Subtitles24Regular,
  Subtitles24Filled,
  Pause24Regular,
} from "@fluentui/react-icons";
import Button from "../UI/Button";
import "./Controls.css";

const Controls = () => {
  return (
    <div className="controls">
      <Button
        title="READ FAQS"
        iconRight={<Navigation24Filled className="" />}
        variant="primary"
      />

      <div className="iconBtnSection">
        {/* <Mic24Filled className="iconButton icon-attach" /> */}
        <MicOff24Filled className="iconButton icon-attach danger" />
        <Video24Filled className="iconButton icon-attach default" />
        <CommentNote24Filled className="iconButton icon-attach default" />
        <TabletSpeaker24Filled className="iconButton icon-attach default" />
        <Subtitles24Regular className="iconButton icon-attach success" />
      </div>
      {/* 
      <Button
        title="Play VIDEO"
        iconLeft={<Pause24Filled className="icon icon-attach" />}
        variant="danger"
      /> */}

      <Button
        title="PAUSE VIDEO"
        iconLeft={<Pause24Regular className="" />}
        variant="danger"
        iconColor="#fff"
      />
    </div>
  );
};

export default Controls;
