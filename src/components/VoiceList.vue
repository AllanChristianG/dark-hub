<template>
  <div>
    <h1>Test for voices</h1>
    <label for="voice">Choose a voice:</label>
    <select id="voice" name="voice" v-model="selectedVoice">
      <option 
        v-for="voice in voices" 
        :key="voice.voice_id" 
        :value="voice.voice_id"
      >{{ voice.name }}</option>
    </select>
    <p>Selected voice: {{ selectedvoice }}</p>
    <button 
      class="voiceGeneration"
      v-on:click="generateVoice"
    >Generate voice</button>
  </div>
</template>

<script>
// import voiceList from './voiceList.json'
export default {
  data() {
    return {
      selectedvoice: null,
      voices: {},
      narrator: 'onwK4e9ZLuTAKqWW03F9',
      url: `https://api.elevenlabs.io/v1/text-to-speech/${this.selectedVoice}`,
      options: {
        'method': 'POST',
        'headers': this.headers,
        'body': '{"model_id":"<string>","text":"<string>","voice_settings":{"similarity_boost":123,"stability":123,"style":123,"use_speaker_boost":true}}'
      },
      header: {
        'Accept': 'audio/mpeg',
        'Content-Type': 'application/json',
        'xi-api-key': '427043e1f291a4aa4259fc22879d04e9'
      }
    };
  },
  computed: { },
  methods: {
    test() {
      this.selectedVoice
    },
    generateVoice() {
      // console.log('AKIII VOICE')

    },
    fetchVoiceSynthesis() {
      fetch(this.url, this.options)
      .then(response => response.json())
      .then(response => console.log('RESPONSE', response))
    }
  },
  mounted() {
    fetch(`https://api.elevenlabs.io/v1/voices`)
      .then(response => response.json())
      .then(data => {
        // Set the data to the voices array
        this.voices = data.voices;
        console.log("THIS VOICES", this.voices)
        
      })
      .catch(error => console.error('Error:', error));
  },
};
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
