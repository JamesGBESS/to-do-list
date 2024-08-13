import { defineStore } from "pinia";
export const useShowStore = defineStore('show',{
    state: () => ({
        showCreateInput: '',
        showCreateButton: '',
        showModal: '',
        showInputTitle: '',
        showTextarea: '',
        showDescription: '',
        showTitle: '',
        showDateUp: '',
        showDateDown: '',
        showInputDateUp: '',
        showInputDateDown: '',
        showStatus: '',
        showInputStatus: '',
        showDeleteModal: '',
    })
})