import dotenv from 'dotenv'
import app from './app.js'
import connectDB from './src/config/dbconfig.js'

dotenv.config({
    path: './.env'
})

async function startServer() {
    //connect db
    try {
        await connectDB()

        app.on("error", (error) => {    // to check if there are any errors 
            console.log("ERROR", error);
            throw error;
        })

        app.listen(process.env.PORT || 8000, () => {
            console.log('app running in port ', process.env.PORT)
        })
    } catch (err) {
        console.error('could not start server', err)
    }

    //listen to port

}

startServer()