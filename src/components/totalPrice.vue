<template>
    <div v-if="totalPrice != 0">
        <p> Total Price : <span>{{ totalPrice }}</span></p>
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
    text-align: center;
    line-height: normal;
}

p {
    color: rgb(58, 55, 55);
    font-weight: bold;
    font-size: 20px;
}

span {
    color: red;
}
</style>