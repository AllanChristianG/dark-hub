// get User ---

import fetch from 'node-fetch'

const headers = {
    "xi-api-key": "427043e1f291a4aa4259fc22879d04e9"
}

const options = {method: 'GET',  headers: headers};

fetch('https://api.elevenlabs.io/v1/user', options) 
  .then(response => response.json())
  .then(response => 
    console.log('Characters remaining:', response.subscription.character_limit - response.subscription.character_count ))
  .catch(err => console.error(err));



// text to audio ---

import express from 'express';
import fetch from 'node-fetch';
import fs from 'fs-extra';
import stream from 'stream';
import path from 'path';

const josh = 'TxGEqnHWrfWFTfGW9XjX'
const knightley = 'PtOKxZYS9caj0LOeEe7A'
const daniel = 'onwK4e9ZLuTAKqWW03F9'

const CHUNK_SIZE = 1024;
const voice = 'onwK4e9ZLuTAKqWW03F9'
const url = `https://api.elevenlabs.io/v1/text-to-speech/${voice}`;



const headers = {
  "Accept": "audio/mpeg",
  "Content-Type": "application/json",
  "xi-api-key": "427043e1f291a4aa4259fc22879d04e9"
};

const data = {
  "text": 'Testing speech for daniela',
  "model_id": "eleven_monolingual_v1",
  "voice_settings": {
    "stability": 0.5,
    "similarity_boost": 0.5
  }
}

const app = express();
const PORT = 3000;

// Serve static files from the public directory
// app.use(express.static(`public`));

// Use that if you want to dinamically pick static files from public regarding ur endpoint
// app.get('/', (req, res) => {
//   res.sendFile('public/index.html')
// });

app.get('/', (req, res) => {
  fetch(url, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(data),
  })
    .then(response => {
      const fileStream = fs.createWriteStream('output.mp3');
      const pipeline = stream.pipeline(response.body, fileStream, (err) => {
        if (err) {
          console.error('Pipeline failed:', err);
          res.status(500).send('Internal server error');
        } else {
          console.log('Pipeline succeeded');
          const absolutePath = path.resolve('public/index.html');
          res.sendFile(absolutePath);
        }
      });
    })
    .catch(error => {
      console.error('Error:', error);
      res.status(500).send('Internal Server Error');
    });
});


app.listen(PORT, () => {
  console.log("Listening on port:", PORT);
});
