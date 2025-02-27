import express, { json } from "express"
import config from "config"
import sequelize from "./db/sequelize"
import profileRouter from "./routers/profileRouter"
import errorLogger from "./middlewares/error/error-logger"
import errorResponder from "./middlewares/error/error-responder"
import notFound from "./middlewares/not-found"

// import authRouter from "./routers/authRouter"
import getUser from './middlewares/auth/get-user'
import requireAuth from './middlewares/auth/require-auth'
import cors from 'cors'

const port = config.get<string>('app.port')
const name = config.get<string>('app.name')
const force = config.get<boolean>('sequelize.sync.force')


const app = express();


(async () => {
    try {
        console.log('Trying to Connect to Database')
        await sequelize.sync()
        console.log('Database logged in successfully')


        app.use(cors())
        //middlewares
        app.use(json()) //middleware to extract the post/put/patch data and save it to the request object in case the content type of the request is application json

        // app.use('/auth', authRouter)

        app.use(getUser)

        app.use(requireAuth)
        // *************** here is the place to mount routers 
        // app.use('/follows', followRouter)

      
        
        //special notFound middleware
        app.use(notFound)

        //error middlewares
        app.use(errorLogger)
        app.use(errorResponder)

        app.listen(port, () => {
            console.log(`${name} started on port ${port}`)
        })
    } catch (error) {
        console.log('Error resetting database', error)
    }
})()


