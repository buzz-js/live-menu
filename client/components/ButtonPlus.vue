<template>
  <button
    type="button"
    class="bg-gray-800 hover:bg-gray-700 text-gray-500 font-bold py-2 px-4 inline-flex items-center"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-plus"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="#ffffff"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
    <span class="ml-2">AÑADIR</span>
  </button>
</template>

<script>
export default {
  name: 'ButtonPlus',
}
</script>
