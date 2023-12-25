<template>
  <div class="gap-6 grid">
    <p class="leading-relaxed text-center">
      Welcome to your starting point for Nuxt and SurrealDB projects!
      Create an account to see the authentication, then leave a comment to see
      live queries work their magic!
    </p>

    <form class="gap-6 grid sm:px-10">
      <div class="gap-6 grid sm:grid-cols-2">
        <input
          autofocus
          class="border border-gray-300 rounded-lg h-10 px-3 text-center tracking-wide"
          placeholder="Username"
          required />

        <input
          class="border border-gray-300 rounded-lg h-10 px-3 text-center tracking-wide"
          placeholder="Password"
          required
          type="password" />
      </div>

      <div class="flex justify-center">
        <button class="bg-gray-200 min-h-[2.5rem] px-6 rounded-lg tracking-wide w-full hover:bg-gray-300 sm:w-auto">
          Log&nbsp;in / Sign&nbsp;up
        </button>
      </div>
    </form>
  </div>
</template>