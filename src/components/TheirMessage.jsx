const TheirMessage = ({ lastMesage, message }) => {
  const isFirstMessageByUser =
    !lastMesage || lastMesage.sender.username !== message.sender.username;

  return (
    <div className="message-row">
      {isFirstMessageByUser && (
        <div
          className="message-avatar"
          style={{ backgroundImage: `url(${message?.sender?.avatar})` }}
        />
      )}
      {message?.attachments?.length > 0 ? (
        <img
          src={message.attachments[0].file}
          alt="message-attachment"
          className="message-image"
          style={{ marginleft: isFirstMessageByUser ? "4px" : "48px" }}
        />
      ) : (
        <div
          className="message"
          style={{
            float: "left",
            backgroundColor: "#CABCDC",
            marginleft: isFirstMessageByUser ? "4px" : "48px"
          }}
        >
          {message.text}
        </div>
      )}
    </div>
  );
};

export default TheirMessage;
