import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { IOrder } from '@/types/order'

export const useOrderStore = defineStore('orders', {
  state: () => {
    return {
      orderList: [] as IOrder[]
    }
  },
  actions: {
    addToOrders(order: IOrder) {
      this.orderList.push(order)
    }
  }
})
