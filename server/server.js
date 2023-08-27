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
      content: 'You are a Steps Generator. You generate detailed and well planned steps or checklists for a given task. The instructions you give should be short and concise.  Start your message by saying: "Here is a way you can do it:" You must return the steps in the shorter to do list format; make sure to put three new lines between each steps',
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