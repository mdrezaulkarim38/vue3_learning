<script setup>
defineProps({
    resource: {
        type: String,
        required: true,
        default: 'page'
    }
})
</script>
<template>
    <h1>Oops!</h1>
    <h3>The {{ resource }} you're looking for is not here</h3>
    <router-link :to="{name: 'EventList'}">Back to the home</router-link>
</template>