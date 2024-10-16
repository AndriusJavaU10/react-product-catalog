import React from "react";
import AuthService from "../Services/auth.service";


  const Profile = () => {
    const currentCustomer = AuthService.getCurrentCustomer();

    return (
        <div className="container">
         <header className="jumbotron">
            <h3>
                <strong>{currentCustomer.username}</strong> Profile
            </h3>
         </header>   
             <p>
            <strong>Token:</strong> {currentCustomer.accessToken.substring(0, 20)} ...{" "}
             {currentCustomer.accessToken.substr(currentCustomer.accessToken.length - 20)}
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
          currentCustomer.roles.map((role, index) => 
            <li key={index}>{role}</li>)
            }
      </ul>


        </div>
    );

  };

  export default Profile;