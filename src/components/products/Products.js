import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import {toast } from 'react-toastify';
import { Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import "./Products.css";

const Products = () => {
    const navigate = useNavigate();
    const [products, setProduct] = useState([]);
    useEffect(()=>{
        (async()=>{
            const {data} = await axios.get(`https://thawing-mountain-76840.herokuapp.com/products`);
            if (!data?.success) return toast.error(data.error);
            setProduct(data?.data);
        })();
    },[]);
    const handleUpdate = id => {
        const path = `/inventory/${id}`;
        navigate(path);
    }
    return (
        <div>
        <h2 className='text-center mt-7 text-uppercase text-primary'>Our Products</h2>
        <Container>
            <div className='product-container'>
           
            {
               products.map(product => <div className="product-card" key={product._id}>
            <div className="product-tumb">
                <img src={product.images} alt="" />
            </div>
            <div className="product-details">
                <span className="product-sellar">Sellar: {product.sellar}</span>
                <h4>{product.name}</h4>
                <p>{product.description.slice(0,100)+ "...."}</p>
           		<div className="product-bottom-details">
				<div className="product-price">Price: &#2547; {product.price}</div>
				<div className="product-stock">
                <p>Stock: <span>{product.stock}</span></p>
				</div>
			</div>
            <div className="d-grid gap-2 ">
            <button className="btn btn-primary" type="button" onClick={() => handleUpdate(product._id)}>Stock Update</button>
            </div>
            </div>
        </div> )
            }
        </div>
        <LinkContainer to="/manageInventory">
            <button className="btn btn-primary btn-lg btn-block mb-5" variant="lg" type="button">Manage Inventories</button>
        </LinkContainer>
        </Container>
        </div>
    );
};

export default Products;