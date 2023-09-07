import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./Products.css";
import SkeletonProduct from "../../Skeletons/SkeletonProduct";

const Products = () => {
  const navigate = useNavigate();
  //six item show help of this api
  const [products, setProduct] = useState(null);
  useEffect(() => {
    setTimeout(async () => {
      const { data } = await axios.get(`https://logico-warehouse-server.vercel.app/api/v1/products`);
      console.log("data", data.products);
      if (!data.products) return toast.error(data.error);
      setProduct(data.products);
    }, 2000);
  }, []);
  //whan handle button click this redirect inventory/:id page
  const handleUpdate = (id) => {
    const path = `/inventory/${id}`;
    navigate(path);
  };
  return (
    <div>
      <h2 className="text-center mt-7 text-uppercase text-primary">
        Our Products
      </h2>
      <Container>
        <div className="product-container">
          {products &&
            products.slice(0,6).map((product) => (
              <div className="product-card" key={product._id}>
                <div className="product-tumb">
                  <img src={product.images} alt="" />
                </div>
                <div className="product-details">
                  <span className="product-sellar">
                    Sellar: {product.sellar}
                  </span>
                  <h4>{product.name}</h4>
                  <p>{product.description.slice(0, 100) + "...."}</p>
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
                      className="btn btn-primary"
                      type="button"
                      onClick={() => handleUpdate(product._id)}
                    >
                      Buy Product
                    </button>
                  </div>
                </div>
              </div>
            ))}
          {!products &&
            [1, 2, 3, 4, 5, 6].map((n) => <SkeletonProduct key={n} />)}
        </div>
        <LinkContainer to="/manageInventory">
          <button
            className="btn btn-primary btn-lg btn-block mb-5"
            variant="lg"
            type="button"
          >
            Manage Inventories
          </button>
        </LinkContainer>
      </Container>
    </div>
  );
};

export default Products;
