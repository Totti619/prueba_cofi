import dotenv from 'dotenv'
import app from './app'

const main = async () => {
    dotenv.config()
    const host = process.env.HOST || 'localhost'
    const port = process.env.PORT || 5000
    await app.listen(process.env.PORT || 5000)
    console.log(`Server listening on http://${host}:${port}`)
}

main()
