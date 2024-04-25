import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeProduct, toggleAvailability } from './store';

const ProductsList = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);

  const handleRemove = id => {
    dispatch(removeProduct(id));
  };

  const handleToggleAvailability = (id, available) => {
    dispatch(toggleAvailability({ id, available: !available }));
  };

  return (
    <div>
      <h2>Products List</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <div>Name: {product.name}</div>
            <div>Description: {product.description}</div>
            <div>Price: {product.price}</div>
            <div>Available: {product.available ? 'Yes' : 'No'}</div>
            <button onClick={() => handleRemove(product.id)}>Remove</button>
            <button onClick={() => handleToggleAvailability(product.id, product.available)}>
              Toggle Availability
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsList;
