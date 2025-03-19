//Importo todo lo de la libreria express
import express from "express";
import categoriesRoutes from "./src/routes/categories.js";

//Cree una constante que es igual a la libreria
//que acabo de de importar, y la ejecuto
const app = express();

//middleware para que acepte datos json
app.use(express.json());

app.use("/api/categories", categoriesRoutes);

//exporto esta constante para usar express en todos lados 
export default app;