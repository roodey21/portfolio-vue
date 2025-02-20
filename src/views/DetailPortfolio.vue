<script setup>
import { computed, onMounted, ref } from 'vue';
import CardBasic from '../components/CardBasic.vue';
import portfolios from '../database/portfolio.js'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { useRoute } from 'vue-router';

const emit = defineEmits(['show-navbar'])
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

</script>

<template>
  <main id="home" class="container relative gap-5 row">
    <div class="col-span-12 row">
        <CardBasic class="order-2 hidden col-span-12 md:order-1 md:col-span-6 md:block">
            <div class="flex flex-row items-center justify-start gap-4 text-2xl font-semibold">
                <router-link :to="{ name: 'home' }">
                    <h3>
                        Home
                    </h3>
                </router-link>
                <h3>\</h3>
                <h3>My Portfolio</h3>
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
    <div class="max-w-screen-md col-span-12 mx-auto">
        <div class="w-full space-y-4">
            <img :src="portfolio.cover" alt="" class="w-max rounded-xl">
            <!-- detail project -->
            <CardBasic class="p-4 space-y-1 text-white">
                <div class="w-full text-lg font-medium">{{ portfolio.name + ' - ' + portfolio.description }}</div>
                <div class="flex flex-row justify-start gap-4">
                    <div>
                        Platform :
                    </div>
                    <div>
                        {{ portfolio.platform }}
                    </div>
                </div>
                <div class="flex flex-row justify-start gap-4">
                    <div>
                        Tech Stack :
                    </div>
                    <div>
                        {{ portfolio.techStack }}
                    </div>
                </div>
                <div class="flex flex-row justify-start gap-4">
                    <div>
                        Peran :
                    </div>
                    <div>
                        {{ portfolio.role }}
                    </div>
                </div>
                <div class="flex flex-row justify-start gap-4" v-if="portfolio.source">
                    <div>
                        Source :
                    </div>
                    <div>
                        <a :href="portfolio.source" class="hover:text-teal-500" target="_blank">{{ portfolio.source }}</a>
                    </div>
                </div>
                <div class="flex flex-col justify-start gap-2" v-if="portfolio.features?.length">
                    <div>
                        Key Feature :
                    </div>
                    <div class="key-feature">
                        <ul>
                            <li v-for="feature in portfolio.features" :key="feature.id">{{ feature }}</li>                        </ul>
                    </div>
                </div>
            </CardBasic>
            <div class="flex flex-row justify-between">
                <div class="items-center text-white hover:text-white/90" v-if="prevPortfolio">
                    <router-link class="flex items-center" :to="{ name: 'portfolio-detail', params: { slug: prevPortfolio.slug } }">
                        <span class="material-icons">chevron_left</span> {{ prevPortfolio.name }}
                    </router-link>
                </div>
                <div v-else></div>
                <div class="items-center text-white hover:text-white/90" v-if="nextPortfolio">
                    <router-link class="flex items-center" :to="{ name: 'portfolio-detail', params: { slug: nextPortfolio.slug } }">
                        {{ nextPortfolio.name }} <span class="material-icons">chevron_right</span>
                    </router-link>
                </div>
                <div v-else></div>
            </div> 
        </div>
    </div>
  </main>
</template>
