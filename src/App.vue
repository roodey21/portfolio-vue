<script setup>
import { onMounted, ref } from 'vue'
import { RouterView } from 'vue-router'

const showNavbar = ref(false)

const handleClickOutside = (event) => {
  if (event.target.closest('.navbar-wrapper') === null && event.target.closest('.menu-icon') === null) {
    showNavbar.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

</script>
<template>
  <div class="relative p-4 md:p-8 scroll-smooth">
    <RouterView 
      @show-navbar="showNavbar = !showNavbar"
    />
    <div class="fixed top-0 w-full md:w-72 transition-all z-30 ease-in-out duration-700 delay-75 bg-zinc-900 h-screen p-16 text-slate-50 flex flex-col" 
      :class="{'right-0': showNavbar === true, '-right-full': showNavbar === false}"
    >
      <div class="navbar-wrapper text-right">
        <a href=""
          @click.prevent="showNavbar = !showNavbar"
        >
          <span class="material-icons !text-3xl"
          >close</span>
        </a>
      </div>
      <ul class="mt-5 text-xl text-right transition-all space-y-2">
        <router-link :to="{ name: 'home' }" :active-class="'bg-zinc-800'">
          <li class="p-1 hover:bg-zinc-800 rounded">Home</li>
        </router-link>
        <router-link :to="{ name: 'portfolio'}">
          <li class="p-1 hover:bg-zinc-800 rounded">Portfolio</li>
        </router-link>
        <router-link :to="{ name: 'about'}">
          <li class="p-1 hover:bg-zinc-800 rounded">About</li>
        </router-link>
      </ul>
    </div>
  </div>
</template>
