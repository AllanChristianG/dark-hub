<template>
  <div>
    <p>User Info {{ userData }}</p>
  </div>
</template>

<script>

export default {
  data() {
    return {
      userData: {},
    };
  },
  computed: { },
  methods: { },
  created() {
    /*eslint-disable*/

    const apiKey = process.env.VUE_APP_XI_API_KEY; // Assuming VUE_APP_XI_API_KEY is in the global scope

    const headers = { 'xi-api-key': apiKey };

    const options = {method: 'GET', headers: headers};

    fetch('https://api.elevenlabs.io/v1/user', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
  }
}
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
