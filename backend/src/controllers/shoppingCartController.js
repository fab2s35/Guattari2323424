/*
Este archivo tiene los metodos del CRUD (select, insert, update, delete)
*/


//Creo un array de funciones
const shoppingCartController = {};
import shoppingCart from "../models/shoppingCart.js"
import shoppingCartModel from "../models/shoppingCart.js"

// SELECT (antes de hacer el select (o cualquiera) voy a models)
shoppingCartController.getCategories = async (req, res) => {
     const categories = await categoriesModel.find()
     res.json(categories)
}


//INSERT
categoriesControllers.insertCategories = async (req, res) =>{
    const { nameCategories } = req.body;
    const newCategory = new categoriesModel({nameCategories})
    await newCategory.save()
    res.json({message: "Category saved"})
}   


//DELETE
categoriesControllers.deleteCategories = async (req, res) =>{
    await categoriesModel.findByIdAndDelete(req.params.id)
    res.json({message: "Category deleted"}) 
}

//UPDATE
categoriesControllers.updateCategories = async (req, res) =>{
    const { nameCategories } = (req.params.id,
        {nameCategories}, {new: true})
    res.json({message: "Categeory updated successfully"})
}

export default categoriesControllers;