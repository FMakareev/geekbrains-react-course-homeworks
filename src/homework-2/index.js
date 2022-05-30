import { useState, useEffect } from "react";
import {Message} from "./components";

export const Homework = () => {
  const [messageList, setMessageList] = useState([]);
  const [value, setValue] = useState("");

  const sendMessage = (author, text) => {
    const newMessageList = [...messageList];
    const newMessage = {
      author,
      text,
    };
    newMessageList.push(newMessage);
    setMessageList(newMessageList);
  };

  const resetForm = () => {
    setValue("");
  };

  const onSubmitMessage = (event) => {
    event.preventDefault();
    sendMessage("user", value);
    resetForm();
  };

  const onChangeMessageInput = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    if (messageList.length === 0) {
      return;
    }

    const tail = messageList[messageList.length - 1];
    if (tail.author === "bot") {
      return;
    }

    sendMessage("bot", "hello");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messageList]);


  return (
    <div>
      <form onSubmit={onSubmitMessage}>
        <input
          onChange={onChangeMessageInput}
          placeholder="type message"
          value={value}
          type="text"
        />
        <button>send</button>
      </form>
      <ul>
        {
          messageList.map((item, index) => (
            <Message message={item.text} key={item.text} />
          ))
        }
      </ul>
    </div>
  );
};
