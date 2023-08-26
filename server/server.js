require = require("esm")(module/*, options*/);

import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { Configuration, OpenAIApi } from "openai";

const app = express();
const port = 8000;
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

const Configuration = new Configuration({
  organization: "org-enYIlEXQ5qlWSRSdICfxzlyo",
  key: "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",
});
const openai = new OpenAIApi(Configuration);

app.post("/", async (req, res) => {
  const { chat } = req.body;


 const result = await openai.createChatCompletion({
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