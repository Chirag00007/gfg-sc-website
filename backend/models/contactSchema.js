const mongoose = require('mongoose')
const validator = require('validator')

const contactSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, "Name is required!"],
        minLength : [3, "Name should be more then 3 characters!"]
    },
    email : {
        type : String,
        required : [true, "Email is required!"],
        validate: [validator.isEmail, "Enter valid Email"],
    },
    phoneNo : {
        type : String,
        required : [true, "Phone No is required!"],
        minLength : [10, "Phone number should include atleast 10 numbers"]
    },
     course : {
        type : String,
        required : [true, "Course is required!"]
    } ,
    message : {
        type : String,
        required : [true, "Message is required!"]
    }
   
})

module.exports  = mongoose.model("Contact" , contactSchema)