<script setup lang="ts">
import sidebar from './components/sidebar.vue'
import content from './components/content.vue'


</script>

<template>
  <div class="container text-center my-5">
    <div class="row align-items-start">
      <div class="col-9">
        <content />
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
