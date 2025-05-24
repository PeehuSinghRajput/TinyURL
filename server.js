import express from 'express'
import mongoose from 'mongoose'
import { shortUrl } from './src/controllers/url.js'

const app = express();

app.use(express.urlencoded({ extended: true }))

mongoose.connect(
    'mongodb+srv://peehusingh2003:bcXLyWNIC6KliTRN@cluster0.ubcrxot.mongodb.net/',
    {
        dbName: "TinyURL",
        tls: true
    }
).then(() => console.log("Mongodb connected...!")).catch((err) => console.log(err));

app.get('/', (req, res) => {
    res.render('index.ejs', { shortUrl: null });
})

app.post('/short', shortUrl)
const port = 8000

app.listen(port, () => console.log(`server is running on ${port}`))