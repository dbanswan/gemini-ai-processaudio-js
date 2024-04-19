const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require("fs");
const mime = require("mime-types");
const dotenv = require("dotenv").config();

const googleAI = new GoogleGenerativeAI(process.env.API_KEY);

async function convertAudioToBase64(path) {
  try {
    return {
      inlineData: {
        data: Buffer.from(fs.readFileSync(path)).toString("base64"),
        mimeType: mime.lookup(path),
      },
    };
  } catch (error) {
    console.log(error);
  }
}
async function generateTextFromAudio(audio) {
  const model = googleAI.getGenerativeModel({ model: "gemini-1.5-pro-latest" });
  const result = await model.generateContent([
    "What is happening in the audio?",
    audio,
  ]);
  const response = await result.response;
  const text = response.text();
  return text;
}

async function run() {
  let audio = await convertAudioToBase64("Armstrong_Small_Step.ogg");
  let text = await generateTextFromAudio(audio);
  console.log(text);
}

run();
