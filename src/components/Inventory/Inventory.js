import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import "./Inventory.css";
import { toast } from 'react-toastify';
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
      useEffect(() =>{
        fetch(`http://localhost:5000/allproducts/${id}`)
        .then(res => res.json())
        .then(data => {
            setDeliver(data.stock);
        })
    },[]);

    const handleDeliverd= () => {
        const reduced = deliver -1;
        if(reduced < 0){
            return toast.error('Sorry! Sold Out.');
        }
  
        setDeliver(reduced)
    };
    const handleReStock = event => {
        event.preventDefault();
        const stockInput = parseInt(event.target.restock.value);
        const finalStock = stockInput + deliver;
        setDeliver(finalStock);
    };
   useEffect(() =>{
        fetch(`http://localhost:5000/allproducts/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({deliver})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        },[deliver]);
   

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
            <div className="input-group mb-3">
                <form onSubmit={handleReStock }>
                    <input type="number" name="restock" 
                     className="form-control" placeholder="Enter Value" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    <div className="input-group-append">
                        <button className="btn btn-outline-primary" type="submit" >Restock Item</button>
                    </div>
                </form>
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