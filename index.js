const express = require('express');
const app = express();
const {config} = require('dotenv');
const connectToMongoDB = require('./config/db');

// process.on("uncaughtException", (err) => {
//     console.log(`Error: ${err.message}`);
//     console.log(`Shutting down server due to Uncaught Exception`);

//     process.exit(1);
// })

app.use(express.json());

config({path:"config/config.env"});

connectToMongoDB();

const urlRoute = require('./routes/urlRoute');
app.use("/api/v1", urlRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}.`);
})


