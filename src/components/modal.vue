<script setup lang="ts">
import { ref } from 'vue'

const open = ref(false)

const props = defineProps<{
    price : number
}>()


</script>

<template>
    <button class="open-modal" @click="open = true">Check Out!</button>

    <teleport to="body">
        <div v-if="open" class="modals">
            <p>You Hvae to Pay ${{ price }} For Orders</p>
            <button class="close-btn" @click="open = false">
                <span class="close">
                    Close
                </span>
            </button>
        </div>
    </teleport>
</template>

<style scoped>
.modals {
    position: fixed;
    z-index: 999;
    top: 20%;
    left: 50%;
    width: 300px;
    margin-left: -150px;
    background-color: rgb(225, 221, 221);
    text-align: center;
    padding: 20px;
    border-radius: 20px;
    font-weight: bold;
}
.close-btn {
    padding: 10px;
    border: none;
    border-radius: 10px;
}
.close {
    color: red;
    font-weight: bolder;
}
.open-modal{
    padding: 20px;
    border: none;
    font-weight: bold;
    color: rgb(37, 235, 37);
    background-color: green;
    border-radius: 50%;
}
</style>