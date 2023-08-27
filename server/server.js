import 'dotenv/config';

import OpenAI from "openai";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const port = 8000;
app.use(bodyParser.json());
app.use(cors());


const configuration = new OpenAI({
  organization: "org-enYIlEXQ5qlWSRSdICfxzlyo",
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(OpenAI);

app.post("/", async (req, res) => {
  const { chat } = req.body;


 const result = await openai.chat.completions.create({
  model: "gpt-3.5-turbo",
  messages: [
    {
      role: "system",
      content: "You are a Steps Generator. You generate detailed and well planned steps or checklists for a given task",
    },
    ...chat,
  ],
 });

 res.json({ output: result.data.choices[0].message });
});


app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});