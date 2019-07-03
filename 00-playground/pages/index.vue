<template>
  <div id="wrap">
    <button id="sendData" @click="sendData">Send Data to Firebase</button>
    <button id="fetchData" @click="fetchData">Fetch Data from Firebase</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  methods: {
    sendData: () => {
      let data = {
        firstName: "Thorsten",
        lastName: "Schmidt",
        timestamp: Date.now()
      };

      axios.post("https://nuxtjs-66bf5.firebaseio.com/posts.json", data)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        })
    },
    fetchData: () => {
      axios.get("https://nuxtjs-66bf5.firebaseio.com/posts.json")
        .then((response) => {
          console.log("Test");
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
}
</script>

<style>
  #wrap {
    margin: 2rem auto;
    width: calc(100% - 3rem);
    background-color: lightgrey;
    display: flex;
    justify-content: center;
    padding: 1rem 0;
  }

  button {
    margin-left: 2rem;
  }
</style>
