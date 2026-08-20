<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import portfolios from '../database/portfolio.js';

const router = useRouter();
const searchQuery = ref('');
const activeCategory = ref('all');

// Categories list
const categories = [
  { id: 'all', label: 'All Projects', icon: 'apps' },
  { id: 'work', label: 'Work & Enterprise', icon: 'business_center' },
  { id: 'freelance', label: 'Freelance Clients', icon: 'handshake' },
  { id: 'personal', label: 'Personal & Labs', icon: 'science' },
];

// Realtime filtered portfolios
const filteredPortfolios = computed(() => {
  return portfolios.filter((item) => {
    // Category filter
    const matchesCategory = activeCategory.value === 'all' || item.category === activeCategory.value;
    
    // Search query filter (name, description, techStack, role)
    if (!searchQuery.value.trim()) return matchesCategory;
    
    const query = searchQuery.value.toLowerCase().trim();
    const matchesSearch = 
      item.name.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.techStack.toLowerCase().includes(query) ||
      (item.role && item.role.toLowerCase().includes(query)) ||
      (item.source && item.source.toLowerCase().includes(query));
      
    return matchesCategory && matchesSearch;
  });
});

const categoryCounts = computed(() => {
  return {
    all: portfolios.length,
    work: portfolios.filter(p => p.category === 'work').length,
    freelance: portfolios.filter(p => p.category === 'freelance').length,
    personal: portfolios.filter(p => p.category === 'personal').length,
  };
});

const goToDetail = (slug) => {
  router.push({ name: 'portfolio-detail', params: { slug: slug } });
};

const getCategoryBadgeClass = (category) => {
  switch (category) {
    case 'work':
      return 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30';
    case 'freelance':
      return 'bg-purple-500/10 text-purple-400 border-purple-500/30';
    case 'personal':
      return 'bg-teal-500/10 text-teal-400 border-teal-500/30';
    default:
      return 'bg-zinc-900/60 text-zinc-400 border-zinc-800/80';
  }
};

