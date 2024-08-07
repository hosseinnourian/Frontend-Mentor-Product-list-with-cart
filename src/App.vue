<script setup lang="ts">
import sidebar from './components/sidebar.vue'
import content from './components/content.vue'


</script>

<template>
  <div class="body">
    <div class="holder text-center ">
      <div class="row align-items-start">
        <div class="col-8">
          <content />
        </div>
        <div class="col-4 my-5">
          <sidebar />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.body {
  background-color: rgb(244, 234, 222);
  margin: 0;
  border: none;
  border: 1px solid transparent;
}


.holder {
  width: 75%;
  margin: 0 auto;
  background-color: rgb(251, 222, 187) !important;
  padding: 30px;
  border-radius: 20px;

  margin: 20px auto;
}
</style>
