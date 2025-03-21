/*
Este archivo tiene los metodos del CRUD (select, insert, update, delete)
*/


//Creo un array de funciones
const shoppingCartController = {};
import shoppingCart from "../models/shoppingCart.js"
import shoppingCartModel from "../models/shoppingCart.js"

// SELECT (antes de hacer el select (o cualquiera) voy a models)
shoppingCartController.getShoppingCart = async (req, res) => {
     const shoppingCart = await shoppingCartModel.find()
     res.json(shoppingCart)
}

//INSERT
shoppingCartController.insertShoppingCart= async (req, res) => {
    const { idUser, products, total } = req.body;
    const newShoppingCart = new shoppingCartModel({ idUser, products, total });
    await newShoppingCart.save();
    res.status(201).json({ message: "Insert saved" });
  };


//DELETE
shoppingCartController.deleteShoppingCart = async (req, res) =>{
    await shoppingCartModel.findByIdAndDelete(req.params.id)
    res.json({message: "Deleted successfully"}) 
}

//UPDATE
shoppingCartController.updateShoppingCart = async (req, res) =>{
    const { idUser, products, total } = (req.params.id,
        {idUser, products, total}, {new: true})
    res.json({message: "Updated successfully"})
}

export default shoppingCartController;