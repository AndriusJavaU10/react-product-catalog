import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

import AuthService from "../Services/auth.service";



  const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    let navigate = useNavigate();
  
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
  
    const onSubmit = async (data) => {
      setMessage("");
      setLoading(true);
  
      try {
        await AuthService.login(data.username, data.password);
        navigate("/profile");
        window.location.reload();
      } catch (error) {
        const resMessage =
          (error.response && error.response.data && error.response.data.message) ||
          error.message ||
          error.toString();
  
        setMessage(resMessage);
        setLoading(false);
      }
    };

    return (
    <div className="col-md-12">
      <div className="card card-container">
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="profile-img-card"
        />

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              {...register("username", { required: "Username is required" })}
            />
            {errors.username && (
              <div className="alert alert-danger" role="alert">
                {errors.username.message}
              </div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <div className="alert alert-danger" role="alert">
                {errors.password.message}
              </div>
            )}
          </div>

          <div className="form-group">
            <button className="btn btn-primary btn-block" disabled={loading}>
              {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              <span>Login</span>
            </button>
          </div>

          {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;