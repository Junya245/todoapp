import React, { useState } from "react";

const Form = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") return alert("文字を入力してください");
    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="タスクを入力..."
      />
      <button disabled={text.trim() === ""}>送信</button>
    </form>
  );
};

export default Form;
