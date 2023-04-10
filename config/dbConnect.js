const { default: mongoose} = require("mongoose")
const bodyParser = require('body-parser');
const dbConnect  = () => {
    try{
    const conn= mongoose.connect(process.env.MONGODB_URL);
    console.log("Database is connected my friend");
    }
    catch (error){
        throw new Error(error);
    console.log("Database has error po my friend");
    }
};

module.exports = dbConnect;