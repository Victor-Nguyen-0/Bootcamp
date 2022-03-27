const mongoose = require("mongoose");

const authorDB = "authorDB";

mongoose.connect(`mongodb://localhost/${authorDB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log(`You are connected to the database called ${authorDB}`)
    })
    .catch((err) => {
        console.log(`You had a problem connecting the ${dbName}. Here is your error:`, err)
    })