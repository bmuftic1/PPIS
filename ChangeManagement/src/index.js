import app from './express'

import config from '../config'

import mongoose from 'mongoose'



mongoose.Promise = global.Promise

mongoose.set("useCreateIndex", true)

mongoose.set("useNewUrlParser", true)

mongoose.connect(config.mongo)

mongoose.connection.on("error", () => {

    console.log(`Error connecting to database: ${config.mongo}`);

})



app.listen(config.port, (err) => {

    if (err) {

        console.log(err)

    } else {

        console.log("Server is listening on port "+config.port)

    }

})



export default app