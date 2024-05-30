import express from 'express'
// import videoRouter from './videoRouter.js'

const rootRouter = express.Router()

rootRouter.use("/",(req,res)=>{
    res.send('gggggggg11')
})

export default rootRouter
