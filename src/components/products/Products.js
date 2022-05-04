import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {toast } from 'react-toastify';
import { Container } from 'react-bootstrap';
import "./Products.css";

const Products = () => {
    const [products, setProduct] = useState([]);
    useEffect(()=>{
        (async()=>{
            const {data} = await axios.get(`http://localhost:5000/products`);
            if (!data?.success) return toast.error(data.error);
            setProduct(data?.data);
        })();
    },[])
    return (
        <Container className='product-container'>
            {
               products.map(product => <div class="product-card" key={product._id}>
            <div class="product-tumb">
                <img src={product.images} alt="" />
            </div>
            <div class="product-details">
                <span class="product-sellar">{product.sellar}</span>
                <h4>{product.name}</h4>
                <p>{product.description}</p>
           		<div class="product-bottom-details">
				<div class="product-price">{product.price}</div>
				<div class="product-stock">
                <p>Stock: <span>{product.stock}</span></p>
				</div>
			</div>
            </div>
        </div> )
            }
       
        </Container>
    );
};

export default Products;