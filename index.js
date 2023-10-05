import express from 'express'
import cors from 'cors'
import connectDB from './Database/dbConfig.js'
import mentrouter from './Routers/mentor.router.js'
import studrouter from './Routers/students.router.js'

import dotenv from 'dotenv'
 dotenv.config()

const PORT=process.env.PORT

//console.log(port);


const app=express()

app.use(cors())
app.use(express.json())

app.use('/api',mentrouter)
app.use('/api',studrouter)



connectDB()

app.listen(PORT,()=>{
    console.log("App is Listening",PORT)
})
