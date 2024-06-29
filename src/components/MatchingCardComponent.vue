<template>
    <div class="card matching-card" :class="animationClass">
      <header class="card-header">
        <h2>{{ category }}</h2>
      </header>
      <div class="card-content">
        <p>{{ truncatedDescription }}</p>
        <button v-if="isTruncated" @click="showFullDescription" class="see-more">
          Voir plus
        </button>
      </div>
      <footer class="card-footer">
        <button @click="disagree" class="disagree" title="Je ne suis pas d'accord">
          ❌
        </button>
        <button @click="noOpinion" class="no-opinion" title="Je n'ai pas d'avis">
          ❓
        </button>
        <button @click="agree" class="agree" title="Je suis d'accord">
          ❤️
        </button>
      </footer>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, defineEmits, defineProps, watch } from 'vue';
  
  const props = defineProps({
    category: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    politicalParty: {
      type: String,
      required: true
    }
  });
  
  const emit = defineEmits(['removeCard', 'agree', 'disagree', 'noop']);
  
  const isTruncated = ref(true);
  const animationClass = ref('');
  
  const truncatedDescription = computed(() => {
    return isTruncated.value ? `${props.description.slice(0, 140)}...` : props.description;
  });
  
  const showFullDescription = () => {
    isTruncated.value = false;
  };
  
  const slideOut = (direction) => {
    animationClass.value = `slide-${direction}`;
    setTimeout(() => {
      animationClass.value = 'fade-out';
      emit('left' === direction ? 'disagree' : 'agree', props.politicalParty)
    }, 100);
  };
  
  const disagree = () => {
    slideOut('left');
  };
  
  const noOpinion = () => {
    animationClass.value = 'fade-out';
    setTimeout(() => emit('noop', props.politicalParty), 100);
  };
  
  const agree = () => {
    slideOut('right');
  };
  
  watch(animationClass, (newValue) => {
    if (newValue === 'fade-out') {
      setTimeout(() => emit('removeCard'), 100);
    }
  });
  </script>
  
  <style lang="scss" scoped>
  .card {
    height: 350px;
    margin: 20px auto;
    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    transition: transform 0.3s, opacity 0.3s;
  
    &.slide-left {
      transform: translateX(-100%);
    }
  
    &.slide-right {
      transform: translateX(100%);
    }
  
    &.fade-out {
      opacity: 0;
    }
  
    .card-header {
      margin-top: 20px;
      margin-bottom: 10px;
  
      h2 {
        font-size: 1.5em;
        margin: 0;
        color: var(--french-blue);
      }
    }
  
    .card-content {
      text-align: center;
      padding: 30px;
  
      p {
        margin: 0;
        font-size: 1.1em;
      }
  
      .see-more {
        background: none;
        border: none;
        color: #3498db;
        cursor: pointer;
        font-size: 0.9em;
        text-decoration: underline;
  
        &:hover {
          text-decoration: none;
        }
      }
    }
  
    .card-footer {
      display: flex;
      justify-content: space-between;
      padding: 20px;
    //   padding: 10px 0;
  
      button {
        background: #fff;
        border: none;
        // border: #3498db;
        font-size: 2em;
        cursor: pointer;
        width: 2.3em;
        height: 2.3em;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  
        &.disagree {
          border-color: var(--french-blue);
        }
  
        &.no-opinion {
          border-color: white;
        }
  
        &.agree {
          border-color: var(--french-red);
        }
  
        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }
  </style>
  