/*Fields
   prdoucts
   idUser
   total
    */

   import { Schema, model } from "mongoose";

   const shoppingCartSchema = new Schema ({
       
       products:{
           type: String,
           require: true
       },
       idUser:{
        type: Schema.Types.ObjectId,
        ref: "Users", //Referencia a la colección de Users
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

export default model ("shoppingCart", categoriesSchema);