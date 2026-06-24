import { Schema, model } from "mongoose";

const pelisSchema = new Schema({
    Edad: Number,
    Genero: String,
    Tiempo_de_uso: Number,
    Tipo_de_dispositivo: String,
    Genero_pelicula: String,
    Duracion: Number,
    Calificacion: Number,
    Vio_completa: Boolean,
})
export const Tabla = new model("Datos", pelisSchema);