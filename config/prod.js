// prod.js -- production keys here - do commit this - ok since this is stored in Heroku
module.exports = {
	googleClientID: process.env.GOOGLE_CLIENT_ID,
	googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
	mongoURI: process.env.MONGO_URI,
	cookieKey: process.env.COOKIE_KEY
};

// MAKE SURE THIS FILE IS IN YOUR .gitignore FILE
