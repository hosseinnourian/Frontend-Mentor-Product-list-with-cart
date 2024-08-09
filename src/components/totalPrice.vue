<template>
    <div class="">
        <p> Total Price : <span>{{ totalPrice }}</span></p>
        <div>
            <modal />
        </div>
    </div>

</template>

<script setup lang="ts">
import modal from './modal.vue';
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
    display: flex;
    justify-content: center;
    align-items: center;
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