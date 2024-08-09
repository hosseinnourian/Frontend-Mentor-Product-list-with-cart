<script setup lang="ts">
import { ref } from 'vue'

const open = ref(false)



</script>

<template>
    <button @click="open = true">Open Modal</button>

    <teleport to="body">
        <div v-if="open" class="modals">
            <p>Hello from the modal!</p>
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
</style>