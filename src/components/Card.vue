<template>
    <div class="card" :class="{ flipped: isFlipped }" @click="flipCard">
      <div class="front">
        <!-- 卡片正面内容 -->
      </div>
      <div class="back">
        <!-- 卡片背面内容 -->
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isFlipped: false,
      };
    },
    methods: {
      flipCard() {
        this.isFlipped = !this.isFlipped;
      },
    },
  };
  </script>
  
  <style scoped>
  .card {
    width: 100px;
    height: 100px;
    perspective: 1000px;
    margin: 10px;
  }
  
  .front, .back {
    width: 100%;
    height: 100%;
    position: absolute;
    backface-visibility: hidden;
    transition: transform 0.6s;
  }
  
  .front {
    background-color: #bbb;
  }
  
  .back {
    background-color: #777;
    transform: rotateY(180deg);
  }
  
  .flipped .front {
    transform: rotateY(-180deg);
  }
  
  .flipped .back {
    transform: rotateY(0deg);
  }
  </style>
  