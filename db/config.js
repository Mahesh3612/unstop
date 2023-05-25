

const mongoose = require("mongoose")

const connection = async()=>{
    try {
        await mongoose.connect("mongodb+srv://mahesh:mahesh@cluster0.8aap4sx.mongodb.net/unstop?retryWrites=true&w=majority")
        console.log("connect to db")
    } catch (error) {
        console.log(error)
    }
}

module.exports = connection