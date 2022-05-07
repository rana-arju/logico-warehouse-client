import React from 'react';
import Shimmer from './Shimmer';
import SkeletonsElement from './SkeletonsElement';

const SkaletonInventory = ({theme}) => {
    const themeClass = theme || 'light';
    return (
        <div className={`skeleton-wrapper ${themeClass}`}>
            <div className='skeleton-inventory'>
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
        </div>
    );
};

export default SkaletonInventory;