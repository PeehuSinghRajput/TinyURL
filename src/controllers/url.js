import { Url } from "../models/url.js";
import shorid from "shortid";

export const shortUrl = async(req,res)=>{
    const longUrl = req.body.longUrl;
    const shortCode = shorid.generate();

    const shortUrl = `http://localhost:8000/${shortCode}`;

    // save to database

    const newUrl = new Url({shortCode,longUrl});
    await newUrl.save();

    console.log("short url:",newUrl);

    res.render("index.ejs",{shortUrl})
}

export const getOriginalUrl = async(req,res)=>{
    const shortCode = req.params.shortCode;
    const OriginalUrl = await Url.findOne({shortCode});
    
    if(OriginalUrl){
        res.redirect(OriginalUrl.longUrl);
    }else{
        res.status(404).send({message:"URL not found"})
    }
}