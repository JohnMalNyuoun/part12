require('dotenv').config()

const MONGO_URL = process.env.MONGO_URL || undefined
const MONGODB_URL = process.env.MONGODB_URL
const REDIS_URL = process.env.REDIS_URL || undefined

module.exports = {
  MONGO_URL: MONGO_URL || MONGODB_URL,
  REDIS_URL
}
