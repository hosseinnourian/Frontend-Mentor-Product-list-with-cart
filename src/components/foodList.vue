<template>
    <div class="row">
        <foodCart v-for="(food, index) in foods" :food="food" />
    </div>
</template>


<script setup lang="ts">
import type { IFood } from '@/types/food';
import foodCart from './foodCart.vue';

const props = defineProps<{
    foods: IFood[]
}>()

</script>