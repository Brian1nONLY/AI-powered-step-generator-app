import React, { useState, useEffect } from "react";
import Logo from "./Assets/Logo.png";
import "./App.css";
import InputField from "./Components/InputField";
import Step from "./Components/Step";
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
   <div className="flex bg-notebook h-screen gap-y-10 flex-col align-center justify-center">
      <div className="flex flex-row justify-center">
      <img src = {Logo} className="h-36"></img>
      </div>
      <Heading1 
      content = "So, What are we doing today?" fontSize = "3xl">
      </Heading1>
      
      <div className=" flex-row justify-center gap-y-5">


        <form
          onSubmit={(e) => chat(e, message)}
          className="flex flex-col items-center gap-y-5 justify-center"
        >
          <input
            type="text"
            name="messge"
            value={message}
            placeholder="Study for my math exam"
            onChange={(e) => setMessage(e.target.value)}
            className="bg-zinc-200 text-xl h-64 w-10/12 rounded-3xl placeholder:italic font-body placeholder:text-zinc-400  align-left p-6"
            />
         <button className="text-3xl h-11 w-8/12 bg-zinc-800 rounded-3xl font-h1 text-white" type ="submit">Let's plan this!</button>
    
        </form>


      </div>


      <section className="w-full mt-4 w-9/12">
        {chats && chats.length ? (
          chats.map((chat, index) => (
            <p
              key={index}
              className={`${
                chat.role === "user" ? "bg-gray-100 hidden" : "bg-white"
              } p-2 rounded`}
            >
              
      
              <div>

              </div>
            
              <span style={{ whiteSpace: "pre-line" }}>{chat.content}</span>
           
            </p>
          ))
        ) : (
          <p></p>
        )}
      </section>

      <div
        className={`flex items-center justify-center mt-4 ${
          isTyping ? "" : "hidden"
        }`}
      >
        <p>
          <i>{isTyping ? "Typing" : ""}</i>
        </p>
      </div>


    </div>
  );
}



export default App;
