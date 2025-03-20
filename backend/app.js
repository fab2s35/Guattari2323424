//Importo todo lo de la libreria express
import express from "express";
import categoriesRoutes from "./src/routes/categories.js";
import brandsRoutes from "./src/routes/brands.js";
import branchesRoutes from "./src/routes/branches.js";
import suppliersRoutes from "./src/routes/suppliers.js";

//Cree una constante que es igual a la libreria
//que acabo de de importar, y la ejecuto
const app = express();

//middleware para que acepte datos json
app.use(express.json());

app.use("/api/categories", categoriesRoutes);
app.use("/api/brands", brandsRoutes);
app.use("/api/branches", branchesRoutes);
app.use("/api/suppliers", suppliersRoutes)

//exporto esta constante para usar express en todos lados 
export default app;