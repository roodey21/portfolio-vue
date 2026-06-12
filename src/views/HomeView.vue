<script setup>
import { onMounted, ref } from 'vue';
import CardBasic from '../components/CardBasic.vue'
import about from '../database/about.js'
import portfolios from '../database/portfolio.js'
import techStacks from '../database/techStacks.js'

const startWorkDate = new Date('2022-12-01');
const currentYear = new Date().getFullYear();
const experienceYears = currentYear - startWorkDate.getFullYear();

const emailAddress = 'roodey21@gmail.com';
const emailCopied = ref(false);

const copyEmail = () => {
  navigator.clipboard.writeText(emailAddress);
  emailCopied.value = true;
  setTimeout(() => {
    emailCopied.value = false;
  }, 2000);
}
</script>

<template>
  <div class="max-w-6xl mx-auto px-4 md:px-8 pt-28 md:pt-32 pb-12">
    <!-- Grid System -->
    <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
      
      <!-- Profile Card (col-4) -->
      <CardBasic class="col-span-12 md:col-span-4 flex flex-col justify-between h-full min-h-[380px]">
        <div class="flex flex-col items-center md:items-start text-center md:text-left gap-4">
          <!-- Profile Pic with Pulse ring -->
          <div class="relative w-28 h-28 rounded-3xl overflow-hidden border-2 border-zinc-800 shadow-xl shadow-black/20 group">
            <img src="../assets/images/my-self.jpg" alt="Fahrudin Yusuf Abadi" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
            <!-- Available Status indicator -->
            <div class="absolute bottom-2 right-2 bg-emerald-500 w-4.5 h-4.5 rounded-full border-2 border-zinc-950 flex items-center justify-center">
              <span class="w-1.5 h-1.5 bg-white rounded-full animate-ping"></span>
            </div>
          </div>
          
          <div>
            <h1 class="text-2xl font-bold text-white tracking-tight">{{ about.name }}</h1>
            <p class="text-zinc-400 text-sm mt-1 font-medium">Fullstack Web Developer</p>
            <div class="inline-flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs px-2.5 py-1 rounded-full mt-3 font-semibold">
              <span class="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
              Available for Freelance
            </div>
          </div>
        </div>

        <div class="flex flex-col gap-4 mt-6">
          <div class="flex items-center justify-center md:justify-start gap-2 text-zinc-400 text-sm">
            <span class="material-icons !text-lg text-indigo-400">place</span>
            <span>{{ about.address }}, Indonesia</span>
          </div>
          
          <!-- Social Icons -->
          <div class="flex items-center justify-center md:justify-start gap-2.5">
            <a :href="about.socials.in" target="_blank" class="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800/80 flex items-center justify-center text-zinc-400 hover:text-indigo-400 hover:border-indigo-500/40 hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-300" aria-label="LinkedIn">
              <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a :href="about.socials.gh" target="_blank" class="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800/80 flex items-center justify-center text-zinc-400 hover:text-indigo-400 hover:border-indigo-500/40 hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-300" aria-label="GitHub">
              <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a :href="about.socials.ig" target="_blank" class="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800/80 flex items-center justify-center text-zinc-400 hover:text-indigo-400 hover:border-indigo-500/40 hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-300" aria-label="Instagram">
              <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
          </div>
        </div>
      </CardBasic>
      
      <!-- Hero/Bio Card (col-8) -->
      <CardBasic class="col-span-12 md:col-span-8 flex flex-col justify-between h-full min-h-[380px]">
        <div class="space-y-4">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800/40 border border-zinc-800 text-xs font-semibold text-indigo-400">
            <span>🚀 Fullstack Developer</span>
          </div>
          <h2 class="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight text-white">
            Developing robust web systems and clean, <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500">dynamic frontends</span>.
          </h2>
          <p class="text-zinc-300 text-base md:text-lg leading-relaxed pt-2">
            I specialize in the Laravel ecosystem for backend systems, RESTful API design, database structures, and craft smooth, interactive frontends using Tailwind CSS, React, and Vue.
          </p>
        </div>
        
        <div class="mt-8 flex flex-wrap gap-3">
          <router-link :to="{ name: 'portfolio' }" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-indigo-600 text-white hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-600/10">
            <span>View All Projects</span>
            <span class="material-icons !text-sm">arrow_forward</span>
          </router-link>
          <router-link :to="{ name: 'about' }" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition-all">
            <span>Read Bio</span>
          </router-link>
        </div>
      </CardBasic>

      <!-- Stats Card (col-5) -->
      <CardBasic class="col-span-12 md:col-span-5 flex flex-col justify-center gap-6 min-h-[220px]">
        <div class="grid grid-cols-3 gap-4 text-center">
          <div class="flex flex-col items-center">
            <h3 class="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-teal-400 to-emerald-500">{{ experienceYears }}+</h3>
            <p class="text-zinc-400 text-xs mt-1.5 font-medium">Years Exp</p>
          </div>
          <div class="flex flex-col items-center border-x border-zinc-800/80">
            <h3 class="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-indigo-400 to-purple-500">21+</h3>
            <p class="text-zinc-400 text-xs mt-1.5 font-medium">Projects Done</p>
          </div>
          <div class="flex flex-col items-center">
            <h3 class="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-rose-500">10+</h3>
            <p class="text-zinc-400 text-xs mt-1.5 font-medium">Happy Clients</p>
          </div>
        </div>
      </CardBasic>

      <!-- Tech Stack Card (col-7) -->
      <CardBasic class="col-span-12 md:col-span-7 flex flex-col justify-between gap-4 min-h-[220px]">
        <div class="flex items-center justify-between">
          <h3 class="text-base font-bold text-white tracking-wide">Featured Stack</h3>
          <router-link :to="{ name: 'about' }" class="text-xs font-semibold text-zinc-400 hover:text-white transition-colors">See all stacks</router-link>
        </div>
        
        <!-- Scrolling list of icons -->
        <div class="grid grid-cols-6 gap-3.5 mt-2">
          <div 
            v-for="stack in techStacks.slice(0, 12)" 
            :key="stack.name" 
            class="flex items-center justify-center p-2.5 rounded-2xl bg-zinc-900/40 border border-zinc-800/50 hover:border-zinc-700/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/[0.02] group"
            :title="stack.name"
          >
            <component :is="stack.icon" class="w-8 h-8 opacity-65 group-hover:opacity-100 transition-opacity" :color="stack.color"/>
          </div>
        </div>
      </CardBasic>

      <!-- Featured Projects (col-8) -->
      <CardBasic class="col-span-12 md:col-span-8 flex flex-col gap-6">
        <div class="flex items-center justify-between">
          <h3 class="text-lg font-bold text-white">Recent Work</h3>
          <router-link :to="{ name: 'portfolio' }" class="text-xs font-semibold text-zinc-400 hover:text-white transition-colors flex items-center gap-0.5">
            View All
            <span class="material-icons !text-xs">arrow_forward</span>
          </router-link>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <router-link 
            v-for="portfolio in portfolios.slice(0, 4)" 
            :key="portfolio.id" 
            :to="{ name: 'portfolio-detail', params: { slug: portfolio.slug } }"
            class="group p-6 bg-zinc-950/25 border border-zinc-850 hover:border-indigo-500/30 hover:scale-[1.015] hover:shadow-xl hover:shadow-indigo-500/[0.01] rounded-3xl transition-all duration-500 cursor-pointer flex flex-col justify-between h-48"
          >
            <div class="space-y-2.5">
              <div class="flex items-center justify-between">
                <span class="text-[10px] font-bold text-indigo-400 tracking-wider uppercase bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-0.5 rounded-full">{{ portfolio.platform }}</span>
                <span class="material-icons !text-base text-zinc-600 group-hover:text-indigo-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all">arrow_outward</span>
              </div>
              <h4 class="text-base font-bold text-white group-hover:text-indigo-300 transition-colors leading-snug truncate">{{ portfolio.name }}</h4>
              <p class="text-xs text-zinc-400 line-clamp-2 leading-relaxed">{{ portfolio.description }}</p>
            </div>
            
            <div class="flex flex-wrap gap-1.5 mt-4">
              <span v-for="tech in portfolio.techStack.split(',').slice(0, 3)" :key="tech" class="px-2 py-0.5 bg-zinc-900/60 border border-zinc-800/80 text-[9px] rounded-lg text-zinc-400 font-medium">
                {{ tech.trim() }}
              </span>
            </div>
          </router-link>
        </div>
      </CardBasic>

      <!-- Map & Location Card (col-4) -->
      <CardBasic class="col-span-12 md:col-span-4 h-full min-h-[300px] flex flex-col justify-between overflow-hidden relative group p-0">
        <!-- Interactive Dark Map container -->
        <div class="absolute inset-0 z-0 opacity-40 group-hover:opacity-50 transition-opacity duration-500">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253052.08286258287!2d110.38127505000001!3d-7.689718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5ee1c5671249%3A0x3027a76e352bc20!2sKabupaten%20Sleman%2C%20Daerah%20Istimewa%20Yogyakarta!5e0!3m2!1sid!2sid!4v1740037260443!5m2!1sid!2sid" 
            class="w-full h-full border-0 grayscale invert-[92%] brightness-[85%] contrast-[100%]" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        
        <!-- Content Overlay -->
        <div class="relative z-10 p-6 md:p-8 flex flex-col justify-between h-full bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent pointer-events-none">
          <div class="inline-flex items-center gap-1 bg-zinc-900/60 border border-zinc-800 px-3 py-1 rounded-full text-xs font-medium text-zinc-300 backdrop-blur-sm w-max">
            <span class="material-icons !text-xs text-indigo-400">explore</span>
            <span>Location</span>
          </div>
          
          <div class="space-y-1">
            <h4 class="text-lg font-bold text-white">Sleman City</h4>
            <p class="text-xs text-zinc-400 font-medium">Yogyakarta, Indonesia</p>
          </div>
        </div>
      </CardBasic>

      <!-- Music/Status Card (col-4) -->
      <CardBasic class="col-span-12 md:col-span-4 flex items-center justify-between min-h-[140px] relative overflow-hidden group">
        <!-- Visual design background -->
        <div class="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-indigo-600/10 blur-xl group-hover:bg-indigo-600/15 transition-colors duration-500"></div>
        
        <div class="flex items-center gap-4 relative z-10">
          <!-- Animated Spotify Record disk cover -->
          <div class="relative w-14 h-14 rounded-full bg-zinc-800 flex items-center justify-center border border-zinc-700/80 shadow-md animate-[spin_8s_linear_infinite]">
            <span class="material-icons text-indigo-400 !text-2xl">music_note</span>
            <div class="absolute w-3 h-3 bg-zinc-950 rounded-full border border-zinc-800"></div>
          </div>
          
          <div class="space-y-1">
            <div class="flex items-center gap-1.5">
              <span class="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
              <span class="text-[10px] font-bold text-zinc-400 tracking-wider uppercase">Current Mood</span>
            </div>
            <h4 class="text-sm font-bold text-zinc-100">Coding Vibes</h4>
            <p class="text-xs text-zinc-400">Synthwave & Lo-Fi</p>
          </div>
        </div>
        
        <!-- Live equalizer wave visualizer -->
        <div class="flex items-end gap-1 h-6 pr-2">
          <span class="equalizer-bar"></span>
          <span class="equalizer-bar"></span>
          <span class="equalizer-bar"></span>
          <span class="equalizer-bar"></span>
          <span class="equalizer-bar"></span>
        </div>
      </CardBasic>

      <!-- Connect/Copy Email Card (col-8) -->
      <CardBasic class="col-span-12 md:col-span-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 min-h-[140px] relative overflow-hidden group">
        <!-- Background light glows -->
        <div class="absolute -left-6 -top-6 w-32 h-32 rounded-full bg-indigo-500/5 blur-2xl group-hover:bg-indigo-500/10 transition-colors duration-500"></div>
        
        <div class="space-y-1.5 relative z-10">
          <h3 class="text-lg font-bold text-white">Let's build something amazing together!</h3>
          <p class="text-xs text-zinc-400">Click to copy my email or reach out on social media.</p>
        </div>
        
        <!-- Click to copy widget -->
        <div class="relative z-10 w-full sm:w-auto">
          <button 
            @click="copyEmail" 
            class="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-2xl bg-zinc-900 border border-zinc-800/80 text-zinc-300 hover:text-white hover:border-zinc-700 hover:bg-zinc-850 transition-all font-medium text-xs cursor-pointer shadow-lg shadow-black/10"
          >
            <span class="material-icons !text-base text-indigo-400">{{ emailCopied ? 'check' : 'content_copy' }}</span>
            <span>{{ emailCopied ? 'Email Copied!' : emailAddress }}</span>
          </button>
          
          <!-- Pop-up toast feedback pill -->
          <div 
            class="absolute -top-12 left-1/2 -translate-x-1/2 bg-emerald-500 text-zinc-950 font-bold text-xs px-3 py-1.5 rounded-full shadow-lg transition-all duration-300 pointer-events-none flex items-center gap-1"
            :class="emailCopied ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-2 scale-90'"
          >
            <span class="material-icons !text-sm">check_circle</span>
            <span>Copied to Clipboard!</span>
          </div>
        </div>
      </CardBasic>

    </div>
  </div>
</template>
