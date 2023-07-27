require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express();
app.use(cors())
app.use(express.json())

app.use((req,res, next) => {
    console.log(req.path, req.method)
    next()
})

const odecaRoutes = require('./routes/odeca')
const upitnikRoutes = require('./routes/upitnik')
const eventsRoutes = require('./routes/events')
const loginRoutes = require('./routes/login')
const signupRoutes = require('./routes/signup')

app.use('/odeca', odecaRoutes)
app.use('/upitnik', upitnikRoutes)
app.use('/events', eventsRoutes)
app.use('/login', loginRoutes)
app.use('/signup', signupRoutes)

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('connected to db and listening to port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })

