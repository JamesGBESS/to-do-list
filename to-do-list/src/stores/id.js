import { defineStore } from 'pinia'
export const useIdsStore = defineStore('id', {
  state: () => ({
    id: 0,
    getId: ''
  }),
  actions: {
    incrementId() {
      this.id++
      return this.id
    }
  }
})
