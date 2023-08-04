import { ObjectId } from "mongodb";
import {con} from "../db/atlas.js"
import { limitGrt } from "../middleware/limit.js";
import { Router } from "express";
const appCampus = Router();

appCampus.get("/", limitGrt(), async(req,res)=>{
    if(!req.rateLimit) return;
    res.send
    let {id} = req.body;
    let db = await con();
    let usuario = db.collection("usuario");
    let result = await usuario.find({_id: new ObjectId});
    res.send(result);
});

export default appCampus;
//? como evitar que se escriban las colecciones cuando sobre pasa el limite maximo o cuando esta al tope maximo
//? que es un esqume en mongo (dto)