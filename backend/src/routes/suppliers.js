import express from "express";
<<<<<<< HEAD
import suppliersController from "../controllers/suppliersController";
=======
import suppliersController from "../controllers/suppliersController.js";
>>>>>>> c39c3fbf4a3c800485c4b0585e1946591fd3f465

const router = express.Router();

router.route("/")
.get(suppliersController.getSuppliers)
.post(suppliersController.insertSuppliers)

router.route("/:id")
.put(suppliersController.updateSuppliers)
.delete(suppliersController.deleteSuppliers)

export default router;