import express, { json } from "express"
import config from "config"
import sequelize from "./db/sequelize"
import errorLogger from "./middlewares/error/error-logger"
import errorResponder from "./middlewares/error/error-responder"
import notFound from "./middlewares/not-found"

import cors from 'cors'
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

        app.use(json())

    
        app.use('/gifts', giftsRouter)
        app.use('/new', newRouter)

        app.use(notFound)

        app.use(errorLogger)
        app.use(errorResponder)

        app.listen(port, () => {
            console.log(`${name} started on port ${port}`)
        })
    } catch (error) {
        console.log('Error resetting database', error)
    }
})()


