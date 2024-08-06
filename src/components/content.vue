<template>
    <Banner />
    <div class="text-center">
        <foodList :foods="foods" />
    </div>
</template>

<script setup lang="ts">
import type { IFood } from '../types/food'
import { ref } from 'vue';
import { data } from '../data'
import foodList from './foodList.vue';
import Banner from './banner.vue';
const foods = ref<IFood[]>(data)

</script>