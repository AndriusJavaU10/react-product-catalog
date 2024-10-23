import React, { useState, useEffect } from "react";
import CustomerService from "../Services/customer.service";

const BoardAdmin = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedRoles, setSelectedRoles] = useState({});

  // Fetch users and roles data
  useEffect(() => {
    CustomerService.getAdminBoard().then(
      (response) => {
        console.log("Server response data:", response.data);
        setUsers(response.data);
        setLoading(false);
      },
      (error) => {
        console.error("Error response:", error.response);
        setLoading(false);
      }
    );
  }, []);

  // Handle delete user
  const handleDelete = (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      CustomerService.deleteUser(userId)
        .then(() => {
          setUsers(users.filter((user) => user.id !== userId));
        })
        .catch((error) => {
          console.error("Failed to delete user:", error);
        });
    }
  };

  // Handle select role change
  const handleRoleChange = (userId, newRole) => {
    setSelectedRoles((prevRoles) => ({
      ...prevRoles,
      [userId]: newRole,
    }));
  };

  // Handle set role
  // const handleSetRole = (userId) => {
  //   const newRole = selectedRoles[userId];
  //   if (newRole) {
  //     CustomerService.updateUserRole(userId, newRole)
  //       .then(() => {
  //         // Update the user role in the state
  //         setUsers(
  //           users.map((user) =>
  //             user.id === userId ? { ...user, authorities: [{ authority: newRole }] } : user
  //           )
  //         );
  //       })
  //       .catch((error) => {
  //         console.error("Failed to update role:", error);
  //       });
  //   }
  // };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>Registered Users and Roles</h3>
      </header>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Roles</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.username}</td>
              <td>{user.email}</td>
              {/* Extract roles from authorities array */}
              <td>{user.authorities.map((role) => role.authority).join(", ")}</td>
              <td>
                <select
                  value={selectedRoles[user.id] || (user.authorities[0] && user.authorities[0].authority)}
                  onChange={(e) => handleRoleChange(user.id, e.target.value)}
                >
                  <option value="ROLE_USER">User</option>
                  <option value="ROLE_MODERATOR">Moderator</option>
                  <option value="ROLE_ADMIN">Admin</option>
                </select>
                {/* <button
                  className="btn btn-primary"
                  onClick={() => handleSetRole(user.id)}
                  style={{ marginLeft: "10px" }}
                >
                  Set Role
                </button> */}

                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(user.id)}
                  style={{ marginLeft: "10px" }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BoardAdmin;
