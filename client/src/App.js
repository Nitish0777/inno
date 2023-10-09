import "./App.css";
import { ToastContainer } from "react-toastify";
// import { Routes, Route } from "react-router-dom";
import SignIn from "./components/modal/SignIn";
import SignUp from "./components/modal/SignUp";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <h1>React App</h1>
      <SignIn />
      {/* <Routes>
        <Route path="/" element={<SignIn />} />
      </Routes> */}
      <h1>Sign up</h1>
      <SignUp />
    </div>
  );
}

export default App;
