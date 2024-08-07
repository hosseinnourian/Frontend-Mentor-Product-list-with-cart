<template>
    <div @mouseover="hover = true" @mouseleave="hover = false" class="cart" :class="{ border: hover }">
        <div class="image-holder">
            <img class="desert-image img-thumbnail" :src="food.image.desktop" :alt="food.name">
        </div>
        <div class="text-start">
            <p class="category">{{ food.category }}</p>
            <p class="name">{{ food.name }}.</p>
            <p class="text-danger fw-bolder price">${{ food.price }}</p>
        </div>
        <div>
            <button @click="addToStore({ name: props.food.name, price: props.food.price, quantity: 1 })"
                class="cart-btn">Add To
                Cart</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { IFood } from '@/types/food';
import { ref } from 'vue';
import { useOrderStore } from '@/stores/orders';
import type { IOrder } from '@/types/order';
const hover = ref<boolean>(false)
const store = useOrderStore()
const props = defineProps<{
    food: IFood
}>()

const addToStore = (order: IOrder) => {
    store.addToOrders(order)
}

</script>

<style scoped>
.category {
    color: rgb(84, 84, 84);
    margin: 30px 0;
}

.name {
    color: black;
    font-weight: bold;
    font-size: 18px;
}

.price {
    font-size: 18px;
}

.border {
    border: 2px solid red !important;
    transition: 0.2s;
    cursor: pointer;
}

.cart {
    width: 40%;

    padding: 20px;
    margin: 20px;
    background-color: rgb(249, 208, 157);
    border-radius: 20px;
}

.cart .image-holder {
    width: 100%;
    height: 240px;

}

.desert-image {
    width: 100%;
    height: 100%;
}

.cart-btn {
    background-color: rgb(208, 71, 71);
    border: none;
    padding: 15px 30px;
    color: rgb(233, 233, 233);
    border-radius: 20px;
}
</style>
