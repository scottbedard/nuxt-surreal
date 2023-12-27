import { Surreal } from 'surrealdb.js'

export async function useDatabase(): Promise<Surreal> {
  const db = new Surreal()

  await db.connect(process.env.DB_URL ?? 'http://localhost:8000/sql')

  return db
}
