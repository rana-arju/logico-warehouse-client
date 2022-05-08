import React from 'react';
import Shimmer from './Shimmer';
import SkeletonsElement from './SkeletonsElement';

const SkeletonMyProduct = ({theme}) => {
    const themeClass = theme || 'light';
    return (
    <div className={`my-product-card ${themeClass}`}>
    <div className="d-flex justify-content-center row mb-3">
            <div className="col-md-10">
                <div className="row p-2 bg-white border rounded">
                    <div className="col-md-3 mt-1 img-fluid img-responsive rounded"><SkeletonsElement type='p-img' /></div>
                    <div className="col-md-6 mt-1">
                        <h4><SkeletonsElement type="title" /></h4>
                        <div className="d-flex flex-row">
                            <SkeletonsElement type="sellar" />
                            </div>
                            <div>
                                <p className="text-justify"><SkeletonsElement type='text' /></p>
                            </div>
                        </div>
                    <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                        <div className="d-flex items-center">
                        <SkeletonsElement type="price" />
                       
                        </div>
                        <div className="d-flex flex-column">
                           <SkeletonsElement type="stock" />
                           <SkeletonsElement type="button" />
                           <SkeletonsElement type="button" />
                        </div>
                        <Shimmer />
                </div>
             </div>
        </div>
     </div>
    </div>
    );
};

export default SkeletonMyProduct;