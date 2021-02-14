import React from "react";
import MessageBox from "./MessageBox";
export default function Messages({ messages }) {
  return (
    <div>
      {messages.map((message) => {
        return <MessageBox text={message.text} key={message.id} />;
      })}
    </div>
  );
}
