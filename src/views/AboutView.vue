<script setup>
import CardBasic from '../components/CardBasic.vue'
import techStacks from '../database/techStacks.js'
import about from '../database/about.js'
</script>

<template>
  <div class="max-w-6xl mx-auto px-4 md:px-8 pt-28 md:pt-32 pb-16">
    <!-- Header Banner -->
    <div class="mb-12">
      <CardBasic class="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div class="space-y-3">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800/40 border border-zinc-800 text-xs font-semibold text-indigo-400 w-max">
            <span>✨ About Me</span>
          </div>
          <h1 class="text-3xl md:text-5xl font-extrabold text-white tracking-tight">My Profile & Journey</h1>
          <p class="text-zinc-400 text-sm md:text-base max-w-xl leading-relaxed">
            Get a deeper look into my technical tools, coding background, professional history, and interests.
          </p>
        </div>
        
        <a 
          href="https://1drv.ms/b/c/b859ab788ce5e2d3/EcAYyqidRr5AvELhSP7JaMMBjvkG7KczPZQMwmspIRwS9A?e=KIPQ3O" 
          target="_blank" 
          class="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-bold bg-zinc-900 border border-zinc-850 hover:border-zinc-700 text-zinc-300 hover:text-white hover:bg-zinc-850 transition-all w-full md:w-auto text-center justify-center shadow-lg cursor-pointer"
        >
          <span class="material-icons !text-base text-indigo-400">download</span>
          <span>Download CV / Resume</span>
        </a>
      </CardBasic>
    </div>

    <!-- Bento Grid Section -->
    <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
      
      <!-- Biography Card (col-8) -->
      <CardBasic class="col-span-12 md:col-span-8 flex flex-col justify-between min-h-[350px]">
        <div class="space-y-4">
          <h2 class="text-lg font-bold text-white tracking-wide">Biography</h2>
          <p class="text-zinc-300 text-sm md:text-base leading-relaxed tracking-wide">
            {{ about.about }}
          </p>
        </div>
        
        <div class="mt-8 pt-6 border-t border-zinc-800/40">
          <h3 class="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-3">Interests & Hobbies</h3>
          <div class="flex flex-wrap gap-2">
            <span v-for="hobby in about.hobbies" :key="hobby" class="px-3.5 py-1.5 bg-zinc-900 border border-zinc-850 text-zinc-300 text-xs rounded-full font-medium capitalize hover:border-indigo-500/30 hover:text-indigo-400 transition-colors">
              {{ hobby }}
            </span>
          </div>
        </div>
      </CardBasic>

      <!-- Profile Avatar Frame (col-4) -->
      <div class="col-span-12 md:col-span-4 h-full min-h-[350px] relative rounded-3xl overflow-hidden border border-zinc-850 group bg-zinc-950/20">
        <img 
          src="../assets/images/my-self.jpg" 
          alt="Fahrudin Yusuf Abadi" 
          class="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
        >
        <!-- Overlay glass details -->
        <div class="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/10 to-transparent flex flex-col justify-end p-6">
          <h3 class="text-lg font-extrabold text-white">Fahrudin Yusuf Abadi</h3>
          <p class="text-xs text-zinc-400">Laravel & React Specialist</p>
        </div>
      </div>

      <!-- Professional Career Timeline (col-5) -->
      <CardBasic class="col-span-12 md:col-span-5 flex flex-col gap-6">
        <h2 class="text-lg font-bold text-white tracking-wide">Work History</h2>
        
        <div class="relative border-l border-zinc-800/80 ml-3 pl-6 space-y-6">
          <div v-for="work in about.works" :key="work.year" class="relative group">
            <!-- Timeline Node dot -->
            <div class="absolute -left-[31px] top-1 bg-zinc-950 border-2 border-indigo-500 rounded-full w-4.5 h-4.5 group-hover:bg-indigo-400 group-hover:scale-110 transition-all duration-300"></div>
            <!-- Date label badge -->
            <span class="text-[10px] font-bold text-indigo-400 tracking-wider bg-indigo-500/10 border border-indigo-500/20 px-2 py-0.5 rounded-full">{{ work.year }}</span>
            <!-- Work info text -->
            <p class="text-xs font-semibold text-zinc-200 mt-2 leading-relaxed">{{ work.job }}</p>
          </div>
        </div>
      </CardBasic>

      <!-- Technical Stack Details (col-7) -->
      <CardBasic class="col-span-12 md:col-span-7 flex flex-col gap-6">
        <h2 class="text-lg font-bold text-white tracking-wide">Tech Stack & Tools</h2>
        
        <div class="grid grid-cols-3 sm:grid-cols-4 gap-4">
          <div 
            v-for="stack in techStacks" 
            :key="stack.name" 
            class="flex flex-col items-center justify-center p-4 rounded-2xl bg-zinc-900/35 border border-zinc-800/50 hover:border-zinc-700/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/[0.01] group"
          >
            <component :is="stack.icon" class="w-10 h-10 opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300" :color="stack.color"/>
            <p class="text-[11px] font-bold text-zinc-400 group-hover:text-zinc-100 transition-colors mt-2 text-center">{{ stack.name }}</p>
          </div>
        </div>
      </CardBasic>

    </div>
  </div>
</template>