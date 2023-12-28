<template>
  <b-container>
    <!-- Title and Tabs -->
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="65 55 150 150" 
      width="240" 
      height="240" 
      style="width: 10%; height: 10%; transform: translate3d(0px, 0px, 0px);" preserveAspectRatio="xMinYMax meet">
      <defs>
        <clipPath id="__lottie_element_25">
          <rect width="240" height="240" x="0" y="0"></rect>
        </clipPath>
        <clipPath id="__lottie_element_27">
          <path d="M0,0 L240,0 L240,240 L0,240z"></path>
        </clipPath>
        <clipPath id="__lottie_element_34">
          <path d="M0,0 L240,0 L240,240 L0,240z"></path>
        </clipPath>
        <clipPath id="__lottie_element_41">
          <path d="M0,0 L240,0 L240,240 L0,240z"></path>
        </clipPath></defs><g clip-path="url(#__lottie_element_25)">
          <g clip-path="url(#__lottie_element_41)" style="display: block;" transform="matrix(1,0,0,1,-40.5,0)" opacity="1">
            <g style="display: block;" transform="matrix(1,0,0,1,120,134.27017211914062)" opacity="1">
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path fill="rgb(74,93,138)" fill-opacity="1" d=" M0,-15 C8.278499603271484,-15 15,-8.278499603271484 15,0 C15,8.278499603271484 8.278499603271484,15 0,15 C-8.278499603271484,15 -15,8.278499603271484 -15,0 C-15,-8.278499603271484 -8.278499603271484,-15 0,-15z"></path>
                <path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4" stroke="rgb(74,93,138)" stroke-opacity="1" stroke-width="0" d=" M0,-15 C8.278499603271484,-15 15,-8.278499603271484 15,0 C15,8.278499603271484 8.278499603271484,15 0,15 C-8.278499603271484,15 -15,8.278499603271484 -15,0 C-15,-8.278499603271484 -8.278499603271484,-15 0,-15z"></path>
              </g>
            </g>
          </g>
          <g clip-path="url(#__lottie_element_34)" style="display: block;" transform="matrix(1,0,0,1,0,0)" opacity="1">
            <g style="display: block;" transform="matrix(1,0,0,1,120,126.29605102539062)" opacity="1">
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path fill="rgb(74,93,138)" fill-opacity="1" d=" M0,-15 C8.278499603271484,-15 15,-8.278499603271484 15,0 C15,8.278499603271484 8.278499603271484,15 0,15 C-8.278499603271484,15 -15,8.278499603271484 -15,0 C-15,-8.278499603271484 -8.278499603271484,-15 0,-15z"></path>
                <path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4" stroke="rgb(74,93,138)" stroke-opacity="1" stroke-width="0" d=" M0,-15 C8.278499603271484,-15 15,-8.278499603271484 15,0 C15,8.278499603271484 8.278499603271484,15 0,15 C-8.278499603271484,15 -15,8.278499603271484 -15,0 C-15,-8.278499603271484 -8.278499603271484,-15 0,-15z"></path>
              </g>
            </g>
          </g>
          <g clip-path="url(#__lottie_element_27)" style="display: block;" transform="matrix(1,0,0,1,39.5,0)" opacity="1">
            <g style="display: block;" transform="matrix(1,0,0,1,120,92.00798034667969)" opacity="1">
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path fill="rgb(74,93,138)" fill-opacity="1" d=" M0,-15 C8.278499603271484,-15 15,-8.278499603271484 15,0 C15,8.278499603271484 8.278499603271484,15 0,15 C-8.278499603271484,15 -15,8.278499603271484 -15,0 C-15,-8.278499603271484 -8.278499603271484,-15 0,-15z"></path>
                <path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4" stroke="rgb(74,93,138)" stroke-opacity="1" stroke-width="0" d=" M0,-15 C8.278499603271484,-15 15,-8.278499603271484 15,0 C15,8.278499603271484 8.278499603271484,15 0,15 C-8.278499603271484,15 -15,8.278499603271484 -15,0 C-15,-8.278499603271484 -8.278499603271484,-15 0,-15z"></path>
              </g>
            </g>
          </g>
        </g>
      </svg>
    <b-row class="mb-3">
      <b-col>
        <h1 class="text-center">Speech Synthesis</h1>
        <p class="text-center">Unleash the power of our cutting-edge technology to generate realistic, captivating speech in a wide range of languages.</p>
        <b-nav tabs class="justify-content-left">
          <b-nav-item active>Text to Speech</b-nav-item>
          <!-- <b-nav-item>Speech to Speech</b-nav-item> -->
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
            <b-form-input 
              id="api-key" 
              v-model="activeApiKey" 
            />
          </b-col>
        </b-row>
        <!-- Settings Dropdown -->
        <b-row>
          <b-col sm="3" class="d-flex align-items-center">
            <label for="voice-settings">Voices</label>
          </b-col>
          <b-col sm="9">
            <b-form-select
              id="voice-settings"
              v-model="selectedVoice"
              :options="voiceOptions"
              >
            </b-form-select>

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
        <b-button 
          variant="primary" 
          @click="generateNarration" 
          class="w-100 mb-3 mt-3"
        >Generate</b-button>

        <!-- Quota Remaining -->
        <p 
          sm="1" 
          class="d-flex align-items-center"
        >Total quota used: {{ remainingQuota }}</p>

        <!-- Audio Player -->
        <div>
          <audio 
            ref="audioPlayer" 
            controls class="w-100">
            <source :src="audioSrc" type="audio/mpeg">
            Your browser does not support the audio element.
          </audio>
        </div>
        
        <!-- User Info Link -->
        <!-- <b-link href="#" class="user-info">User Info</b-link> -->
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
/* eslint-disable */
export default {
  data() {
    return {
      remainingQuota: null,
      voiceOptions: [{"value": null, text: "Please select a voice"}],
      activeApiKey: '',
      selectedVoice: null,
      textToNarrate: '',
      userInfo: {},
      audioSrc: '', // URL of the audio file to be played
      audioName: "",
      audioLength: "",
      audioDate: "",
      audioDownloadUrl: "",
    };
  },
  computed: {},
  methods: {
    generateNarration() {
      // Your logic for text-to-speech generation
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
    },
    fetchUserInfo() {
      const currentApiKey = this.activeApiKey

    // Assuming VUE_APP_XI_API_KEY is in the global scope
    // const apiKey = process.env.VUE_APP_XI_API_KEY; 

      const options = { 
        method: 'GET', 
        headers: { 
          'xi-api-key': currentApiKey 
        } 
      };
      fetch('https://api.elevenlabs.io/v1/user', options)
        .then(response => response.json())
        .then(response => 
          this.userInfo = response,
          this.remainingQuota = this.userInfo.subscription?.character_count || 0,
        )
        .catch(err => console.error(err));
      }
    },

  watch: {
    activeApiKey: 'fetchUserInfo',
  },

  created() { 
    fetch('https://api.elevenlabs.io/v1/voices')
      .then(response => response.json())
      .then(data => {
        // Set the data to the voices array
        this.voices = data.voices;
        data.voices.map((a, b) => {
          this.voiceOptions.push({ 
            "value": a.name, 
            "text": a.name, 
            "id": a.voice_id,
            "voiceSample": a.preview_url
          }) 
        })
      })
      .catch(error => console.table('Error:', error));
    console.log("this voice options", this.voiceOptions)
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