<template>
  <div class="gap-6 grid">
    <div class="leading-relaxed text-center">
      <p>
        Welcome {{ user.username }}, comment below to see live queries in action!
      </p>

      <a
        class="text-blue-600 text-sm hover:underline"
        href="#"
        @click.prevent="$emit('logout')">
        (or click here to log out)
      </a>
    </div>

    <input
      v-model="message"
      class="border border-gray-300 rounded-lg h-10 px-3 text-center tracking-wide"
      maxlength="256"
      placeholder="Enter message"
      required />
  </div>
</template>

<script lang="ts" setup>
import type { User } from '~/app/types'

defineEmits<{
  (e: 'logout'): void
}>()

defineProps<{
  user: User
}>()

const message = ref('')
</script>
