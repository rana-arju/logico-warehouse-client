import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link, useParams } from 'react-router-dom';
import "./Inventory.css";
const Inventory = () => {
   
    let {id} = useParams();
    const [products, setProduct] = useState({});
    useEffect(() =>{
        fetch(`http://localhost:5000/products/${id}`)
        .then(res => res.json())
        .then(data => {
            setProduct(data);
        })
    },[]);
    const [deliver, setDeliver] = useState(0);
    const handleDeliverd= () => {
        const reduced = deliver -1;
        setDeliver(reduced)
    }
    return (
         <Container>
             <div className='product-card-inventory'>
            <div className="product-tumb">
                <img src={products.images} alt="" />
            </div>
            <div className="product-details">
                <span className="product-sellar">Sellar: {products.sellar}</span>
                <h4>{products.name}</h4>
                <p>{products.description}</p>
           		<div className="product-bottom-details">
				<div className="product-price">Price: &#2547; {products.price}</div>
				<div className="product-stock">
                <p>Stock: <span>{deliver}</span></p>
				</div>
			</div>
            <div class="input-group mb-3">
                <input type="number" class="form-control" placeholder="Enter Value" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <div class="input-group-append">
                    <button class="btn btn-outline-primary" type="button">Restock Item</button>
                </div>
            </div>
            <div className="d-grid gap-2 ">
                <button onClick={handleDeliverd} className="btn btn-primary mt-3" type="button" >Delivered</button>
            </div>
            <div className="d-grid gap-2 justify-center">
                <Link to="/manageInventory">
                <button onClick={handleDeliverd} className="btn btn-primary mt-3" type="button" >Manage Inventories </button>
                </Link>
            </div>
        </div>
        </div>
    </Container>
    );
};

export default Inventory;