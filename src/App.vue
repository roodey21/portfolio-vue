<script setup>
import { ref, onMounted } from 'vue'
import { RouterView } from 'vue-router'

const showMobileMenu = ref(false)

const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value
}

const closeMobileMenu = () => {
  showMobileMenu.value = false
}

// Close mobile menu on clicking outside
const handleClickOutside = (event) => {
  if (showMobileMenu.value && !event.target.closest('.mobile-menu-container') && !event.target.closest('.mobile-menu-trigger')) {
    showMobileMenu.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})
</script>

<template>
  <div class="relative min-h-screen text-zinc-100 scroll-smooth pb-16">
    <!-- Floating Navbar -->
    <header class="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-5xl bg-zinc-950/45 backdrop-blur-md border border-zinc-800/80 rounded-full px-6 py-3.5 flex items-center justify-between shadow-xl shadow-black/40">
      <!-- Logo -->
      <router-link :to="{ name: 'home' }" class="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
        <span class="text-xl font-bold tracking-tight text-white">Roodey<span class="text-indigo-500">.</span></span>
      </router-link>

      <!-- Desktop Nav -->
      <nav class="hidden md:flex items-center gap-1.5">
        <router-link 
          :to="{ name: 'home' }" 
          exact-active-class="bg-white/10 text-white" 
          class="px-4 py-1.5 rounded-full text-zinc-400 hover:text-white transition-all duration-300 text-sm font-medium"
        >
          Home
        </router-link>
        <router-link 
          :to="{ name: 'portfolio' }" 
          exact-active-class="bg-white/10 text-white" 
          class="px-4 py-1.5 rounded-full text-zinc-400 hover:text-white transition-all duration-300 text-sm font-medium"
        >
          Portfolio
        </router-link>
        <router-link 
          :to="{ name: 'about' }" 
          exact-active-class="bg-white/10 text-white" 
          class="px-4 py-1.5 rounded-full text-zinc-400 hover:text-white transition-all duration-300 text-sm font-medium"
        >
          About
        </router-link>
      </nav>

      <!-- CTA Button / Mobile Trigger -->
      <div class="flex items-center gap-3">
        <a 
          href="https://www.linkedin.com/in/fahrudinyusufabadi/" 
          target="_blank" 
          class="hidden md:inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-semibold bg-white text-zinc-950 hover:bg-zinc-200 transition-colors shadow-lg shadow-white/5"
        >
          Let's Connect
        </a>
        
        <!-- Mobile Hamburger Trigger -->
        <button 
          @click.stop="toggleMobileMenu" 
          class="mobile-menu-trigger p-2 md:hidden text-zinc-400 hover:text-white focus:outline-none transition-colors"
          aria-label="Toggle Menu"
        >
          <span class="material-icons !text-2xl">{{ showMobileMenu ? 'close' : 'menu' }}</span>
        </button>
      </div>
    </header>

    <!-- Mobile Nav Drawer -->
    <div 
      class="mobile-menu-container fixed inset-y-0 right-0 z-40 w-72 max-w-xs bg-zinc-950/95 backdrop-blur-xl border-l border-zinc-900 p-8 pt-28 shadow-2xl transition-transform duration-300 ease-in-out md:hidden"
      :class="showMobileMenu ? 'translate-x-0' : 'translate-x-full'"
    >
      <div class="flex flex-col gap-6">
        <router-link 
          :to="{ name: 'home' }" 
          @click="closeMobileMenu"
          exact-active-class="text-indigo-400 font-bold border-l-2 border-indigo-500 pl-3" 
          class="text-xl text-zinc-300 hover:text-white py-2 pl-3 transition-colors"
        >
          Home
        </router-link>
        <router-link 
          :to="{ name: 'portfolio' }" 
          @click="closeMobileMenu"
          exact-active-class="text-indigo-400 font-bold border-l-2 border-indigo-500 pl-3" 
          class="text-xl text-zinc-300 hover:text-white py-2 pl-3 transition-colors"
        >
          Portfolio
        </router-link>
        <router-link 
          :to="{ name: 'about' }" 
          @click="closeMobileMenu"
          exact-active-class="text-indigo-400 font-bold border-l-2 border-indigo-500 pl-3" 
          class="text-xl text-zinc-300 hover:text-white py-2 pl-3 transition-colors"
        >
          About
        </router-link>
        
        <div class="h-px bg-zinc-800/80 my-4"></div>
        
        <a 
          href="https://www.linkedin.com/in/fahrudinyusufabadi/" 
          target="_blank" 
          class="w-full text-center py-3 rounded-full text-sm font-semibold bg-indigo-600 text-white hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-600/15"
        >
          LinkedIn
        </a>
      </div>
    </div>

    <!-- Main Content Area -->
    <main class="w-full">
      <RouterView />
    </main>
  </div>
</template>

