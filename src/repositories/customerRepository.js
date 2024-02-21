import pool from "../database/connection.js";

const getAllCustomers = async () => {
   const [customers] = await pool.query(`SELECT * FROM CUSTOMER`);

   return customers;
};

const updateCustomer = async (payload, id) => {
   const { name, phone, email, age } = payload;

   const dbResponse = await pool.query(
      `UPDATE CUSTOMER SET
                         NAME = ?, PHONE = ?, EMAIL = ?, AGE = ? WHERE ID = ?`,
      [name, phone, email, age, id]
   );

   return dbResponse;
};

export { getAllCustomers, updateCustomer };
