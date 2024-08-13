<script setup>
import { useShowStore } from '@/stores/show'
import { useTodoStore } from '@/stores/todo';
import { useCategoryStore } from '@/stores/category';
const todoStore = useTodoStore()
const categoryStore = useCategoryStore()
import { ref } from 'vue';
import TodoModal from '@/components/TodoModal.vue';
const showStore = useShowStore()
const task = {
    title: '',
    content: '',
    downUp: '',
    downDown: '',

}
 
const setTask = () => {
    todoStore.createTask(task.title, task.content, task.dateUp, task.dateDown)
}
const bool = ref(false)
console.log(bool)

showStore.showCreateButton = ref(true)
const err = () => {
    if(todoStore.errors){
    alert("Required")
}
}

</script>
<template>
    <div class="bg-gray-100 h-screen">
        <div id="paragraph" class="flex justify-center items-center pt-16">
            <div v-if="showStore.showCreateButton == true"
                class="border-2 rounded-xl border-blue-600 hover:bg-gray-100 bg-white 3 h-[50px] w-[500px] transition-all duration-500 text-start mb-10 flex items-center pl-2">
                <p class="pr-[370px] font-bold">
                    Add a todo </p> <button class="px-[6px] py-[6px] border rounded-md bg-blue-700"
                    @click="showStore.showCreateInput = true; showStore.showCreateButton = false">
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="16px" height="16px"
                        viewBox="0 0 1267.000000 1280.000000" preserveAspectRatio="xMidYMid meet">
                        <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)" fill="#ffffff"
                            stroke="none">
                            <path d="M6150 12794 c-195 -19 -398 -76 -550 -155 -338 -176 -592 -520 -691
-938 -54 -226 -52 -157 -56 -2058 l-4 -1763 -1712 0 c-1854 0 -1839 0 -2071
-54 -403 -96 -739 -346 -906 -676 -114 -227 -170 -514 -157 -817 17 -398 156
-716 421 -989 200 -199 415 -319 695 -385 204 -49 183 -49 2013 -49 l1717 0 4
-1762 c4 -1902 2 -1833 56 -2059 100 -421 345 -751 688 -927 124 -64 249 -105
402 -134 168 -32 494 -32 663 0 300 56 514 167 713 366 234 236 365 511 421
886 16 105 18 270 21 1873 l4 1757 1717 0 c1888 0 1849 -1 2091 61 400 103
715 350 886 698 151 305 196 741 115 1126 -83 402 -328 720 -697 907 -120 62
-190 87 -332 123 -218 55 -211 55 -2068 55 l-1712 0 -4 1763 c-3 1564 -5 1774
-20 1869 -59 391 -203 678 -463 928 -184 177 -393 280 -669 331 -108 20 -406
33 -515 23z" />
                        </g>
                    </svg>
                </button>

            </div>

            <div>

            </div>
        </div>
        <!-- Input pour mettre la description -->
        <div class="flex flex-col justify-center items-center" v-if="showStore.showCreateInput == true">
            <div class="flex justify-start items-start flex-col">
                <form action="">
                    <div class="flex">
                        <input type="text"
                            class="border-2 rounded-l-lg text-black border-blue-600 hover:bg-gray-100 bg-white 3 h-12 w-[200px] transition-all duration-500 text-start mb-2 flex items-center outline-none p-2"
                            v-model="task.title" placeholder="Title">
                        <input type="text"
                            class="border-2 text-black border-blue-600 hover:bg-gray-100 bg-white 3 h-12 w-[500px] transition-all duration-500 text-start mb-2 flex items-center outline-none p-2"
                            v-model="task.content" placeholder="Description">
                        <input type="date"
                            class="border-2 text-black border-blue-600 hover:bg-gray-100 bg-white 3 h-12 w-[210px] transition-all duration-500 text-start mb-2 flex items-center outline-none p-2"
                            v-model="task.dateUp">
                        <input type="date"
                            class="border-2 rounded-r-lg text-black border-blue-600 hover:bg-gray-100 bg-white 3 h-12 w-[210px] transition-all duration-500 text-start mb-2 flex items-center outline-none p-2"
                            v-model="task.dateDown">
                    </div>
                    <div class="flex gap-3">
                        <a href="/">
                            <button type="submit"
                            class="bg-blue-600 hover:bg-blue-700 rounded py-1 px-4 text-white transition-all duration-500"
                            @click="setTask(); showStore.showCreateInput = false; showStore.showCreateButton = true; err()">Sauvegarder</button>
                        </a>
                        <button class="rounded hover:bg-gray-300 py-1 px-4 font-bold transition-all duration-300"
                            @click="showStore.showCreateInput = false; showStore.showCreateButton = true">Annuler</button>
                    </div>
                </form>
            </div>
        </div>

        <div class="grid grid-cols-3">
            <div v-for="category in categoryStore.categories" :key="category.id">
                <div class="ml-10 w-[400px] min-h-[600px] bg-gray-200 border-2 rounded-xl border-blue-600">
                    <div class=" grid grid-rows-4">
                        <p class="flex justify-center items-center font-extrabold text-[20px]">{{ category.name }}</p>
                        <div v-for="task in todoStore.tasks" :key="task.id" class="flex flex-col">
                            <div class="flex my-2 mx-10" v-if="task.status == category.status">
                                <div class=" h-[50px] w-[270px] bg-white border-2 border-blue-600 x rounded-l-xl flex"
                                @click="showStore.showModal = true; todoStore.getTask(task.title); todoStore.id = task.id">
                                    <p class="items-center mt-2 pl-3 font-semibold ">{{ task.title }}</p>
                            </div>
                            <TodoModal @close="showStore.showModal = false"></TodoModal>

                            <div
                                class="p-3 h-[50px] w-[48px] bg-white border-2 border-blue-600 rounded-r-xl flex">
                                <input type="checkbox" class="text-end w-5 accent-blue-600" v-model="bool">

                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>





        </div>

    </div>
</template>