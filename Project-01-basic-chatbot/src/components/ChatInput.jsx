import { useState } from "react";
import { Chatbot } from "supersimpledev";
import LoadingSpinnerGif from "../assets/loading-spinner.gif";
import "./ChatInput.css";

function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  async function sendMessage() {
    if (inputText !== "" && !isLoading) {
      const newChatMessages = [
        ...chatMessages,
        {
          message: inputText,
          sender: "user",
          id: crypto.randomUUID(),
        },
      ];
      setIsLoading(true);
      setChatMessages(newChatMessages);
      setInputText("");

      setChatMessages([
        ...newChatMessages,
        {
          message: <img src={LoadingSpinnerGif} class="loading-spinner" />,
          sender: "robot",
          id: crypto.randomUUID(),
        },
      ]);

      const response = await Chatbot.getResponseAsync(inputText);

      setChatMessages([
        ...newChatMessages,
        {
          message: response,
          sender: "robot",
          id: crypto.randomUUID(),
        },
      ]);
      setIsLoading(false);
    }
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      sendMessage();
    } else if (event.code === "Escape") {
      setInputText("");
    }
  }
  return (
    <div className="chat-input-container">
      <input
        placeholder="Send a message to Chatbot"
        size="30"
        onChange={saveInputText}
        value={inputText}
        onKeyUp={handleKeyDown}
        className="chat-input"
      />
      <button onClick={sendMessage} className="send-button">
        Send
      </button>
    </div>
  );
}

export default ChatInput;
