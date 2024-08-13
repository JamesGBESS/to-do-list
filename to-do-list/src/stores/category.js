import { defineStore } from 'pinia'
import { useIdsStore } from './id'
export const useCategoryStore = defineStore('category', {
  state: () => ({
    categories:JSON.parse(localStorage.getItem("categories")) || [],
   
  }),
  actions: {
    findTaskIndex(tasks, id) {
      const taskIndex = tasks.findIndex((task) => task.id === id)
      return taskIndex
    },
    showTask() {},
    createTask(title, content, dateUp, dateDown) {
      useIdsStore().incrementId()
      const task = {
        id: useIdsStore().id,
        title: title,
        content: content,
        dateUp: dateUp,
        dateDown: dateDown
      }
      this.tasks.push(task)
      localStorage.setItem("tasks", JSON.stringify(this.tasks))
      console.log(this.tasks)
    }}})