const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// equivalent to:
// const { Schema } = mongoose;

const userSchema = new Schema({
	googleId: String
});

mongoose.model('users', userSchema);
