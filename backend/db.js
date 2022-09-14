const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/inotebook?directConnection=true";
const connetToMongo = () => {
    mongoose.connect(mongoURI, ()=>{
        console.log('connection made successfully and the mongoose is working properly');
    });
}

module.exports= connetToMongo;