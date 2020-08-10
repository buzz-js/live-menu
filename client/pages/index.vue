<template>
  <div class="container">
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
</template>

<script>
export default {
  middleware: 'auth',
  computed: {
    menus() {
      return this.$store.state.menus.list
    },
  },
}
</script>
