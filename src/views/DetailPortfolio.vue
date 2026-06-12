<script setup>
import { computed } from 'vue';
import CardBasic from '../components/CardBasic.vue';
import portfolios from '../database/portfolio.js'
import { useRoute } from 'vue-router';

const route = useRoute()

const portfolioSlug = computed(() => route.params.slug)
const portfolio = computed(() => {
    return portfolios.find((p) => p.slug == portfolioSlug.value)
})

const prevPortfolio = computed(() => {
    const index = portfolios.findIndex((p) => p.slug == portfolioSlug.value);
    return index > 0 ? portfolios[index - 1] : null;
});

const nextPortfolio = computed(() => {
    const index = portfolios.findIndex((p) => p.slug == portfolioSlug.value);
    return index < portfolios.length - 1 ? portfolios[index + 1] : null;
});

const techList = computed(() => {
  if (!portfolio.value?.techStack) return []
  return portfolio.value.techStack.split(',').map(item => item.trim())
})
</script>

<template>
  <div class="max-w-4xl mx-auto px-4 md:px-8 pt-28 md:pt-32 pb-16 space-y-8" v-if="portfolio">
    <!-- Breadcrumbs Navigation Header -->
    <div>
      <CardBasic class="flex items-center gap-2 py-4 px-6 text-sm">
        <router-link :to="{ name: 'home' }" class="text-zinc-400 hover:text-white transition-colors">Home</router-link>
        <span class="text-zinc-600">/</span>
        <router-link :to="{ name: 'portfolio' }" class="text-zinc-400 hover:text-white transition-colors">Portfolio</router-link>
        <span class="text-zinc-600">/</span>
        <span class="text-white font-medium truncate">{{ portfolio.name }}</span>
      </CardBasic>
    </div>

    <!-- Immersive Cover Mockup -->
    <div class="rounded-3xl overflow-hidden border border-zinc-850 bg-zinc-950/20 shadow-2xl shadow-indigo-500/[0.01]">
      <img :src="portfolio.cover" :alt="portfolio.name" class="w-full h-auto object-cover max-h-[500px]">
    </div>

    <!-- Case Study Details Grid -->
    <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
      <!-- Left side: Description & Key Features -->
      <div class="col-span-12 md:col-span-8 space-y-6">
        <CardBasic class="space-y-4">
          <h2 class="text-xl font-bold text-white tracking-wide">Project Overview</h2>
          <p class="text-zinc-300 text-sm md:text-base leading-relaxed">
            {{ portfolio.name }} is a high-performance {{ portfolio.platform }} solution. {{ portfolio.description }}.
          </p>
        </CardBasic>

        <CardBasic class="space-y-4" v-if="portfolio.features?.length">
          <h2 class="text-lg font-bold text-white tracking-wide">Key Features</h2>
          <ul class="space-y-3.5 pl-1">
            <li v-for="feature in portfolio.features" :key="feature" class="flex items-start gap-3">
              <svg class="w-5 h-5 text-indigo-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
              </svg>
              <span class="text-zinc-300 text-sm md:text-base leading-relaxed">{{ feature }}</span>
            </li>
          </ul>
        </CardBasic>
      </div>

      <!-- Right side: Specifications Sheet & Visit Link -->
      <div class="col-span-12 md:col-span-4 space-y-6">
        <CardBasic class="space-y-5">
          <h2 class="text-base font-bold text-white tracking-wide border-b border-zinc-850 pb-3">Project Specs</h2>
          
          <div class="space-y-1">
            <span class="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Platform</span>
            <p class="text-sm text-zinc-200 capitalize font-medium">{{ portfolio.platform }}</p>
          </div>

          <div class="space-y-1">
            <span class="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Role</span>
            <p class="text-sm text-zinc-200 font-medium">{{ portfolio.role }}</p>
          </div>

          <div class="space-y-1">
            <span class="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Tech Stack</span>
            <div class="flex flex-wrap gap-1.5 mt-1">
              <span v-for="tech in techList" :key="tech" class="px-2.5 py-1 bg-zinc-900 border border-zinc-800/80 rounded-xl text-zinc-300 text-xs font-semibold hover:border-zinc-700/80 transition-colors">
                {{ tech }}
              </span>
            </div>
          </div>
          
          <div class="pt-3 border-t border-zinc-850" v-if="portfolio.source">
            <a 
              :href="portfolio.source" 
              target="_blank" 
              class="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold bg-white text-zinc-950 hover:bg-zinc-200 transition-colors shadow-lg shadow-white/5"
            >
              <span>Visit Live Website</span>
              <span class="material-icons !text-sm">open_in_new</span>
            </a>
          </div>
        </CardBasic>
      </div>
    </div>

    <!-- Case Study Switcher Nav -->
    <div class="flex justify-between items-center gap-4 pt-6">
      <div class="w-1/2" v-if="prevPortfolio">
        <router-link 
          :to="{ name: 'portfolio-detail', params: { slug: prevPortfolio.slug } }"
          class="flex flex-col gap-1.5 p-5 bg-zinc-900/25 border border-zinc-850 hover:border-zinc-700/85 rounded-3xl transition-all hover:scale-[1.015] text-left group"
        >
          <span class="text-[10px] font-bold text-zinc-500 uppercase tracking-widest flex items-center gap-1">
            <span class="material-icons !text-xs group-hover:-translate-x-1 transition-transform">arrow_back</span>
            Previous Project
          </span>
          <span class="text-sm font-bold text-white group-hover:text-indigo-400 transition-colors truncate">{{ prevPortfolio.name }}</span>
        </router-link>
      </div>
      <div class="w-1/2" v-else></div>

      <div class="w-1/2" v-if="nextPortfolio">
        <router-link 
          :to="{ name: 'portfolio-detail', params: { slug: nextPortfolio.slug } }"
          class="flex flex-col gap-1.5 p-5 bg-zinc-900/25 border border-zinc-850 hover:border-zinc-700/85 rounded-3xl transition-all hover:scale-[1.015] text-right group"
        >
          <span class="text-[10px] font-bold text-zinc-500 uppercase tracking-widest flex items-center justify-end gap-1">
            Next Project
            <span class="material-icons !text-xs group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </span>
          <span class="text-sm font-bold text-white group-hover:text-indigo-400 transition-colors truncate">{{ nextPortfolio.name }}</span>
        </router-link>
      </div>
      <div class="w-1/2" v-else></div>
    </div>
  </div>
</template>

