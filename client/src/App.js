import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/modal/SignIn";
import SignUp from "./components/modal/SignUp";
import About from "./pages/homePage/about/About";
import Header from "./components/layout/header/Header";
import { AuthProvider } from "./context/Auth";
import Footer from "./components/layout/footer/Footer";
import Hero from "./pages/homePage/hero/Hero";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Hero />
                <About />
                <Footer />
              </>
            }
          />
          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
