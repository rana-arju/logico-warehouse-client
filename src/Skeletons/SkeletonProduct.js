import React from 'react';
import "./Skeleton.css";
import Shimmer from './Shimmer';
import SkeletonsElement from './SkeletonsElement';

const SkeletonProduct = ({theme}) => {
    const themeClass = theme || 'light';
    return (
   <div className={`card-c ${themeClass}`}>
        <SkeletonsElement type="img" />
        <SkeletonsElement type="sellar" />
        <SkeletonsElement type="title" />
        <SkeletonsElement type="text" />
        <div className='d-flex gap-3'>
            <SkeletonsElement type="price" />
            <SkeletonsElement type="stock" />
        </div>
        <SkeletonsElement type="button" />
        <Shimmer />
    </div>
    );
};

export default SkeletonProduct;