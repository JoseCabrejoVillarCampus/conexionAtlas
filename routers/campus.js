import { Router } from "express";
import { configGET } from "../middleware/limit.js";
import bodyParser from 'body-parser';

const appCampus = Router();

appCampus.get("/", configGET(), bodyParser.json({limit: '59b'}), (req,res)=>{
    console.log(req.body);
    console.log(req.rateLimit);
    res.send("Hola");
});

export default appCampus;