import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Features from "./components/Features";
import About from "./components/About";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
function App() {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <div className="min-h-[50vh] flex">
        <div className="grow">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />
                  <Features />
                  <About />
                </>
              }
            />
            <Route
              path="/dashboard"
              element={
                <>
                  <Dashboard />
                </>
              }
            />
          </Routes>
        </div>
        <div className="relative flex items-center justify-center">
          <button className="-rotate-90 border px-4 py-2 bg-[#FAE26B] font-bold absolute whitespace-nowrap -translate-x-[30%] duration-300 hover:bg-[#634e0d] hover:text-white">View Products</button>
          <div>
            
          </div>
        </div>
      </div>
      {/* <Pricing /> */}
      <Footer />
    </div>
  );
}

export default App;
