<script setup>
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import portfolios from '../database/portfolio.js';

const route = useRoute();
const router = useRouter();

const portfolioSlug = computed(() => route.params.slug);

const portfolio = computed(() => {
  return portfolios.find((p) => p.slug === portfolioSlug.value);
});

const prevPortfolio = computed(() => {
  const index = portfolios.findIndex((p) => p.slug === portfolioSlug.value);
  return index > 0 ? portfolios[index - 1] : null;
});

const nextPortfolio = computed(() => {
  const index = portfolios.findIndex((p) => p.slug === portfolioSlug.value);
  return index < portfolios.length - 1 ? portfolios[index + 1] : null;
});

const techList = computed(() => {
  if (!portfolio.value?.techStack) return [];
  return portfolio.value.techStack.split(',').map((item) => item.trim());
});

const getCleanDomain = (url) => {
  if (!url) return null;
  try {
    const parsed = new URL(url);
    return parsed.hostname.replace(/^www\./, '');
  } catch (e) {
    return url.replace(/^https?:\/\//, '').replace(/\/$/, '');
  }
};

const getCategoryBadgeClass = (category) => {
  switch (category) {
    case 'work':
      return 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20';
    case 'freelance':
      return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
    case 'personal':
      return 'bg-teal-500/10 text-teal-400 border-teal-500/20';
    default:
      return 'bg-zinc-800/60 text-zinc-400 border-zinc-700/50';
  }
};
</script>

<template>
  <div class="max-w-5xl mx-auto px-4 md:px-8 pt-28 md:pt-32 pb-24 space-y-10" v-if="portfolio">
    
    <!-- Top Navigation & Breadcrumbs -->
    <div class="flex items-center justify-between gap-4">
      <router-link
        :to="{ name: 'portfolio' }"
        class="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-zinc-900/60 hover:bg-zinc-800 border border-zinc-800/80 text-zinc-300 hover:text-white transition-all group"
      >
        <span class="material-icons !text-sm text-zinc-400 group-hover:-translate-x-1 transition-transform">arrow_back</span>
        <span>Back to Projects</span>
      </router-link>

      <!-- Live External Link if Available -->
      <a
        v-if="portfolio.source"
        :href="portfolio.source"
        target="_blank"
        class="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/20 transition-all"
      >
        <span>Visit Live Website</span>
        <span class="material-icons !text-xs">open_in_new</span>
      </a>
    </div>

    <!-- Project Header Hero -->
    <div class="space-y-4">
      <div class="flex flex-wrap items-center gap-2">
        <span
          class="px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider border"
          :class="getCategoryBadgeClass(portfolio.category)"
        >
          {{ portfolio.category }}
        </span>

        <span class="px-2.5 py-0.5 rounded-md text-[10px] font-medium bg-zinc-900 border border-zinc-800 text-zinc-400 uppercase tracking-wider">
          {{ portfolio.platform }}
        </span>

        <div v-if="portfolio.source" class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-medium">
          <span class="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
          <span>Online & Live</span>
        </div>
        <div v-else class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-500 text-[10px] font-medium">
          <span class="material-icons !text-[11px]">lock</span>
          <span>Internal / Private System</span>
        </div>
      </div>

      <h1 class="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
        {{ portfolio.name }}
      </h1>

      <p class="text-zinc-300 text-sm md:text-lg max-w-3xl leading-relaxed">
        {{ portfolio.description }}
      </p>
    </div>

    <!-- Browser Mockup Window Showcase -->
    <div class="rounded-2xl md:rounded-3xl overflow-hidden border border-zinc-800/80 bg-zinc-950 shadow-2xl shadow-black/80">
      <!-- Browser Top Bar -->
      <div class="px-4 py-3 bg-zinc-900/90 border-b border-zinc-800/80 flex items-center justify-between gap-4">
        <div class="flex items-center gap-2">
          <span class="w-3 h-3 rounded-full bg-rose-500/80"></span>
          <span class="w-3 h-3 rounded-full bg-amber-500/80"></span>
          <span class="w-3 h-3 rounded-full bg-emerald-500/80"></span>
        </div>
        
        <div class="flex-1 max-w-md mx-auto hidden sm:flex items-center justify-center gap-2 px-3 py-1 rounded-lg bg-zinc-950/60 border border-zinc-800/60 text-zinc-400 text-xs font-mono">
          <span class="material-icons !text-xs text-zinc-500">lock</span>
          <span class="truncate">{{ portfolio.source ? getCleanDomain(portfolio.source) : `${portfolio.slug}.app` }}</span>
        </div>

        <div class="flex items-center gap-2 text-zinc-500">
          <span class="material-icons !text-base">refresh</span>
        </div>
      </div>

      <!-- Screenshot Showcase / Image Container -->
      <div class="relative bg-zinc-950 flex items-center justify-center overflow-hidden min-h-[260px] md:min-h-[420px]">
        <img
          v-if="portfolio.cover"
          :src="portfolio.cover"
          :alt="portfolio.name"
          class="w-full h-auto object-cover max-h-[560px]"
        />
        <div v-else class="py-24 text-center space-y-2">
          <span class="material-icons !text-5xl text-zinc-700">laptop_chromebook</span>
          <p class="text-xs text-zinc-500 font-mono">Interactive Web Application</p>
        </div>
      </div>
    </div>

    <!-- Main Content & Specs Grid -->
    <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
      
      <!-- Left Column: Key Features & Overview (8 cols) -->
      <div class="col-span-12 md:col-span-8 space-y-6">
        
        <!-- Features Grid Card -->
        <div v-if="portfolio.features && portfolio.features.length" class="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-850 space-y-4">
          <div class="flex items-center gap-2">
            <span class="material-icons !text-base text-indigo-400">check_circle</span>
            <h2 class="text-base font-bold text-white tracking-wide">Key Features & Capabilities</h2>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <div
              v-for="feat in portfolio.features"
              :key="feat"
              class="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800/60 flex items-start gap-2.5"
            >
              <span class="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 flex-shrink-0"></span>
              <span class="text-xs text-zinc-300 leading-relaxed font-medium">{{ feat }}</span>
            </div>
          </div>
        </div>

        <!-- Additional Images Gallery (if any) -->
        <div v-if="portfolio.images && portfolio.images.length > 1" class="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-850 space-y-4">
          <div class="flex items-center gap-2">
            <span class="material-icons !text-base text-indigo-400">collections</span>
            <h2 class="text-base font-bold text-white tracking-wide">Gallery & Previews</h2>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div
              v-for="(img, idx) in portfolio.images"
              :key="idx"
              class="rounded-xl overflow-hidden border border-zinc-800/80 bg-zinc-950 aspect-video group"
            >
              <img :src="img" :alt="`${portfolio.name} preview ${idx + 1}`" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
            </div>
          </div>
        </div>

      </div>

      <!-- Right Column: Specs & Meta Sheet (4 cols) -->
      <div class="col-span-12 md:col-span-4 space-y-4">
        
        <div class="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-850 space-y-5">
          <h2 class="text-xs font-bold text-zinc-400 uppercase tracking-wider pb-2 border-b border-zinc-800/60">
            Project Specifications
          </h2>

          <div class="space-y-1" v-if="portfolio.role">
            <span class="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">My Role</span>
            <p class="text-xs text-zinc-200 font-semibold">{{ portfolio.role }}</p>
          </div>

          <div class="space-y-1">
            <span class="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Platform</span>
            <p class="text-xs text-zinc-200 capitalize font-semibold">{{ portfolio.platform }}</p>
          </div>

          <div class="space-y-1">
            <span class="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Category</span>
            <p class="text-xs text-zinc-200 capitalize font-semibold">{{ portfolio.category }}</p>
          </div>

          <div class="space-y-2 pt-2 border-t border-zinc-800/60">
            <span class="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Tech Stack</span>
            <div class="flex flex-wrap gap-1.5">
              <span
                v-for="tech in techList"
                :key="tech"
                class="px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-medium"
              >
                {{ tech }}
              </span>
            </div>
          </div>

          <div v-if="portfolio.source" class="pt-3 border-t border-zinc-800/60">
            <a
              :href="portfolio.source"
              target="_blank"
              class="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-white text-zinc-950 hover:bg-zinc-200 transition-colors shadow-lg shadow-white/5"
            >
              <span>Visit Live Website</span>
              <span class="material-icons !text-xs">open_in_new</span>
            </a>
          </div>
        </div>

      </div>

    </div>

    <!-- Bottom Switcher Navigation (Previous / Next) -->
    <div class="flex justify-between items-center gap-4 pt-6 border-t border-zinc-850">
      <div class="w-1/2" v-if="prevPortfolio">
        <router-link
          :to="{ name: 'portfolio-detail', params: { slug: prevPortfolio.slug } }"
          class="flex flex-col gap-1 p-4 md:p-5 rounded-2xl bg-zinc-900/30 hover:bg-zinc-900/70 border border-zinc-850 hover:border-zinc-700/80 transition-all text-left group"
        >
          <span class="text-[10px] font-bold text-zinc-500 uppercase tracking-widest flex items-center gap-1">
            <span class="material-icons !text-xs group-hover:-translate-x-1 transition-transform">arrow_back</span>
            Previous Project
          </span>
          <span class="text-xs md:text-sm font-bold text-white group-hover:text-indigo-400 transition-colors truncate">
            {{ prevPortfolio.name }}
          </span>
        </router-link>
      </div>
      <div class="w-1/2" v-else></div>

      <div class="w-1/2" v-if="nextPortfolio">
        <router-link
          :to="{ name: 'portfolio-detail', params: { slug: nextPortfolio.slug } }"
          class="flex flex-col gap-1 p-4 md:p-5 rounded-2xl bg-zinc-900/30 hover:bg-zinc-900/70 border border-zinc-850 hover:border-zinc-700/80 transition-all text-right group"
        >
          <span class="text-[10px] font-bold text-zinc-500 uppercase tracking-widest flex items-center justify-end gap-1">
            Next Project
            <span class="material-icons !text-xs group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </span>
          <span class="text-xs md:text-sm font-bold text-white group-hover:text-indigo-400 transition-colors truncate">
            {{ nextPortfolio.name }}
          </span>
        </router-link>
      </div>
      <div class="w-1/2" v-else></div>
    </div>

  </div>

  <!-- Fallback if not found -->
  <div v-else class="max-w-xl mx-auto pt-40 pb-20 text-center space-y-4">
    <h2 class="text-2xl font-bold text-white">Project Not Found</h2>
    <p class="text-zinc-400 text-sm">Proyek yang Anda cari tidak ditemukan dalam database.</p>
    <router-link :to="{ name: 'portfolio' }" class="inline-flex px-4 py-2 bg-indigo-600 text-white rounded-xl text-xs font-semibold">
      Kembali ke Portfolio
    </router-link>
  </div>
</template>
