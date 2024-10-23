export default function authHeader() {

    const customer = JSON.parse(localStorage.getItem('customer'));

    

  
    if (customer && customer.accessToken) {
     // console.log("Auth token found:", customer.accessToken); // Check for token
      return { Authorization: 'Bearer ' + customer.accessToken };  // Returns the header with the token
    } else {
     // console.error('Auth token is missing');
      return {}; // Returns an empty object if there is no token
    }
  }

  export function getUserRole() {
    const customer = JSON.parse(localStorage.getItem('customer'));
  
    if (customer && customer.roles) {
      //console.log("User roles found:", customer.roles);
      return customer.roles; // If there is a roles object, we return it
    }
    //console.error("No roles found for user");
    return []; // If there are no roles, we return an empty array
  }