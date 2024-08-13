<script setup>
import { useShowStore } from '@/stores/show'
import { ref } from 'vue';
import TodoModal from '@/components/TodoModal.vue';
const showStore = useShowStore()
showStore.showCreateButton = ref(true)

</script>
<template>
    <TodoModal @close="showStore.showModal = false"></TodoModal>
    <div class="bg-gray-100 h-screen">
        <div id="paragraph" class="flex justify-center items-center pt-16">
            <div v-if="showStore.showCreateButton == true"
                class="border shadow-xl hover:bg-gray-100 bg-white 3 h-12 w-[500px] transition-all duration-500 text-start mb-10 flex items-center pl-2">
                <p class="pr-[380px] font-bold">
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
                        class="border-2 rounded-l-lg text-black border-blue-600 hover:bg-gray-100 bg-white 3 h-12 w-[200px] transition-all duration-500 text-start mb-2 flex items-center outline-none">
                        <input type="text"
                        class="border-2 text-black border-blue-600 hover:bg-gray-100 bg-white 3 h-12 w-[500px] transition-all duration-500 text-start mb-2 flex items-center outline-none">
                        <input type="date"
                        class="border-2 rounded-r-lg text-black border-blue-600 hover:bg-gray-100 bg-white 3 h-12 w-[210px] transition-all duration-500 text-start mb-2 flex items-center outline-none">


                        

                    </div>                    <div class="flex gap-3">
                        <button
                            class="bg-blue-600 hover:bg-blue-700 rounded py-1 px-4 text-white transition-all duration-500"
                            @click="showStore.showCreateInput = false; showStore.showCreateButton = true">Sauvegarder</button>
                        <button class="rounded hover:bg-gray-300 py-1 px-4 font-bold transition-all duration-300"
                            @click="showStore.showCreateInput = false; showStore.showCreateButton = true">Annuler</button>
                    </div>
                </form>
            </div>
        </div>

        <div class="m-10 grid grid-cols-4">
            <div class=" h-[300px] w-[300px] bg-white shadow-lg" @click="showStore.showModal = true">
                <div class="flex flex-col">
                    <p class="font-bold flex justify-center items-center pt-4 text-xl">Title</p>
                    <p class="flex justify-center items-center pt-3 pl-3 pr-4">Alii nullo quaerente vultus severitate
                        adsimulata patrimonia sua in inmensum extollunt porrigitur, non divitiis eluxisse sed per bella
                        saevissima, nec opibus nec victu nec indumentorum vilitate e</p>
                       
                </div>

            </div>
            <div class=" h-[300px] w-[300px] bg-white shadow-lg mb-5">
                <div class="flex flex-col">
                    <p class="font-bold flex justify-center items-center pt-4 text-xl">Title</p>
                    <p class="flex justify-center items-center pt-3 pl-3 pr-4">Alii nullo quaerente vultus severitate
                        adsimulata patrimonia sua in inmensum extollunt porrigitur, non divitiis eluxisse sed per bella
                        saevissima, nec opibus nec victu nec indumentorum vilitate e</p>
                        <input type="checkbox" class="h-5 w-5 accent-blue-600">
                </div>

            </div>
            <div class=" h-[300px] w-[300px] bg-white shadow-lg mb-5">
                <div class="flex flex-col">
                    <p class="font-bold flex justify-center items-center pt-4 text-xl">Title</p>
                    <p class="flex justify-center items-center pt-3 pl-3 pr-4">Alii nullo quaerente vultus severitate
                        adsimulata patrimonia sua in inmensum extollunt porrigitur, non divitiis eluxisse sed per bella
                        saevissima, nec opibus nec victu nec indumentorum vilitate e</p>
                        <input type="checkbox" class="h-5 w-5 accent-blue-600">
                </div>

            </div>
            <div class=" h-[300px] w-[300px] bg-white shadow-lg mb-5">
                <div class="flex flex-col">
                    <p class="font-bold flex justify-center items-center pt-4 text-xl">Title</p>
                    <p class="flex justify-center items-center pt-3 pl-3 pr-4">Alii nullo quaerente vultus severitate
                        adsimulata patrimonia sua in inmensum extollunt porrigitur, non divitiis eluxisse sed per bella
                        saevissima, nec opibus nec victu nec indumentorum vilitate e</p>
                        <input type="checkbox" class="h-5 w-5 accent-blue-600">
                </div>

            </div>
            <div class=" h-[300px] w-[300px] bg-white shadow-lg mb-5">
                <div class="flex flex-col">
                    <p class="font-bold flex justify-center items-center pt-4 text-xl">Title</p>
                    <p class="flex justify-center items-center pt-3 pl-3 pr-4">Alii nullo quaerente vultus severitate
                        adsimulata patrimonia sua in inmensum extollunt porrigitur, non divitiis eluxisse sed per bella
                        saevissima, nec opibus nec victu nec indumentorum vilitate e</p>
                        <input type="checkbox" class="h-5 w-5 accent-blue-600">
                </div>

            </div>


        </div>
    </div>
</template>