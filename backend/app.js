//Importo todo lo de la libreria express
import express from "express";
import categoriesRoutes from "./src/routes/categories.js";
import shoppingCartRoutes from "./src/routes/shoppingCart.js";
import ordersRoutes from "./src/routes/orders.js";
import employeesRoutes from "./src/routes/employees.js";

//Cree una constante que es igual a la libreria
//que acabo de de importar, y la ejecuto
const app = express();

//middleware para que acepte datos json
app.use(express.json());

app.use("/api/categories", categoriesRoutes);
app.use("/api/shoppingCart", shoppingCartRoutes);
app.use("/api/orders", ordersRoutes);
app.use("/api/employees", employeesRoutes);

//exporto esta constante para usar express en todos lados 
export default app;