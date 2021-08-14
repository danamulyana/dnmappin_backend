const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const app = express()
const port = 5000
const pinRoute = require('./routes/pins')
const userRoute = require('./routes/users')

dotenv.config()

app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {console.log('MonngoDB Connected!');}).catch((error) => {console.log(error);})

app.use('/api/pins', pinRoute)
app.use('/api/users', userRoute)

app.listen(port, () => {
    console.log(`Backend server running in http://localhost:${port}`)
})