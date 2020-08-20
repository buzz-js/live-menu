<template>
  <div class="h-screen flex justify-center items-center">
    <div class="w-full max-w-xs">
      <div v-if="error" class="mb-5" role="alert">
        <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
          ERROR
        </div>
        <div
          class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700"
        >
          <p>{{ error }}</p>
        </div>
      </div>
      <form
        class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        @submit.prevent="login"
      >
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Username
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
            v-model="user.identifier"
          />
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Password
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
            v-model="user.password"
          />
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sign In
          </button>
          <a
            class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
      </form>
      <p class="text-center text-gray-500 text-xs">
        &copy;2020 Acme Corp. All rights reserved.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'guest',
  data: () => {
    return {
      user: {
        identifier: '',
        password: '',
      },
      error: null,
    }
  },
  methods: {
    async login() {
      try {
        await this.$strapi.login({ ...this.user })
        this.$router.push('/')
      } catch (error) {
        this.error = error.message
      }
    },
  },
}
</script>
