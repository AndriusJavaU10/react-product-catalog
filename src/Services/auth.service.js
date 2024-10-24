import axios from "axios";

// API URL from local URL
const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8080/api/auth";

// Check-in function
const register = (username, email, password) => {
  console.log("Registering with:", API_URL + "/signup", username, email, password); 
    return axios.post(API_URL + "/signup", {
      username,
      email,
      password,
    });
  };
       // Login function
const login = async (username, password) => {
  console.log("Logging in with:", API_URL + "/signin", username, password);
  
  try {
      const response = await axios.post(API_URL + "/signin", {
          username,
          password,
      });

      console.log("We got Response: ", response);

      if (response.data.accessToken) {
          localStorage.setItem("customer", JSON.stringify(response.data));
      } else {
          throw new Error("Access token not found");
      }

      return response.data;
  } catch (error) {
      console.error("Login failed: ", error);
      throw error;
  }
};
            // Logout function
  const logout = () => {
    localStorage.removeItem("customer");
  };
            // Get the current user
     const getCurrentCustomer = () => {
    
     const customer = localStorage.getItem("customer");               
     

    return customer ? JSON.parse(customer) : null;
  };
  // Automatically adds the Authorization header to all axios requests
  axios.interceptors.request.use(
    (config) => {
        const customer = getCurrentCustomer();
        //console.log("Customer Roles:", customer);        

        if (customer && customer.accessToken) {
            config.headers["Authorization"] = 'Bearer ' + customer.accessToken;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

            // Core AuthService function library
  const AuthService = {
    register,
    login,
    logout,
    getCurrentCustomer,
  };
        
  export default AuthService;