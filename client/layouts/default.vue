<template>
  <div class="md:flex">
    <div class="md:flex-shrink-0 bg-gray-900 min-h-screen text-gray-100 p-5">
      <h1 class="text-gray-500 pb-5 border-b mb-5 border-gray-700">MENÚS</h1>
      <ButtonPlus v-if="!showMenuSetup" @click.native="showMenuSetup = true" />
      <MenuSetup v-if="showMenuSetup" />
    </div>
    <div class="mt-4 md:mt-0 md:ml-6">
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
