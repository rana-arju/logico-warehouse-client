import React from 'react';
import Shimmer from './Shimmer';
import SkeletonsElement from './SkeletonsElement';

const SkaletonInventory = ({theme}) => {
    const themeClass = theme || 'light';
    return (
        <div className='skeleton-inventory'>
        <div className={`skeleton-wrapper ${themeClass}`}>
            
                <SkeletonsElement type="img" />
                <SkeletonsElement type="sellar" />
                <SkeletonsElement type="title" />
                <SkeletonsElement type="text" />
                <div className='d-flex gap-3'>
                    <SkeletonsElement type="price" />
                    <SkeletonsElement type="stock" />
                </div>
                <SkeletonsElement type="input" />
                <SkeletonsElement type="button" />
                <SkeletonsElement type="button2" />
                <Shimmer />
        </div>
        </div>
    );
};

export default SkaletonInventory;