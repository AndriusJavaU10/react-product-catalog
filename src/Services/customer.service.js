import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/";

const getPublicContent = () => {
    return axios.get(API_URL + "products/all"); //api/products/all
  };

  const getUserBoard = () => {
    return axios.get(API_URL + "products/all", { headers: authHeader() });    //api/products/all
  };

  const getModeratorBoard = () => {

    
    return axios.get(API_URL + "customers/", { headers: authHeader() });   //localhost:8080/api/customers
  };

  const getAdminBoard = () => {
    return axios.get(API_URL + "", { headers: authHeader() });
  };

const CustomerService = {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
};

export default CustomerService;