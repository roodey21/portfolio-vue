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
  <main id="home" class="container row gap-5 relative">
    <div class="col-span-12 row">
        <CardBasic class="col-span-12 order-2 md:order-1 md:col-span-6 hidden md:block">
            <div class="flex flex-row justify-between items-center">
                <h3 class="font-semibold text-2xl">My Portfolio</h3>
            </div>
        </CardBasic>
        <CardBasic class="col-span-12 order-1 md:order-2 md:col-span-6">
            <div class="flex flex-row justify-between items-center">
                <router-link :to="{ name: 'home' }"><h3 class="font-semibold text-2xl">Roodey<span class="text-zinc-400">Badd</span></h3></router-link>
                <span class="material-icons menu-icon !text-3xl hover:cursor-pointer"
                    @click="emit('show-navbar')"
                > menu </span>
            </div>
        </CardBasic>
    </div>
    <div class="col-span-12 row">
        <div class="col-span-12 md:col-span-6 row">
            <CardBasic v-for="portfolio in portfolios" :key="portfolio" class="col-span-12 flex flex-row flex-wrap gap-5 hover:cursor-pointer hover:bg-zinc-800"
                @click="showDetail(portfolio)"
                :class="{'bg-zinc-800': portfolioActive && portfolio.id == portfolioActive.id}"
            >
                <div class="w-full md:w-1/2 aspect-video rounded-lg overflow-hidden bg-cover bg-top"
                    :style="{ 'background-image': `url('${portfolio.cover}')` }"
                >
                </div>
                <div class="text-slate-50">
                    <h2 class="text-xl md:text-3xl font-semibold mb-2">{{ portfolio.name }}</h2>
                    <p class="text-lg font-medium text-slate-200/80">{{ portfolio.description }}</p>
                    <p class="block md:hidden text-base font-base text-slate-200/80">Stack : {{ portfolio.techStack }}</p>
                </div>
            </CardBasic>
        </div>
        <div class="col-span-12 hidden md:block md:col-span-6 gap-5" v-if="portfolioActive">
            <div class="sticky top-5 h-min flex flex-col gap-5" id="sticky-card">
                <div class="image grid grid-cols-2 gap-5">
                    <img :src="image" v-for="image in portfolioActive.images" :key="image" alt="" class="rounded-2xl aspect-video">
                </div>
                <CardBasic>
                    <ul class="space-y-2">
                        <li class="flex justify-between text-xl font-medium">
                            <h6 class="w-1/2 text-zinc-400">Project Name :</h6>
                            <span class="w-1/2 text-zinc-50 text-right">{{ portfolioActive.name }}</span>
                        </li>
                        <li class="flex justify-between text-xl font-medium">
                            <h6 class="w-1/2 text-zinc-400">Platform :</h6>
                            <span class="w-1/2 text-zinc-50 text-right">{{ portfolioActive.platform }}</span>
                        </li>
                        <li class="flex justify-between text-xl font-medium">
                            <h6 class="w-1/2 text-zinc-400">Tech Stack :</h6>
                            <span class="w-1/2 text-zinc-50 text-right">{{ portfolioActive.techStack }}</span>
                        </li>
                    </ul>
                </CardBasic>
            </div>
        </div>
    </div>
  </main>
</template>
