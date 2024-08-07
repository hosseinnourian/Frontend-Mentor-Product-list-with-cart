<template>
    <div class="order-item text-start">
        <p class="name">Name :{{ name }} </p>
        <p class="quantity">Quantity : {{ quantity }} </p>
        <p class="price">Price : {{ price }} </p>
    </div>
</template>


<script setup lang="ts">

const props = defineProps<{
    name: string,
    quantity: number,
    price: number
}>()

</script>

<style scoped>
.order-item{
    background-color: white;
    padding: 10px;
    border-radius: 10px;
    margin: 15px auto;
}
.name {
    font-weight: bold;
}

.quantity {
    font-weight: bold;
}

.price {
    font-weight: bold;
    color: red;
}
</style>