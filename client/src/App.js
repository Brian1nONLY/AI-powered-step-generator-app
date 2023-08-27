import React, { useState, useEffect } from "react";
//import Logo from "./Assets/Logo.png";
import "./App.css";
import InputField from "./Components/InputField";

import Heading1 from "./Components/Heading1";
function App() {
  const Logo = "https://cdn-icons-png.flaticon.com/128/11180/11180172.png";

  return (
   <div className="flex bg-notebook h-screen gap-y-10 flex-col align-center justify-center">
      <div className="flex flex-row justify-center">
      <img src = {Logo} className="h-36"></img>
      </div>
      <Heading1 
      content = "So, What are we doing today?" fontSize = "3xl">
      </Heading1>

      <form className="flex flex-col gap-y-4">

     
      <InputField></InputField>
      <div className="flex flex-row justify-center">
      <button className="text-3xl h-11 w-8/12 bg-zinc-800 rounded-3xl font-h1 text-white" type ="submit">Let's plan this!</button>
      
      </div>
      </form>
    </div>
  );
}

export default App;
