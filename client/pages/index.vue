<template>
  <div class="container">
    <div class="grid home">
      <div class="bg-gray-900 min-h-screen text-gray-100 p-5">
        <h1 class="text-gray-500 pb-5 border-b mb-5 border-gray-700">MENÚS</h1>
        <ul class="mb-5">
          <li v-for="menu in menus" :key="menu.id">{{ menu.name }}</li>
        </ul>
        <ButtonPlus
          v-if="!showMenuSetup"
          @click.native="showMenuSetup = true"
        />
        <MenuSetup v-if="showMenuSetup" />
      </div>
      <div class="p-5">
        <ul class="list-decimal list-outside">
          <li v-for="menu in menus" :key="menu.id">
            {{ menu.name }}
            <ul v-if="menu.items" class="list-disc list-inside">
              <li v-for="(item, index) in menu.items" :key="index">
                {{ item.title }}
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonPlus from '@/components/ButtonPlus.vue'

export default {
  middleware: 'auth',
  components: {
    MenuSetup: () => import('@/components/MenuSetup'),
    ButtonPlus,
  },
  data: () => {
    return {
      showMenuSetup: false,
    }
  },
  async asyncData({ $strapi, store }) {
    const menus = await $strapi.find('menus')
    return { menus }
  },
}
</script>

<style scoped>
.grid.home {
  display: grid !important;
  grid-template-columns: 30% 70% !important;
}
</style>
