<template>
  <div class="gap-6 grid">
    <p class="leading-relaxed text-center">
      Welcome to a starting point for Nuxt + SurrealDB. Create an account or
      log&nbsp;in to try authentication, then comment to see live queries work their magic!
    </p>

    <form class="gap-6 grid sm:px-10" @submit.prevent="$emit('submit', { username, password })">
      <div class="gap-6 grid sm:grid-cols-2">
        <input
          v-model="username"
          autofocus
          class="border border-gray-300 rounded-lg h-10 px-3 text-center tracking-wide"
          placeholder="Username"
          required />

        <input
          v-model="password"
          class="border border-gray-300 rounded-lg h-10 px-3 text-center tracking-wide"
          placeholder="Password"
          required
          type="password" />
      </div>

      <div class="flex justify-center">
        <button class="bg-gray-200 min-h-[2.5rem] px-8 rounded-lg tracking-wide w-full hover:bg-gray-300 sm:w-auto">
          Sign&nbsp;up / Log&nbsp;in
        </button>
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
defineEmits<{
  (e: 'submit', data: { username: string, password: string }): void
}>()

const username = ref('')

const password = ref('')
</script>