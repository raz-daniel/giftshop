import express, { json } from "express"
import config from "config"
import sequelize from "./db/sequelize"
import errorLogger from "./middlewares/error/error-logger"
import errorResponder from "./middlewares/error/error-responder"
import notFound from "./middlewares/not-found"

// import authRouter from "./routers/authRouter"
import cors from 'cors'
import homeRouter from "./routers/homeRouter"
import giftsRouter from "./routers/giftsRouter"
import newRouter from "./routers/newRouter"

const port = config.get<string>('app.port')
const name = config.get<string>('app.name')
const force = config.get<boolean>('sequelize.sync.force')


const app = express();


(async () => {
    try {
        console.log('Trying to Connect to Database')
        await sequelize.sync({ force })
        console.log('Database logged in successfully')


        app.use(cors())
        //middlewares
        app.use(json()) //middleware to extract the post/put/patch data and save it to the request object in case the content type of the request is application json

        // app.use('/auth', authRouter)

    
        app.use('/home', homeRouter)
        app.use('/gifts', giftsRouter)
        app.use('/new', newRouter)


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


