<script setup lang="ts">
import { ref } from 'vue';
import type { IFood } from './types/food';
import sidebar from './components/sidebar.vue'
import content from './components/content.vue'
import { data } from './data'
const foods = ref<IFood[]>(data)

</script>

<template>
  <div class="container text-center">
    <div class="row align-items-start">
      <div class="col-9">
        <content />
        <div v-for="(food, index) in foods" :key="index">
          <img :src="food.image.desktop" :alt="food.name">
        </div>
      </div>
      <div class="col-3">
        <sidebar />
      </div>
    </div>
  </div>
</template>

<style>
* {
  border: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  border: 1px solid red;
}
</style>