const getCleanDomain = (url) => {
  if (!url) return null;
  try {
    const parsed = new URL(url);
    return parsed.hostname.replace(/^www\./, '');
  } catch (e) {
    return url.replace(/^https?:\/\//, '').replace(/\/$/, '');
  }
};
</script>

<template>
  <div class="max-w-5xl mx-auto px-4 md:px-8 pt-28 md:pt-32 pb-24">
    
    <!-- Hero Header Glass Card -->
    <div class="mb-8 p-6 md:p-8 rounded-3xl bg-zinc-950/45 backdrop-blur-md border border-zinc-800/80 shadow-xl shadow-black/20 space-y-4">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-800/80 text-xs font-semibold text-indigo-400">
        <span class="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse"></span>
        <span>Directory & Portfolio Index</span>
      </div>
      
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 class="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Selected Works
          </h1>
          <p class="text-zinc-400 text-sm md:text-base mt-2 max-w-2xl leading-relaxed">
            Daftar lengkap seluruh website, sistem backend, sistem booking, dan aplikasi web yang pernah saya bangun.
          </p>
        </div>
        
        <!-- Total count badge -->
        <div class="flex items-center gap-2 self-start md:self-auto text-xs text-zinc-400 bg-zinc-900/80 border border-zinc-800/80 px-4 py-2 rounded-full shadow-inner">
          <span class="text-white font-bold">{{ filteredPortfolios.length }}</span>
          <span>dari {{ portfolios.length }} Proyek</span>
        </div>
      </div>
    </div>

    <!-- Filter & Search Controls Glass Bar -->
    <div class="sticky top-20 z-30 mb-8 p-3 rounded-2xl md:rounded-full bg-zinc-950/60 backdrop-blur-md border border-zinc-800/80 shadow-xl shadow-black/40 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
      
      <!-- Category Filter Pills -->
      <div class="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 md:pb-0 px-1">
        <button
          v-for="cat in categories"
          :key="cat.id"
          @click="activeCategory = cat.id"
          class="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer"
          :class="activeCategory === cat.id 
            ? 'bg-white/10 text-white shadow-sm border border-zinc-700/80' 
            : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/60 border border-transparent'"
        >
          <span class="material-icons !text-sm text-indigo-400">{{ cat.icon }}</span>
          <span>{{ cat.label }}</span>
          <span 
            class="ml-1 text-[10px] px-1.5 py-0.2 rounded-full"
            :class="activeCategory === cat.id ? 'bg-zinc-800 text-zinc-200' : 'bg-zinc-900 text-zinc-500'"
          >
            {{ categoryCounts[cat.id] }}
          </span>
        </button>
      </div>

      <!-- Live Search Box -->
      <div class="relative w-full md:w-72 px-1">
        <span class="material-icons absolute left-4 top-1/2 -translate-y-1/2 !text-base text-zinc-500 pointer-events-none">search</span>
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Cari website, stack, peran..."
          class="w-full bg-zinc-900/80 border border-zinc-800/80 focus:border-indigo-500/60 rounded-full pl-9 pr-8 py-2 text-xs text-white placeholder:text-zinc-500 focus:outline-none transition-colors"
        />
        <button 
          v-if="searchQuery" 
          @click="searchQuery = ''"
          class="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300"
        >
          <span class="material-icons !text-sm">close</span>
        </button>
      </div>

    </div>

    <!-- Continuous Vertical Projects List (Scroll ke bawah memanjang) -->
    <div class="space-y-4">
      
      <!-- Project Item Glass Row Card -->
      <div
        v-for="(item, index) in filteredPortfolios"
        :key="item.id"
        class="group relative p-6 md:p-7 rounded-3xl bg-zinc-950/45 backdrop-blur-md border border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900/35 transition-all duration-300 flex flex-col md:flex-row md:items-start justify-between gap-5 cursor-pointer shadow-xl shadow-black/20"
        @click="goToDetail(item.slug)"
      >
        <!-- Left Column: Info & Content -->
        <div class="space-y-3 flex-1 min-w-0">
          
          <!-- Metadata Badges Bar -->
          <div class="flex flex-wrap items-center gap-2 text-xs">
            <!-- Index indicator -->
            <span class="text-zinc-500 font-mono text-[11px] font-bold">#{{ (index + 1).toString().padStart(2, '0') }}</span>
            
            <!-- Category Badge -->
            <span 
              class="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border"
              :class="getCategoryBadgeClass(item.category)"
            >
              {{ item.category }}
            </span>

            <!-- Live Status & Domain (if exists) -->
            <div v-if="item.source" class="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-medium">
              <span class="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
              <span class="font-mono">{{ getCleanDomain(item.source) }}</span>
            </div>
            <div v-else class="inline-flex items-center gap-1 px-3 py-0.5 rounded-full bg-zinc-900/80 border border-zinc-800/80 text-zinc-500 text-[10px] font-medium">
              <span class="material-icons !text-[11px]">lock</span>
              <span>Internal System</span>
            </div>
          </div>

          <!-- Title & Role -->
          <div>
            <div class="flex items-center gap-2">
              <h2 class="text-lg md:text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                {{ item.name }}
              </h2>
            </div>
            
            <p v-if="item.role" class="text-xs text-zinc-400 mt-1 font-medium flex items-center gap-1">
              <span class="material-icons !text-xs text-zinc-500">badge</span>
              <span>{{ item.role }}</span>
            </p>
          </div>

          <!-- Description -->
          <p class="text-zinc-300 text-xs md:text-sm leading-relaxed max-w-3xl">
            {{ item.description }}
          </p>

          <!-- Key Features preview (if available) -->
          <div v-if="item.features && item.features.length" class="flex flex-wrap gap-x-3 gap-y-1 pt-1">
            <span 
              v-for="feat in item.features.slice(0, 3)" 
              :key="feat" 
              class="text-[11px] text-zinc-400 flex items-center gap-1"
            >
              <span class="text-indigo-400 font-bold">•</span>
              <span>{{ feat }}</span>
            </span>
          </div>

          <!-- Tech Stack Badges -->
          <div class="flex flex-wrap gap-1.5 pt-2">
            <span
              v-for="tech in item.techStack.split(',')"
              :key="tech"
              class="px-2.5 py-1 rounded-lg bg-zinc-900/80 border border-zinc-800/80 text-[10px] font-medium text-zinc-400 group-hover:text-zinc-200 transition-colors"
            >
              {{ tech.trim() }}
            </span>
          </div>
        </div>

        <!-- Right Column: Quick Action Buttons -->
        <div class="flex md:flex-col items-center md:items-end justify-between md:justify-start gap-2.5 pt-3 md:pt-0 border-t md:border-t-0 border-zinc-800/60 flex-shrink-0" @click.stop>
          <!-- Live Website External Link -->
          <a
            v-if="item.source"
            :href="item.source"
            target="_blank"
            class="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-zinc-900 border border-zinc-800/80 hover:bg-white hover:text-zinc-950 text-zinc-300 transition-all shadow-md"
            title="Buka Website Asli"
          >
            <span>Live Site</span>
            <span class="material-icons !text-xs">open_in_new</span>
          </a>

          <!-- View Details Button -->
          <button
            @click="goToDetail(item.slug)"
            class="inline-flex items-center gap-1 px-4 py-2 rounded-full text-xs font-medium text-zinc-400 hover:text-white hover:bg-zinc-800/80 border border-transparent hover:border-zinc-700/60 transition-all cursor-pointer"
          >
            <span>Case Study</span>
            <span class="material-icons !text-xs group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
          </button>
        </div>

      </div>

    </div>

    <!-- Empty State when search returns no match -->
    <div 
      v-if="filteredPortfolios.length === 0" 
      class="py-20 text-center rounded-3xl bg-zinc-950/45 backdrop-blur-md border border-zinc-800/80 p-8 space-y-4 shadow-xl shadow-black/20"
    >
      <div class="w-14 h-14 mx-auto rounded-2xl bg-zinc-900/80 border border-zinc-800/80 flex items-center justify-center text-zinc-500">
        <span class="material-icons !text-2xl">search_off</span>
      </div>
      <div>
        <h3 class="text-base font-bold text-white">Tidak ada proyek yang sesuai</h3>
        <p class="text-xs text-zinc-400 mt-1">Coba gunakan kata kunci pencarian yang lain atau ubah filter kategori.</p>
      </div>
      <button 
        @click="searchQuery = ''; activeCategory = 'all'"
        class="px-5 py-2.5 rounded-full bg-zinc-900 border border-zinc-800/80 text-zinc-200 hover:text-white text-xs font-semibold hover:bg-zinc-800 transition-colors cursor-pointer"
      >
        Reset Filter
      </button>
    </div>

  </div>
</template>
