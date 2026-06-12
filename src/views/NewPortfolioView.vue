<script setup>
import { onMounted, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import CardBasic from '../components/CardBasic.vue';
import portfolios from '../database/portfolio.js'

const portfolioWork = ref([])
const portfolioFreelance = ref([])
const portfolioPersonal = ref([])
const router = useRouter()
const showAll = ref(false)

// Filter portfolios based on category and slice length
const updatePortfolio = () => {
  if (showAll.value) {
    portfolioWork.value = portfolios.filter((p) => p.category === 'work');
    portfolioFreelance.value = portfolios.filter((p) => p.category === 'freelance');
    portfolioPersonal.value = portfolios.filter((p) => p.category === 'personal');
  } else {
    portfolioWork.value = portfolios.filter((p) => p.category === 'work').slice(0, 3);
    portfolioFreelance.value = portfolios.filter((p) => p.category === 'freelance').slice(0, 3);
    portfolioPersonal.value = portfolios.filter((p) => p.category === 'personal').slice(0, 3);
  }
};

onMounted(() => {
  updatePortfolio();
})

watch(showAll, updatePortfolio);

const goToDetail = (slug) => {
    router.push({ name: 'portfolio-detail', params: { slug: slug } })
}
</script>

<template>
  <div class="max-w-6xl mx-auto px-4 md:px-8 pt-28 md:pt-32 pb-16">
    <!-- Header Banner -->
    <div class="mb-12">
      <CardBasic class="flex flex-col gap-3">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800/40 border border-zinc-800 text-xs font-semibold text-indigo-400 w-max">
          <span>💼 Works & Contributions</span>
        </div>
        <h1 class="text-3xl md:text-5xl font-extrabold text-white tracking-tight">My Portfolio</h1>
        <p class="text-zinc-400 text-sm md:text-base max-w-2xl leading-relaxed">
          A showcase of fullstack systems, ecommerce integrations, and responsive landing pages I have engineered as a team lead, fullstack dev, or freelancer.
        </p>
      </CardBasic>
    </div>

    <!-- Layout Columns -->
    <div class="space-y-16">
      
      <!-- Section 1: Professional Works -->
      <div class="space-y-6" v-if="portfolioWork.length">
        <div class="flex items-center gap-3 pl-2">
          <span class="w-2.5 h-2.5 bg-indigo-500 rounded-full"></span>
          <h2 class="text-xl md:text-2xl font-bold text-white tracking-tight">Professional Works</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div 
            v-for="pf in portfolioWork" 
            :key="pf.id" 
            @click="goToDetail(pf.slug)"
            class="group p-6 bg-zinc-900/25 border border-zinc-850 hover:border-indigo-500/30 hover:scale-[1.015] hover:shadow-xl hover:shadow-indigo-500/[0.01] rounded-3xl transition-all duration-500 cursor-pointer flex flex-col justify-between min-h-[220px]"
          >
            <div class="space-y-2.5">
              <div class="flex items-center justify-between">
                <span class="text-[10px] font-bold text-indigo-400 tracking-wider uppercase bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-0.5 rounded-full">{{ pf.platform }}</span>
                <span class="material-icons !text-base text-zinc-600 group-hover:text-indigo-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all">arrow_outward</span>
              </div>
              <h3 class="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors leading-snug truncate">{{ pf.name }}</h3>
              <p class="text-zinc-400 text-xs line-clamp-3 leading-relaxed">{{ pf.description }}</p>
            </div>
            <div class="mt-4 pt-4 border-t border-zinc-800/40 flex flex-col gap-3">
              <div class="text-[10px] text-zinc-500 font-semibold truncate">Role: <span class="text-zinc-300 font-medium">{{ pf.role }}</span></div>
              <div class="flex flex-wrap gap-1.5">
                <span v-for="tech in pf.techStack.split(',')" :key="tech" class="px-2 py-0.5 bg-zinc-900/50 border border-zinc-800/60 text-[9px] rounded-lg text-zinc-400 font-medium">
                  {{ tech.trim() }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Section 2: Freelance Projects -->
      <div class="space-y-6" v-if="portfolioFreelance.length">
        <div class="flex items-center gap-3 pl-2">
          <span class="w-2.5 h-2.5 bg-purple-500 rounded-full"></span>
          <h2 class="text-xl md:text-2xl font-bold text-white tracking-tight">Freelance Projects</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div 
            v-for="pf in portfolioFreelance" 
            :key="pf.id" 
            @click="goToDetail(pf.slug)"
            class="group p-6 bg-zinc-900/25 border border-zinc-850 hover:border-purple-500/30 hover:scale-[1.015] hover:shadow-xl hover:shadow-purple-500/[0.01] rounded-3xl transition-all duration-500 cursor-pointer flex flex-col justify-between min-h-[220px]"
          >
            <div class="space-y-2.5">
              <div class="flex items-center justify-between">
                <span class="text-[10px] font-bold text-purple-400 tracking-wider uppercase bg-purple-500/10 border border-purple-500/20 px-2.5 py-0.5 rounded-full">{{ pf.platform }}</span>
                <span class="material-icons !text-base text-zinc-600 group-hover:text-purple-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all">arrow_outward</span>
              </div>
              <h3 class="text-lg font-bold text-white group-hover:text-purple-300 transition-colors leading-snug truncate">{{ pf.name }}</h3>
              <p class="text-zinc-400 text-xs line-clamp-3 leading-relaxed">{{ pf.description }}</p>
            </div>
            <div class="mt-4 pt-4 border-t border-zinc-800/40 flex flex-col gap-3">
              <div class="text-[10px] text-zinc-500 font-semibold truncate">Role: <span class="text-zinc-300 font-medium">{{ pf.role }}</span></div>
              <div class="flex flex-wrap gap-1.5">
                <span v-for="tech in pf.techStack.split(',')" :key="tech" class="px-2 py-0.5 bg-zinc-900/50 border border-zinc-800/60 text-[9px] rounded-lg text-zinc-400 font-medium">
                  {{ tech.trim() }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Section 3: Personal Projects -->
      <div class="space-y-6" v-if="portfolioPersonal.length">
        <div class="flex items-center gap-3 pl-2">
          <span class="w-2.5 h-2.5 bg-teal-500 rounded-full"></span>
          <h2 class="text-xl md:text-2xl font-bold text-white tracking-tight">Personal & Experimental</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div 
            v-for="pf in portfolioPersonal" 
            :key="pf.id" 
            @click="goToDetail(pf.slug)"
            class="group p-6 bg-zinc-900/25 border border-zinc-850 hover:border-teal-500/30 hover:scale-[1.015] hover:shadow-xl hover:shadow-teal-500/[0.01] rounded-3xl transition-all duration-500 cursor-pointer flex flex-col justify-between min-h-[220px]"
          >
            <div class="space-y-2.5">
              <div class="flex items-center justify-between">
                <span class="text-[10px] font-bold text-teal-400 tracking-wider uppercase bg-teal-500/10 border border-teal-500/20 px-2.5 py-0.5 rounded-full">{{ pf.platform }}</span>
                <span class="material-icons !text-base text-zinc-600 group-hover:text-teal-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all">arrow_outward</span>
              </div>
              <h3 class="text-lg font-bold text-white group-hover:text-teal-300 transition-colors leading-snug truncate">{{ pf.name }}</h3>
              <p class="text-zinc-400 text-xs line-clamp-3 leading-relaxed">{{ pf.description }}</p>
            </div>
            <div class="mt-4 pt-4 border-t border-zinc-800/40 flex flex-col gap-3">
              <div class="text-[10px] text-zinc-500 font-semibold truncate">Role: <span class="text-zinc-300 font-medium">{{ pf.role }}</span></div>
              <div class="flex flex-wrap gap-1.5">
                <span v-for="tech in pf.techStack.split(',')" :key="tech" class="px-2 py-0.5 bg-zinc-900/50 border border-zinc-800/60 text-[9px] rounded-lg text-zinc-400 font-medium">
                  {{ tech.trim() }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

    <!-- Toggle Show All Button -->
    <div class="mt-12 flex justify-center">
      <button 
        @click="showAll = !showAll" 
        class="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white transition-all text-xs font-bold cursor-pointer shadow-lg"
      >
        <span class="material-icons !text-base text-indigo-400">{{ showAll ? 'unfold_less' : 'unfold_more' }}</span>
        <span>{{ showAll ? 'Show Less' : 'Show All Portfolios' }}</span>
      </button>
    </div>
  </div>
</template>
