import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import "./Inventory.css";
import { toast } from "react-toastify";
import PageTitle from "../PageTitle/PageTitle";
import SkaletonInventory from "../../Skeletons/SkaletonInventory";

const Inventory = () => {
  let { id } = useParams();
  // find specipic product by id
  const [products, setProduct] = useState(null);
  useEffect(() => {
    setTimeout(async () => {
      const res = await fetch(
        `http://localhost:5000/api/v1/singleProduct/${id}`
      );
      const data = await res.json();
      setProduct(data);
    }, 2000);
  }, []);
  // Product quentity increment and decrement set and update database
  const [deliver, setDeliver] = useState(0);
  useEffect(() => {
    fetch(`https://logico-server.onrender.com/allproducts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setDeliver(data.stock);
      });
  }, []);

  const handleDeliverd = () => {
    const reduced = deliver - 1;
    if (reduced < 0) {
      return toast.error("Sorry! Sold Out.");
    }

    setDeliver(reduced);
  };
  const handleReStock = (event) => {
    event.preventDefault();
    const stockInput = parseInt(event.target.restock.value);
    const finalStock = stockInput + deliver;
    setDeliver(finalStock);
    event.target.reset();
  };
  //Update product quentity
  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/singleProduct/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ deliver }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, [deliver]);

  return (
    <Container>
      {products && (
        <div className="product-card-inventory">
          <PageTitle title="Product Quentity Update" />
          <div className="product-tumb">
            <img src={products.images} alt="" />
          </div>
          <div className="product-details">
            <span className="product-sellar">Sellar: {products.sellar}</span>
            <h4>{products.name}</h4>
            <p>{products.description}</p>
            <div className="product-bottom-details">
              <div className="product-price">
                Price: &#2547; {products.price}
              </div>
              <div className="product-stock">
                <p>
                  Stock:{" "}
                  <span>
                    {deliver ? (
                      deliver
                    ) : (
                      <span className="text-danger text-uppercase text-bold">
                        sold
                      </span>
                    )}
                  </span>
                </p>
              </div>
            </div>

            <form onSubmit={handleReStock}>
              <div className="input-group mb-3">
                <input
                  type="number"
                  name="restock"
                  className="form-control"
                  placeholder="Enter Value"
                  required
                />
                <div className="input-group-append">
                  <button className="btn btn-outline-primary" type="submit">
                    Restock Item
                  </button>
                </div>
              </div>
            </form>

            <div className="d-grid gap-2 ">
              <button
                onClick={handleDeliverd}
                className="btn btn-primary mt-3"
                type="button"
              >
                Delivered
              </button>
            </div>
            <div className="d-grid gap-2 justify-center">
              <Link to="/manageInventory">
                <button
                  onClick={handleDeliverd}
                  className="btn btn-primary mt-3"
                  type="button"
                >
                  Manage Inventories{" "}
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
      {!products && <SkaletonInventory theme="light" />}
    </Container>
  );
};

export default Inventory;
