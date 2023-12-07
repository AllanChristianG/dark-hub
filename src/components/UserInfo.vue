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
  mounted() {
    const headers = {"xi-api-key": "427043e1f291a4aa4259fc22879d04e9"}

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
