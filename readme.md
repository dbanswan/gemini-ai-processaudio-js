# Process Audio Files With Gemini Api In Javascript

A simple example of using gemini-1.5-pro-latest model to process audio files in javascript.

**We take the famous audio of Neil Armstrong's "Small Step" and ask Gemini to describe what's happening in the audio.**

Here is a sample output:

```
❯ node app.js
The audio describes the iconic moment of Neil Armstrong's first steps on the Moon during the Apollo 11 mission. His famous quote, "That's one small step for man, one giant leap for mankind," marks a pivotal moment in human history and space exploration.

```

# Next time it gets more adventorous

```
The audio clip you shared appears to capture a momentous event in human history: the first steps taken on the Moon by astronaut Neil Armstrong during the Apollo 11 mission in 1969.

Here's a breakdown of the audio:

* **Background noise:** The initial seconds are filled with static and indistinct sounds, likely from the communication equipment and the lunar module itself.
* **Instructions:**  A voice, presumably from mission control, instructs Neil Armstrong to "step off the LEM now," referring to the Lunar Excursion Module, the spacecraft that landed on the Moon.
* **Silence:** A brief pause follows, building anticipation for the historic moment.
* **Neil Armstrong's famous quote:**  The astronaut utters the iconic words, "That's one small step for man, one giant leap for mankind," marking the first human footstep on the lunar surface.
* **End of clip:** The audio concludes shortly after the quote, leaving the listener to imagine the scene and the significance of the event.
```

Without even giving any hint of what's in the audio, it describes the audio pretty accurately.

## Steps to run this project:

1. Clone this repository.
2. Rename .env_local to .env
3. In .env file Replace `AIzaSyD502555-555-5555-5555-555555555555` with your own API key which you can get from [Google Cloud Console](https://aistudio.google.com/app/apikey)

4. Run `npm install` to install the dependencies.
5. Run `node app.js` to run the script.

Experiment with different audio files and see what Gemini can do. Have fun!
