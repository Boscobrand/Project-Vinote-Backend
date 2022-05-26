const mongoose = require("mongoose");

mongoose.Promise = Promise;


let mongoURI = "mongodb+srv://Boscobrand:wvtPo21EFXt0VgbK@user.taqv4.mongodb.net/User?retryWrites=true&w=majority";

if (process.env.NODE_ENV === "production") {
    mongoURI = process.env.DB_URL;
  } 
  else {
    mongoURI = "mongodb://localhost:4000";
  }

mongoose
  .connect(mongoURI, { useNewUrlParser: true },{ useUnifiedTopology: true })
  .then(instance =>
    console.log(`Connected to db: ${instance.connections[0].name}`)
  )
  .catch(err => console.log("Connection Failed.", err));

module.exports = mongoose;