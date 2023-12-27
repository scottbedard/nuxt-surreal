import { User } from '~/app/types'

export default defineEventHandler(async event => {
  const data = await readBody(event)

  const db = await useDatabase({
    database: process.env.DB_DATABASE ?? 'test',
    namespace: process.env.DB_NAMESPACE ?? 'test',
    password: process.env.DB_PASSWORD ?? 'root',
    username: process.env.DB_USER ?? 'root',
  })

  // test if user exists, this could also be done directly from the client
  const [exists] = await db.query<[boolean]>(/* surql */`
    count(SELECT * FROM user WHERE username = $username) > 0
  `, data)

  // create user if none exists
  if (!exists) {
    try {
      await db.query(/* surql */`
        CREATE user CONTENT {
          password: crypto::bcrypt::generate($password),
          username: $username,
        }
      `, data)
    } catch {
      throw createError({ statusText: 'signup_failed' })
    }
  }

  // attempt to authenticate user
  try {
    const token = await db.signin({
      database: process.env.DB_DATABASE ?? 'test',
      namespace: process.env.DB_NAMESPACE ?? 'test',
      password: data.password,
      scope: 'user',
      username: data.username,
    })

    setCookie(event, 'auth', token)

    const user = await db.info<User>()

    return { token, user }
  } catch {
    throw createError({ statusText: 'auth_failed' })
  }
})
