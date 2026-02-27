<template>
  <div style="text-align: center; font-family: sans-serif; margin-top: 50px;">
    <h1>Personal Website</h1>
    <p>Message from Backend: <strong>{{ backendMessage }}</strong></p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const backendMessage = ref('Loading...')

onMounted(async () => {
  try {
    // We point to Port 5000 where our Express server is listening
    const response = await axios.get('http://localhost:5000/api/hello')
    backendMessage.value = response.data.message
  } catch (error) {
    backendMessage.value = "Error: Could not connect to backend."
    console.error(error)
  }
})
</script>