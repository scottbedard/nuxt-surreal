import { Surreal } from 'surrealdb.js'

type Signin = Parameters<typeof Surreal.prototype.signin>[0]

export async function useDatabase(signin?: Signin): Promise<Surreal> {
  const db = new Surreal()

  await db.connect(process.env.DB_URL ?? 'http://localhost:8000/sql')

  if (signin) {
    db.signin(signin)
  }

  return db
}
