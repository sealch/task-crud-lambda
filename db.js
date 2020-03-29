const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const connectDb = async() => {
    await mongoose.connect(process.env.mongoUrl,{useNewUrlParser: true, useUnifiedTopology: true});
};

connectDb();

const TaskModel = mongoose.model('TaskModel', { name: String, done: Boolean});

module.exports = {
    connectDb,
    TaskModel
};
