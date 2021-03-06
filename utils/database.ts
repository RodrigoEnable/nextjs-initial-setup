import { Db, MongoClient } from 'mongodb'

type ConnectType = {
  db: Db
  client: MongoClient
}

const client = new MongoClient(process.env.DATABASE_URL!, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

export default async function connect(): Promise<ConnectType> {
  try {
    if(!client.isConnected()) await client.connect()
    const db = client.db('your-mongo-database-here')
    return {
      db,
      client
    }   
  } catch (error) {
    throw new Error('Server temporarily unavailable')
  }
}