import axios from "axios";
import React, { useEffect, useState } from "react";
import "./MyProducts.css";
import auth from "../../firebase.init";
import { Container } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import PageTitle from "../PageTitle/PageTitle";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import SkeletonMyProduct from "../../Skeletons/SkeletonMyProduct";
const MyProducts = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  //find sindle item help of email
  const [products, setProduct] = useState(null);
  useEffect(() => {
    setTimeout(async () => {
      const email = user.email;
      const url = `https://logico-server.onrender.com/myproducts?email=${email}`;
      try {
        const { data } = await axios.get(url, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        setProduct(data);
      } catch (error) {
        if (error.response.status === 403 || error.response.status === 401) {
          signOut(auth);
          navigate("/login");
          toast.error(error.message);
        }
      }
    }, 5000);
  }, [user]);
  //single item delete functionality added
  const handleDeleteItem = (id) => {
    const proceed = window.confirm("Are You Sure? Want To Delete This Item?");
    if (proceed) {
      fetch(`https://logico-server.onrender.com/products/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = products.filter((product) => product._id !== id);
          setProduct(remaining);
          toast.success(data.message);
        });
    }
  };
  //Redirect Inventory/:id Page
  const handleUpdate = (id) => {
    const path = `/inventory/${id}`;
    navigate(path);
  };
  return (
    <Container className="mt-5 mb-5">
      <PageTitle title="My Product" />
      <h2 className="text-center mb-4 text-primary uppercase">
        My All Products
      </h2>
      {products &&
        products.map((product) => (
          <div
            className="d-flex justify-content-center row mb-3"
            key={product._id}
          >
            <div className="col-md-10">
              <div className="row p-2 bg-white border rounded">
                <div className="col-md-3 mt-1">
                  <img
                    className="img-fluid img-responsive rounded product-image"
                    src={product.images}
                    alt={product.name}
                  />
                </div>
                <div className="col-md-6 mt-1">
                  <h4>{product.name}</h4>
                  <div className="d-flex flex-row">
                    <h5 className="text-capitalize text-primary">
                      Sellar Name: {product.sellar}
                    </h5>
                  </div>
                  <div>
                    <p className="text-justify">{product.description}</p>
                  </div>
                </div>
                <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                  <div className="d-flex items-center">
                    <h4 className="mr-1">৳ {product.price}</h4>
                  </div>
                  <div className="d-flex flex-column">
                    <h5 className="text-primary mb-4">
                      Stock:{" "}
                      {product.stock ? (
                        product.stock
                      ) : (
                        <span className="text-danger text-uppercase text-bold">
                          sold
                        </span>
                      )}
                    </h5>
                    <button
                      className="btn btn-danger btn-sm"
                      type="button"
                      onClick={() => handleDeleteItem(product._id)}
                    >
                      Delete Item
                    </button>
                    <button
                      className="btn btn-outline-primary btn-sm mt-3"
                      type="button"
                      onClick={() => handleUpdate(product._id)}
                    >
                      Stock Update
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      {!products && [1, 2].map((n) => <SkeletonMyProduct key={n} />)}
    </Container>
  );
};

export default MyProducts;
