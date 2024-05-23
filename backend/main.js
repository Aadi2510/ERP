let express = require('express')
let mongoose = require('mongoose')

let cors = require('cors')
const db = require('./dataBaseConfig.js')
const dotenv = require('dotenv')
dotenv.config({
    path: './.env'
})


let app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(cors())

app.use(express.static('uploads'))

db().then(async () => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })

const saveRoute = require('./route/saveData.route.js')
const loginRoute = require('./route/login.route.js')
const getDataRoute = require('./route/getData.route.js')



    app.use('/api', saveRoute)
    app.use('/api', loginRoute)
    app.use('/api', getDataRoute)

})
.catch(err => console.log(err))