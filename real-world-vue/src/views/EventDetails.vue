<script setup>
import EventService from '@/services/EventService'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const event = ref(null)
const route = useRoute()
const id = route.params.id

onMounted(() => {
  EventService.getEvent(id)
    .then((response) => {
      event.value = response.data
    })
    .catch((error) => {
      console.log(error)
    })
})

function formatDate(dateStr) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  const date = new Date(dateStr)
  return date.toLocaleDateString(undefined, options)
}
</script>

<template>
  <div v-if="event" class="event-details">
    <h1>{{ event.title }}</h1>
    <p><strong>Category:</strong> {{ event.category }}</p>
    <p><strong>Organizer:</strong> {{ event.organizer }} (User ID: {{ event.user.id }})</p>
    <p><strong>Location:</strong> {{ event.location }}</p>
    <p><strong>Date & Time:</strong> {{ formatDate(event.date) }} at {{ event.time }}</p>
    <p><strong>Description:</strong> {{ event.description }}</p>
    <p><strong>Attendees:</strong> {{ event.attendees.length > 0 ? event.attendees.join(', ') : 'No attendees yet' }}</p>
  </div>
</template>

<style scoped>
.event-details {
  max-width: 600px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-family: Arial, sans-serif;
}

.event-details h1 {
  font-size: 28px;
  margin-bottom: 12px;
}

.event-details p {
  margin: 8px 0;
  font-size: 16px;
}
</style>
