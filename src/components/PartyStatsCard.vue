<template>
    <div class="party-card">
      <header class="party-header">
        <h2>{{ partyName }}</h2>
      </header>
      <div class="party-content">
        <p>{{ matchPercentage.toFixed(2) }}%</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps, computed } from 'vue';
  
  const props = defineProps({
    partyName: {
      type: String,
      required: true
    },
    total: {
      type: Number,
      required: true
    },
    matchCount: {
      type: Number,
      required: true
    }
  });
  
  const matchPercentage = computed(() => {
    return (props.matchCount / props.total) * 100;
  });
  </script>
  
  <style scoped>
  .party-card {
    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin: 10px 0;
    text-align: center;
  }
  
  .party-header h2 {
    margin: 0;
    font-size: 1.5em;
    color: var(--french-blue);
  }
  
  .party-content p {
    font-size: 1.2em;
    margin: 0;
  }
  </style>
  