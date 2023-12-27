<template>
  <div class="gap-6 grid px-12 py-12 lg:gap-10 lg:py-16">
    <div class="flex flex-wrap gap-x-6 gap-y-3 items-center justify-center sm:gap-x-10">
      <a href="https://nuxt.com"><img class="h-12 lg:h-16" src="/nuxt.svg" /></a>
      <a href="https://surrealdb.com"><img class="h-14 lg:h-20" src="/surreal.svg" /></a>
    </div>
    
    <div class="gap-6 grid max-w-screen-sm mx-auto w-full">
      <h1 class="leading-relaxed text-center text-2xl tracking-wide lg:text-3xl">
        Getting started with <a class="text-[#00dc82] hover:underline" href="https://nuxt.com">Nuxt</a>
        and <a class="text-[#ff00a0] hover:underline" href="https://surrealdb.com">SurrealDB</a>
      </h1>

      <User @submit="onSubmit" />
    </div>
  </div>
</template>

<script lang="ts" setup>
async function onSubmit(body: { username: string, password: string }) {
  const response = await $fetch('/api/user', { method: 'POST', body })

  console.log('done', response)
}
</script>
