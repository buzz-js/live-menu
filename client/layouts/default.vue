<template>
  <div class="md:flex">
    <div class="md:flex-shrink-0 bg-gray-900 min-h-screen text-gray-100 p-5">
      <h1 class="text-gray-500 pb-5 border-b mb-5 border-gray-700">MENÚS</h1>
      <ul class="mb-5">
        <li v-for="menu in menus" :key="menu.id">{{ menu.name }}</li>
      </ul>
      <ButtonPlus v-if="!showMenuSetup" @click.native="showMenuSetup = true" />
      <MenuSetup v-if="showMenuSetup" />
    </div>
    <div class="mt-4 md:mt-0 md:ml-6">
      <header class="text-gray-700 body-font">
        <div
          class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"
        >
          <a
            class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
              ></path>
            </svg>
            <span class="ml-3 text-xl">tailblocks</span>
          </a>
          <nav
            class="md:ml-auto flex flex-wrap items-center text-base justify-center"
          >
            <a class="mr-5 hover:text-gray-900">First Link</a>
            <a class="mr-5 hover:text-gray-900">Second Link</a>
          </nav>
          <button
            v-if="!$strapi.user"
            class="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0"
            @click="login"
          >
            Iniciar sesión
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
          <button v-else @click="logout">Cerrar sesión</button>
        </div>
      </header>
      <Nuxt />
    </div>
  </div>
</template>

<script>
import ButtonPlus from '@/components/ButtonPlus.vue'

export default {
  components: {
    MenuSetup: () => import('@/components/MenuSetup'),
    ButtonPlus,
  },
  async fetch() {
    const menus = await this.$strapi.find('menus')
    this.$store.commit('menus/init', menus)
  },
  data: () => {
    return {
      showMenuSetup: false,
    }
  },
  computed: {
    menus() {
      return this.$store.state.menus.list
    },
  },
  methods: {
    async login() {
      try {
        await this.$strapi.login({
          identifier: 'reliutg@gmail.com',
          password: 'eliuteliut',
        })
      } catch (error) {
        console.error(error)
      }
    },
    logout() {
      this.$strapi.logout()
      this.$router.push('/')
    },
    removeMenu(menu) {
      this.$store.commit('menus/remove', menu)
    },
  },
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
