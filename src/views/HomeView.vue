<script setup>
import CardBasic from '../components/CardBasic.vue'

const emit = defineEmits(['show-navbar'])

const portfolios = [
  {
    name: 'Ndoroarum',
    description: 'Ticketing App',
    src: '../src/assets/images/ndoroarum.png',
  },
  {
    name: 'Siskubis',
    description: 'Sistem Inkubasi Bisnis',
    src: '../src/assets/images/siskubis.png',
  },
  {
    name: 'Guruinovatif',
    description: 'E-Learning Platform',
    src: '../src/assets/images/guruinovatif.png',
  },
  {
    name: 'Baktibersama',
    description: 'Donation Platform',
    src: '../src/assets/images/baktibersama.png',
  },
]
</script>

<template>
  <main id="home" class="container grid grid-cols-12 gap-5 relative overflow-hidden">
    <div class="col-span-12 md:col-span-6 order-2 md:order-1 flex flex-col gap-5">
      <CardBasic>
        <h1 class="text-4xl md:text-6xl font-semibold">
          The future belongs to those who believe in the beauty of their dreams.
        </h1>
      </CardBasic>
      <div class="grid grid-cols-2 md:grid-cols-3 h-full gap-5">
        <div class="bg-emerald-500 p-6 md:p-8 text-zinc-50 rounded-3xl">
          <div class="flex flex-col justify-center items-center h-full">
            <h3 class="text-5xl font-semibold mb-1">
              2+
            </h3>
            <p>Year Experience</p>
          </div>
        </div>
        <div class="bg-yellow-500 p-6 md:p-8 text-zinc-50 rounded-3xl">
          <div class="flex flex-col justify-center items-center h-full">
            <h3 class="text-5xl font-semibold mb-1">
              21+
            </h3>
            <p>Handled Project</p>
          </div>
        </div>
        <div class="bg-rose-500 p-6 md:p-8 text-zinc-50 rounded-3xl">
          <div class="flex flex-col justify-center items-center h-full">
            <h3 class="text-5xl font-semibold mb-1">
              10+
            </h3>
            <p>Clients</p>
          </div>
        </div>
      </div>
    </div>
    <div class="col-span-12 md:col-span-6 order-1 md:order-2 flex flex-col gap-5">
      <div class="bg-zinc-900 h-min p-5 md:p-8 text-zinc-50 rounded-3xl flex flex-col relative">
        <div class="flex flex-row justify-between items-center">
          <h3 class="font-semibold text-2xl">Roodey<span class="text-zinc-400">Badd</span></h3>
          <span class="material-icons menu-icon !text-3xl hover:cursor-pointer"
            @click="emit('show-navbar')"
          > menu </span>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div class="bg-zinc-900 text-zinc-50 h-[420px] rounded-3xl overflow-hidden">
          <img src="../assets/images/my-self.jpg" alt="" class="w-full">
        </div>
        <div class="flex flex-col gap-5">
          <div class="bg-zinc-900 p-6 md:p-8 rounded-3xl text-xl text-zinc-50 flex flex-row justify-between items-center">
            <h5 class="font-medium text-zinc-400">Name :</h5>
            <p>Fahrudin Yusuf A</p>
          </div>
          <div class="bg-zinc-900 p-6 md:p-8 rounded-3xl text-xl text-zinc-50 flex flex-col gap-5">
            <div class="flex flex-row justify-between items-center">
              <h5 class="font-medium text-zinc-400">Based In :</h5>
              <p>Sleman City</p>
            </div>
            <div class="h-24 w-full rounded-3xl overflow-hidden relative">
              <img src="src/assets/images/maps.png" class="w-full bottom-0 absolute" alt="">
            </div>
          </div>
          <div class="bg-zinc-900 p-2.5 text-zinc-50 rounded-3xl flex flex-row justify-between items-center">
            <a href="https://www.linkedin.com/in/fahrudinyusufabadi/" target="_blank" class="hover:opacity-60">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M29.9999 1.2C14.094 1.2 1.19995 14.094 1.19995 30C1.19995 45.906 14.094 58.8 29.9999 58.8C45.9059 58.8 58.7999 45.906 58.7999 30C58.7999 14.094 45.9059 1.2 29.9999 1.2ZM22.9499 41.937H17.1179V23.169H22.9499V41.937ZM19.9979 20.865C18.1559 20.865 16.9649 19.56 16.9649 17.946C16.9649 16.299 18.1919 15.033 20.0729 15.033C21.9539 15.033 23.1059 16.299 23.1419 17.946C23.1419 19.56 21.9539 20.865 19.9979 20.865ZM44.2499 41.937H38.4179V31.536C38.4179 29.115 37.5719 27.471 35.4629 27.471C33.8519 27.471 32.8949 28.584 32.4719 29.655C32.3159 30.036 32.2769 30.576 32.2769 31.113V41.934H26.4419V29.154C26.4419 26.811 26.3669 24.852 26.2889 23.166H31.3559L31.6229 25.773H31.7399C32.5079 24.549 34.3889 22.743 37.5359 22.743C41.3729 22.743 44.2499 25.314 44.2499 30.84V41.937Z" fill="white"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/fahrudin_abadi/" target="_blank" class="hover:opacity-60">
              <svg width="61" height="60" viewBox="0 0 61 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M39.6667 30C39.6667 32.3869 38.7185 34.6761 37.0307 36.364C35.3428 38.0518 33.0536 39 30.6667 39C28.2797 39 25.9906 38.0518 24.3027 36.364C22.6149 34.6761 21.6667 32.3869 21.6667 30C21.6667 29.487 21.7207 28.986 21.8137 28.5H18.6667V40.491C18.6667 41.325 19.3417 42 20.1757 42H41.1607C41.5604 41.9992 41.9434 41.8399 42.2258 41.557C42.5081 41.2741 42.6667 40.8907 42.6667 40.491V28.5H39.5197C39.6127 28.986 39.6667 29.487 39.6667 30ZM30.6667 36C31.4548 35.9998 32.2352 35.8444 32.9633 35.5426C33.6913 35.2408 34.3528 34.7986 34.91 34.2411C35.4671 33.6837 35.909 33.022 36.2104 32.2938C36.5119 31.5656 36.6669 30.7851 36.6667 29.997C36.6665 29.2089 36.5111 28.4285 36.2093 27.7004C35.9075 26.9724 35.4653 26.3109 34.9078 25.7537C34.3504 25.1966 33.6887 24.7547 32.9605 24.4533C32.2323 24.1518 31.4518 23.9968 30.6637 23.997C29.072 23.9974 27.5457 24.6301 26.4204 25.7559C25.2952 26.8816 24.6633 28.4083 24.6637 30C24.6641 31.5917 25.2968 33.118 26.4226 34.2433C27.5483 35.3685 29.075 36.0004 30.6667 36ZM37.8667 23.7H41.4637C41.7027 23.7 41.9319 23.6053 42.1012 23.4366C42.2704 23.2679 42.3659 23.039 42.3667 22.8V19.203C42.3667 18.9635 42.2716 18.7338 42.1022 18.5645C41.9329 18.3951 41.7032 18.3 41.4637 18.3H37.8667C37.6272 18.3 37.3975 18.3951 37.2282 18.5645C37.0588 18.7338 36.9637 18.9635 36.9637 19.203V22.8C36.9667 23.295 37.3717 23.7 37.8667 23.7ZM30.6667 1.2C23.0285 1.2 15.7031 4.23428 10.302 9.63532C4.90098 15.0364 1.8667 22.3618 1.8667 30C1.8667 37.6382 4.90098 44.9636 10.302 50.3647C15.7031 55.7657 23.0285 58.8 30.6667 58.8C34.4488 58.8 38.1938 58.0551 41.688 56.6077C45.1822 55.1604 48.357 53.039 51.0314 50.3647C53.7057 47.6903 55.8271 44.5155 57.2744 41.0213C58.7218 37.5271 59.4667 33.7821 59.4667 30C59.4667 26.2179 58.7218 22.4729 57.2744 18.9787C55.8271 15.4845 53.7057 12.3096 51.0314 9.63532C48.357 6.961 45.1822 4.8396 41.688 3.39227C38.1938 1.94493 34.4488 1.2 30.6667 1.2ZM45.6667 41.667C45.6667 43.5 44.1667 45 42.3337 45H18.9997C17.1667 45 15.6667 43.5 15.6667 41.667V18.333C15.6667 16.5 17.1667 15 18.9997 15H42.3337C44.1667 15 45.6667 16.5 45.6667 18.333V41.667Z" fill="white"/>
              </svg>
            </a>
            <a href="https://github.com/roodey21" target="_blank" class="hover:opacity-60">
              <svg width="61" height="60" viewBox="0 0 61 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30.3782 29.847H30.2882C26.7152 29.847 23.5682 28.938 21.7052 30.651C21.199 31.1007 20.7958 31.6543 20.523 32.274C20.2501 32.8937 20.1141 33.565 20.1242 34.242C20.1242 39.798 24.5732 40.482 30.2912 40.482H30.3782C36.0932 40.482 40.5452 39.795 40.5452 34.242C40.5452 32.913 40.0772 31.674 38.9642 30.651C37.0982 28.938 33.9512 29.847 30.3782 29.847ZM25.5122 37.44C24.4232 37.44 23.5442 36.216 23.5442 34.71C23.5442 33.204 24.4232 31.986 25.5122 31.986C26.6012 31.986 27.4832 33.204 27.4832 34.71C27.4862 36.216 26.6042 37.44 25.5122 37.44ZM35.1512 37.44C34.0622 37.44 33.1802 36.216 33.1802 34.71C33.1802 33.204 34.0622 31.986 35.1512 31.986C36.2372 31.986 37.1192 33.204 37.1192 34.71C37.1222 36.216 36.2402 37.44 35.1512 37.44ZM30.3332 1.2C14.4272 1.2 1.5332 14.094 1.5332 30C1.5332 45.906 14.4272 58.8 30.3332 58.8C46.2392 58.8 59.1332 45.906 59.1332 30C59.1332 14.094 46.2392 1.2 30.3332 1.2ZM32.9612 41.817C32.4452 41.817 31.4192 41.817 30.3332 41.823C29.2472 41.817 28.2212 41.817 27.7052 41.817C25.4252 41.817 16.3892 41.64 16.3892 30.75C16.3892 28.248 17.2472 26.415 18.6542 24.885C18.4322 24.333 18.4202 21.189 19.6142 18.177C19.6142 18.177 22.3622 18.477 26.5172 21.33C27.3842 21.087 28.8602 20.964 30.3332 20.964C31.8062 20.964 33.2792 21.087 34.1522 21.327C38.3072 18.474 41.0552 18.174 41.0552 18.174C42.2492 21.186 42.2402 24.333 42.0152 24.882C43.4222 26.412 44.2802 28.245 44.2802 30.747C44.2772 41.643 35.2412 41.817 32.9612 41.817Z" fill="white"/>
              </svg>
            </a>
            <a href="https://www.facebook.com/dhesone1/" target="_blank" class="hover:opacity-60">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M29.9999 1.2C14.094 1.2 1.19995 14.094 1.19995 30C1.19995 45.906 14.094 58.8 29.9999 58.8C45.9059 58.8 58.7999 45.906 58.7999 30C58.7999 14.094 45.9059 1.2 29.9999 1.2ZM36.8219 21.102H32.4929C31.9799 21.102 31.4099 21.777 31.4099 22.674V25.8H36.8249L36.0059 30.258H31.4099V43.641H26.3009V30.258H21.6659V25.8H26.3009V23.178C26.3009 19.416 28.9109 16.359 32.4929 16.359H36.8219V21.102Z" fill="white"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div id="portfolio" class="col-span-12 order-4 md:order-3 md:col-span-7">
      <div class="h-full bg-zinc-900 p-6 md:p-8 text-zinc-50 rounded-3xl w-full flex flex-col gap-5">
        <div class="flex flex-row justify-between items-center">
          <h1 class="text-2xl md:text-3xl font-semibold">
            PortFolio
          </h1>
          <a href="#" class="font-light text-xl md:text-2xl">See All</a>
        </div>
        <div class="flex flex-nowrap md:items-center overflow-x-scroll gap-5 no-scrollbar">
          <div v-for="portfolio in portfolios" :key="portfolio" class="relative w-52 rounded-3xl h-52 flex-none flex items-center group overflow-hidden">
            <router-link :to="{ name: 'portfolio' }" class="relative z-10 h-full w-full bg-zinc-900/60 group-hover:opacity-100 opacity-0 transition-all duration-300">
              <span class="absolute bottom-0 group-hover:bottom-1/2 group-hover:translate-y-1/2 text-xl left-1/2 -translate-x-1/2 font-semibold ease-in-out duration-200 p-2">
                {{ portfolio.name }} <br>
                <span class="text-base font-medium">
                  Read More
                </span>
              </span>
            </router-link>
            <img :src="portfolio.src" class="absolute h-full opacity-80" alt="">
          </div>
        </div>
      </div>
    </div>
    <div id="about" class="col-span-12 order-3 md:order-4 md:col-span-5">
      <div class="h-full bg-zinc-900 p-6 md:p-8 text-zinc-50 rounded-3xl w-full flex flex-col gap-5">
        <div class="flex flex-row justify-between items-center">
          <h1 class="text-2xl md:text-3xl font-semibold">
            About Me
          </h1>
          <a href="#" class="font-light text-xl md:text-2xl">Resume</a>
        </div>
        <p>I am an experienced web developer specializing in Laravel and Tailwind CSS for backend development. With a strong command of backend technologies, particularly Laravel, I excel in designing and implementing robust systems, creating RESTful APIs, managing databases, and ensuring smooth data flow between the frontend and backend. I also possess expertise in utilizing Tailwind CSS to craft clean and responsive user interfaces. </p>
      </div>
    </div>
  </main>
</template>
