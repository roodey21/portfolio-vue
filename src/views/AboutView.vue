<script setup>
import CardBasic from '../components/CardBasic.vue'
import techStacks from '../database/techStacks.js'
import about from '../database/about.js'

const emit = defineEmits(['show-navbar'])
</script>

<template>
  <main id="home" class="container relative gap-5 row">
    <div class="h-full col-span-12 row">
        <CardBasic class="flex-1 order-2 hidden h-full col-span-12 md:order-1 md:col-span-6 md:block">
            <div class="flex flex-row items-center justify-between">
                <h3 class="text-2xl font-semibold">About Me</h3>
            </div>
        </CardBasic>
        <CardBasic class="flex-1 order-1 h-full col-span-12 md:order-2 md:col-span-6">
            <div class="flex flex-row items-center justify-between">
                <router-link :to="{ name: 'home' }"><h3 class="text-2xl font-semibold">Roodey<span class="text-zinc-400">Badd</span></h3></router-link>
                <span class="material-icons menu-icon !text-3xl hover:cursor-pointer"
                    @click="emit('show-navbar')"
                > menu </span>
            </div>
        </CardBasic>
    </div>
    <div class="col-span-12 row">
      <div class="col-span-12 md:col-span-3 bg-zinc-900 text-zinc-50 h-[420px] rounded-3xl overflow-hidden">
        <img src="../assets/images/my-self.jpg" alt="" class="w-full">
      </div>
      <div class="flex flex-col h-full col-span-12 gap-4 md:col-span-4">
        <CardBasic class="text-lg h-max">
          <p class="tracking-tighter">
            {{ about.about }}
          </p>
        </CardBasic>
        <CardBasic class="hidden md:block">
          I ♥ <span v-for="(hobby, index) in about.hobbies" :key="index" class="capitalize">
            {{ hobby }} 
            <span v-if="index < about.hobbies.length - 1">, </span>
          </span>
        </CardBasic>
      </div>
      <CardBasic class="flex flex-col col-span-12 gap-5 md:col-span-5">
          <h1 class="text-2xl font-semibold md:text-3xl">
            Bio
          </h1>
          <ul class="space-y-2">
            <li class="flex flex-row text-lg" v-for="work in about.works" :key="work">
              <h6 class="mr-8 font-semibold">{{ work.year }}</h6>
              <span>{{ work.job }}</span>
            </li>
          </ul>
        </CardBasic>
    </div>
    <div class="col-span-12 row">
      <CardBasic class="flex flex-col col-span-12 gap-5 md:col-span-9">
        <h1 class="text-2xl font-semibold md:text-3xl">
          Tech Stacks
        </h1>
        <div class="grid grid-cols-2 gap-5 md:grid-cols-5">
          <div v-for="stack in techStacks" :key="stack.name">
            <CardBasic class="!bg-zinc-800">
              <div class="flex flex-col items-center justify-center gap-2">
                <component :is="stack.icon" class="w-16 h-16" :color="stack.color"/>
                <p class="text-xl font-semibold">{{ stack.name }}</p>
              </div>
            </CardBasic>
          </div>
        </div>
      </CardBasic>
      <div class="flex flex-col col-span-12 gap-5 md:col-span-5">
        <!-- <CardBasic class="flex flex-col gap-5 h-min">
          <h1 class="text-2xl font-semibold md:text-3xl">
            Bio
          </h1>
          <ul class="space-y-2">
            <li class="flex flex-row text-lg">
              <h6 class="mr-8 font-semibold">2020</h6>
              <span>Internship at <a href="https://www.razen.co.id" class="underline underline-offset-4">PT. Rezen Teknologi Indonesia</a> as a Web Developer.</span>
            </li>
            <li class="flex flex-row text-lg">
              <h6 class="mr-8 font-semibold">2021</h6>
              <span>Worked at Indah Cargo Group as office administrator.</span>
            </li>
            <li class="flex flex-row text-lg">
              <h6 class="mr-8 font-semibold">2021 to <br> present</h6>
              <span>Works as a freelance fullstack web developer.</span>
            </li>
            <li class="flex flex-row text-lg">
              <h6 class="mr-8 font-semibold">2022 to <br> 2023</h6>
              <span>Worked at <a href="https://www.digitaliz.net/" class="underline underline-offset-4">Digitaliz</a> as Fullstack Web Developer.</span>
            </li>
          </ul>
        </CardBasic> -->
        <CardBasic class="block md:hidden">
          I ♥ Art, Music, Technology, Games, and I love to learn new things.
        </CardBasic>
      </div>
    </div>
  </main>
</template>