<template>
    <div class="card" style="width: 18rem;">
        <img :src="food.image.desktop" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{ food.name }}</h5>
            <p class="card-text">{{ food.price }}.</p>
            <a href="#" class="btn btn-primary">{{ food.category }}</a>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { IFood } from '@/types/food';



const props = defineProps<{
    food: IFood
}>()

</script>