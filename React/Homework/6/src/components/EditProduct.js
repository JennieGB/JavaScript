import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateProduct } from './store';

const EditProduct = ({ id }) => {
  const dispatch = useDispatch();
  const product = useSelector(state => state.products.find(product => product.id === id));
  const [formData, setFormData] = useState({
    name: product.name,
    description: product.description,
    price: product.price,
    available: product.available,
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateProduct({ id, ...formData }));
  };

  return (
    <div>
      <h2>Edit Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div>
          <label>Description:</label>
          <input type="text" name="description" value={formData.description} onChange={handleChange} />
        </div>
        <div>
          <label>Price:</label>
          <input type="number" name="price" value={formData.price} onChange={handleChange} />
        </div>
        <div>
          <label>Available:</label>
          <input type="checkbox" name="available" checked={formData.available} onChange={handleChange} />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditProduct;
