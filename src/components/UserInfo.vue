<template>
  <div>
    <p>User Info {{ userData }}</p>
    <button 
      class="fetch-user-data"
      v-on:click="fetchUserData"
      >Fetch user Data</button>
  </div>
</template>

<script>
// import env from "../../.env"

export default {
  data() {
    return {
      userData: {},
    };
  },
  computed: { },
  methods: {
    fetchUserData() {
      console.log("FETCH USER DATA")
    }
  },
  mounted() {
    /*eslint-disable*/
    const apiKey = process.env.VUE_APP_XI_API_KEY

    const headers = {"xi-api-key": `${apiKey}`}

    const options = {method: 'GET',  headers: headers};
    
    // Fetch data from the server API
    fetch('https://api.elevenlabs.io/v1/user', options)
      .then(response => response.json())
      .then(data => {
        // Set the data to the voices array
        this.userData = data;
        console.log("USER DATA", this.userData)
        
      })
      .catch(error => console.error('Error:', error));
  },
};
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
