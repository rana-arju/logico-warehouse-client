import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { toast } from "react-toastify";
import "./ManageInventory.css";
import PageTitle from "../PageTitle/PageTitle";
import SkeletonProduct from "../../Skeletons/SkeletonProduct";

const ManageInventory = () => {
  //get all product from database
  const [products, setProduct] = useState(null);
  useEffect(() => {
    setTimeout(async () => {
      const { data } = await axios.get(`http://localhost:5000/api/v1/products`);
      console.log("data", data.products);
      if (!data.products) return toast.error(data.error);
      setProduct(data.products);
    }, 2000);
  }, []);
  //delete button handle
  const handleDeleteItem = (id) => {
    const proceed = window.confirm("Are You Sure? Want To Delete This Item?");
    if (proceed) {
      fetch(`http://localhost:5000/api/v1/deleteProduct/${id}`, {
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
  return (
    <div>
      <div className="btn-container">
        <PageTitle title="Manage Inventory" />
        <LinkContainer to="/addProduct">
          <button
            className="btn btn-outline-primary btn-lg"
            variant="lg"
            type="button"
          >
            Add New Item
          </button>
        </LinkContainer>
      </div>
      <h2 className="text-center mt-7 text-uppercase text-primary">
        Our Products
      </h2>
      <Container>
        <div className="product-container">
          {products &&
            products.map((product) => (
              <div className="product-card" key={product._id}>
                <div className="product-tumb">
                  <img src={product.images} alt="" />
                </div>
                <div className="product-details">
                  <span className="product-sellar">
                    Sellar: {product.sellar}
                  </span>
                  <h4>{product.name}</h4>
                  <p title={product.description}>
                    {product.description.slice(0, 100) + "...."}
                  </p>
                  <div className="product-bottom-details">
                    <div className="product-price">
                      Price: &#2547; {product.price}
                    </div>
                    <div className="product-stock">
                      <p>
                        Stock:{" "}
                        <span>
                          {product.stock ? (
                            product.stock
                          ) : (
                            <span className="text-danger text-uppercase text-bold">
                              sold
                            </span>
                          )}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="d-grid gap-2 ">
                    <button
                      className="btn btn-danger"
                      type="button"
                      onClick={() => handleDeleteItem(product._id)}
                    >
                      Delete Item
                    </button>
                  </div>
                </div>
              </div>
            ))}
          {!products &&
            [1, 2, 3, 4, 5, 6].map((n) => <SkeletonProduct key={n} />)}
        </div>
      </Container>
    </div>
  );
};

export default ManageInventory;
