import { Url } from "../models/url.js";
import shorid from "shortid";

export const shortUrl = async(req,res)=>{
    const longUrl = req.body.longUrl;
    const shortCode = shorid.generate();

    const shortUrl = `https://localhost:8000/${shortCode}`;

    // save to database

    const newUrl = new Url({shortCode,longUrl});
    await newUrl.save();

    console.log("short url:",newUrl);

    res.render("index.ejs",{shortUrl})


}