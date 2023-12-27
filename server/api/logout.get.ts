export default defineEventHandler(async event => {
  const db = await useDatabase()

  deleteCookie(event, 'auth')

  await db.invalidate()

  return {
    // ...
  }
})