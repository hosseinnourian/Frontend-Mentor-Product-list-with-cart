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
      const existed = this.orderList.find((item) => {
        return item.name === order.name
      })
      if (existed != null) {
        existed.price += existed.price
        ++existed.quantity
      }
      else {
        this.orderList.push(order)
      }
    }
  },
  getters: {
    getTotalPrice(): number {
      return this.orderList.reduce((a, i) => {
        return a += i.price
      }, 0)
    }
  }
})
