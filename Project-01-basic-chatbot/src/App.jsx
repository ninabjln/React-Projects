import { useState } from "react";
import ChatInput from "./components/ChatInput";
import ChatMasseges from "./components/ChatMessages";
import "./App.css";

function App() {
  const [chatMessages, setChatMessages] = useState([]);

  return (
    <div className="app-container">
      <ChatMasseges chatMessages={chatMessages} />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App;
