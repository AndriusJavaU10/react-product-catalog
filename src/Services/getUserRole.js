import AuthService from "../Services/auth.service"; 

const getUserRole = () => {
  const currentUser = AuthService.getCurrentCustomer();
  if (currentUser && currentUser.roles) {
    return currentUser.roles; // Roles should be an array e.g. ["ROLE_USER", "ROLE_ADMIN"]
  }
  return [];
};
