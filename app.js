import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { test } from "./backend/controllers/pelis.controllers.js"; 

dotenv.config();
mongoose.connect(process.env.url_bd)
    .then(() => console.log("todo salio chido mijo"))
    .catch((error) => console.log("no jalo la perra: ", error));

const app = express(); 
app.use(cors()); 
app.use(express.json()); 

app.listen(4000, () => console.log("esta jalando bien, no escucha borroso en el puerto 4000"));

test();