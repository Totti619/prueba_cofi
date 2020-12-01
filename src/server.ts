import dotenv from 'dotenv'
import app from './app'

const main = async () => {
    dotenv.config()
    await app.listen(process.env.PORT || 5000)
    console.log('Server listening... ')
}

main()
