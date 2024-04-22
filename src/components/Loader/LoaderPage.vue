<template>
    <div v-if="isLoading" class="loader"></div>
  </template>
  
  <script>
  export default {
    name: 'LoaderPage',
    props: {
      isLoading: {
        type: Boolean,
        required: true
      }
    }
  }
  </script>
  
  <style>
  .loader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.5); /* semi-transparent white overlay */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  </style>
  