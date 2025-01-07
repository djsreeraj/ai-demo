import "./MessageCard.css";

const MessageCard = ({ message }: { message: string}) => {
  return <div className="card">{message}</div>;
};

export default MessageCard;
