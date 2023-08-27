import React, { useState, useEffect } from "react";
import Logo from "./Assets/Logo.png";
import "./App.css";
import InputField from "./Components/InputField";

import Heading1 from "./Components/Heading1";
function App() {
 
  return (
   <div className="flex  gap-y-10 flex-col align-center justify-center">
      <div className="flex flex-row justify-center">
      <img src = {Logo} className="h-36"></img>
      </div>
      <Heading1 
      content = "So, What are we doing today?" size = "3xl">
      </Heading1>
  
      <InputField></InputField>
      <div className="flex flex-row justify-center">
      <button className="text-3xl h-11 w-8/12 bg-gray-800 rounded-3xl font-h1 text-white">Let's plan this!</button>
    
      </div>
      
    </div>
  );
}

export default App;
