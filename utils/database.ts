import { Db, MongoClient, MongoError } from 'mongodb'

type ConnectType = {
  db: Db
  client: MongoClient
}

type ErrorType = {
  message: MongoError
}

const client = new MongoClient(process.env.DATABASE_URL!, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

export default async function connect(): Promise<ConnectType | ErrorType> {
  try {
    if(!client.isConnected()) await client.connect()
    const db = client.db('your-mongo-database-here')
    return {
      db,
      client
    }   
  } catch (error) {
    throw new MongoError({ message: 'Server temporarily unavailable' })
  }
}