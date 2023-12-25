// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      link: [
        { rel: 'preconnect', href: 'https://fonts.bunny.net' },
        { rel: 'stylesheet', href: 'https://fonts.bunny.net/css?family=quicksand:400' },
      ],
    },
  },
  devtools: {
    enabled: true,
  },
  modules: [
    '@nuxtjs/tailwindcss',
  ],
})
