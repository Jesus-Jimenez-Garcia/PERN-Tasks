import express from 'express'
import morgan from 'morgan'
import taskRouter from './routes/tasks.routes.js'
import 'dotenv/config'



const app = express()

app.use(morgan('dev'))

app.use(taskRouter)


app.listen(process.env.PORT)
console.log(`Server on port ${process.env.PORT}`)
