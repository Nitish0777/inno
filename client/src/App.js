import "./App.css";
import { ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import SignIn from "./components/modal/SignIn";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <h1>React App</h1>
      <SignIn />
      {/* <Routes>
        <Route path="/" element={<SignIn />} />
      </Routes> */}
    </div>
  );
}

export default App;
