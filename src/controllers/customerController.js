import * as customerService from "../services/customerService.js";

const getAllCustomers = async (request, response) => {
   try {
      const customers = await customerService.getAllCustomers();

      return response.status(200).json({ result: customers });
   } catch (error) {
      return response.status(500).json({ message: error.message });
   }
};

const updateCustomer = async (request, response) => {
   try {
      const { id } = request.params;
      const payload = request.body;

      const dbResponse = await customerService.updateCustomer(payload, id);

      return response.status(200).json({ result: dbResponse });
   } catch (error) {
      return response.status(500).json({ message: error.message });
   }
};

export { getAllCustomers, updateCustomer };
