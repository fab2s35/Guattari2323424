/*
    Fields:
        name
        lasName
        phone
        assignedPosition
        branchAddressId
        passwordUser
        photoUser
*/

import { Schema, model } from "mongoose";

const employeeSchema = new Schema(
  {
    name: {
      type: String,
      require: [true, "El nombre es obligatorio"],
    },

    lastName: {
      type: String,
      require: [true, "Los apellidos son obligatorios"],
    },

    phone: {
      type: Number,
      require: [true, "El número de teléfono es obligatorio"],
      unique: true,
      min: 8,
    },

    email: {
      type: String,
      require: [true, "El correo electrónico es obligatorio"],
      unique: true,
    },


    assignedPosition: {
        type: String,
        require: [true, "La posición asignada es obligatoria"],
        enum: {
         values: ["Gerente", "Subgerente", "Cajero", "Vendedor", "Repartidor"],
         message: "La posición asignada debe ser una de las siguientes: Gerente, Subgerente, Cajero, Vendedor o Repartidor"
        },
      },

    branchAddressId: {
        type: String,
        require: [true, "La dirección de la sucursal es obligatoria"],
      },

    passwordUser: {
      type: Number,
      require: [true, "La contraseña es obligatoria"],
      min: 8,
    },

    photoUser: {
        type: String,
      },
  },
  {
    timestamps: true,
    strict: false,
  }
);

export default model("employee", employeeSchema);