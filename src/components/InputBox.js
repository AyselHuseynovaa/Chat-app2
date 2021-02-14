import React from "react";
export default function InputBox({ messages, setMessages }) {
  const inputHandler = (e) => {
    e.preventDefault();
    setMessages([
      ...messages,
      {
        text: e.target.value,
        id: Math.random() * 999,
      },
    ]);
    e.target.value = "";
  };

  return (
    <div>
      <form onSubmit={inputHandler}>
        <input
        placeholder="Message"
          type="text"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              inputHandler(e);
            }
          }}
        />
      </form>
    </div>
  );
}
