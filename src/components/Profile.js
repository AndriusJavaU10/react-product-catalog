import React, { useEffect, useState } from "react";
import AuthService from "../Services/auth.service";

const Profile = () => {
  const [currentCustomer, setCurrentCustomer] = useState(null);

  useEffect(() => {
    const customer = AuthService.getCurrentCustomer(); // Naudojame teisingą AuthService metodą
    setCurrentCustomer(customer);
  }, []);

  if (!currentCustomer) {
    return (
      <div className="container">
        <header className="jumbotron">
          <h3>Not logged in</h3>
        </header>
      </div>
    );
  }

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          <strong>{currentCustomer.username}</strong> Profile
        </h3>
      </header>
      <p>
        <strong>Token:</strong> {currentCustomer.accessToken.substring(0, 20)} ...{" "}
        {currentCustomer.accessToken.substring(currentCustomer.accessToken.length - 20)}
      </p>
      <p>
        <strong>Id:</strong> {currentCustomer.id}
      </p>

      <p>
        <strong>Email:</strong> {currentCustomer.email}
      </p>

      <strong>Authorities:</strong>
      <ul>
        {currentCustomer.roles &&
          currentCustomer.roles.map((role, index) => (
            <li key={index}>{role}</li>
          ))}
      </ul>
    </div>
  );
};

export default Profile;
