//Set up mongoose connection
var mongoose = require('mongoose');
var mongoDB = 'mongodb+srv://alanoud:<password>@cluster0-86idl.mongodb.net/test?retryWrites=true&w=majorit'
mongoose.connect(mongoDB, { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
