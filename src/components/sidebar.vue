<template>
    <div class="text-center">
        <h1>Sidebar</h1>
        <ul>
            <li v-for="orders in orderStore.orderList">
                {{ orders.name }}
            </li>
        </ul>
    </div>
</template>

<script setup>
import { useOrderStore } from '@/stores/orders';

const orderStore = useOrderStore()

</script>

<style scoped>
ul li {
    list-style: none;
}
</style>