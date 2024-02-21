import * as customerRepository from "../repositories/customerRepository.js";

const getAllCustomers = async () => {
   return await customerRepository.getAllCustomers();
};

const updateCustomer = async (payload, id) => {
   return await customerRepository.updateCustomer(payload, id);
};

export { getAllCustomers, updateCustomer };
