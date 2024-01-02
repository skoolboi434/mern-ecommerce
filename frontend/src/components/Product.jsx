import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const Product = ({ product }) => {
  return (
    <>
      <div className='box'>
        <Link to={`/product/${product._id}`}>
          <div className='img-container p-2'>
            <img src={product.image} alt={product.name} className='mb-2' />
          </div>
          <h4 className='product-title'>{product.name}</h4>
          <div className='rating-container mb-2'>
            <Rating value={product.rating} text={`${product.numReviews} reviews`} />
          </div>
          <h5 className='price'>${product.price}</h5>
        </Link>
      </div>
    </>
  );
};

export default Product;
