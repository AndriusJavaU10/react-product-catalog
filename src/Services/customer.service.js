import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api";

const getPublicContent = () => {
    return axios.get(API_URL + "/products/all"); //api/products/all
  };

  const getCustomerBoard = () => {
    return axios.get(API_URL + "/products/all", { headers: authHeader() });    //api/products/all
  };

  const getModeratorBoard = () => {    
    return axios.get(API_URL + "/products", { headers: authHeader() });   //localhost:8080/api/products
  };

  const getAdminBoard = () => {
  
   return axios.get(API_URL + "/customers/all", { headers: authHeader() });
  };

  const deleteUser = (userId) => {
    return axios.delete(API_URL + `/customers/${userId}`, { headers: authHeader() }); 
  };
  
  const updateUserRole = (userId, newRole) => {
    return axios.put(
      `${API_URL}/customers/${userId}/role`,
      { roles: [newRole] },
      { headers: authHeader() } // Returns the token in the request header
    );
  };
    
  const createCustomer = (customer) => {
    return axios.post(API_URL + "/customers", customer, { headers: authHeader() }); 
  };
  
  const updateCustomer = (userId, customerData) => {
    return axios.put(API_URL + `/customers/${userId}`, customerData, { headers: authHeader() }); 
  };
  

const CustomerService = {
  // Product management
  getPublicContent,
  getCustomerBoard,
  getModeratorBoard,
  

  // User management
  getAdminBoard,
  deleteUser,
  updateUserRole,
  createCustomer,
  updateCustomer,
};

export default CustomerService;