import { defineStore } from 'pinia'
export const useIdsStore = defineStore('id', {
  state: () => ({
    id: 0
  }),
  actions: {
    incrementId() {
      this.id++
      return this.id
    }
  }
})
