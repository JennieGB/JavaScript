import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from './store';

const AddProduct = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    available: true,
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addProduct(formData));
    setFormData({ name: '', description: '', price: '', available: true });
  };

  return (
    <div>
      <h2>Add Product</h2>
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
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddProduct;
