 import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { shortUrl, getOriginalUrl } from './src/controllers/url.js'

const app = express();

app.use(express.urlencoded({ extended: true }))

require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI, {
    dbName: "TinyURL",
    tls: true
}).then(() => console.log("Mongodb connected...!")).catch((err) => console.log(err));

// rendering the ejs file
app.get('/', (req, res) => {
    res.render('index.ejs', { shortUrl: null });
})

// short url
app.post('/short', shortUrl)

// redirect to long url
app.get('/:shortCode', getOriginalUrl)

const port = 8000

app.listen(port, () => console.log(`server is running on ${port}`))