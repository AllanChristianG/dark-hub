<template>
  <b-container>
    <!-- Title and Tabs -->
    <b-row class="mb-3">
      <b-col>
        <h1 class="text-center">Speech Synthesis</h1>
        <p class="text-center">Unleash the power of our cutting-edge technology to generate realistic, captivating speech in a wide range of languages.</p>
        <b-nav tabs class="justify-content-left">
          <b-nav-item active>Text to Speech</b-nav-item>
          <b-nav-item>Speech to Speech</b-nav-item>
        </b-nav>
      </b-col>
    </b-row>

    <!-- Settings, Text Area and Audio Player in a single column -->
    <b-row>
      <b-col md="6" class="offset-md-0">
        <b-row class="mb-3">
          <b-col sm="3" class="d-flex align-items-center">
            <label for="api-key">Apikey</label>
          </b-col>
          <b-col sm="9">
            <b-form-input id="api-key" v-model="selectedVoice" :options="voiceOptions" />
          </b-col>
        </b-row>
        <!-- Settings Dropdown -->
        <b-row>
          <b-col sm="3" class="d-flex align-items-center">
            <label for="voice-settings">Settings</label>
          </b-col>
          <b-col sm="9">
            <b-form-select id="voice-settings" v-model="selectedVoice" :options="voiceOptions" />
          </b-col>
        </b-row>

        <!-- Text Area -->
        <b-row class="mt-3">
          <b-col sm="3" class="d-flex align-items-center">
            <label for="speech-text">Text</label>
          </b-col>
          <b-col sm="9">
            <b-form-textarea id="speech-text" v-model="textToNarrate" rows="3" />
          </b-col>
        </b-row>

        <!-- Generate Button -->
        <b-button variant="primary" @click="generateNarration" class="w-100 mb-3 mt-3">Generate</b-button>

        <!-- Quota Remaining -->
        <p sm="1" class="d-flex align-items-center">Total quota remaining: {{ quotaRemaining }}</p>

        <!-- Audio Player -->
        <div>
          <audio ref="audioPlayer" controls class="w-100">
            <source :src="audioSrc" type="audio/mpeg">
            Your browser does not support the audio element.
          </audio>
        </div>
        
        <!-- User Info Link -->
        <b-link href="#" class="user-info">User Info</b-link>
      </b-col>
    </b-row>
    <b-card class="audio-item" style="max-width: 200px;">
      <!-- Name -->
      <div class="audio-name">{{ audioName }}</div>
  
      <!-- Details (Length, Date, Download Icon) -->
      <div class="audio-details d-flex justify-content-between align-items-center">
        <div>{{ audioLength }}</div>
        <div>{{ audioDate }}</div>
        <b-link :href="audioDownloadUrl" download class="audio-download">
          <i class="fas fa-download"></i>
        </b-link>
      </div>
    </b-card>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      selectedVoice: null,
      textToNarrate: '',
      quotaRemaining: null, // Initialize this with your logic
      voiceOptions: [], // Populate this with your voice options
      audioSrc: '', // URL of the audio file to be played
      audioName: "",
      audioLength: "",
      audioDate: "",
      audioDownloadUrl: "",
    };
  },
  methods: {
    generateNarration() {
      // Your logic for text-to-speech generation
    }
  },
  mounted() {
    // Your logic to initialize quotaRemaining and voiceOptions
  }
};
</script>

<style scoped>
.user-info {
  display: block;
  text-align: right;
  margin-top: 10px;
}

.audio-item {
  margin: 10px;
  padding: 10px;
}
.audio-name {
  font-weight: bold;
  margin-bottom: 5px;
}
</style>