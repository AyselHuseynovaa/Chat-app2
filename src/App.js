import React, { useState } from "react";
import "./App.css";
import InputBox from "./components/InputBox";
import Messages from "./components/Messages";
import style  from  "./style/style.css";
function App() {
  const [messages, setMessages] = useState([]);

  return (
    <div className="App">
      <InputBox messages={messages} setMessages={setMessages} />
      <Messages messages={messages} />
    </div>
  );
}

export default App;
