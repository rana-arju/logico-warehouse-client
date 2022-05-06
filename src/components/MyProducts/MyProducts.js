import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './MyProducts.css';
import auth from '../../firebase.init';
import {Container} from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import PageTitle from '../PageTitle/PageTitle';
import { useNavigate } from 'react-router-dom';
const MyProducts = () => {
    const navigate = useNavigate();
    const [user]= useAuthState(auth);
    const [products, setProduct] = useState([]);
    useEffect(() => {
        const getMyProducts = async() => {
        const email = user.email;
        const url = `https://thawing-mountain-76840.herokuapp.com/myproducts?email=${email}`;
        const {data} = await axios.get(url);
        setProduct(data);
        }
        getMyProducts();
    },[user]);
        const handleDeleteItem =id =>{
        const proceed = window.confirm('Are You Sure? Want To Delete This Item?');
        if (proceed) {
            fetch(`https://thawing-mountain-76840.herokuapp.com/products/${id}`,{
                method: "DELETE"
            })
            .then(res => res.json())
            .then(data => {
                const remaining = products.filter(product => product._id !== id);
                setProduct(remaining);
                toast.success(data.message);
            })
        }
    }
    //Redirect Inventory/:id Page
      const handleUpdate = id => {
        const path = `/inventory/${id}`;
        navigate(path);
    }
    return (
    <Container className="mt-5 mb-5">
        <PageTitle title="My Product" />
        <h2 className='text-center mb-4 text-primary uppercase'>My All Products</h2>
        {
            products.map(product => 
            <div className="d-flex justify-content-center row mb-3" key={product._id}>
            <div className="col-md-10">
                <div className="row p-2 bg-white border rounded">
                    <div className="col-md-3 mt-1"><img className="img-fluid img-responsive rounded product-image" src={product.images} alt={product.name} /></div>
                    <div className="col-md-6 mt-1">
                        <h4>{product.name}</h4>
                        <div className="d-flex flex-row">
                         <h5 className='text-capitalize text-primary'>Sellar Name:  {product.sellar}</h5>
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
                            <h5 className='text-primary mb-4'>Stock: {product.stock}</h5>
                            <button className="btn btn-danger btn-sm" type="button" onClick={() => handleDeleteItem(product._id)}>Delete Item</button>
                            <button className="btn btn-outline-primary btn-sm mt-3" type="button" onClick={() => handleUpdate(product._id)}>Stock Update</button>
                           </div>
                </div>
             </div>
        </div>
     </div>
    )}

</Container>
    );
};

export default MyProducts;