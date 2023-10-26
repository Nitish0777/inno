import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/Auth";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();
  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/users/login`,
        {
          email,
          password,
        }
      );
      console.log(res);
      if (res.data.success) {
        console.log(res);
        const { user, token } = res.data;
        setAuth({
          token: token,
          user: user,
        });
        localStorage.setItem("auth", JSON.stringify({ token, user }));
        toast.success("Sign in successful");
        navigate("/");
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
