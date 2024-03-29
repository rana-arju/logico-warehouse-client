import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blog from "./components/Blog/Blog";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Access/Login";
import Register from "./components/Access/Register";
import AddProduct from "./components/AddProduct/AddProduct";
import ManageInventory from "./components/ManageInventory/ManageInventory";
import MyProducts from "./components/MyProducts/MyProducts";
import Footer from "./components/Footer/Footer";
import NotFound from "./components/NotFound/NotFound";
import RequireAuth from "./RequireAuth/RequireAuth";
import { ToastContainer } from "react-toastify";
import ContactUs from "./components/ContactUs/ContactUs";
import Inventory from "./components/Inventory/Inventory";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

function App() {
  // const [user, setUser] = useState();
  // useEffect(() => {
  //   const user = Cookies.get(JSON.parse("user"));
  //   setUser(user)
  // }, []);
  // console.log("user", user);
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<ContactUs />} />

        <Route
          path="/addProduct"
          element={
            <RequireAuth>
              <AddProduct />
            </RequireAuth>
          }
        />
        <Route
          path="/manageInventory"
          element={
            <RequireAuth>
              <ManageInventory />
            </RequireAuth>
          }
        />
        <Route
          path="/myproduct"
          element={
            <RequireAuth>
              <MyProducts />
            </RequireAuth>
          }
        />
        <Route
          path="/inventory/:id"
          element={
            <RequireAuth>
              <Inventory />
            </RequireAuth>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
