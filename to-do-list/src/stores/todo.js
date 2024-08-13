import { defineStore } from "pinia";
import { useIdsStore } from "./id";
const idStore = useIdsStore()
export const useTodoStore  = defineStore('todo',{
    state: () => ({
        tasks: [],
        task: ''
    }),
    actions: {
        findTaskIndex(tasks, title){
            const taskIndex = tasks.findIndex(task => task.title === title);
            return taskIndex;

        },
        showTask(){

        },
        createTask(title, content, dateUp, dateDown){
            idStore.incrementId()
            const task = {
                id: idStore.id,
                title: title,
                content: content,
                dateUp: dateUp,
                dateDown: dateDown
            }
            this.tasks.push(task);
            
            console.log(task);
        },
        updateTask(id, newTitle, newContent, newDateUp, newDateDown){
            const task = this.tasks.find(task => task.id === id);
            const newTask = {
                title: newTitle,
                content: newContent,
                dateUp: newDateUp,
                dateDown: newDateDown
            }
            this.tasks.push(newTask)
            console.log(newTask);
        },
        deleteTask(){
            
        }
    }
})