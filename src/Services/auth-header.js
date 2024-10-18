export default function authHeader() {

    const customer = JSON.parse(localStorage.getItem('customer'));
  
    if (customer && customer.accessToken) {
      return { Authorization: 'Bearer ' + customer.accessToken };  // Returns the header with the token
    } else {
      console.error('Auth token is missing');
      return {}; // Returns an empty object if there is no token
    }
  }

  export function getUserRole() {
    const customer = JSON.parse(localStorage.getItem('customer'));
  
    if (customer && customer.roles) {
      return customer.roles; // If there is a roles object, we return it
    }
  
    return []; // If there are no roles, we return an empty array
  }