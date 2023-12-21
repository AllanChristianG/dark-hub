<template>
  <div>
    <!-- Navigation Bar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
    </nav>

    <!-- Main Content Area -->
    <div class="container mt-4">
      <div class="card">
        <div class="card-body">
          <div class="row">
            <!-- Section 1: Dropdown for voice selection -->
            <div class="col-md-4">
              <section class="voice-select">
                <h5 class="card-title">Select Voice</h5>
                <select class="form-select" v-model="selectedVoice">
                  <option v-for="voice in voices" :key="voice._id" :value="voice">{{ voice.name }}</option>
                </select>
                <button @click="playAudioInterface" class="btn btn-primary btn-play">
                  <i class="fa-solid fa-play"></i> Play
                </button>
              </section>
            </div>

            <!-- Section 2: Text area and Generate button -->
            <div class="col-md-8">
              <section class="text-generation">
                <h5 class="card-title">Text</h5>
                <textarea class="form-control" v-model="textToNarrate" rows="3"></textarea>
                <button @click="generateNarration" class="btn btn-primary mt-3">Generate</button>
              </section>
            </div>
          </div>

          <!-- Section 3: Audio Timeline -->
          <h5 class="card-title mt-4">Audio</h5>
          <!-- Placeholder for audio timeline -->
          <div class="audio-timeline"></div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="footer mt-auto py-3 bg-light">
      <div class="container">
        <div>
          <audio ref="audioPlayer" controls>
            <source :src="renderAudioSample" type="audio/mp3" autoplay="false">
            Your browser does not support the audio tag.
          </audio>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
/* eslint-disable */

export default {
  components: { },
  data() {
    return {
      isAudioPlaying: false,
      textToNarrate: "",
      selectedVoice: "",
      voices: {},
      narrator: 'onwK4e9ZLuTAKqWW03F9',
      url: `https://api.elevenlabs.io/v1/text-to-speech/`,
      options: {
        'method': 'POST',
        'headers': this.headers,
        'body': '{"model_id":"<string>","text":"<string>","voice_settings":{"similarity_boost":123,"stability":123,"style":123,"use_speaker_boost":true}}'
      },
      header: {
        'Accept': 'audio/mpeg',
        'Content-Type': 'application/json',
        'xi-api-key': `${process.env}`
      },
      audioUrl: ""
    };
  },
  computed: { 
    renderAudioSample() {
      return this.selectedVoice.preview_url
    }

  },
  methods: {
    playAudioInterface() {
      const audioPlayer = this.$refs.audioPlayer;

      // Toggle play/pause
      if (this.isAudioPlaying) {
        audioPlayer.pause();
      } else {
        this.audioUrl = this.selectedVoice.preview_url
        audioPlayer.play();
      }

      // Update the state
      this.isAudioPlaying = !this.isAudioPlaying;
    },
    fetchVoiceSynthesis() {
      fetch(this.url, this.options)
      .then(response => response.json())
      .then(response => console.log('RESPONSE', response))
    },    
    playPauseAudio() {
      // Your logic to play/pause the audio
      const audioPlayer = this.$refs.audioPlayer;
      if (audioPlayer.paused) {
        audioPlayer.play();
      } else {
        audioPlayer.pause();
      }
    },
  },
  mounted() {
    fetch(`https://api.elevenlabs.io/v1/voices`)
      .then(response => response.json())
      .then(data => {
        // Set the data to the voices array
        this.voices = data.voices;
        this.audioUrl = 
        console.log("THIS VOICES", this.voices)
        
      })
      .catch(error => console.error('Error:', error));
  },
};
</script>

<style scoped lang="scss">
.text-generation,
.voice-select {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.btn-play {
  margin-top: 10px;
}

.form-control,
.form-select {
  max-width: 100%;
  margin-bottom: 10px;
}

.card {
  max-width: 80%;
  margin: auto;
}

.btn-primary {
  width: 100%;
}

.fa-play {
  font-size: 24px;
}

.audio-timeline {
  margin-top: 10px;
}

.footer {
  text-align: center;
}
</style>
