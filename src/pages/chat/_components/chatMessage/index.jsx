const ChatMessage = ({ message, senderIsMe }) => {
  return (
    <div className="py-2 px-4 rounded-2xl bg-quiz-black-300 mb-2 message">
      <div
        className={`messageCurve ${senderIsMe ? "" : "messageCurve--opposite"}`}
      ></div>
      <p className="z-10 relative">{message}</p>
    </div>
  );
};

export default ChatMessage;
