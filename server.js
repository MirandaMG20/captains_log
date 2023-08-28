// Set up .env environment
require('dotenv').config()
// Set up Mongoose connection
const mongoose = require('mongoose')

// Method Override: Lets you use HTTP verbs such as PUT or DELETE in places where the client doesn't support it. 
const methodOverride = require('method-override')

const express = require('express')
const app = express()

const port = 3000

// Listener
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`)
})

// CONNECT to mongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB')
})

// Setting up view engine
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// MIDDLEWARE
app.use((req, res, next) => {
    console.log('I run all routes!')
    next();
})

// This allows the body of a post request
app.use(express.urlencoded({ extended: false }))
// Method Override: Lets you use HTTP verbs such as PUT or DELETE in places where the client doesn't support it.
app.use(methodOverride('_method'))

//ROUTE Home
app.get('/', (req, res) => {
    res.send(`
    <h1> Captain's Log </h1>
    `)
})

// INDEX

// SHOW

// NEW



// CREATE

// EDIT

// UPDATE

// DELETE 