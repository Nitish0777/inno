import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/modal/SignIn";
import SignUp from "./components/modal/SignUp";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        {/* <Route path="/" element={<></>} /> */}
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
