import { body } from "express-validator";
import { validateResult } from "../utils/validateUtil.js";

const updateCustomerValidator = () => {
   return [
      body("name")
         .trim()
         .not()
         .isEmpty()
         .withMessage("name es un campo requerido")
         .custom((value, { request }) => {
            const onlyLetters = new RegExp(/^[a-zA-Z\s]+$/);

            if (!onlyLetters.test(value)) {
               throw new Error("Este campo solo debe contener letras");
            }

            return true;
         }),

      body("phone")
         .not()
         .isEmpty()
         .withMessage("phone es un campo requerido")
         .custom((value, { request }) => {
            const onlyNumbers = new RegExp(/^[0-9]{10,15}$/);

            if (!onlyNumbers.test(value)) {
               throw new Error("Este numero telefonico no es valido");
            }

            return true;
         }),

      body("email")
         .optional()
         .isEmail()
         .withMessage("Correo electronico invalido"),

      body("age")
         .optional()
         .isInt()
         .withMessage("La edad debe ser un numero")
         .isLength({ min: 2, max: 3 })
         .withMessage("La edad ingresada es incorrecta"),

      (request, response, next) => {
         validateResult(request, response, next);
      },
   ];
};

export { updateCustomerValidator };
