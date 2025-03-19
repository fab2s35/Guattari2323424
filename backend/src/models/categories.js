/*Fields
   nameCategories
    */

    import { Schema, model } from "mongoose";

    const categoriesSchema = new Schema ({

        nameCategories:{
            type: String,
            require: true
        }

    },
{
    timestamps: true, 
    strict: false
})

export default model ("categories", categoriesSchema);