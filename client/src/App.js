import React, { useState, useEffect } from "react";
import Logo from "./Assets/Logo.png";
import "./App.css";
import InputField from "./Components/InputField";

import Heading1 from "./Components/Heading1";
function App() {
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  const chat = async (e, message) => {
    e.preventDefault();

    if (!message) return;
    setIsTyping(true);

    let msgs = chats;
    msgs.push({ role: "user", content: message });
    setChats(msgs);

    setMessage("");

    fetch("http://localhost:8000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chats,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        msgs.push(data.output);
        setChats(msgs);
        setIsTyping(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <main className="p-4 flex flex-col items-center bg-white">
      <img src={Logo} className="h-36"></img>

      <div className="flex items-center justify-center mt-4">
        <Heading1 content="What do you want to plan?" size="6xl" />
      </div>

      <section className="w-full mt-4 w-9/12">
        {chats && chats.length ? (
          chats.map((chat, index) => (
            <p
              key={index}
              className={`${
                chat.role === "user" ? "bg-gray-100" : "bg-gray-300"
              } p-2 rounded`}
            >
              <span>
                <b>{chat.role.toUpperCase()}</b>
              </span>
              <span>: </span>
              <span>{chat.content}</span>
            </p>
          ))
        ) : (
          <p>Nothing planned so far!</p>
        )}
      </section>
      
      <div className="flex items-center justify-center mt-4">
        </div>
      <div className="bg-gray-200 p-4 w-9/12">
        <form
          onSubmit={(e) => chat(e, message)}
          className="flex items-center justify-center"
        >
          <input
            type="text"
            name="message"
            value={message}
            placeholder="Type a message here and hit Enter..."
            onChange={(e) => setMessage(e.target.value)}
            className="border border-gray-300 rounded p-2 w-9/12"
          />
          <button
            type="submit"
            className="bg-black text-white px-4 py-2 ml-2 rounded w-1/6"
          >
            Lets plan this!
          </button>
        </form>
      </div>

      <div
        className={`flex items-center justify-center mt-4 ${
          isTyping ? "" : "hidden"
        }`}
      >
        <p>
          <i>{isTyping ? "Typing" : ""}</i>
        </p>
      </div>
    </main>
  );
}

export default App;
