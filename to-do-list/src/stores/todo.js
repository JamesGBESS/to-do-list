import { defineStore } from 'pinia'
import { useIdsStore } from './id'
const STORE_NAME = 'todo'
export const useTodoStore = defineStore(STORE_NAME, {
  state: () => ({
    tasks:JSON.parse(localStorage.getItem("tasks"))||[],
    task: '',
    id: ''
   
  }),
  actions: {
    findTaskIndex(tasks, id) {
      const taskIndex = tasks.findIndex((task) => task.id === id)
      return taskIndex
    },
    showTask(id) {
        const task = this.tasks.find((task) => task.id === id);
        return task
    },
    createTask(title, content, dateUp, dateDown) {
      useIdsStore().incrementId()
      const task = {
        id: useIdsStore().id,
        title: title,
        content: content,
        dateUp: dateUp,
        dateDown: dateDown,
        status: "Todo"
      }
      this.tasks.push(task)
      localStorage.setItem("tasks", JSON.stringify(this.tasks))
      console.log(this.tasks)
    },
    getTask(title){
        const task = this.tasks.find((task) => task.title === title);
        console.log(task);
        this.task = task 
    },
    updateTask(id, newTitle = null, newContent = null, newDateUp = null, newDateDown = null, status = "Todo") {
      const task = this.tasks.find((task) => task.id === id)
      localStorage.setItem("tasks", JSON.stringify(this.tasks))

      // this.tasks[task].title = newTitle;
      // this.tasks[task].content = newContent;
      // this.tasks[task].dateUp = newDateUp;
      // this.tasks[task].dateDown = newDateDown;
      // this.tasks[task].status = status
      // localStorage.setItem("tasks", JSON.stringify(this.tasks))

      const newTask = {
        title: newTitle,
        content: newContent,
        dateUp: newDateUp,
        dateDown: newDateDown,
        status: status
      }
            
    },
    deleteTask(title) {
        this.tasks = this.tasks.filter((task) => task.title !== title);
        localStorage.setItem("tasks", JSON.stringify(this.tasks))
    },


    
  }
  
})
