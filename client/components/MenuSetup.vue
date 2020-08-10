<template>
  <div id="menu-setup">
    <form @submit.prevent="addMenu">
      <div class="mb-3">
        <label for="name">Nombre</label>
        <input
          id="name"
          v-model="menu.name"
          class="shadow appearance-none border border-gray-700 rounded w-full py-2 px-3 text-white bg-gray-800 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          required
        />
      </div>
      <div class="mb-3">
        <label for="items">Items</label>
        <ButtonPlus v-if="menu.name" @click.native="addItems" />
      </div>
      <button
        class="block w-full text-white my-5 bg-green-500 hover:bg-green-400 p-3"
      >
        GUARDAR
      </button>
    </form>
  </div>
</template>

<script>
import ButtonPlus from '@/components/ButtonPlus.vue'

export default {
  name: 'MenuSetup',
  components: {
    ButtonPlus,
  },
  data: () => {
    return {
      menu: {
        name: '',
      },
    }
  },
  methods: {
    async addMenu() {
      try {
        const menu = await this.$strapi.create('menus', {
          name: this.menu.name,
        })
        debugger
        this.$store.commit('menus/add', {
          menu,
        })
      } catch (error) {
        console.error(error)
      }
    },
    addItems() {
      this.$store.commit('menus/addItems', {
        menu: { ...this.menu },
        items: [
          {
            title: `Item ${new Date().getSeconds()}`,
          },
        ],
      })
    },
  },
}
</script>
