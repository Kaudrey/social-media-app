const express = require("express")
const app = express()
const dotenv = require('dotenv')
const cors = require('cors')
const mongoose = require('mongoose')

const userRoutes= require("./routes/user.routes")
const postRoutes= require("./routes/post.routes")
const swaggerUi= require ('swagger-ui-express')
const swaggerJson = require('./swagger.json')

dotenv.config({path: './.env'})

app.use(cors());
app.use(express.json())
app.use("/users",userRoutes)
app.use("/posts",postRoutes)
app.use("/swagger", swaggerUi.serve,swaggerUi.setup(swaggerJson))
let PORT = process.env.PORT
mongoose.connect(process.env.DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})


.then(()=>console.log("Connected to database successfully"))
.catch(err=>console.log(err))

app.listen( PORT ,()=>{
    console.log(`server is listening on port ${PORT}`);
})