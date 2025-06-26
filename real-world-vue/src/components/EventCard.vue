<template>
  <RouterLink :to="`/events/${event.id}`">
  <div class="event-card">
    <h2>{{ event.title }}</h2>
    <span>@{{ event.time }} on {{ formatDate(event.date) }}</span>
  </div>
  </RouterLink>
</template>

<script>
export default {
  props: {
    event: {
      type: Object,
      required: true
    }
  },
  methods:{
    formatDate(dateStr) {
      const options = { year: 'numeric', month: 'long', day: '2-digit' }
      const date = new Date(dateStr)
      return date.toLocaleDateString(undefined, options)
    }
  }
}
</script>

<style scoped>
.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}

.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>