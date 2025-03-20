/*Fields
   idClient
   idProducts
   total
    */

   import { Schema, model } from "mongoose";

   const ordersSchema = new Schema ({
       
       idClient:{
           type: String,
           ref: "Clients", //Referencia a la colección de Clients
           require: true
       },
       idProducts:{
        type: Schema.Types.ObjectId,
        ref: "Products", //Referencia a la colección de Products
        require: true
    },
        total:{
            type: Number,
            require: true
        }

   },
{
   timestamps: true, 
   strict: false
})

export default model ("orders", ordersSchema);