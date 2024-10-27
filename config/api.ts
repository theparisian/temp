import env from 'dotenv'
env.config()

export default {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT,
}
