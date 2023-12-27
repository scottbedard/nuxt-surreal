import { User } from '~/app/types'

export default defineEventHandler(async event => {
  const token = await getCookie(event, 'auth')

  let user: User | null = null

  if (token) {
    const db = await useDatabase()
      
    const authed = await db.authenticate(token)

    if (authed) {
      const info = await db.info<User>()

      if (info) {
        user = info
      }
    }
  }

  return { token, user }
})
