import dotenv from 'dotenv';
import appCampus from './routers/campus.js';
import express from 'express';

dotenv.config();
const app = express();

app.use("/campus", appCampus);



const config =JSON.parse(process.env.MY_SERVER);
app.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}`);
});

/* import {con} from './db/atlas.js'
let db = await con(); */

//? Saber si una coleccion existe

/* const collections = await db.listCollections().toArray();
const bandera = collections.some((collection)=> collection.name === "automovil");
console.log(bandera); */


//? Crear colecciones

/* await db.createCollection('direccion'); */

//? Insercion de datos a un coleccion

/* let users = db.collection('users');
const res = await users.insertOne({
    cc: 123456,
    nombre:"Miguel",
    apellido:"Castro"
});
console.log(res); */

//? Actualizar Varios Datos

/* let users = db.collection('users');
let res = await users.bulkWrite([
    {
        updateOne:{
            filter:{ cc:123456},
            update:{$set: {nombre:'Angel'}},
        },
        updateOne:{
            filter:{ cc:534131},
            update:{$set: {nombre:'Jose'}}
        }
    }
]);
console.log(res); */