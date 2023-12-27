import { User } from '~/app/types'

export default defineEventHandler(async event => {
  const auth = await getCookie(event, 'auth')

  let user: User | null = null

  if (auth) {
    const db = await useDatabase()
      
    const authed = await db.authenticate(auth)

    if (authed) {
      const info = await db.info<User>()

      if (info) {
        user = info
      }
    }
  }

  return {
    auth,
    user,
  }
})
