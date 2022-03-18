const mongoose = require("mongoose");

const productDB = "productDB";

mongoose.connect(`mongodb://localhost/${productDB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log(`You are connected to the database called ${productDB}`)
    })
    .catch((err) => {
        console.log(`You had a problem connecting the ${dbName}. Here is your error:`, err)
    })