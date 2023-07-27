<script setup>
import { onMounted, ref } from 'vue';
import CardBasic from '../components/CardBasic.vue';
import portfolios from '../database/portfolio.js'

const emit = defineEmits(['show-navbar'])
const showDetail = (item) => {
    portfolioActive.value = item
}
const portfolioActive = ref(null)

onMounted(() => {
    portfolioActive.value = portfolios[0]
})

</script>

<template>
  <main id="home" class="container relative gap-5 row">
    <div class="col-span-12 row">
        <CardBasic class="order-2 hidden col-span-12 md:order-1 md:col-span-6 md:block">
            <div class="flex flex-row items-center justify-between">
                <h3 class="text-2xl font-semibold">My Portfolio</h3>
            </div>
        </CardBasic>
        <CardBasic class="order-1 col-span-12 md:order-2 md:col-span-6">
            <div class="flex flex-row items-center justify-between">
                <router-link :to="{ name: 'home' }"><h3 class="text-2xl font-semibold">Roodey<span class="text-zinc-400">Badd</span></h3></router-link>
                <span class="material-icons menu-icon !text-3xl hover:cursor-pointer"
                    @click="emit('show-navbar')"
                > menu </span>
            </div>
        </CardBasic>
    </div>
    <div class="col-span-12 row">
        <div class="flex flex-col col-span-12 gap-5 md:col-span-4">
            <CardBasic 
                class="bg-cover h-96 relative after:contents-[''] after:absolute after:h-full after:w-full after:bg-zinc-900/40 after:top-0 after:left-0"
                style="background-image: url('https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=640&q=80');"
            >
                <div class="absolute z-10">
                    <h4 class="text-base flex items-center gap-2 font=semibold mb-2.5">Portfolio <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="currentColor" d="M0 7h16v1H0V7z"/></svg></h4>
                    <h5 class="text-3xl font-semibold">As Freelancer</h5>
                </div>
            </CardBasic>
            <div class="row">
                <div class="col-span-6">
                    <CardBasic class="hover:!bg-rose-600 flex flex-col h-56 text-zinc-50 relative group overflow-hidden hover:cursor-pointer">
                        <div class="absolute z-10 transition-all duration-500 group-hover:-translate-y-full group-hover:opacity-0">
                            <span class="opacity-40">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="none"><path stroke="currentColor" stroke-width="1.5" d="M14 11a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0v-2Z"/><path fill="currentColor" d="m14.008 19.003l-.75-.002l.75.002ZM14.014 17l.75.002V17h-.75ZM3.15 18.828l-.53.531l.53-.53Zm0-13.656l-.53-.531l.53.53Zm-.197 5.082l-.366.655l.366-.655Zm-.942-1.265l-.75-.031l.75.031Zm.942 4.757l-.366-.655l.366.655Zm-.942 1.264l.749-.031l-.75.032Zm19.036-4.756l.366.655l-.366-.655Zm.942-1.265l.75-.031l-.75.031ZM20.85 5.172l.53-.531l-.53.53Zm.197 8.574l-.366.655l.366-.655Zm.942 1.264l.75.032l-.75-.031Zm-1.139 3.818l.53.531l-.53-.53Zm1.094-4.496l.654-.366l-.654.366Zm0-4.664l.654.366l-.654-.366ZM2.056 14.332l-.654-.366l.654.366Zm0-4.664l.655-.366l-.655.366ZM14.014 7h.75v-.002l-.75.002Zm-.008-2.501l-.75.002l.75-.002Zm2.522-.48l.02-.75l-.02.75Zm.506 15.945l.031.75l-.031-.75Zm-3.174-.11l-.53-.531l.53.531Zm.898-.849l.006-2.003l-1.5-.004L13.258 19l1.5.004Zm.258-2.255c.141 0 .253.114.253.25h1.5c0-.968-.787-1.75-1.753-1.75v1.5Zm0-1.5c-.966 0-1.752.782-1.752 1.75h1.5c0-.136.111-.25.252-.25v-1.5ZM9.995 4.75h3.51v-1.5h-3.51v1.5Zm3.013 14.5H9.995v1.5h3.013v-1.5Zm-3.013 0c-1.911 0-3.27-.002-4.3-.14c-1.01-.135-1.591-.389-2.016-.813L2.62 19.36c.75.748 1.702 1.08 2.876 1.238c1.154.155 2.63.153 4.5.153v-1.5Zm0-16c-1.87 0-3.346-.002-4.5.153c-1.174.158-2.125.49-2.875 1.238l1.06 1.062c.424-.424 1.006-.678 2.015-.813c1.03-.138 2.389-.14 4.3-.14v-1.5Zm-7.408 7.659c.386.215.643.624.643 1.091h1.5a2.749 2.749 0 0 0-1.41-2.401l-.732 1.31ZM2.76 9.02c.078-1.856.331-2.732.92-3.318L2.62 4.64C1.59 5.668 1.34 7.08 1.26 8.958l1.499.063ZM3.23 12c0 .467-.257.876-.643 1.091l.732 1.31A2.749 2.749 0 0 0 4.73 12h-1.5Zm-1.969 3.042c.08 1.876.33 3.29 1.359 4.317l1.06-1.062c-.589-.586-.842-1.462-.92-3.318l-1.499.063ZM20.77 12c0-.467.257-.876.643-1.091l-.732-1.31A2.749 2.749 0 0 0 19.27 12h1.5Zm1.969-3.042c-.08-1.876-.33-3.29-1.359-4.317l-1.06 1.062c.588.586.842 1.462.92 3.318l1.499-.063Zm-1.326 4.133A1.249 1.249 0 0 1 20.77 12h-1.5c0 1.034.571 1.932 1.411 2.401l.732-1.31Zm-.173 1.888c-.078 1.856-.331 2.732-.92 3.318l1.06 1.062c1.03-1.027 1.28-2.44 1.359-4.317l-1.499-.063Zm-.559-.578c.284.159.47.263.595.342c.062.039.09.06.098.066c.014.012-.037-.024-.085-.11l1.31-.733a1.12 1.12 0 0 0-.269-.312a2.432 2.432 0 0 0-.254-.18c-.167-.106-.396-.233-.663-.383l-.732 1.31Zm2.058.641c.007-.171.015-.348.009-.496a1.28 1.28 0 0 0-.15-.58l-1.309.732c-.05-.09-.043-.152-.04-.086c.001.028.002.07 0 .134l-.009.233l1.499.063Zm-1.326-4.133c.267-.15.496-.277.663-.383a2.55 2.55 0 0 0 .254-.18a1.12 1.12 0 0 0 .268-.312l-1.309-.732c.048-.087.099-.123.084-.111a1.048 1.048 0 0 1-.097.066c-.125.08-.31.183-.595.342l.732 1.31ZM21.24 9.02l.009.233c.002.064.001.106 0 .134c-.003.066-.01.004.04-.086l1.31.732a1.29 1.29 0 0 0 .149-.58a6.057 6.057 0 0 0-.01-.496l-1.498.063ZM2.587 13.09c-.267.15-.496.277-.663.383a2.44 2.44 0 0 0-.254.18a1.12 1.12 0 0 0-.268.312l1.309.732c-.048.087-.099.123-.085.111c.009-.007.036-.027.098-.066c.125-.08.31-.183.595-.342l-.732-1.31Zm.173 1.888a15.117 15.117 0 0 1-.009-.233a2.03 2.03 0 0 1 0-.134c.003-.066.01-.004-.04.086l-1.31-.732a1.28 1.28 0 0 0-.149.58c-.006.148.002.325.01.496l1.498-.063Zm.559-5.38c-.284-.159-.47-.263-.595-.342a1.069 1.069 0 0 1-.098-.066c-.014-.012.037.024.085.11l-1.31.733c.084.148.195.25.269.312c.08.066.169.126.254.18c.167.106.396.233.663.383l.732-1.31Zm-2.059-.64c-.007.171-.015.348-.009.496c.007.15.03.367.15.58l1.309-.732c.05.09.043.152.04.086a2.029 2.029 0 0 1 0-.134l.009-.233l-1.499-.063Zm13.503-1.96l-.008-2.502l-1.5.005l.008 2.501l1.5-.004Zm.252.252a.251.251 0 0 1-.252-.25h-1.5c0 .968.786 1.75 1.752 1.75v-1.5ZM15.27 7c0 .136-.112.25-.253.25v1.5c.966 0 1.753-.782 1.753-1.75h-1.5Zm0-2.484V7h1.5V4.516h-1.5Zm1.24.253c2.188.056 3.169.292 3.812.934l1.06-1.062c-1.113-1.11-2.687-1.316-4.834-1.372l-.039 1.5Zm.26-.253c0 .14-.116.256-.26.253l.038-1.5a1.247 1.247 0 0 0-1.278 1.247h1.5Zm-3.264.234a.25.25 0 0 1-.249-.25l1.5-.004a1.25 1.25 0 0 0-1.25-1.246v1.5Zm3.56 15.963c1.875-.079 3.288-.329 4.315-1.354l-1.06-1.062c-.586.586-1.464.84-3.318.918l.063 1.498ZM15.27 17v1.977h1.5V17h-1.5Zm-2.011 2c0 .121 0 .214-.003.293c-.002.08-.006.126-.01.155c-.004.028-.005.019.006-.01a.364.364 0 0 1 .079-.115l1.059 1.062a1.24 1.24 0 0 0 .342-.733c.027-.197.026-.433.027-.647l-1.5-.004Zm-.25 1.75c.214 0 .45.002.647-.025c.219-.03.498-.105.734-.34l-1.06-1.062a.365.365 0 0 1 .117-.078c.028-.012.038-.01.01-.007a1.522 1.522 0 0 1-.156.01c-.08.002-.172.002-.292.002v1.5Zm3.994-1.535c-.12.005-.213.009-.292.01c-.079.001-.125 0-.152-.003c-.027-.003-.015-.005.015.007c.037.014.08.04.119.076l-1.038 1.083c.244.234.529.304.757.326c.202.02.44.009.654 0l-.063-1.5Zm-1.733-.238c0 .218-.002.46.026.663c.031.226.112.511.359.748l1.038-1.083c.04.038.066.081.082.117c.012.03.01.04.007.012a1.523 1.523 0 0 1-.01-.159c-.002-.08-.002-.175-.002-.298h-1.5Z"/></g></svg>
                            </span>
                            <h6 class="mt-1 text-base font-medium">NdoroArum</h6>
                            <h6 class="text-lg font-semibold">Booking Website</h6>
                        </div>
                        <div class="duration-500 delay-100 opacity-0 group-hover:opacity-100">
                            <p class="mb-1 font-medium">Fullstack Developer</p>
                            <p class="text-sm text-zinc-200">Stack : Laravel, Bootstrap, jQuery, MySQL</p>
                        </div>
                        <a href="https://ndoroarum.com" target="_blank" class="block mt-auto text-right transition-all duration-700 delay-75 opacity-0 hover:cursor-pointer group-hover:opacity-70 hover:!opacity-100">
                            <span class="material-icons !text-3xl"
                            > arrow_forward </span>
                        </a>
                    </CardBasic>
                </div>
                <div class="col-span-6">
                    <CardBasic class="hover:!bg-yellow-600 flex flex-col h-56 text-zinc-50 relative group overflow-hidden hover:cursor-pointer">
                        <div class="absolute z-10 transition-all duration-500 group-hover:-translate-y-full group-hover:opacity-0">
                            <span class="opacity-40">
                                <svg xmlns="http://www.w3.org/2000/svg" width="31" height="24" viewBox="0 0 31 24"><path fill="currentColor" d="M28.895 24H2.384A2.4 2.4 0 0 1 0 21.617V6.739a2.4 2.4 0 0 1 2.383-2.384h26.512a2.4 2.4 0 0 1 2.384 2.383v14.881A2.381 2.381 0 0 1 28.898 24h-.003zM2.384 5.945h-.007a.787.787 0 0 0-.787.787v14.895c0 .435.352.787.787.787h26.526a.787.787 0 0 0 .787-.787V6.732a.787.787 0 0 0-.787-.787h-.008zm20.281-4.038v.004a.854.854 0 0 1-.854.854H9.47a.854.854 0 0 1-.854-.854v-.008c0-.472.383-.854.854-.854h12.337a.898.898 0 0 1 .858.857v.002zm2.988.636v.014c0 .712-.577 1.289-1.289 1.289h-.015h.001h-.014a1.289 1.289 0 0 1-1.289-1.289v-.015v.001v-1.254c0-.712.577-1.289 1.289-1.289h.015h-.001h.014c.712 0 1.289.577 1.289 1.289v.015v-.001zm-17.42 0v.014c0 .712-.577 1.289-1.289 1.289h-.015h.001h-.014a1.289 1.289 0 0 1-1.289-1.289v-.015v.001v-1.254C5.627.577 6.204 0 6.916 0h.015h-.001h.014c.712 0 1.289.577 1.289 1.289v.015v-.001zm21.585-.636v.004a.854.854 0 0 1-.854.854h-2.137a.854.854 0 0 1-.854-.854v-.008c0-.472.383-.854.854-.854h2.133a.898.898 0 0 1 .858.857v.002zm-24.541 0v.004a.854.854 0 0 1-.854.854H2.317a.854.854 0 0 1-.854-.854v-.008c0-.472.383-.854.854-.854H4.45a.869.869 0 0 1 .826.858z"/><path fill="currentColor" d="M5.658 14.558v2h1.939v-2h1.176v5.214H7.597v-2.194H5.658v2.194H4.482v-5.214zm8.933 2.545a2.508 2.508 0 0 1-2.495 2.767l-.085-.001h.004h-.029a2.43 2.43 0 0 1-2.418-2.681l-.001.01a2.523 2.523 0 0 1 2.514-2.735h.031h-.002l.061-.001a2.427 2.427 0 0 1 2.417 2.65l.001-.009zm-3.751.063c0 1.018.48 1.748 1.271 1.748s1.24-.763 1.24-1.78c0-.954-.445-1.748-1.271-1.748c-.794-.002-1.24.762-1.24 1.778zm5.34-1.622h-1.398v-.986h4.006v.986h-1.43v4.228h-1.176zm6.326 2.002h-1.907v1.24h2.16v.954h-3.368v-5.182h3.21v.954h-2.034v1.081h1.907v.954zm1.049-2.988h1.176v4.228h2.066v.986h-3.242zm-7.915-3.336l-1.717.925l.32-1.907l-1.369-1.373l1.907-.286l.858-1.714l.858 1.717l1.907.286l-1.367 1.367l.32 1.907zm5.944.221l-1.303.699l.254-1.462l-1.05-1.017l1.43-.19l.667-1.335l.636 1.335l1.462.19l-1.049 1.018l.222 1.462zm3.782.255l-.858.445l.16-.954l-.699-.667l.954-.16l.445-.858l.414.858l.954.16l-.667.667l.16.954zm-15.639-.255l1.271.699l-.254-1.462l1.049-1.018l-1.43-.19l-.635-1.334l-.667 1.335l-1.431.19l1.049 1.018l-.254 1.462zm-3.814.255l.858.445l-.16-.954l.699-.667l-.954-.16l-.444-.858l-.414.858l-.954.16l.699.667l-.16.954z"/></svg>
                            </span>
                            <h6 class="mt-1 text-base font-medium">LPP Hotel Group</h6>
                            <h6 class="text-lg font-semibold">Hotel & Property Website</h6>
                        </div>
                        <div class="duration-500 delay-100 opacity-0 group-hover:opacity-100">
                            <p class="mb-1 font-medium">Team Lead, Backend Developer</p>
                            <p class="text-sm text-zinc-200">Stack : Laravel, Bootstrap, jQuery, MySQL</p>
                        </div>
                        <a href="https://lpphotelyogya.com" target="_blank" class="block mt-auto text-right transition-all duration-700 delay-75 opacity-0 hover:cursor-pointer group-hover:opacity-70 hover:!opacity-100">
                            <span class="material-icons !text-3xl"
                            > arrow_forward </span>
                        </a>
                    </CardBasic>
                </div>
            </div>
        </div>
        <div class="flex flex-col col-span-12 gap-5 md:col-span-4">
            <div class="order-2 row md:order-1">
                <div class="col-span-6">
                    <CardBasic class="hover:!bg-emerald-600 flex flex-col h-56 text-zinc-50 relative group overflow-hidden hover:cursor-pointer">
                        <div class="absolute z-10 transition-all duration-500 group-hover:-translate-y-full group-hover:opacity-0">
                            <span class="opacity-40">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M4 20q-.825 0-1.413-.588T2 18V6q0-.825.588-1.413T4 4h5v2H4v12h16V6h-5V4h5q.825 0 1.413.588T22 6v12q0 .825-.588 1.413T20 20H4Zm8-4.6l-5-5L8.4 9l2.6 2.6V4h2v7.6L15.6 9l1.4 1.4l-5 5Z"/></svg>
                            </span>
                            <h6 class="mt-1 text-base font-medium">Siskubis</h6>
                            <h6 class="text-lg font-semibold">Sistem Inkubasi Bisnis</h6>
                        </div>
                        <div class="duration-500 delay-100 opacity-0 group-hover:opacity-100">
                            <p class="mb-1 font-medium">Fullstack Developer</p>
                            <p class="text-sm text-zinc-200">Stack : Laravel, Bootstrap, Livewire, jQuery, MySQL</p>
                        </div>
                        <a href="https://siskubis.com" target="_blank" class="block mt-auto text-right transition-all duration-700 delay-75 opacity-0 hover:cursor-pointer group-hover:opacity-70 hover:!opacity-100">
                            <span class="material-icons !text-3xl"
                            > arrow_forward </span>
                        </a>
                    </CardBasic>
                </div>
                <div class="col-span-6">
                    <CardBasic class="hover:!bg-emerald-600 flex flex-col h-56 text-zinc-50 relative group overflow-hidden hover:cursor-pointer">
                        <div class="absolute z-10 transition-all duration-500 group-hover:-translate-y-full group-hover:opacity-0">
                            <span class="opacity-40">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="#db61a2" d="M9.446 6.39a5.045 5.045 0 0 0-4.8 5.242c0 3.754 2.762 7.24 5.88 9.93A35.831 35.831 0 0 0 16 25.42a35.75 35.75 0 0 0 5.479-3.858c3.118-2.69 5.878-6.176 5.878-9.93a5.043 5.043 0 0 0-4.8-5.242a5.651 5.651 0 0 0-5.293 4.292a1.311 1.311 0 0 1-2.521 0A5.651 5.651 0 0 0 9.446 6.39ZM16 26.921l-.6 1.162h-.012l-.035-.018a38.406 38.406 0 0 1-6.541-4.513C5.598 20.78 2.027 16.62 2.027 11.639a7.658 7.658 0 0 1 7.419-7.868A7.982 7.982 0 0 1 16 7.3a7.988 7.988 0 0 1 6.555-3.528a7.658 7.658 0 0 1 7.423 7.861c0 4.981-3.573 9.141-6.787 11.913a38.685 38.685 0 0 1-6.541 4.513l-.033.018h-.012Zm0 0l.6 1.162a1.3 1.3 0 0 1-1.2 0Z"/></svg>
                            </span>
                            <h6 class="mt-1 text-base font-medium">Bakti Bersama</h6>
                            <h6 class="text-lg font-semibold">Unit Pengumpul Zakat</h6>
                        </div>
                        <div class="duration-500 delay-100 opacity-0 group-hover:opacity-100">
                            <p class="mb-1 font-medium">Fullstack Developer</p>
                            <p class="text-sm text-zinc-200">Stack : Laravel, Bootstrap, jQuery, MySQL</p>
                        </div>
                        <a href="https://baktibersama.id" target="_blank" class="block mt-auto text-right transition-all duration-700 delay-75 opacity-0 hover:cursor-pointer group-hover:opacity-70 hover:!opacity-100">
                            <span class="material-icons !text-3xl"
                            > arrow_forward </span>
                        </a>
                    </CardBasic>
                </div>
                <div class="col-span-12">
                    <CardBasic class="hover:!bg-emerald-600 flex flex-col h-56 text-zinc-50 relative group overflow-hidden hover:cursor-pointer">
                        <div class="absolute z-10 transition-all duration-500 group-hover:-translate-y-full group-hover:opacity-0">
                            <span class="opacity-40">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 2048 2048"><path fill="currentColor" d="M384 1536h128v128H256V384H128v1408h384v128H0V256h256V128h384q88 0 169 27t151 81q69-54 150-81t170-27h384v128h256v819l-128-58V384h-128v575l-128-59V256h-256q-71 0-136 24t-120 71v608l-128 58V351q-54-46-119-70t-137-25H384v1280zm1408 255l-448 225l-448-225q0-36 1-76t8-81t20-77t36-67l-193-88v582H640v-640l704-320l704 320l-321 146l8 11q21 31 32 67t17 73t7 76t1 74zm-448-627l-395 180l395 180l395-180l-395-180zm0 709l320-161q-1-26-4-47t-11-41t-16-39t-23-42l-266 121l-266-121q-15 24-24 43t-16 38t-9 40t-4 49l319 160z"/></svg>
                            </span>
                            <h6 class="mt-1 text-base font-medium">Guruinovatif</h6>
                            <h6 class="text-lg font-semibold">E-Learning Platform for Teachers</h6>
                        </div>
                        <div class="duration-500 delay-100 opacity-0 group-hover:opacity-100">
                            <p class="mb-1 font-medium">Fullstack Developer</p>
                            <p class="text-sm text-zinc-200">Stack : Laravel, Bootstrap, Tailwind CSS, Livewire, Alpine JS, jQuery, MySQL</p>
                        </div>
                        <a href="https://guruinovatif.id" target="_blank" class="block mt-auto text-right transition-all duration-700 delay-75 opacity-0 hover:cursor-pointer group-hover:opacity-70 hover:!opacity-100">
                            <span class="material-icons !text-3xl"
                            > arrow_forward </span>
                        </a>
                    </CardBasic>
                </div>
            </div>
            <CardBasic 
                class="order-1 md:order-2 bg-cover h-96 relative after:contents-[''] after:absolute after:h-full after:w-full after:bg-zinc-900/40 after:top-0 after:left-0"
                style="background-image: url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=640&q=80');"
            >
                <div class="absolute z-10">
                    <h4 class="text-base flex items-center gap-2 font=semibold mb-2.5">Portfolio <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="currentColor" d="M0 7h16v1H0V7z"/></svg></h4>
                    <h5 class="text-3xl font-semibold">Works</h5>
                </div>
            </CardBasic>
        </div>
        <div class="flex flex-col col-span-12 gap-5 md:col-span-4">
            <CardBasic 
                class="bg-cover h-96 relative after:contents-[''] after:absolute after:h-full after:w-full after:bg-zinc-900/40 after:top-0 after:left-0"
                style="background-image: url('https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=640&q=80');"
            >
                <div class="absolute z-10">
                    <h4 class="text-base flex items-center gap-2 font=semibold mb-2.5">Portfolio <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="currentColor" d="M0 7h16v1H0V7z"/></svg></h4>
                    <h5 class="text-3xl font-semibold">Personal Projects</h5>
                </div>
            </CardBasic>
            <div class="row">
                <div class="col-span-6">
                    <CardBasic class="hover:!bg-emerald-600 flex flex-col h-56 text-zinc-50 relative group overflow-hidden hover:cursor-pointer">
                        <div class="absolute z-10 transition-all duration-500 group-hover:-translate-y-full group-hover:opacity-0">
                            <span class="opacity-40">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m10.95 18l5.65-5.65l-1.45-1.45l-4.225 4.225l-2.1-2.1L7.4 14.45L10.95 18ZM6 22q-.825 0-1.413-.588T4 20V4q0-.825.588-1.413T6 2h8l6 6v12q0 .825-.588 1.413T18 22H6Zm7-13V4H6v16h12V9h-5ZM6 4v5v-5v16V4Z"/></svg>
                            </span>
                            <h6 class="mt-1 text-base font-medium">Pomovue</h6>
                            <h6 class="text-lg font-semibold">Pomodoro App</h6>
                        </div>
                        <div class="duration-500 delay-100 opacity-0 group-hover:opacity-100">
                            <p class="mb-1 font-medium">Frontend Developer</p>
                            <p class="text-sm text-zinc-200">Stack : Vue JS, Tailwind CSS</p>
                        </div>
                        <a href="https://pomovue.vercel.app" target="_blank" class="block mt-auto text-right transition-all duration-700 delay-75 opacity-0 hover:cursor-pointer group-hover:opacity-70 hover:!opacity-100">
                            <span class="material-icons !text-3xl"
                            > arrow_forward </span>
                        </a>
                    </CardBasic>
                </div>
                <div class="col-span-6">
                    <CardBasic class="hover:!bg-emerald-600 flex flex-col h-56 text-zinc-50 relative group overflow-hidden hover:cursor-pointer">
                        <div class="absolute z-10 transition-all duration-500 group-hover:-translate-y-full group-hover:opacity-0">
                            <span class="opacity-40">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48"><g fill="currentColor"><path d="M21.286 21.915c.107.398.146.835.016 1.193a.5.5 0 0 1-.728.257a7.178 7.178 0 0 1-.766-.557l-.194-.158c-.18-.148-.355-.29-.535-.425c-.502-.375-.9-.573-1.245-.556c-.362.018-.8.271-1.362.715c-.159.125-.329.267-.505.415c-.388.324-.808.675-1.207.931a.5.5 0 0 1-.766-.352c-.05-.365.026-.821.169-1.267a5.52 5.52 0 0 1 .695-1.416c.62-.907 1.626-1.762 2.973-1.706c1.3.055 2.264.817 2.844 1.647c.292.416.498.863.61 1.279Zm5.344 0c-.108.398-.147.835-.017 1.193a.5.5 0 0 0 .729.257c.262-.158.521-.36.765-.557l.194-.158l.002-.001c.18-.147.354-.29.534-.424c.501-.375.9-.573 1.244-.556c.363.018.8.271 1.363.715c.158.125.328.267.505.415c.387.324.807.675 1.207.931a.5.5 0 0 0 .765-.352c.05-.365-.026-.821-.168-1.267a5.562 5.562 0 0 0-.695-1.416c-.62-.907-1.627-1.762-2.974-1.706c-1.3.055-2.263.817-2.844 1.647a4.172 4.172 0 0 0-.61 1.279Z"/><path fill-rule="evenodd" d="M30.368 31.494a2.91 2.91 0 0 0 .472-.878c.105-.308.189-.703.15-1.107c-.04-.416-.23-.956-.779-1.277c-.508-.297-1.096-.268-1.616-.138l-.014.004c-2.396.636-3.569.899-4.704.894c-1.138-.005-2.285-.28-4.639-.893c-.454-.128-.995-.159-1.476.13c-.497.3-.682.788-.738 1.155c-.055.364-.008.727.067 1.02c.076.296.201.602.371.855a3.364 3.364 0 0 0 .372.439C19.157 33.146 21.496 34 24.014 34c2.622 0 5.067-.93 6.354-2.506Zm-6.5-.502c1.406.006 2.797-.319 5.035-.91l-.03.06a.573.573 0 0 1-.054.087c-.786.963-2.56 1.771-4.806 1.771c-2.142 0-3.868-.738-4.703-1.651a2.064 2.064 0 0 0-.084-.09l-.002-.003a6.618 6.618 0 0 1-.046-.048l-.014-.016a.576.576 0 0 1-.042-.048l-.006-.01c2.066.536 3.395.852 4.752.858Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M42 24c0 9.941-8.059 18-18 18S6 33.941 6 24S14.059 6 24 6s18 8.059 18 18Zm-2 0c0 8.837-7.163 16-16 16S8 32.837 8 24S15.163 8 24 8s16 7.163 16 16Z" clip-rule="evenodd"/></g></svg>
                            </span>
                            <h6 class="mt-1 text-base font-medium">My Personal Website</h6>
                            <h6 class="text-lg font-semibold">Yeah, This website</h6>
                        </div>
                        <div class="duration-500 delay-100 opacity-0 group-hover:opacity-100">
                            <p class="mb-1 font-medium">Frontend Developer</p>
                            <p class="text-sm text-zinc-200">Stack : Vue JS, Tailwind CSS</p>
                        </div>
                        <a href="https://roodeybadd.my.id" target="_blank" class="block mt-auto text-right transition-all duration-700 delay-75 opacity-0 hover:cursor-pointer group-hover:opacity-70 hover:!opacity-100">
                            <span class="material-icons !text-3xl"
                            > arrow_forward </span>
                        </a>
                    </CardBasic>
                </div>
                <div class="col-span-12">
                    <CardBasic class="hover:!bg-yellow-600 flex flex-col h-56 text-zinc-50 relative group overflow-hidden hover:cursor-pointer">
                        <div class="absolute z-10 transition-all duration-500 group-hover:-translate-y-full group-hover:opacity-0">
                            <span class="opacity-40">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M19 22h-3q-.425 0-.713-.288T15 21q0-.425.288-.713T16 20h3V10H5v3q0 .425-.288.713T4 14q-.425 0-.713-.288T3 13V6q0-.825.588-1.413T5 4h1V3q0-.425.288-.713T7 2q.425 0 .713.288T8 3v1h8V3q0-.425.288-.713T17 2q.425 0 .713.288T18 3v1h1q.825 0 1.413.588T21 6v14q0 .825-.588 1.413T19 22Zm-9.825-2H2q-.425 0-.713-.288T1 19q0-.425.288-.713T2 18h7.175L7.3 16.1q-.275-.275-.287-.688T7.3 14.7q.275-.275.7-.275t.7.275l3.6 3.6q.3.3.3.7t-.3.7l-3.6 3.6q-.275.275-.687.288T7.3 23.3q-.275-.275-.275-.7t.275-.7L9.175 20ZM5 8h14V6H5v2Zm0 0V6v2Z"/></svg>
                            </span>
                            <h6 class="mt-1 text-base font-medium">And Upcoming Projects</h6>
                            <!-- <h6 class="text-lg font-semibold">This is it</h6> -->
                        </div>
                        <div class="duration-500 delay-100 opacity-0 group-hover:opacity-100">
                            <p class="mb-1 font-medium">Check out My Github for other projects</p>
                        </div>
                        <a href="https://github.com/roodey21" target="_blank" class="block mt-auto text-right transition-all duration-700 delay-75 opacity-0 hover:cursor-pointer group-hover:opacity-70 hover:!opacity-100">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"/></svg> 
                        </a>
                    </CardBasic>
                </div>
            </div>
        </div>
    </div>
  </main>
</template>
