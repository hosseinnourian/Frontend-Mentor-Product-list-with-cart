<template>
    <div>
        <p>{{ totalPrice }}</p>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    totalPrice: number
}>()
</script>

<style scoped>
div {
    background-color: white;
    padding: 10px;
    border-radius: 10px;
}

p {
    color: red;
}
</style>