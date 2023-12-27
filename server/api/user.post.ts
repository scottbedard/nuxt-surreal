import { User } from '~/app/types'

export default defineEventHandler(async event => {
  const data = await readBody(event)

  const db = await useDatabase()

  await db.signin({
    database: process.env.DB_DATABASE ?? 'test',
    namespace: process.env.DB_NAMESPACE ?? 'test',
    password: process.env.DB_PASSWORD ?? 'root',
    username: process.env.DB_USER ?? 'root',
  })

  const [result] = await db.query<[User[]]>(`
    CREATE user CONTENT {
      password: crypto::bcrypt::generate($password),
      username: $username,
    }
  `, data)
  
  return {
    result
  }
})
