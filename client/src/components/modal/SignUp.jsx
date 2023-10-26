import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import Layout from "../layout/Layout";

const SignUp = () => {
  const [college, setCollege] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/users/register`,
        {
          college,
          email,
          name,
          password,
        }
      );
      console.log("res from backend", res);
      if (res.data.success) {
        console.log(res.data);
        toast.success("Verify your mail");
        navigate("/login");
      } else {
        console.log("Sign up error", res.data.messages);
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <Layout>
      <div>
        Sign Up form
        <form onSubmit={handleSignUp}>
          <input
            type="text"
            placeholder="College"
            onChange={(e) => setCollege(e.target.value)}
          />
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </Layout>
  );
};

export default SignUp;
