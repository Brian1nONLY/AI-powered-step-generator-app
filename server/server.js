//import 'dotenv/config';

import dotenv from "dotenv";dotenv.config();
import OpenAI from "openai";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const port = 8000;
app.use(bodyParser.json());
app.use(cors());


const openai = new OpenAI({
  apiKey: process.env.API_KEY, //this will only work if you make a .env file in your local files and paste
  // the API Key, since I cannot upload the API KEY to Github. When hosting the app on a hosting service, theres
  // a different thing to be done - NOTE TO FUTURE SELF.
});

app.post("/", async (req, res) => {
  const { chats } = req.body;


 const result = await openai.chat.completions.create({
  model: "gpt-3.5-turbo",
  messages: [
    {
      role: "system",
      content: 'You are a Steps Generator. You generate detailed and well planned steps or checklists for a given task. You must return the steps in a JSON file in the format "{"1":"step 1", "2":"step 2",...}", the steps should be no more than 6 steps long',
    },
    ...chats,
  ],
  
 });

 if (result && result.choices && result.choices.length > 0) {
  res.json({ output: result.choices[0].message });
} else {
  res.json({ error: "Invalid response from the API" });
}
});



app.listen(8000, () => {
console.log(`Server is running on port 8000.`);
});