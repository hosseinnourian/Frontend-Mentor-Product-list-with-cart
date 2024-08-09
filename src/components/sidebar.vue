<template>
    <div v-if="orderStore.getTotalPrice > 0" class="text-center">
        <orderItem v-for="orders in orderStore.orderList" :name="orders.name" :price="orders.price"
            :quantity="orders.quantity" />
        <totalPrice :totalPrice="orderStore.getTotalPrice" />
        <div>
            <modal />
        </div>
    </div>
</template>

<script setup>
import { useOrderStore } from '@/stores/orders';
import orderItem from './orderItem.vue';
import totalPrice from './totalPrice.vue';
import modal from './modal.vue';
const orderStore = useOrderStore()

</script>
