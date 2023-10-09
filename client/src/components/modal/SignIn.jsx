import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const res = axios.post(`${process.env.REACT_APP_API}/api/users/login`, {
        email,
        password,
      });
      if (res.data.success) {
        console.log(res.data);
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      Sign In form
      <form onSubmit={handleSignIn}>
        <input
          type="text"
          placeholder="Email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
