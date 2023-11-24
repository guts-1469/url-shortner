const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    id:{
        type: String,
        required: true,
        unique: true,
    },
    redirectUrl :{
        type: String,
        required: true,
    },
    visitHistory: [{ timestamp: {type: Number} }]
    }
);