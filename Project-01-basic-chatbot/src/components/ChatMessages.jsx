import { useRef, useEffect } from "react";
import ChatMessage from "./ChatMessage";
import "./ChatMessages.css"

function ChatMasseges({ chatMessages }) {
  const chatMessagesRef = useAutoScroll([chatMessages]);

  if (chatMessages.length === 0) {
    return (
      <div className="welcome-container">
        Welcome to the chatbot project! send a message using the textbox below.
      </div>
    );
  }
  return (
    <div className="chat-messages-container" ref={chatMessagesRef}>
      {chatMessages.map((chatMessage) => {
        return (
          <ChatMessage
            message={chatMessage.message}
            sender={chatMessage.sender}
            key={chatMessage.id}
          />
        );
      })}
    </div>
  );
}

function useAutoScroll(dependencies) {
  const containerRef = useRef(null);
  useEffect(() => {
    const containerElem = containerRef.current;
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [dependencies]);
  return containerRef;
}

export default ChatMasseges;
