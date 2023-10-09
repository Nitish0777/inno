import React from "react";

const SignUp = () => {
  const [college, setCollege] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      Sign Up form
      <form>
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
        <input type="password" placeholder="Confirm Password" />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
