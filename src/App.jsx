import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Features from "./components/Features";
import About from "./components/About";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import { useEffect, useState } from "react";
import { axiosGet } from "./lib/axiosLib";

const product = {
  barcode: "190497281686",
  quantity_sold: 10,
  coupon_code: null,
  quantity_available: 2,
  product_name: "BASKETBALL",
  expiry_date: "",
  image_src:
    "https://x22249184-image-store.s3.amazonaws.com/product-api/b5c01046-01c1-11ef-84a7-99e166317450.jpeg",
  price: 12,
  product_id: "PROD1052",
};

function App() {
  const [products, setProducts] = useState([]);
  const [showProducts, setShowProducts] = useState(false);

  function fetchProducts() {
    axiosGet(
      "https://kzcuh6r14a.execute-api.eu-west-1.amazonaws.com/test/products"
    )
      .then((response) => {
        if (Array.isArray(response?.data?.data)) {
          setProducts(response.data.data);
        }
      })
      .catch((axiosError) => {});
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="bg-gray-100">
      <Navbar />
      <div className="min-h-[100vh] flex">
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
          {showProducts && (
            <div className="p-2 absolute right-4 bottom-4 top-4 w-80 shadow-md shadow-black bg-gray-100 overflow-y-scroll rounded-md">
              {products?.length > 0 && (
                <div className="grid md:grid-cols-2 gap-4">
                  {products.map((p, k) => (
                    <div className="" key={k}>
                      <div className="w-36 bg-white shadow-md">
                        <div className="h-36 object-cover">
                          <img
                            className="h-full w-full"
                            src={p.image_src}
                            alt={p.product_name}
                          />
                        </div>
                        <div className=" px-4">{p.product_name}</div>
                        <div className=" px-4 font-extrabold bg-[#FAE26B]">
                          {p.price}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
          {showProducts ? (
            <button
              onClick={() => setShowProducts(false)}
              className="-rotate-90 border px-4 py-2 bg-[#FAE26B] font-bold absolute whitespace-nowrap -translate-x-[30%] duration-300 hover:bg-[#634e0d] hover:text-white"
            >
              Hide Products
            </button>
          ) : (
            <button
              onClick={() => setShowProducts(true)}
              className="-rotate-90 border px-4 py-2 bg-[#FAE26B] font-bold absolute whitespace-nowrap -translate-x-[30%] duration-300 hover:bg-[#634e0d] hover:text-white"
            >
              View Products
            </button>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
